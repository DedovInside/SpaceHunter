from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.declarative import declarative_base
from dotenv import load_dotenv
import os

from sqlalchemy.orm import sessionmaker

# Загружаем переменные окружения
load_dotenv()

# Получаем URL базы данных из переменной окружения
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")

# Создаем асинхронный движок базы данных
engine = create_async_engine(SQLALCHEMY_DATABASE_URL, echo=True)

# Создаем базовый класс для всех моделей
Base = declarative_base()

# Создаем сессию для взаимодействия с базой данных (асинхронно)
AsyncSessionLocal = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

# Зависимость для получения асинхронной сессии
async def get_db():
    async with AsyncSessionLocal() as session:  # Создаем сессию
        yield session  # Возвращаем сессию для использования в обработчиках
