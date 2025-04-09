from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.crud.user import get_user_by_telegram_id
from app.services.rating import get_friends_balance_rating

router = APIRouter()


@router.get("/users/friends-rating")
async def get_friends_rating(telegram_id: int, db: AsyncSession = Depends(get_db)):
    user = await get_user_by_telegram_id(db, telegram_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    friends_ranking = await get_friends_balance_rating(user.id, db)
    return {"friends": [{"username": u, "balance": b} for u, b in friends_ranking]}

