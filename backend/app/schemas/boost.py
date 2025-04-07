from pydantic import BaseModel


class BoostBase(BaseModel):
    name: str
    click_multiplier: float
    passive_income: float
    level: int
    cost: float


class Boost(BoostBase):
    id: int

    class Config:
        orm_mode = True


class BuyBoostRequest(BaseModel):
    telegram_id: int
    boost_id: int


class BoostPurchaseRequest(BaseModel):
    telegram_id: int
    boost_id: int


class BoostPurchaseResponse(BaseModel):
    success: bool
    new_balance: float
    new_boost_level: int
    reward_multiplier: float