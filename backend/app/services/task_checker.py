from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.user_tasks import UserTask
from app.models.task import Task
from app.models.game_state import GameState
from datetime import date


async def check_user_tasks(db: AsyncSession, user_id: int):
    # Получаем GameState пользователя
    result = await db.execute(
        select(GameState).where(GameState.user_id == user_id)
    )
    game_state = result.scalar_one_or_none()
    if not game_state:
        return  # Нет состояния игры — ничего не делаем

    # Получаем все незавершённые задачи пользователя
    result = await db.execute(
        select(UserTask).join(Task).where(
            UserTask.user_id == user_id,
            UserTask.is_completed == False
        )
    )
    user_tasks = result.scalars().all()

    for user_task in user_tasks:
        task = user_task.task  # Task связан с UserTask через relationship

        if task.condition_type == "taps" and game_state.score >= task.condition_value:
            user_task.is_completed = True
            user_task.completed_at = date.today()
        elif task.condition_type == "level" and game_state.level >= task.condition_value:
            user_task.is_completed = True
            user_task.completed_at = date.today()
        elif task.condition_type == "passive_income" and game_state.passive_income >= task.condition_value:
            user_task.is_completed = True
            user_task.completed_at = date.today()

    await db.commit()
