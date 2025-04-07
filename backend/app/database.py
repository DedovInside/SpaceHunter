from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from dotenv import load_dotenv
import os

# Загружаем переменные окружения
load_dotenv()

# Получаем URL базы данных из переменной окружения
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")

# Создаем асинхронный движок базы данных
engine = create_async_engine(SQLALCHEMY_DATABASE_URL, echo=True)

# Создаем базовый класс для всех моделей
Base = declarative_base()

# Создаем сессию для взаимодействия с базой данных (асинхронно)
AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,  # Указываем, что сессия будет асинхронной
    expire_on_commit=False,
)


# Зависимость для получения асинхронной сессии
async def get_db():
    async with AsyncSessionLocal() as session:  # Создаем сессию
        yield session  # Возвращаем сессию для использования в обработчиках
