from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.crud.game import apply_energy_restore, calculate_energy_restore, process_click, calculate_passive_income, apply_passive_income

from app.models.user import User
from sqlalchemy.orm import selectinload
from sqlalchemy import select

from datetime import datetime

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


@router.get("/passive_income/{telegram_id}")
async def get_passive_income_api(telegram_id: int, db: AsyncSession = Depends(get_db)):
    result = await calculate_passive_income(db, telegram_id)
    
    if "error" in result:
        raise HTTPException(status_code=404, detail=result["error"])
    
    # Return only the necessary info for the frontend
    return {
        "passive_income_rate": result["passive_income_rate"],
        "accumulated_income": result["accumulated_income"],
        "max_accumulation_time": result["max_accumulation_time"],
        "time_accumulated": result["time_accumulated"]
    }


@router.post("/apply_passive_income/{telegram_id}")
async def apply_passive_income_api(telegram_id: int, db: AsyncSession = Depends(get_db)):
    # By default, assume user is in-app (not returning)
    result = await apply_passive_income(db, telegram_id, is_returning=False)
    
    if "error" in result:
        raise HTTPException(status_code=404, detail=result["error"])
    
    return {
        "applied_income": result["applied_income"],
        "new_balance": result["new_balance"]
    }


@router.post("/apply_returning_income/{telegram_id}")
async def apply_returning_income_api(telegram_id: int, db: AsyncSession = Depends(get_db)):
    # This endpoint is specifically for users returning to the app
    result = await apply_passive_income(db, telegram_id, is_returning=True)
    
    if "error" in result:
        raise HTTPException(status_code=404, detail=result["error"])
    
    return {
        "applied_income": result["applied_income"],
        "new_balance": result["new_balance"]
    }

@router.get("/energy/{telegram_id}")
async def get_energy_state(telegram_id: int, db: AsyncSession = Depends(get_db)):
    result = await calculate_energy_restore(db, telegram_id)
    if "error" in result:
        raise HTTPException(status_code=404, detail=result["error"])
    return {
        "current_energy": result["current_energy"],
        "energy_to_restore": result["energy_to_restore"],
        "max_energy": result["max_energy"]
    }

@router.post("/energy/restore/{telegram_id}")
async def restore_energy(telegram_id: int, db: AsyncSession = Depends(get_db)):
    result = await apply_energy_restore(db, telegram_id)
    if "error" in result:
        raise HTTPException(status_code=404, detail=result["error"])
    return result