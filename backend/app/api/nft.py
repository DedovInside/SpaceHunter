from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.crud import nft as crud
from app.schemas.nft import NFTCategoryResponse, UserNFTResponse, NFTResponse
from app.database import get_db
from typing import List

router = APIRouter(prefix="/nft", tags=["NFT"])


@router.get("/categories", response_model=List[NFTCategoryResponse])
async def get_categories(db: AsyncSession = Depends(get_db)):
    """Получить все категории NFT."""
    return await crud.get_all_nft_categories(db)


@router.get("/user/{telegram_id}", response_model=List[UserNFTResponse])
async def get_user_collection(telegram_id: int, db: AsyncSession = Depends(get_db)):
    """Получить коллекцию NFT пользователя."""
    return await crud.get_user_nfts(db, telegram_id)


@router.get("/available/{telegram_id}", response_model=List[NFTResponse])
async def get_available_nfts(telegram_id: int, db: AsyncSession = Depends(get_db)):
    """Получить список NFT, которые пользователь может разблокировать исходя из текущего баланса."""
    return await crud.check_available_nfts(db, telegram_id)


@router.post("/unlock/{telegram_id}/{nft_id}", response_model=UserNFTResponse)
async def unlock_nft(telegram_id: int, nft_id: int, db: AsyncSession = Depends(get_db)):
    """Разблокировать определенный NFT для пользователя."""
    user_nft = await crud.add_nft_to_user(db, telegram_id, nft_id)
    if not user_nft:
        raise HTTPException(
            status_code=400, 
            detail="NFT not found or user doesn't exist"
        )
    return user_nft


@router.post("/auto-unlock/{telegram_id}", response_model=List[UserNFTResponse])
async def auto_unlock_nfts(telegram_id: int, db: AsyncSession = Depends(get_db)):
    """Автоматически разблокировать все доступные NFT для пользователя."""
    return await crud.auto_unlock_available_nfts(db, telegram_id)