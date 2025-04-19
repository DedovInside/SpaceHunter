from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload
from app.models.nft import NFT, NFTCategory, UserNFT
from app.models.user import User


async def get_all_nft_categories(db: AsyncSession):
    """Получить все категории NFT."""
    result = await db.execute(
        select(NFTCategory).options(selectinload(NFTCategory.nfts))
    )
    return result.scalars().all()


async def get_user_nfts(db: AsyncSession, telegram_id: int):
    """Получить все NFT пользователя."""
    result = await db.execute(select(User).where(User.telegram_id == telegram_id))
    user = result.scalar_one_or_none()
    
    if not user:
        return []
    
    result = await db.execute(
        select(UserNFT)
        .options(selectinload(UserNFT.nft).selectinload(NFT.category))
        .where(UserNFT.user_id == user.id)
    )
    
    return result.scalars().all()


async def add_nft_to_user(db: AsyncSession, telegram_id: int, nft_id: int):
    """Добавить NFT пользователю."""
    result = await db.execute(select(User).where(User.telegram_id == telegram_id))
    user = result.scalar_one_or_none()
    
    if not user:
        return None
    
    result = await db.execute(select(NFT).where(NFT.id == nft_id))
    nft = result.scalar_one_or_none()
    
    if not nft:
        return None
    
    # Проверяем, есть ли уже такой NFT у пользователя
    existing_result = await db.execute(
        select(UserNFT).where(
            UserNFT.user_id == user.id,
            UserNFT.nft_id == nft_id
        )
    )
    existing = existing_result.scalar_one_or_none()
    
    if existing:
        return existing
    
    # Добавляем NFT пользователю
    user_nft = UserNFT(user_id=user.id, nft_id=nft_id)
    db.add(user_nft)
    await db.commit()
    await db.refresh(user_nft)
    
    return user_nft


async def get_user_nft_with_details(db: AsyncSession, user_id: int, nft_id: int):
    """Получить UserNFT с подробной информацией о NFT."""
    result = await db.execute(
        select(UserNFT)
        .options(selectinload(UserNFT.nft).selectinload(NFT.category))
        .where(UserNFT.user_id == user_id, UserNFT.nft_id == nft_id)
    )
    return result.scalar_one_or_none()


async def check_available_nfts(db: AsyncSession, telegram_id: int):
    """Проверяет и возвращает NFT, которые пользователь может получить на основе текущего баланса."""
    # Получаем пользователя и его состояние игры
    user_result = await db.execute(
        select(User).options(selectinload(User.game_state))
        .where(User.telegram_id == telegram_id)
    )
    user = user_result.scalar_one_or_none()
    
    if not user or not user.game_state:
        return []
    
    # Текущий баланс пользователя
    current_balance = user.game_state.balance
    
    # Получаем все NFT пользователя
    user_nft_result = await db.execute(
        select(UserNFT.nft_id).where(UserNFT.user_id == user.id)
    )
    user_nft_ids = {row[0] for row in user_nft_result.all()}
    
    # Получаем все NFT, которые пользователь может открыть, но еще не открыл
    query = (
        select(NFT)
        .where(
            NFT.coins_threshold <= current_balance,
            ~NFT.id.in_(user_nft_ids) if user_nft_ids else True
        )
        .order_by(NFT.coins_threshold)
    )
    
    result = await db.execute(query)
    available_nfts = result.scalars().all()
    
    return available_nfts


async def auto_unlock_available_nfts(db: AsyncSession, telegram_id: int):
    """Автоматически разблокирует все доступные NFT для пользователя и возвращает их."""
    available_nfts = await check_available_nfts(db, telegram_id)
    
    if not available_nfts:
        return []
    
    user_result = await db.execute(select(User).where(User.telegram_id == telegram_id))
    user = user_result.scalar_one_or_none()
    
    if not user:
        return []
    
    newly_unlocked = []
    
    for nft in available_nfts:
        # Добавляем NFT пользователю
        user_nft = UserNFT(user_id=user.id, nft_id=nft.id)
        db.add(user_nft)
        newly_unlocked.append(await get_user_nft_with_details(db, user.id, nft.id))
    
    await db.commit()
    
    return newly_unlocked