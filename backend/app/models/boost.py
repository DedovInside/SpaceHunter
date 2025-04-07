from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import relationship
from app.database import Base


class Boost(Base):
    __tablename__ = "boosts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    click_multiplier = Column(Float, default=1.0)  # Увеличивает доход от клика
    passive_income = Column(Float, default=0.0)  # Увеличивает пассивный доход
    level = Column(Integer, default=1)  # Можно улучшать
    cost = Column(Float, default=100.0)  # Стоимость следующего уровня

    users = relationship("UserBoost", back_populates="boost")

    def __repr__(self):
        return f"<Boost(name='{self.name}', cost={self.cost})>"
