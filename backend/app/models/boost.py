from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import relationship
from app.database import Base


class Boost(Base):
    __tablename__ = "boosts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    click_multiplier = Column(Integer, default=1)  # Увеличивает доход от клика
    passive_income = Column(Integer, default=0)  # Увеличивает пассивный доход
    level = Column(Integer, default=1)  # Можно улучшать
    cost = Column(Integer, default=100)  # Стоимость следующего уровня

    users = relationship("UserBoost", back_populates="boost")

    def __repr__(self):
        return f"<Boost(name='{self.name}', cost={self.cost})>"
