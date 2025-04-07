import asyncio
from fastapi import FastAPI
from app.api import users, boosts, game, tasks, rating
from app.background.passive_income import apply_passive_income
from app.database import AsyncSessionLocal

# Инициализация приложения FastAPI
app = FastAPI(
    title="SpaceHunter API",
    description="Бэкенд для Telegram Mini App с NFT и TON-кошельком",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
)


# Подключаем маршруты
app.include_router(users.router, prefix="/api")
app.include_router(boosts.router, prefix="/api")
app.include_router(game.router, prefix="/api/game")
app.include_router(tasks.router, prefix="/api")
app.include_router(rating.router, prefix="/api")
# Глобальный список фоновых тасков
background_tasks = []


# Dependency для получения асинхронной сессии базы данных
async def get_db():
    async with AsyncSessionLocal() as db:
        yield db


# Главная страница
@app.get("/")
def read_root():
    return {"message": "Welcome to the game backend!"}


# Запускаем фоновый процесс пассивного дохода
@app.on_event("startup")
async def startup_event():
    task = asyncio.create_task(apply_passive_income())
    background_tasks.append(task)


# Завершаем фоновые процессы при остановке сервера
@app.on_event("shutdown")
async def shutdown_event():
    for task in background_tasks:
        task.cancel()
    # Ждем завершения всех задач
    await asyncio.gather(*background_tasks, return_exceptions=True)
