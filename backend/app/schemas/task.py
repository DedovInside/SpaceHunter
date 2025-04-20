from pydantic import BaseModel

class TaskBase(BaseModel):
    title: str
    description: str
    condition_value: int
    reward: int
    type: str
    condition_type: str


class TaskCreate(TaskBase):
    pass


class TaskRead(TaskBase):
    id: int

    class Config:
        from_attributes = True


class UserTaskRead(BaseModel):
    id: int
    task: TaskRead
    progress: int
    is_completed: bool

    class Config:
        from_attributes = True