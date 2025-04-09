from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from datetime import datetime

from sqlalchemy.orm import selectinload

from app.models.user import User
from app.services.task_checker import check_user_tasks


def base_click_income(level: int) -> int:
    return 1 + (level - 1)


def required_score_for_level(level: int) -> int:
    return level * 100


async def process_click(db: AsyncSession, telegram_id: int) -> dict:
    # Получаем пользователя по telegram_id
    result = await db.execute(
        select(User)
        .options(selectinload(User.game_state))
        .filter(User.telegram_id == telegram_id)
    )
    user = result.scalars().first()

    if not user:
        return {"error": "User not found"}

    game_state = user.game_state
    if not game_state:
        return {"error": "Game state not found"}

    # Рассчитываем награду
    base_income = base_click_income(game_state.level)
    reward = base_income * game_state.boost_multiplier

    # Обновляем состояние
    game_state.score += reward
    game_state.balance += reward
    game_state.last_click_at = datetime.utcnow()
    #game_state.energy -= 1
    
    # Проверяем, можно ли повысить уровень
    required_score = required_score_for_level(game_state.level)
    leveled_up = False

    if game_state.score >= required_score:
        game_state.level += 1
        game_state.score = 0
        leveled_up = True

    await db.commit()
    await db.refresh(game_state)

    await check_user_tasks(db, user.id)

    return {
        "reward": reward,
        "new_score": game_state.score,
        "new_balance": game_state.balance,
        "level": game_state.level,
        "leveled_up": leveled_up
    }
