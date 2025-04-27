from datetime import date, datetime, time
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload
from app.models.user_tasks import UserTask
from app.models.task import Task
from app.models.daily_game_state import DailyGameState
from app.models.game_state import GameState
from app.models.user import User


async def check_daily_reset(db: AsyncSession, user_id: int) -> bool:
    """Проверяет, нужно ли сбросить ежедневный прогресс"""
    # Получаем ежедневное состояние пользователя
    result = await db.execute(
        select(DailyGameState)
        .filter(DailyGameState.user_id == user_id)
    )
    daily_state = result.scalar_one_or_none()
    
    if not daily_state:
        # Если нет ежедневного состояния, создаем его
        daily_state = DailyGameState(
            user_id=user_id,
            score=0,
            energy_spent=0,
            balance=0,
            day_start=datetime.now()
        )
        db.add(daily_state)
        await db.flush()
        return True
    
    # Проверяем, начался ли новый день
    today = datetime.now().date()
    if daily_state.day_start.date() < today:
        # Сбрасываем ежедневный прогресс
        daily_state.score = 0
        daily_state.energy_spent = 0
        daily_state.balance = 0
        daily_state.day_start = datetime.now()
        daily_state.last_update = datetime.now()
        
        # Сбрасываем прогресс по ежедневным заданиям
        stmt = (select(UserTask)
            .join(Task)
            .filter(
                UserTask.user_id == user_id,
                Task.type == "daily"
            ))
        
        result = await db.execute(stmt)
        daily_tasks = result.scalars().all()
        
        for user_task in daily_tasks:
            user_task.progress = 0
            user_task.is_completed = False
            user_task.is_claimed = False
            user_task.last_updated = datetime.now()
        
        await db.flush()
        return True
    
    return False



async def check_task_progress(db: AsyncSession, user_id: int):
    """
    Проверяет прогресс по всем заданиям пользователя.
    Для ежедневных заданий использует daily_game_state,
    для глобальных - обычный game_state или user.
    """
    
    # Получаем данные пользователя
    user_result = await db.execute(
        select(User)
        .options(
            selectinload(User.game_state),
            selectinload(User.daily_game_state),
            selectinload(User.tasks).selectinload(UserTask.task)
        )
        .filter(User.id == user_id)
    )
    user = user_result.scalar_one_or_none()
    
    if not user or not user.game_state:
        return []
    
    # Убедимся, что у пользователя есть daily_game_state
    daily_state = user.daily_game_state
    if not daily_state:
        daily_state = DailyGameState(
            user_id=user.id,
            score=0,
            energy_spent=0,
            balance=0,
            day_start=datetime.now()
        )
        db.add(daily_state)
        await db.flush()
    
    # Получаем все задания пользователя
    completed_tasks = []
    
    for user_task in user.tasks:
        task = user_task.task
        
        # Пропускаем задания, которые уже выполнены и получены
        if user_task.is_completed and user_task.is_claimed:
            continue
        
        # Для ежедневных заданий проверяем состояние в daily_game_state
        if task.type == "daily" and task.condition_type in ["taps", "energy_spent", "daily_balance"]:
            # Получаем значение из правильного поля
            current_value = 0
            if task.condition_type == "taps":
                current_value = daily_state.score
            elif task.condition_type == "energy_spent":
                current_value = daily_state.energy_spent
            elif task.condition_type == "daily_balance":
                current_value = daily_state.balance
            
            # Устанавливаем прогресс на текущее значение
            user_task.progress = current_value
            user_task.last_updated = datetime.now()
            
            # Проверяем выполнение
            if current_value >= task.condition_value and not user_task.is_completed:
                user_task.is_completed = True
                user_task.completed_at = datetime.now()
                completed_tasks.append(user_task)
            
        # Для глобальных заданий проверяем состояние в game_state
        elif task.type == "permanent":
            if task.condition_type in ["level", "passive_income", "balance"]:
                # Определяем текущее значение
                current_value = 0
                if task.condition_type == "level":
                    current_value = user.game_state.level
                elif task.condition_type == "passive_income":
                    current_value = user.game_state.passive_income
                elif task.condition_type == "balance":
                    current_value = user.game_state.balance
                
                # Устанавливаем прогресс на текущее значение
                user_task.progress = current_value
                
                # Проверяем выполнение
                if current_value >= task.condition_value and not user_task.is_completed:
                    user_task.is_completed = True
                    user_task.completed_at = datetime.now()
                    completed_tasks.append(user_task)
    
    await db.commit()
    return completed_tasks


async def claim_task_reward(db: AsyncSession, user_telegram_id: int, user_task_id: int):
    """
    Получает награду за выполненное задание
    """
    # Получаем пользователя
    result = await db.execute(
        select(User)
        .options(selectinload(User.game_state))
        .filter(User.telegram_id == user_telegram_id)
    )
    user = result.scalar_one_or_none()
    
    if not user:
        return {"success": False, "error": "User not found"}
    
    # Получаем задание пользователя
    result = await db.execute(
        select(UserTask)
        .options(selectinload(UserTask.task))
        .filter(
            UserTask.id == user_task_id, 
            UserTask.user_id == user.id,
            UserTask.is_completed == True,
            UserTask.is_claimed == False
        )
    )
    user_task = result.scalar_one_or_none()
    
    if not user_task:
        return {"success": False, "error": "Task not found or already claimed"}
    
    # Начисляем награду
    reward = user_task.task.reward
    user.game_state.balance += reward
    
    # Отмечаем, что награда получена
    user_task.is_claimed = True
    
    await db.commit()
    
    return {
        "success": True,
        "reward": reward,
        "new_balance": user.game_state.balance,
        "task_id": user_task.id
    }