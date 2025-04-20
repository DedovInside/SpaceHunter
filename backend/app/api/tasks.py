from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.schemas.task import TaskCreate, TaskRead, UserTaskRead
from app.crud.task import create_task, get_tasks, get_user_tasks

router = APIRouter(prefix="/tasks", tags=["Tasks"])


@router.post("/", response_model=TaskRead)
async def create_task(task: TaskCreate, db: AsyncSession = Depends(get_db)):
    return await create_task(db, task)


@router.get("/", response_model=list[TaskRead])
async def read_tasks(db: AsyncSession = Depends(get_db)):
    return await get_tasks(db)


@router.get("/user/{telegram_id}", response_model=list[UserTaskRead])
async def read_user_tasks(telegram_id: int, db: AsyncSession = Depends(get_db)):
    return await get_user_tasks(db, telegram_id)