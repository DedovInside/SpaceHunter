from sqlalchemy import Date, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String, Float
from app.database import Base


class DailyBonus(Base):
    __tablename__ = "daily_bonuses"

    id = Column(Integer, primary_key=True, index=True)
    day_number = Column(Integer, nullable=False, unique=True)  # от 1 до 10
    reward_type = Column(String, nullable=False)  # например: "coins", "nft"
    reward_amount = Column(Float, nullable=True)  # для монет или энергии, если не NFT


class UserDailyBonus(Base):
    __tablename__ = "user_daily_bonus"

    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    current_day = Column(Integer, default=1)  # День от 1 до 10
    last_claimed_date = Column(Date)

    user = relationship("User", back_populates="daily_bonus")
