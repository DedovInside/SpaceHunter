from sqlalchemy import Column, Integer, String, Float, Text
from sqlalchemy.orm import relationship
from app.database import Base


class Boost(Base):
    __tablename__ = "boosts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    category = Column(String, nullable=False)  # energy, navigation, research, defense
    description = Column(Text, nullable=True)
    icon_name = Column(String, nullable=True)  # Имя файла иконки (без пути)
    
    # Эффекты буста
    passive_income = Column(Integer, default=0)  # Базовый пассивный доход
    click_multiplier = Column(Integer, default=0)  # Базовый множитель клика (speedBoost)
    
    # Информация об апгрейде
    level = Column(Integer, default=0)  # Начальный уровень
    max_level = Column(Integer, default=8)  # Максимальный уровень
    base_cost = Column(Integer, default=1000)  # Базовая стоимость апгрейда
    
    users = relationship("UserBoost", back_populates="boost")

    def __repr__(self):
        return f"<Boost(name='{self.name}', category='{self.category}')>"