from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload
from app.models.game_state import GameState
from app.models.daily_game_state import DailyGameState
from app.models.user import User
from app.schemas.user import UserCreate, UserReferralCreate
from datetime import datetime

INVITER_BONUS = 100
INVITED_BONUS = 50


async def create_user(db: AsyncSession, user: UserCreate):
    db_user = User(telegram_id=user.telegram_id, username=user.username)
    db.add(db_user)
    await db.flush()

    game_state = GameState(
        user_id=db_user.id,
        level=1,
        score=0,
        balance=0,
        energy=100,
        boost_multiplier=1.0,
    )
    
    db.add(game_state)


    daily_game_state = DailyGameState(
        user_id=db_user.id,
        score = 0,
        balance = 0,
        energy_spent = 0,
        day_start=datetime.now(),
        last_update=datetime.now()
    )
    db.add(daily_game_state)

    await db.commit()
    await db.refresh(db_user)
    return db_user


async def create_user_with_referral(db: AsyncSession, user_data: UserReferralCreate):
    ref_user = None
    if user_data.ref_id:
        result = await db.execute(select(User).where(User.telegram_id == user_data.ref_id))
        ref_user = result.scalar_one_or_none()

    # Создание нового пользователя
    new_user = User(
        telegram_id=user_data.telegram_id,
        username=user_data.username,
        referred_by_id=ref_user.id if ref_user else None
    )
    db.add(new_user)
    await db.flush()  # Чтобы получить new_user.id

    # Создаем GameState для нового пользователя
    new_game_state = GameState(
        user_id=new_user.id, 
        level=1,
        score=0, 
        balance=0,
        energy=100,
        boost_multiplier=1.0
    )
    db.add(new_game_state)

    # Исправлено: создаем DailyGameState с правильными полями
    new_daily_game_state = DailyGameState(
        user_id=new_user.id, 
        score=0, 
        balance=0, 
        energy_spent=0,
        day_start=datetime.now(),
        last_update=datetime.now()
    )
    db.add(new_daily_game_state)

    # Даём бонус приглашённому
    new_game_state.balance += INVITED_BONUS

    # Даём бонус пригласившему
    if ref_user:
        result = await db.execute(select(GameState).where(GameState.user_id == ref_user.id))
        ref_game_state = result.scalar_one_or_none()
        if ref_game_state:
            ref_game_state.balance += INVITER_BONUS

    await db.commit()

    # Подгружаем нового пользователя с его состоянием игры
    stmt = (
        select(User)
        .options(selectinload(User.game_state))  # Подгружаем game_state
        .where(User.id == new_user.id)
    )
    result = await db.execute(stmt)
    new_user = result.scalar_one()

    return new_user


async def get_user_by_telegram_id(db: AsyncSession, telegram_id: int):
    result = await db.execute(
        select(User)
        .options(selectinload(User.game_state))
        .where(User.telegram_id == telegram_id)
    )
    return result.scalars().first()


async def update_user_balance(db: AsyncSession, telegram_id: int, balance: float):
    result = await db.execute(select(User).where(User.telegram_id == telegram_id))
    db_user = result.scalar_one_or_none()
    if db_user:
        db_user.balance = balance
        await db.commit()
        await db.refresh(db_user)
    return db_user


async def get_user_referrals_by_telegram_id(db: AsyncSession, telegram_id: int):
    """Получение списка пользователей, приглашенных по реферальной ссылке."""
    # Сначала найдем самого пользователя
    result = await db.execute(
        select(User).where(User.telegram_id == telegram_id)
    )
    user = result.scalar_one_or_none()
    
    if not user:
        return []
    
    # Найдем всех пользователей, которые были приглашены этим пользователем
    result = await db.execute(
        select(User)
        .options(selectinload(User.game_state))
        .where(User.referred_by_id == user.id)
    )
    
    referred_users = result.scalars().all()
    return referred_users
