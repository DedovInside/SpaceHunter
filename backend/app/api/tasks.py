from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.database import get_db
from app.schemas.task import TaskCreate, TaskRead, UserTaskRead, TaskClaimResponse
from app.crud.task import create_task, get_tasks, get_user_tasks
from app.services.task_checker import claim_task_reward, check_daily_reset, check_task_progress
from app.models.user import User

router = APIRouter(prefix="/tasks", tags=["Tasks"])


@router.post("/", response_model=TaskRead)
async def create_task_endpoint(task: TaskCreate, db: AsyncSession = Depends(get_db)):
    return await create_task(db, task)


@router.get("/", response_model=list[TaskRead])
async def read_tasks(db: AsyncSession = Depends(get_db)):
    return await get_tasks(db)


@router.get("/user/{telegram_id}", response_model=list[UserTaskRead])
async def read_user_tasks(telegram_id: int, db: AsyncSession = Depends(get_db)):
    """Получить список заданий пользователя"""
    # При получении заданий сразу проверяем ежедневный сброс
    user_result = await db.execute(
        select(User).filter(User.telegram_id == telegram_id)
    )
    user = user_result.scalar_one_or_none()
    
    if user:
        # Проверяем сброс ежедневных заданий
        was_reset = await check_daily_reset(db, user.id)
        if was_reset:
            # Если был сброс, обязательно сохраняем изменения
            await db.commit()
            print(f"Daily tasks reset for user {telegram_id}")
    
    return await get_user_tasks(db, telegram_id)


@router.post("/check_progress/{telegram_id}")
async def check_tasks_progress_endpoint(telegram_id: int, db: AsyncSession = Depends(get_db)):
    """Проверяет текущий прогресс всех заданий пользователя"""
    user_result = await db.execute(
        select(User).filter(User.telegram_id == telegram_id)
    )
    user = user_result.scalar_one_or_none()
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Проверяем прогресс заданий
    completed_tasks = await check_task_progress(db, user.id)
    
    await db.commit()
    
    return {
        "success": True,
        "completed_tasks": [task.id for task in completed_tasks] if completed_tasks else []
    }


@router.post("/daily_reset/{telegram_id}")
async def check_daily_reset_endpoint(telegram_id: int, db: AsyncSession = Depends(get_db)):
    """Проверяет и сбрасывает ежедневные задания при необходимости"""
    user_result = await db.execute(
        select(User).filter(User.telegram_id == telegram_id)
    )
    user = user_result.scalar_one_or_none()
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Проверяем сброс ежедневных заданий
    was_reset = await check_daily_reset(db, user.id)
    
    await db.commit()
    
    return {
        "success": True,
        "was_reset": was_reset
    }


@router.post("/claim/{telegram_id}/{task_id}", response_model=TaskClaimResponse)
async def claim_task(telegram_id: int, task_id: int, db: AsyncSession = Depends(get_db)):
    """Получить награду за выполненное задание"""
    result = await claim_task_reward(db, telegram_id, task_id)
    if not result["success"]:
        raise HTTPException(status_code=400, detail=result["error"])
    return result