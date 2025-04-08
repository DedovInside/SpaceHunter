import asyncio
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import users, boosts, game, tasks, rating
from app.background.passive_income import apply_passive_income
from app.database import AsyncSessionLocal

from fastapi.requests import Request
from fastapi.exceptions import HTTPException

from fastapi.responses import JSONResponse


# Инициализация приложения FastAPI
app = FastAPI(
    title="SpaceHunter API",
    description="Бэкенд для Telegram Mini App с NFT и TON-кошельком",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Разрешаем запросы с фронтенда
    allow_credentials=True,
    allow_methods=["*"],  # Разрешаем все HTTP методы
    allow_headers=["*"],  # Разрешаем все заголовки
)

@app.middleware("http")
async def some_middleware(request: Request, call_next):
    try: 
        print("ABOBA")
        response = await call_next(request)
        # Добавляем заголовок CORS для всех ответов

        print("ABOBA_ABOBA")

        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Access-Control-Allow-Credentials"] = "true"
        response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
        return response
    
    
    except Exception as e:
        # Для ошибок создаем JSONResponse с нужными заголовками
        content = {"message": str(e)}
        headers = {
            "Access-Control-Allow-Origin": "*", 
            "Access-Control-Allow-Credentials": "true", 
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
        # Явно указываем status_code=500
        return JSONResponse(
            status_code=500,  # Здесь указываем нужный код ошибки
            content=content, 
            headers=headers
        )
    



# Подключаем маршруты
app.include_router(users.router, prefix="/api")
app.include_router(boosts.router, prefix="/api")
app.include_router(game.router, prefix="/api")
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
