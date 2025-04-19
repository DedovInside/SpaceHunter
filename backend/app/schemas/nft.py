from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime


class NFTBase(BaseModel):
    name: str
    description: Optional[str] = None
    image_path: str
    coins_threshold: int = 0  # Добавляем поле


class NFTCreate(NFTBase):
    category_id: int


class NFTResponse(NFTBase):
    id: int
    category_id: int

    class Config:
        from_attributes = True


class NFTCategoryBase(BaseModel):
    name: str
    description: Optional[str] = None


class NFTCategoryCreate(NFTCategoryBase):
    pass


class NFTCategoryResponse(NFTCategoryBase):
    id: int
    nfts: List[NFTResponse] = []

    class Config:
        from_attributes = True


class UserNFTResponse(BaseModel):
    nft_id: int
    acquired_at: datetime
    nft: NFTResponse

    class Config:
        from_attributes = True