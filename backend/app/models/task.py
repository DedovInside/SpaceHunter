from sqlalchemy import Column, Integer, String, Float, Enum
from sqlalchemy.orm import relationship
from app.database import Base
from sqlalchemy import Enum as SQLEnum
import enum


class TaskTypeEnum(str, enum.Enum):
    DAILY = "daily"
    PERMANENT = "permanent"


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, index=True)
    type = Column(Enum(TaskTypeEnum), nullable=False)
    reward = Column(Integer, default=10)
    condition_value = Column(Integer, nullable=False) 
    condition_type = Column(String, nullable=False)  

    users = relationship("UserTask", back_populates="task")

    def __repr__(self):
        return f"<Task(id={self.id}, reward={self.reward})>"
