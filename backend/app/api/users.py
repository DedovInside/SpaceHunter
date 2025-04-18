from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.crud.user import get_user_by_telegram_id, create_user, create_user_with_referral, get_user_referrals_by_telegram_id
from app.schemas.user import UserCreate, UserWithGameState
from app.database import get_db
from typing import Optional, List

router = APIRouter(prefix="/users", tags=["Users"])


# Эндпоинт для регистрации пользователя (при первом заходе в игру)
@router.post("/register", response_model=UserWithGameState)
async def register_user(user_create: UserCreate, db: AsyncSession = Depends(get_db)):
    # Проверяем, существует ли уже пользователь с таким telegram_id
    existing_user = await get_user_by_telegram_id(db, user_create.telegram_id)

    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")

    # Если не существует, создаем нового пользователя
    await create_user(db, user_create)

    new_user = await get_user_by_telegram_id(db, user_create.telegram_id)
    return new_user


# Эндпоинт для получения пользователя по telegram_id
@router.get("/{telegram_id}", response_model=UserWithGameState)
async def get_user(telegram_id: int, db: AsyncSession = Depends(get_db)):
    user = await get_user_by_telegram_id(db, telegram_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@router.post("/register_with_referral", response_model=UserWithGameState)
async def register_user_with_referral(
    telegram_id: int, 
    username: str, 
    ref_id: Optional[int] = None, 
    db: AsyncSession = Depends(get_db)
):
    # Проверяем, существует ли уже пользователь с таким telegram_id
    existing_user = await get_user_by_telegram_id(db, telegram_id)
    if existing_user:
        return existing_user  # Просто возвращаем существующего пользователя
    
    # Создаем нового пользователя с реферальной системой
    new_user = await create_user_with_referral(telegram_id, username, ref_id, db)
    return new_user


@router.get("/referrals/{telegram_id}", response_model=List[UserWithGameState])
async def get_user_referrals(telegram_id: int, db: AsyncSession = Depends(get_db)):
    """Получение списка пользователей, приглашенных по реферальной ссылке."""
    user = await get_user_by_telegram_id(db, telegram_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Получаем список рефералов
    referrals = await get_user_referrals_by_telegram_id(db, telegram_id)
    return referrals