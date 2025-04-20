from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import text
from app.database import AsyncSessionLocal
import asyncio
from app.models.daily_bonus import DailyBonus

async def seed_daily_bonuses(db: AsyncSession):
    # Определяем бонусы
    bonuses = [
        {"day_number": 1, "reward_type": "coins", "reward_amount": 500},
        {"day_number": 2, "reward_type": "coins", "reward_amount": 1500},
        {"day_number": 3, "reward_type": "coins", "reward_amount": 3000},
        {"day_number": 4, "reward_type": "coins", "reward_amount": 5000},
        {"day_number": 5, "reward_type": "coins", "reward_amount": 10000},
        {"day_number": 6, "reward_type": "coins", "reward_amount": 15000},
        {"day_number": 7, "reward_type": "coins", "reward_amount": 20000},
        {"day_number": 8, "reward_type": "coins", "reward_amount": 30000},
        {"day_number": 9, "reward_type": "coins", "reward_amount": 50000},
        {"day_number": 10, "reward_type": "nft", "reward_amount": None},
    ]

    # Очищаем существующие записи
    await db.execute(text("TRUNCATE TABLE daily_bonuses CASCADE"))

    # Добавляем новые бонусы
    for bonus in bonuses:
        db_bonus = DailyBonus(**bonus)
        db.add(db_bonus)

    await db.commit()
    print("Daily bonuses seeded successfully!")

async def main():
    async with AsyncSessionLocal() as session:
        await seed_daily_bonuses(session)

if __name__ == "__main__":
    asyncio.run(main())