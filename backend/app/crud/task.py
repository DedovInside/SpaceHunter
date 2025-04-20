from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload
from app.models.task import Task
from app.models.user_tasks import UserTask
from app.schemas.task import TaskCreate
from app.models.user import User


async def create_task(db: AsyncSession, task: TaskCreate):
    new_task = Task(**task.dict())
    db.add(new_task)
    await db.commit()
    await db.refresh(new_task)
    return new_task


async def get_tasks(db: AsyncSession):
    result = await db.execute(select(Task))
    return result.scalars().all()


async def get_user_tasks(db: AsyncSession, telegram_id: int):
    # Получаем пользователя
    result = await db.execute(
        select(User)
        .options(selectinload(User.tasks).selectinload(UserTask.task))
        .filter(User.telegram_id == telegram_id)
    )
    user = result.scalars().first()
    
    if not user:
        return []
    
    # Получаем все задания
    all_tasks_result = await db.execute(select(Task))
    all_tasks = all_tasks_result.scalars().all()
    
    # Формируем ответ с информацией о заданиях пользователя
    user_tasks = []
    
    for task in all_tasks:
        # Ищем задание пользователя или создаем новое
        user_task = next((ut for ut in user.tasks if ut.task_id == task.id), None)
        if not user_task:
            user_task = UserTask(
                user_id=user.id,
                task_id=task.id,
                progress=0,
                is_completed=False
            )
            db.add(user_task)
            await db.flush()
            
        user_tasks.append({
            "id": user_task.id,
            "task": {
                "id": task.id,
                "title": task.title,
                "description": task.description,
                "type": task.type,
                "reward": task.reward,
                "condition_value": task.condition_value,
                "condition_type": task.condition_type
            },
            "progress": user_task.progress,
            "is_completed": user_task.is_completed
        })
    
    if any(ut not in db for ut in user.tasks):
        await db.commit()
    
    return user_tasks