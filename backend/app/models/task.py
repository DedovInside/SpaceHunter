from sqlalchemy import Column, Integer, String, Float, Enum
from sqlalchemy.orm import relationship
from app.database import Base
import enum


class TaskTypeEnum(str, enum.Enum):
    DAILY = "daily"
    PERMAMENT = "permament"


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, index=True)
    type = Column(Enum(TaskTypeEnum), nullable=False)
    reward = Column(Float, default=10.0)
    condition_value = Column(Integer, nullable=False)  # сколько тапов, какой уровень и т.д.
    condition_type = Column(String, nullable=False)  # что проверяется: 'taps', 'level', 'passive_income'

    users = relationship("UserTask", back_populates="task")

    def __repr__(self):
        return f"<Task(id={self.id}, reward={self.reward})>"
