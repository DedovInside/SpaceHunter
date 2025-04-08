from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.game_state import GameState
from app.models.user import User
from app.schemas.user import UserCreate

INVITER_BONUS = 100
INVITED_BONUS = 50


async def create_user(db: AsyncSession, user: UserCreate):
    # Создаем пользователя
    db_user = User(telegram_id=user.telegram_id, username=user.username)
    db.add(db_user)
    
    # Нужно выполнить flush чтобы получить ID пользователя
    await db.flush()
    
    # Создаем игровое состояние для нового пользователя
    game_state = GameState(
        user_id=db_user.id,
        balance=0,
        level=1,
        score=0,
        energy=100,
        boost_multiplier=1.0
    )
    db.add(game_state)
    
    await db.commit()
    await db.refresh(db_user)
    return db_user


async def create_user_with_referral(telegram_id: int, username: str, ref_id: int | None, db: AsyncSession):
    ref_user = None
    if ref_id:
        result = await db.execute(select(User).where(User.telegram_id == ref_id))
        ref_user = result.scalar_one_or_none()

    new_user = User(
        telegram_id=telegram_id,
        username=username,
        referred_by_id=ref_user.id if ref_user else None
    )
    db.add(new_user)
    await db.flush()  # чтобы получить new_user.id

    # создаём GameState для нового пользователя
    new_game_state = GameState(user_id=new_user.id, balance=0)
    db.add(new_game_state)

    # даём бонус приглашённому
    new_game_state.balance += INVITED_BONUS

    # даём бонус пригласившему
    if ref_user:
        result = await db.execute(select(GameState).where(GameState.user_id == ref_user.id))
        ref_game_state = result.scalar_one_or_none()
        if ref_game_state:
            ref_game_state.balance += INVITER_BONUS

    await db.commit()
    await db.refresh(new_user)
    return new_user


async def get_user_by_telegram_id(db: AsyncSession, telegram_id: int):
    # db уже является сессией, не нужно создавать новую
    result = await db.execute(select(User).filter(User.telegram_id == telegram_id))
    return result.scalar_one_or_none()  # scalar_one_or_none более современный метод


async def update_user_balance(db: AsyncSession, telegram_id: int, balance: float):
    result = await db.execute(select(User).filter(User.telegram_id == telegram_id))
    db_user = result.scalar_one_or_none()
    if db_user:
        db_user.balance = balance
        await db.commit()
        await db.refresh(db_user)
    return db_user
