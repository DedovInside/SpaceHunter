from pydantic import BaseModel
from datetime import datetime


class DailyGameStateBase(BaseModel):
    score: int = 0
    balance: int = 0
    energy_spent: int = 0

    class Config:
        orm_mode = True
