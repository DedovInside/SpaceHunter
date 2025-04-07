from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base


class UserBoost(Base):
    __tablename__ = "user_boosts"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    boost_id = Column(Integer, ForeignKey("boosts.id"))
    quantity = Column(Integer, default=1)  # Количество купленных бустов

    user = relationship("User", back_populates="boosts")
    boost = relationship("Boost", back_populates="users")
