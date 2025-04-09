from pydantic import BaseModel


class GameStateBase(BaseModel):
    balance: float
    score: float
    level: int

    class Config:
        orm_mode = True
