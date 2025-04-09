from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload
from app.models.user import User
from app.models.boost import Boost
from app.models.user_boosts import UserBoost


async def get_all_boosts(db: AsyncSession):
    result = await db.execute(select(Boost))
    return result.scalars().all()


async def get_user_boosts(db: AsyncSession, telegram_id: int):
    # Получаем пользователя
    result = await db.execute(
        select(User)
        .options(selectinload(User.boosts).selectinload(UserBoost.boost))
        .filter(User.telegram_id == telegram_id)
    )
    user = result.scalars().first()
    
    if not user:
        return {"error": "User not found"}
    
    # Получаем все бусты (для отображения неприобретенных)
    all_boosts_result = await db.execute(select(Boost))
    all_boosts = all_boosts_result.scalars().all()
    
    # Формируем ответ с информацией о бустах пользователя
    user_boosts = []
    
    for boost in all_boosts:
        # Ищем буст пользователя
        user_boost = next((ub for ub in user.boosts if ub.boost_id == boost.id), None)
        level = user_boost.level if user_boost else 0
        
        # Рассчитываем текущую стоимость апгрейда
        current_cost = boost.base_cost * (1.5 ** level) if level < boost.max_level else -1
        
        user_boosts.append({
            "boost_id": boost.id,
            "name": boost.name,
            "category": boost.category,
            "description": boost.description,
            "icon_name": boost.icon_name,
            "passive_income": boost.passive_income,
            "click_multiplier": boost.click_multiplier,
            "level": level,
            "max_level": boost.max_level,
            "current_cost": current_cost
        })
    
    return user_boosts


async def upgrade_boost(db: AsyncSession, telegram_id: int, boost_id: int):
    # Получаем пользователя
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
    
    # Получаем буст
    result = await db.execute(select(Boost).filter(Boost.id == boost_id))
    boost = result.scalars().first()
    
    if not boost:
        return {"error": "Boost not found"}
    
    # Ищем, есть ли у пользователя этот буст
    result = await db.execute(
        select(UserBoost).filter_by(user_id=user.id, boost_id=boost.id)
    )
    user_boost = result.scalars().first()
    
    current_level = user_boost.level if user_boost else 0
    
    # Проверяем, можно ли улучшить
    if current_level >= boost.max_level:
        return {"error": "Boost already at max level"}
    
    # Рассчитываем стоимость апгрейда
    upgrade_cost = boost.base_cost * (1.5 ** current_level)
    
    # Проверяем хватает ли баланса
    if game_state.balance < upgrade_cost:
        return {"error": "Not enough balance"}
    
    # Создаем или обновляем UserBoost
    if user_boost:
        user_boost.level += 1
    else:
        user_boost = UserBoost(user_id=user.id, boost_id=boost.id, level=1)
        db.add(user_boost)
    
    # Обновляем характеристики пользователя
    game_state.balance -= upgrade_cost
    game_state.boost_multiplier += boost.click_multiplier * 0.2  # Увеличиваем на 20% от базового значения
    game_state.passive_income += boost.passive_income * 0.2  # Увеличиваем на 20% от базового значения
    
    await db.commit()
    await db.refresh(game_state)
    if user_boost in db:  # Проверяем, что объект все еще в сессии
        await db.refresh(user_boost)
    
    # Рассчитываем новую стоимость апгрейда
    new_level = user_boost.level
    new_cost = boost.base_cost * (1.5 ** new_level) if new_level < boost.max_level else -1
    
    return {
        "boost_id": boost.id,
        "name": boost.name,
        "level": new_level,
        "max_level": boost.max_level,
        "new_balance": game_state.balance,
        "new_cost": new_cost,
        "new_passive_income": game_state.passive_income,
        "new_click_multiplier": game_state.boost_multiplier
    }