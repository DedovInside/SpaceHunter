from datetime import datetime, timezone 
from sqlalchemy import Column, Integer, Float, ForeignKey, DateTime, func, CheckConstraint
from sqlalchemy.orm import relationship
from app.database import Base




class GameState(Base):
    __tablename__ = "game_states"

    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    score = Column(Integer, default=0)
    level = Column(Integer, default=1)
    balance = Column(Integer, default=0)

    boost_multiplier = Column(Integer, default=1)  # множитель бонусов
    passive_income = Column(Integer, default=0)  # доход в секунду

    energy = Column(Integer, default=100)

    # Метки времени
    last_energy_update = Column(DateTime, default=datetime.now)
    last_click_at = Column(DateTime, default=datetime.now)
    last_income_at = Column(DateTime, default=datetime.now)
    last_offline_at = Column(DateTime, default=datetime.now)

    user = relationship("User", back_populates="game_state")

    __table_args__ = (
        CheckConstraint('energy >= 0 AND energy <= 100', name='energy_range'),
        CheckConstraint('balance >= 0', name='non_negative_balance'),
        CheckConstraint('passive_income >= 0', name='non_negative_income')
    )

    def __repr__(self):
        return f"<GameState(user={self.user_id}, balance={self.balance})>"
