from pydantic import BaseModel
from enum import Enum


class TaskTypeEnum(str, Enum):
    DAILY = "daily"
    PERMANENT = "permanent"


class TaskBase(BaseModel):
    title: str
    description: str
    target_value: int
    reward: int
    type: TaskTypeEnum
    condition: str


class TaskCreate(TaskBase):
    pass


class TaskRead(TaskBase):
    id: int

    class Config:
        from_attributes = True


class UserTaskRead(BaseModel):
    id: int
    task: TaskRead
    is_completed: bool

    class Config:
        from_attributes = True