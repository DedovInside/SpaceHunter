from sqlalchemy import Column, Integer, String, Text, DateTime, BigInteger, ForeignKey
from sqlalchemy.orm import relationship, backref
from sqlalchemy.sql import func
from app.database import Base


class User(Base):
    __tablename__ = "users"

    # Идентификаторы
    id = Column(Integer, primary_key=True, autoincrement=True)  # Внутренний ID для связей
    telegram_id = Column(BigInteger, unique=True, index=True, nullable=False)  # ID из Telegram

    username = Column(String, unique=True, index=True)
    created_at = Column(DateTime, default=func.now())
    referred_by_id = Column(Integer, ForeignKey("users.id"), nullable=True)

    # Отношения
    game_state = relationship("GameState", back_populates="user", uselist=False)
    boosts = relationship("UserBoost", back_populates="user")
    tasks = relationship("UserTask", back_populates="user")
    nfts = relationship("UserNFT", back_populates="user")
    referred_users = relationship(
        "User",
        backref=backref("referrer", remote_side=[id]),
        cascade="all, delete",
    )
    daily_bonus = relationship("UserDailyBonus", back_populates="user", uselist=False)


