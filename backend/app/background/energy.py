import asyncio
from datetime import datetime
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload
from app.database import AsyncSessionLocal
from app.models.user import User

RESTORE_INTERVAL = 60  # 1 минута
ENERGY_RESTORE_AMOUNT = 1  # Количество восстанавливаемой энергии
MAX_ENERGY = 100  # Максимальное количество энергии

async def restore_energy_task():
    """Фоновая задача для восстановления энергии всех пользователей."""
    while True:
        async with AsyncSessionLocal() as db:
            result = await db.execute(
                    select(User).options(selectinload(User.game_state))
                )
            users = result.scalars().all()
            

            for user in users:
                game_state = user.game_state
                if game_state and game_state.energy < MAX_ENERGY:
                    now = datetime.now(datetime.timezone.utc)
                    elapsed_minutes = (now - game_state.last_energy_update).total_seconds() / 60
                    energy_to_restore = int(elapsed_minutes * ENERGY_RESTORE_AMOUNT)

                    print(f"User {user.id}: Current energy: {game_state.energy}, Restoring: {energy_to_restore}")
                    if energy_to_restore > 0:
                        game_state.energy = min(
                            game_state.energy + energy_to_restore,
                            MAX_ENERGY
                        )
                        game_state.last_energy_update = now

            await db.commit()
            print("Energy restoration cycle completed")

        await asyncio.sleep(RESTORE_INTERVAL) 