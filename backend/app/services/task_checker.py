from datetime import date, datetime, time
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.user_tasks import UserTask
from app.models.task import Task
from app.models.game_state import GameState

async def update_task_progress(db: AsyncSession, user_id: int, condition_type: str, value: int):
    """Обновляет прогресс задания"""
    
    # Получаем все активные задания пользователя с этим типом условия
    result = await db.execute(
        select(UserTask)
        .join(Task)
        .filter(
            UserTask.user_id == user_id,
            Task.condition_type == condition_type,
            UserTask.is_completed == False
        )
    )
    user_tasks = result.scalars().all()

    completed_tasks = []
    for user_task in user_tasks:
        task = user_task.task
        
        # Для ежедневных заданий проверяем дату
        if task.type == "daily":
            today = datetime.now().date()
            if not user_task.last_updated or user_task.last_updated.date() < today:
                user_task.progress = 0
                user_task.last_updated = datetime.now()
                user_task.is_completed = False
        
        if task.condition_type == "level" or task.condition_type == "passive_income":
            user_task.progress = value
            if value >= task.condition_value:  # Если достигнут нужный уровень
                user_task.progress = value
                user_task.is_completed = True
                user_task.completed_at = datetime.now()
                completed_tasks.append(user_task)
            continue

        # Обновляем прогресс
        user_task.progress += value
        user_task.last_updated = datetime.now()

        # Проверяем выполнение
        if user_task.progress >= task.condition_value:
            user_task.is_completed = True
            user_task.completed_at = datetime.now()
            completed_tasks.append(user_task)

    await db.commit()
    return completed_tasks