from datetime import datetime, timezone 
from sqlalchemy import Column, Integer, Float, ForeignKey, DateTime, func, CheckConstraint
from sqlalchemy.orm import relationship
from app.database import Base




class DailyGameState(Base):
    __tablename__ = "daily_game_states"

    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    score = Column(Integer, default=0)
    
    balance = Column(Integer, default=0)

    energy_spent = Column(Integer, default=0)

    # Метки времени
    last_update = Column(DateTime, default=datetime.now)
    day_start = Column(DateTime, default=datetime.now)

    user = relationship("User", back_populates="daily_game_state")

    def __repr__(self):
        return f"<DailyGameState(user={self.user_id}, balance={self.balance})>"
