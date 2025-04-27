from pydantic import BaseModel
from app.schemas.game_state import GameStateBase
from typing import Optional

# Базовая схема для пользователя, которую могут наследовать другие схемы
class UserBase(BaseModel):
    telegram_id: int
    username: str

    class Config:
        orm_mode = True


# Схема для создания пользователя (переиспользует UserBase)
class UserCreate(UserBase):
    pass

# Схема для пользователя с реферальным кодом
class UserReferralCreate(BaseModel):
    telegram_id: int
    username: str
    ref_id: Optional[int] = None


# Схема для пользователя, который будет возвращен из базы данных
class UserWithGameState(UserBase):
    id: int
    game_state: GameStateBase

    class Config:
        orm_mode = True
