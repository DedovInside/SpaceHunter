from sqlalchemy import desc
from sqlalchemy.future import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.user import User
from app.models.game_state import GameState


async def get_friends_balance_rating(user_id: int, db: AsyncSession):
    # Получаем всех друзей (приглашённых пользователей)
    result = await db.execute(
        select(User, GameState)
        .join(GameState, User.id == GameState.user_id)
        .where(User.referred_by_id == user_id)
        .order_by(desc(GameState.balance))
    )
    rows = result.all()

    return [
        {
            "telegram_id": user.telegram_id,
            "username": user.username,
            "balance": game_state.balance,
            "level": game_state.level
        }
        for user, game_state in rows
    ]
