from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.schemas.task import TaskCreate, TaskRead, UserTaskRead
from app.crud import task as task_crud

router = APIRouter(prefix="/tasks", tags=["Tasks"])


@router.post("/", response_model=TaskRead)
async def create_task(task: TaskCreate, db: AsyncSession = Depends(get_db)):
    return await task_crud.create_task(db, task)


@router.get("/", response_model=list[TaskRead])
async def read_tasks(db: AsyncSession = Depends(get_db)):
    return await task_crud.get_tasks(db)


@router.get("/user/{user_id}", response_model=list[UserTaskRead])
async def read_user_tasks(user_id: int, db: AsyncSession = Depends(get_db)):
    return await task_crud.get_user_tasks(db, user_id)