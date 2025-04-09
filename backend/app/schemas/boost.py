from pydantic import BaseModel
from typing import Optional


class BoostBase(BaseModel):
    name: str
    category: str
    description: Optional[str] = None
    icon_name: Optional[str] = None
    passive_income: int = 0
    click_multiplier: float = 0
    level: int = 0
    max_level: int = 8
    base_cost: int = 1000


class Boost(BoostBase):
    id: int

    class Config:
        orm_mode = True


class UserBoostResponse(BaseModel):
    boost_id: int
    name: str
    category: str
    description: Optional[str] = None
    icon_name: Optional[str] = None
    passive_income: int
    click_multiplier: float
    level: int
    max_level: int
    current_cost: int

    class Config:
        orm_mode = True


class BuyBoostRequest(BaseModel):
    telegram_id: int
    boost_id: int


class UpgradeBoostRequest(BaseModel):
    telegram_id: int
    boost_id: int