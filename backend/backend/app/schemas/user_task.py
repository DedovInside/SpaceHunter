from pydantic import BaseModel
from .task import TaskRead


class UserTaskRead(BaseModel):
    id: int
    progress: int
    is_completed: bool
    task: TaskRead

    class Config:
        from_attributes = True
