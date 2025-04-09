from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.user import User
from app.models.boost import Boost
from app.models.user_boosts import UserBoost


async def get_all_boosts(db: AsyncSession):
    result = await db.execute(select(Boost))
    return result.scalars().all()


async def purchase_boost(db: AsyncSession, telegram_id: int, boost_id: int):
    # Получаем пользователя
    result = await db.execute(select(User).filter(User.telegram_id == telegram_id))
    user = result.scalars().first()
    if not user:
        return {"error": "User not found"}

    game_state = user.game_state
    if not game_state:
        return {"error": "Game state not found"}

    # Получаем буст
    result = await db.execute(select(Boost).filter(Boost.id == boost_id))
    boost = result.scalars().first()
    if not boost:
        return {"error": "Boost not found"}

    # Проверяем хватает ли баланса
    if game_state.balance < boost.cost:
        return {"error": "Not enough balance"}

    # Ищем, покупал ли пользователь этот буст ранее
    result = await db.execute(
        select(UserBoost).filter_by(user_id=user.id, boost_id=boost.id)
    )
    user_boost = result.scalars().first()

    if user_boost:
        user_boost.quantity += 1
    else:
        user_boost = UserBoost(user_id=user.id, boost_id=boost.id, quantity=1)
        db.add(user_boost)

    # Обновляем характеристики пользователя
    game_state.balance -= boost.cost
    game_state.boost_multiplier += boost.click_multiplier
    game_state.passive_income += boost.passive_income

    await db.commit()
    await db.refresh(game_state)

    return {
        "message": f"Boost '{boost.name}' purchased successfully.",
        "boost_id": boost.id,
        "boost_name": boost.name,
        "new_balance": game_state.balance,
        "total_quantity": user_boost.quantity
    }
