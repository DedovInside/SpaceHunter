from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.crud.game import process_click

from app.models.user import User
from sqlalchemy.orm import selectinload
from sqlalchemy import select

router = APIRouter()


@router.post("/click")
async def click(telegram_id: int, db: AsyncSession = Depends(get_db)):
    result = await process_click(db, telegram_id)
    if "error" in result:
        raise HTTPException(status_code=404, detail=result["error"])
    return {
        "message": "Click processed",
        **result
    }

@router.get("/state/{telegram_id}")
async def get_user_game_state(telegram_id: int, db: AsyncSession = Depends(get_db)):
    # Find the user
    result = await db.execute(
        select(User)
        .options(selectinload(User.game_state))
        .filter(User.telegram_id == telegram_id)
    )
    user = result.scalars().first()
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    if not user.game_state:
        raise HTTPException(status_code=404, detail="Game state not found")
    
    # Return game state as a dictionary
    return {
        "balance": user.game_state.balance,
        "level": user.game_state.level,
        "score": user.game_state.score,
        "energy": user.game_state.energy,
        "boost_multiplier": user.game_state.boost_multiplier
    }
