from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.crud.boost import upgrade_boost, get_all_boosts, get_user_boosts
from app.schemas.boost import Boost, UpgradeBoostRequest, UserBoostResponse
from typing import List

router = APIRouter(prefix="/boosts", tags=["Boosts"])


@router.post("/upgrade")
async def upgrade_user_boost(request: UpgradeBoostRequest, db: AsyncSession = Depends(get_db)):
    result = await upgrade_boost(db, request.telegram_id, request.boost_id)
    if "error" in result:
        raise HTTPException(status_code=400, detail=result["error"])
    return result


@router.get("/", response_model=List[Boost])
async def read_all_boosts(db: AsyncSession = Depends(get_db)):
    return await get_all_boosts(db)


@router.get("/user/{telegram_id}", response_model=List[UserBoostResponse])
async def read_user_boosts(telegram_id: int, db: AsyncSession = Depends(get_db)):
    boosts = await get_user_boosts(db, telegram_id)
    if isinstance(boosts, dict) and "error" in boosts:
        raise HTTPException(status_code=404, detail=boosts["error"])
    return boosts