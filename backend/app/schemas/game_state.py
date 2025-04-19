from pydantic import BaseModel


class GameStateBase(BaseModel):
    balance: float
    score: float
    level: int
    energy: int

    class Config:
        orm_mode = True
