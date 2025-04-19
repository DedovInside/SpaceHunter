from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime, func
from sqlalchemy.orm import relationship
from app.database import Base


class NFTCategory(Base):
    __tablename__ = "nft_categories"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(Text)
    
    # Отношение один-ко-многим с NFT
    nfts = relationship("NFT", back_populates="category")


class NFT(Base):
    __tablename__ = "nfts"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(Text)
    image_path = Column(String, nullable=False)
    category_id = Column(Integer, ForeignKey("nft_categories.id"), nullable=False)
    coins_threshold = Column(Integer, default=0)  # Сколько монет нужно заработать для разблокировки
    
    # Отношения
    category = relationship("NFTCategory", back_populates="nfts")
    user_nfts = relationship("UserNFT", back_populates="nft")


class UserNFT(Base):
    __tablename__ = "user_nfts"
    
    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    nft_id = Column(Integer, ForeignKey("nfts.id"), primary_key=True)
    acquired_at = Column(DateTime, default=func.now())
    
    # Отношения
    user = relationship("User", back_populates="nfts")
    nft = relationship("NFT", back_populates="user_nfts")