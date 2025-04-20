from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from datetime import date
from app.database import get_db
from app.services.bonus import claim_daily_bonus
from app.models.daily_bonus import DailyBonus, UserDailyBonus
from sqlalchemy.future import select
from app.models.user import User

router = APIRouter(prefix="/bonus", tags=["Bonus"])

@router.get("/daily/status/{telegram_id}")
async def get_daily_bonus_status(telegram_id: int, db: AsyncSession = Depends(get_db)):
    """Получить статус ежедневных бонусов пользователя"""
    # Получаем пользователя
    user_result = await db.execute(select(User).where(User.telegram_id == telegram_id))
    user = user_result.scalar_one_or_none()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Получаем запись о бонусах
    bonus_result = await db.execute(
        select(UserDailyBonus).where(UserDailyBonus.user_id == user.id)
    )
    bonus_data = bonus_result.scalar_one_or_none()

    today = date.today()
    if not bonus_data:
        return {
            "current_day": 1,
            "can_claim": True,
            "next_claim": None,
            "days_streak": 0
        }
    
    # Проверяем сброс прогресса
    if bonus_data.last_claimed_date:
        days_diff = (today - bonus_data.last_claimed_date).days
        if days_diff > 1:  # Если пропущен день
            bonus_data.current_day = 1
            await db.commit()

    # Проверяем завершение цикла
    if bonus_data.current_day > 10:
        bonus_data.current_day = 1
        await db.commit()

    # Проверяем, можно ли забрать бонус сегодня
    can_claim = not bonus_data.last_claimed_date or bonus_data.last_claimed_date < today
    
    return {
        "current_day": bonus_data.current_day,
        "can_claim": can_claim,
        "last_claimed": bonus_data.last_claimed_date.isoformat() if bonus_data.last_claimed_date else None,
        "days_streak": bonus_data.current_day - 1
    }

@router.post("/daily/claim/{telegram_id}")
async def claim_daily_bonus_endpoint(telegram_id: int, db: AsyncSession = Depends(get_db)):
    """Получить ежедневный бонус"""
    result = await claim_daily_bonus(telegram_id, db)
    
    if "error" in result:
        raise HTTPException(status_code=400, detail=result["error"])
    
    return result

@router.get("/daily/config")
async def get_daily_bonus_config(db: AsyncSession = Depends(get_db)):
    """Получить конфигурацию ежедневных бонусов"""
    result = await db.execute(select(DailyBonus))
    bonuses = result.scalars().all()
    
    return [{
        "day": bonus.day_number,
        "type": bonus.reward_type,
        "amount": bonus.reward_amount
    } for bonus in bonuses]