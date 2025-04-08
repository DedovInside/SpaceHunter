from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.crud.user import get_user_by_telegram_id
from app.services.bonus import claim_daily_bonus

router = APIRouter()


@router.post("/daily-bonus/{telegram_id}")
async def daily_bonus(telegram_id: int, db: AsyncSession = Depends(get_db)):
    user = await get_user_by_telegram_id(db, telegram_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    result = await claim_daily_bonus(user, db)
    return result
