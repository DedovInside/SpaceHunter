from datetime import date, timedelta
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload
from app.models.user import User
from app.models.daily_bonus import DailyBonus, UserDailyBonus
from app.models.game_state import GameState 


async def claim_daily_bonus(telegram_id: int, db: AsyncSession):
    # 1. Получаем пользователя
    user_result = await db.execute(
        select(User)
        .options(selectinload(User.game_state), selectinload(User.daily_bonus), selectinload(User.daily_game_state))
        .where(User.telegram_id == telegram_id)
    )
    user = user_result.scalar_one_or_none()
    if not user:
        return {"error": "User not found"}

    # 2. Получаем или создаём запись UserDailyBonus
    bonus_result = await db.execute(select(UserDailyBonus).where(UserDailyBonus.user_id == user.id))
    bonus_data = bonus_result.scalar_one_or_none()
    today = date.today()

    if not bonus_data:
        bonus_data = UserDailyBonus(user_id=user.id, current_day=1, last_claimed_date=today - timedelta(days=1))
        db.add(bonus_data)
        await db.flush()

    # 3. Проверка на пропущенный день или что уже забирал бонус
    if bonus_data.last_claimed_date and (today - bonus_data.last_claimed_date).days > 1:
        bonus_data.current_day = 1  # сброс прогресса

    if bonus_data.last_claimed_date == today:
        return {
            "error": "Already claimed today",
            "current_day": bonus_data.current_day,
            "can_claim": False
        }

    # 4. Получаем бонус из таблицы DailyBonus
    bonus_result = await db.execute(select(DailyBonus).where(DailyBonus.day_number == bonus_data.current_day))
    daily_bonus = bonus_result.scalar_one_or_none()
    if not daily_bonus:
        return {"error": "Bonus config not found"}

    # 5. Выдаём бонус
    if daily_bonus.reward_type == "coins":
        game_state = user.game_state
        game_state.balance += daily_bonus.reward_amount

        user.daily_game_state.balance += daily_bonus.reward_amount  # Обновляем баланс в DailyGameState
        
    elif daily_bonus.reward_type == "nft":
        # TODO: логика выдачи nft
        pass

    # 6. Обновляем данные
    current_day = bonus_data.current_day
    bonus_data.last_claimed_date = today
    bonus_data.current_day = 1 if bonus_data.current_day >= 10 else bonus_data.current_day + 1

    await db.commit()
    return {
        "success": True,
        "message": f"Bonus for day {daily_bonus.day_number} claimed!",
        "reward_type": daily_bonus.reward_type,
        "reward_amount": daily_bonus.reward_amount,
        "current_day": current_day,  # день, за который получен бонус
        "next_day": bonus_data.current_day,  # следующий доступный день
        "can_claim": False,
        "last_claimed_date": today.isoformat(),
        "new_balance": user.game_state.balance if daily_bonus.reward_type == "coins" else None
    }
