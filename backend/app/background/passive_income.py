import asyncio
from datetime import datetime
from sqlalchemy.future import select
from app.database import AsyncSessionLocal
from app.models.user import User


async def apply_passive_income():
    while True:
        async with AsyncSessionLocal() as db:
            result = await db.execute(select(User))
            users = result.scalars().all()

            for user in users:
                game_state = user.game_state
                if not game_state or game_state.passive_income == 0:
                    continue

                now = datetime.utcnow()
                seconds = (now - game_state.last_income_at).total_seconds()
                income = seconds * game_state.passive_income

                game_state.balance += income
                game_state.last_income_at = now

            await db.commit()

        await asyncio.sleep(60)  # Ждём минуту до следующего запуска
