import asyncio
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse
from fastapi.requests import Request
from app.api import users, boosts, game, tasks, rating, nft, bonus, wallet
from app.background.passive_income import apply_passive_income
from app.background.energy import restore_energy_task
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

# Настройка CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://app.tgspacehunter.ru",
        "https://dedovinside.github.io",
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization"],
)

# Подключаем маршруты
app.include_router(users.router, prefix="/api")
app.include_router(boosts.router, prefix="/api")
app.include_router(game.router, prefix="/api/game")
app.include_router(tasks.router, prefix="/api")
app.include_router(rating.router, prefix="/api")
app.include_router(nft.router, prefix="/api")
app.include_router(bonus.router, prefix="/api")
app.include_router(wallet.router, prefix="/api")

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
    try:
        # Запуск задачи пассивного дохода
        passive_income_task = asyncio.create_task(apply_passive_income())
        background_tasks.append(passive_income_task)

        # Запуск задачи восстановления энергии
        energy_task = asyncio.create_task(restore_energy_task())
        background_tasks.append(energy_task)
        
        print("Background tasks started successfully")
    except Exception as e:
        print(f"Error starting background tasks: {e}")

# Завершаем фоновые процессы при остановке сервера
@app.on_event("shutdown")
async def shutdown_event():
    for task in background_tasks:
        task.cancel()
    # Ждем завершения всех задач
    await asyncio.gather(*background_tasks, return_exceptions=True)
