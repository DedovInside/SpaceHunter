from datetime import datetime
from sqlalchemy import Column, DateTime, Integer, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from app.database import Base


class UserTask(Base):
    __tablename__ = "user_tasks"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    task_id = Column(Integer, ForeignKey('tasks.id'))
    progress = Column(Integer, default=0)
    is_completed = Column(Boolean, default=False)
    last_updated = Column(DateTime, default=datetime.now)  # Добавляем поле
    completed_at = Column(DateTime, nullable=True)  # Добавляем поле

    user = relationship("User", back_populates="tasks")
    task = relationship('Task', back_populates='users')
