from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.crud.user import get_user_by_telegram_id, create_user, create_user_with_referral
from app.schemas.user import User, UserCreate

from app.database import get_db

from typing import Optional

router = APIRouter(tags=["Users"])


# Dependency для получения сессии базы данных
##def get_db():
    #db = AsyncSession()
    #try:
    #    yield db
    #finally:
    #    db.close()


# Эндпоинт для регистрации пользователя (при первом заходе в игру)
@router.post("/users/register", response_model=User)
async def register_user(user_create: UserCreate, db: AsyncSession = Depends(get_db)):
    # Проверяем, существует ли уже пользователь с таким telegram_id
    existing_user = await get_user_by_telegram_id(db, user_create.telegram_id)

    if existing_user:
        # Вместо ошибки возвращаем существующего пользователя
        return existing_user

    # Если не существует, создаем нового пользователя
    new_user = await create_user(db, user_create)
    return new_user


# Эндпоинт для получения пользователя по telegram_id
@router.get("/users/{telegram_id}", response_model=User)
async def get_user(telegram_id: int, db: AsyncSession = Depends(get_db)):
    user = await get_user_by_telegram_id(db, telegram_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user


# Добавьте этот код в backend/app/api/users.py
@router.post("/users/register_with_referral", response_model=User)
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
