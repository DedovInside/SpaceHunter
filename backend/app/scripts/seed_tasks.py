from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.task import Task
from app.database import AsyncSessionLocal
import asyncio

# Добавить дополнительное ежедневное задание для daily_balance

TASKS_DATA = [
    {
        "title": "Daily Clicks",
        "description": "Make 100 clicks today",
        "type": "daily",  
        "reward": 500,
        "condition_value": 100,
        "condition_type": "taps"
    },
    {
        "title": "Energy Spender",
        "description": "Spend 50 energy points",
        "type": "daily",
        "reward": 300,
        "condition_value": 50,
        "condition_type": "energy_spent"
    },
    {
        "title": "Daily Profit",
        "description": "Earn 1000 CSM today",
        "type": "daily",
        "reward": 500,
        "condition_value": 1000,
        "condition_type": "daily_balance"
    },
    {
        "title": "Reach Level 5",
        "description": "Level up your character to level 5",
        "type": "permanent", 
        "reward": 1000,
        "condition_value": 5,
        "condition_type": "level"
    },
    {
        "title": "Passive Income Master",
        "description": "Reach 100 CSM/hour passive income",
        "type": "permanent",  
        "reward": 2000,
        "condition_value": 100,
        "condition_type": "passive_income"
    },
    {
        "title": "Click Champion",
        "description": "Reach 1000 total balance",
        "type": "permanent",
        "reward": 1500,
        "condition_value": 1000,
        "condition_type": "balance"
    }
]

async def seed_tasks():
    async with AsyncSessionLocal() as db:
        # Clear the table
        await db.execute(text("DELETE FROM user_tasks"))
        await db.execute(text("DELETE FROM tasks"))
        await db.commit()
        
        for task_data in TASKS_DATA:
            task = Task(**task_data)  
            db.add(task)
        
        try:
            await db.commit()
            print("Tasks seeded successfully!")
        except Exception as e:
            await db.rollback()
            print(f"Error seeding tasks: {e}")
            raise

if __name__ == "__main__":
    asyncio.run(seed_tasks())