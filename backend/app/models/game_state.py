from datetime import datetime

from sqlalchemy import Column, Integer, Float, ForeignKey, DateTime, func, CheckConstraint
from sqlalchemy.orm import relationship
from app.database import Base


class GameState(Base):
    __tablename__ = "game_states"

    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    score = Column(Integer, default=0)
    level = Column(Integer, default=1)
    balance = Column(Float, default=0.0)
    boost_multiplier = Column(Float, default=1.0)  # множитель бонусов
    passive_income = Column(Float, default=0.0)  # доход в секунду
    energy = Column(Float, default=100.0)
    last_energy_update = Column(DateTime, default=func.now())
    last_click_at = Column(DateTime, nullable=True)  # Время последнего клика
    last_income_at = Column(DateTime, default=datetime.utcnow)
    user = relationship("User", back_populates="game_state")

    __table_args__ = (
        CheckConstraint('energy >= 0 AND energy <= 100', name='energy_range'),
        CheckConstraint('balance >= 0', name='non_negative_balance'),
        CheckConstraint('passive_income >= 0', name='non_negative_income')
    )

    def __repr__(self):
        return f"<GameState(user={self.user_id}, balance={self.balance})>"
