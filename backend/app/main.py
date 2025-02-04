from fastapi import FastAPI
from app.api import users

app = FastAPI()

app.include_router(users.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to the game backend!"}