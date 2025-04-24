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
    
    # Создаем словарь существующих заданий пользователя для быстрого доступа
    existing_user_tasks = {ut.task_id: ut for ut in user.tasks}
    
    # Получаем все задания
    all_tasks_result = await db.execute(select(Task))
    all_tasks = all_tasks_result.scalars().all()
    
    # Проверяем, нужно ли создать новые задания
    need_commit = False
    for task in all_tasks:
        if task.id not in existing_user_tasks:
            user_task = UserTask(
                user_id=user.id,
                task_id=task.id,
                progress=0,
                is_completed=False,
                is_claimed=False
            )
            db.add(user_task)
            user.tasks.append(user_task)
            need_commit = True
    
    # Если были созданы новые задания, сохраняем их один раз
    if need_commit:
        await db.commit()
        # Обновляем список заданий пользователя после коммита
        result = await db.execute(
            select(User)
            .options(selectinload(User.tasks).selectinload(UserTask.task))
            .filter(User.id == user.id)
        )
        user = result.scalars().first()
        existing_user_tasks = {ut.task_id: ut for ut in user.tasks}
    
    # Формируем ответ с информацией о заданиях пользователя
    user_tasks = []
    
    for task in all_tasks:
        user_task = existing_user_tasks.get(task.id)
        if user_task:
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
                "is_completed": user_task.is_completed,
                "is_claimed": user_task.is_claimed if hasattr(user_task, 'is_claimed') else False
            })
    
    return user_tasks