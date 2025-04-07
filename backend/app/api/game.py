from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.crud.game import process_click

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
