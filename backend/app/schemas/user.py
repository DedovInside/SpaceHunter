from pydantic import BaseModel


# Базовая схема для пользователя, которую могут наследовать другие схемы
class UserBase(BaseModel):
    telegram_id: int
    username: str

    class Config:
        orm_mode = True


# Схема для создания пользователя (переиспользует UserBase)
class UserCreate(UserBase):
    pass


# Схема для пользователя, который будет возвращен из базы данных
class User(UserBase):
    id: int
    balance: float = 0.0
    level: int = 1
    score: float = 0.0

    class Config:
        orm_mode = True
