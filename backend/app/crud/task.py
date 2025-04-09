from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.task import Task
from app.models.user_tasks import UserTask
from app.schemas.task import TaskCreate


async def create_task(db: AsyncSession, task: TaskCreate):
    new_task = Task(**task.dict())
    db.add(new_task)
    await db.commit()
    await db.refresh(new_task)
    return new_task


async def get_tasks(db: AsyncSession):
    result = await db.execute(select(Task))
    return result.scalars().all()


async def get_user_tasks(db: AsyncSession, user_id: int):
    result = await db.execute(select(UserTask).where(UserTask.user_id == user_id))
    return result.scalars().all()