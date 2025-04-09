import asyncio
from datetime import datetime
from sqlalchemy.future import select
from app.database import AsyncSessionLocal
from app.models.user import User

# Константы для пассивного дохода
MAX_PASSIVE_ACCUMULATION_TIME = 3600  # Максимум 1 час накопления в секундах

async def apply_passive_income():
    while True:
        async with AsyncSessionLocal() as db:
            result = await db.execute(select(User))
            users = result.scalars().all()

            for user in users:
                game_state = user.game_state
                if not game_state or game_state.passive_income == 0:
                    continue

                now = datetime.now(datetime.timezone.utc)
                seconds = (now - game_state.last_income_at).total_seconds()
                
                # Ограничиваем время накопления константой вместо поля из БД
                effective_seconds = min(seconds, MAX_PASSIVE_ACCUMULATION_TIME)
                
                # Пассивный доход хранится как доход в час, конвертируем в доход в секунду
                income_per_hour = game_state.passive_income
                income = int(effective_seconds * income_per_hour / 3600)
                
                # Обновляем только если есть что добавить
                if income > 0:
                    game_state.balance += income
                    game_state.last_income_at = now

            await db.commit()

        await asyncio.sleep(60)  # Ждём минуту до следующего запуска