from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.crud.boost import purchase_boost, get_all_boosts
from app.schemas.boost import Boost, BuyBoostRequest

router = APIRouter(prefix="/boosts", tags=["Boosts"])


@router.post("/buy")
async def buy_boost(request: BuyBoostRequest, db: AsyncSession = Depends(get_db)):
    return await purchase_boost(db, request.telegram_id, request.boost_id)


@router.get("/", response_model=list[Boost])
async def read_boosts(db: AsyncSession = Depends(get_db)):
    return await get_all_boosts(db)
