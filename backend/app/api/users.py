from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.crud.user import get_user_by_telegram_id, create_user
from app.schemas.user import User, UserCreate

router = APIRouter(prefix="/users", tags=["Users"])


# Dependency для получения сессии базы данных
def get_db():
    db = AsyncSession()
    try:
        yield db
    finally:
        db.close()


# Эндпоинт для регистрации пользователя (при первом заходе в игру)
@router.post("/register", response_model=User)
async def register_user(user_create: UserCreate, db: AsyncSession = Depends(get_db)):
    # Проверяем, существует ли уже пользователь с таким telegram_id
    existing_user = await get_user_by_telegram_id(db, user_create.telegram_id)

    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")

    # Если не существует, создаем нового пользователя
    new_user = await create_user(db, user_create)
    return new_user


# Эндпоинт для получения пользователя по telegram_id
@router.get("/{telegram_id}", response_model=User)
async def get_user(telegram_id: int, db: AsyncSession = Depends(get_db)):
    user = await get_user_by_telegram_id(db, telegram_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user
