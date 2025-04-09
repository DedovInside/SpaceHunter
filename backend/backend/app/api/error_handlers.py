from fastapi import HTTPException, APIRouter
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError

router = APIRouter()

# Обработчик стандартных ошибок FastAPI
@router.exception_handler(HTTPException)
async def http_exception_handler(request, exc: HTTPException):
    return JSONResponse(
        status_code=exc.status_code,
        content={"error": exc.detail},
    )


# Обработчик неожиданных ошибок
@router.exception_handler(Exception)
async def global_exception_handler(request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"error": "Internal Server Error"},
    )


# Если хочешь обрабатывать ошибки валидации, например, при неправильных данных
@router.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc: RequestValidationError):
    return JSONResponse(
        status_code=422,
        content={"error": "Validation Error", "details": exc.errors()},
    )
