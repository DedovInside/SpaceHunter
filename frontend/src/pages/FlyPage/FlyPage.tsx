import {ModalWindow} from '@/components/ModalWindow/ModalWindow';
import {FC, useEffect, useState} from 'react';
import { gameApi, nftApi, bonusApi, UserNFT, NFTCategory, DailyBonusStatus, DailyBonusConfig} from '@/services/api';

import {Page} from '@/components/Page.tsx';

import NFTCollectionIcon from '../../components/icons/NFTCollectionIcon/NFTCollectionIcon.svg';
import DailyBonusIcon from '../../components/icons/DailyBonusIcon/DailyBonusIcon.svg';
import YourLevelIcon from '../../components/icons/YourLevelIcon/YourLevelIcon.svg';

import dailyBonusIcon from '../../../assets/Daily_Bonus_Modal_Icon.png';
import nftCollectionIcon from '../../../assets/NFT_Collection_Modal_Icon.png';
import yourLevelIcon from '../../../assets/Your_Level_Modal_Icon.png';

import DropPageIcon from '../../components/icons/DropPageIcon/DropPageIcon.svg';

// Импортируем все корабли
import ImperialDestroyer from '../../../assets/Imperial_Destroyer_Pixel_Art.png';
import Vostok from '../../../assets/Vostok_Pixel_Art.png';
import Starship from '../../../assets/Starship_Pixel_Art.png';
import SpaceShuttle from '../../../assets/Space_Shuttle_Pixel_Art.png';
import MilleniumFalcon from '../../../assets/Millenium_Falcon_Pixel_Art.png';
import EnergiaBuran from '../../../assets/Energia_Buran_Pixel_Art.png';
import Angara from '../../../assets/Angara_Pixel_Art.png';

import './FlyPage.css';

export const FlyPage: FC = () => {
    // Состояние для отображения модальных окон
    const [showBonusModal, setShowBonusModal] = useState(false);
    const [showNFTModal, setShowNFTModal] = useState(false);
    const [showLevelModal, setShowLevelModal] = useState(false);
    
    // Получаем Id пользователя из Telegram WebApp
    const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id || 99281932;

    // Состояние игры:
    const [gameState, setGameState] = useState({
        balance: 0,
        level: 1,
        score: 0,
        energy: 0,
        boost_multiplier: 1
    });

    // Уровни и опыт
    const [currentExp, setCurrentExp] = useState(0);
    
    // Состояния для NFT
    const [userNFTs, setUserNFTs] = useState<UserNFT[]>([]);
    const [nftCategories, setNftCategories] = useState<NFTCategory[]>([]);
    const [isLoadingNFTs, setIsLoadingNFTs] = useState(true);
    const [newlyUnlockedNFTs, setNewlyUnlockedNFTs] = useState<UserNFT[]>([]);
    const [showUnlockNFTModal, setShowUnlockNFTModal] = useState(false);
    const [selectedNFT, setSelectedNFT] = useState<UserNFT | null>(null);
    const [showNFTDetailModal, setShowNFTDetailModal] = useState(false);
    const [bonusStatus, setBonusStatus] = useState<DailyBonusStatus | null>(null);
    const [bonusConfig, setBonusConfig] = useState<DailyBonusConfig[]>([]);
    const [isLoadingBonuses, setIsLoadingBonuses] = useState(true);
    

    // ...existing code...
    // Загружаем начальное состояние игры.
    useEffect(() => {
        const fetchGameState = async () => {
            try {
                // Получаем текущее состояние игры с сервера
                const state = await gameApi.getGameState(userId);
                setGameState(state);
                
                // Устанавливаем опыт на основе score из gameState
                setCurrentExp(state.score);
            } catch (error) {
                console.error('Error fetching game state:', error);
            }
        };

        const applyEnergyRestore = async () => {
            try {
                const result = await gameApi.applyEnergyRestore(userId);
                if (result.restored_amount > 0) {
                    setGameState(prev => ({
                        ...prev,
                        energy: result.new_energy
                    }));
                }
            } catch (error) {
                console.error('Error restoring energy:', error);
            }
        };

        // Изменяем порядок вызовов: сначала восстанавливаем энергию, потом получаем состояние
        const initializeGameState = async () => {
            try {
                // Сначала применяем любое накопленное восстановление энергии
                await applyEnergyRestore();
                // Затем получаем обновленное состояние игры
                await fetchGameState();
            } catch (error) {
                console.error('Error initializing game state:', error);
            }
        };

        // Запускаем инициализацию сразу при монтировании компонента
        initializeGameState();

        // Настраиваем периодические обновления
        const interval = setInterval(fetchGameState, 10000);
        const energyRestoreInterval = setInterval(applyEnergyRestore, 15000);

        // Очистка интервала при размонтировании компонента
        return () => {
            clearInterval(interval);
            clearInterval(energyRestoreInterval);
        };
    }, [userId]);
    
    // Загружаем NFT данные
    useEffect(() => {
        const loadNFTData = async () => {
            try {
                setIsLoadingNFTs(true);
                
                // Загружаем категории и коллекцию пользователя параллельно
                const [categories, userCollection] = await Promise.all([
                    nftApi.getCategories(),
                    nftApi.getUserCollection(userId)
                ]);
                
                setNftCategories(categories);
                setUserNFTs(userCollection);
                
                // Проверяем доступные NFT и автоматически разблокируем их
                const unlocked = await nftApi.autoUnlockNFTs(userId);
                if (unlocked && unlocked.length > 0) {
                    setNewlyUnlockedNFTs(unlocked);
                    setShowUnlockNFTModal(true);
                    
                    // Добавляем новые NFT в коллекцию пользователя
                    setUserNFTs(prev => [...prev, ...unlocked]);
                }
            } catch (error) {
                console.error('Error loading NFT data:', error);
            } finally {
                setIsLoadingNFTs(false);
            }
        };
        
        loadNFTData();
    }, [userId]);

    // Загружаем данные ежедневных бонусов
    useEffect(() => {
        const loadBonusData = async () => {
            try {
                setIsLoadingBonuses(true);
                const [status, config] = await Promise.all([
                    bonusApi.getDailyBonusStatus(userId),
                    bonusApi.getDailyBonusConfig()
                ]);
                setBonusStatus(status);
                setBonusConfig(config);
            } catch (error) {
                console.error('Error loading bonus data:', error);
            } finally {
                setIsLoadingBonuses(false);
            }
        };

        loadBonusData();
    }, [userId]);

    // Добавляем перед return
    const handleClaimBonus = async (day: number) => {
        if (!bonusStatus?.can_claim || bonusStatus.current_day !== day) return;

        try {
            const result = await bonusApi.claimDailyBonus(userId);
            
            if (result.success) {
                setBonusStatus(prev => ({
                    ...prev!,
                    current_day: result.next_day,
                    can_claim: false,
                    last_claimed: result.last_claimed_date
                }));

                if (result.reward_type === 'coins' && result.new_balance !== null) {
                    setGameState(prev => ({
                        ...prev,
                        balance: result.new_balance || prev.balance
                    }));
                }
            }
        } catch (error) {
            console.error('Error claiming bonus:', error);
        }
    };

    // Функция обработки нажатия на корабль
    const handleShipClick = async () => {
        try {
            if (gameState.energy <= 0) {
                return;
            }
            // Анимация нажатия
            const shipButton = document.querySelector('.ship-button');
            shipButton?.classList.add('clicked');
            setTimeout(() => shipButton?.classList.remove('clicked'), 150);
            
            // Вызываем API и получаем обновленное состояние игры
            const result = await gameApi.click(userId);
            
            // Обновляем состояние
            setGameState(prev => ({
                ...prev,
                balance: result.new_balance,
                score: result.new_score,
                level: result.level, 
                energy: result.energy
            }));
            
            // Обновляем опыт
            setCurrentExp(result.new_score);
            
            // Проверяем, можно ли открыть новые NFT
            try {
                const unlocked = await nftApi.autoUnlockNFTs(userId);
                
                if (unlocked && unlocked.length > 0) {
                    setNewlyUnlockedNFTs(unlocked);
                    setShowUnlockNFTModal(true);
                    
                    // Обновляем коллекцию пользователя
                    setUserNFTs(prev => [...prev, ...unlocked]);
                }
            } catch (nftError) {
                console.error('Error checking for new NFTs:', nftError);
            }
        } catch (error) {
            console.error('Error processing click:', error);
        }
    };

    // Обработчик клика по NFT
    const handleNFTClick = (userNft: UserNFT) => {
        setSelectedNFT(userNft);
        setShowNFTDetailModal(true);
    };

    

    const MAX_LEVEL = 7; // Максимальный уровень корабля

    // Массив кораблей по уровням
    const ships = [
        Vostok,           // Уровень 1
        SpaceShuttle,     // Уровень 2
        Angara,           // Уровень 3
        Starship,         // Уровень 4
        EnergiaBuran,     // Уровень 5
        MilleniumFalcon,  // Уровень 6
        ImperialDestroyer // Уровень 7
    ];

    // Получаем текущий корабль по уровню
    const getCurrentShip = () => {
        const index = Math.min(gameState.level - 1, MAX_LEVEL - 1);
        return ships[index] || ships[0];
    };

    // Получаем следующий корабль или null если достигнут максимальный уровень
    const getNextShip = () => {
        if (gameState.level >= MAX_LEVEL) {
            return null; // максимальный уровень достигнут
        }
        return ships[gameState.level] || ships[0];
    };

    // Проверяем, достиг ли игрок максимального уровня
    const isMaxLevelReached = () => gameState.level >= MAX_LEVEL;

    // Получаем целевой опыт для текущего уровня
    const getLevelTargetExp = () => {
        // Базовая формула из backend: level * 100.0
        return gameState.level * 100.0;
    };

    // Получаем процент прогресса уровня
    const getProgressPercent = () => {
        if (isMaxLevelReached()) {
            return 100; // Полная шкала для максимального уровня
        }
        const targetExp = getLevelTargetExp();
        return Math.min(100, (currentExp / targetExp) * 100);
    };

    return (
        <Page back={false}>
            <div className="fly-page-container">
                <div className="buttons-container">
                    <button
                        onClick={() => setShowBonusModal(true)}
                        className="rounded-full w-40 h-40 flex items-center justify-center bg-transparen"
                    >
                        <img src={DailyBonusIcon} alt="Daily Bonuses"/>
                    </button>
                    <button
                        onClick={() => setShowNFTModal(true)}
                        className="rounded-full w-40 h-40 flex items-center justify-center bg-transparen"
                    >
                        <img src={NFTCollectionIcon} alt="NFT Collection"/>
                    </button>
                    <button
                        onClick={() => setShowLevelModal(true)}
                        className="rounded-full w-40 h-40 flex items-center justify-center bg-transparen"
                    >
                        <img src={YourLevelIcon} alt="Your Level"/>
                    </button>
                </div>

                <div className="text-2xl text-white font-bold mb-8">
                    {gameState.balance.toFixed(0)} CSM
                </div>

                <button
                    onClick={handleShipClick}
                    className="mt-12 ship-button"
                >
                    <img
                        src={getCurrentShip()}
                        alt="Spaceship"
                        className="w-80 h-50 object-contain"
                    />
                </button>

                <div className="energy-display">
                    <span className="energy-value">{gameState.energy}/100</span>
                </div>

                <ModalWindow
                    isOpen={showBonusModal}
                    onClose={() => setShowBonusModal(false)}
                    title="Daily Bonuses"
                    icon={dailyBonusIcon}
                >
                    {isLoadingBonuses ? (
                        <div className="loading">Loading bonuses...</div>
                    ) : (
                    <div className="grid grid-cols-3 gap-4">
                        {bonusConfig.map((bonus) => {
                            const isCurrentDay = bonusStatus?.current_day === bonus.day;
                            const isPastDay = bonusStatus?.current_day && bonusStatus.current_day > bonus.day;
                            const canClaim = isCurrentDay && bonusStatus?.can_claim;

                            return (
                                <button
                                    key={bonus.day}
                                    className={`bonus-day-button ${isCurrentDay ? 'active' : ''} 
                                            ${isPastDay ? 'claimed' : ''}`}
                                    onClick={() => canClaim && handleClaimBonus(bonus.day)}
                                    disabled={!canClaim}
                                >
                                    <span className="day-label">DAY {bonus.day}</span>
                                    {bonus.type === 'nft' ? (
                                        <span className="big-question-mark">?</span>
                                    ) : (
                                        <>
                                        <img src={DropPageIcon} alt="Bonus icon" className="bonus-icon"/>
                                        <div className="bonus-amount">+{bonus.amount}</div>
                                        </>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                    )}
                </ModalWindow>

                
                <ModalWindow
                    isOpen={showNFTModal}
                    onClose={() => setShowNFTModal(false)}
                    title="NFT Collection"
                    icon={nftCollectionIcon}
                >
                    <div className="nft-container">
                        {isLoadingNFTs ? (
                            <div className="nft-loading">Loading NFT collection...</div>
                        ) : nftCategories.length > 0 ? (
                            nftCategories.map((category) => {
                                // Фильтруем NFT пользователя по этой категории
                                const userNFTsInCategory = userNFTs.filter(
                                    item => item.nft.category_id === category.id
                                );
                                
                                // Создаем Set с ID NFT пользователя для быстрой проверки
                                const userNFTIds = new Set(userNFTsInCategory.map(item => item.nft_id));
                                
                                return (
                                    <div key={category.id} className="nft-section">
                                        <h3 className="nft-section-title">
                                            {category.name} ({userNFTsInCategory.length}/{category.nfts.length})
                                        </h3>
                                        <div className="nft-grid">
                                            {category.nfts.map((nft) => {
                                                const isUnlocked = userNFTIds.has(nft.id);
                                                const userNft = userNFTs.find(item => item.nft_id === nft.id);
                                                
                                                return (
                                                    <div
                                                        key={nft.id}
                                                        className={`nft-item ${isUnlocked ? 'unlocked' : 'locked'}`}
                                                        title={isUnlocked ? nft.name : `Requires ${nft.coins_threshold.toLocaleString()} coins`}
                                                        onClick={() => isUnlocked && userNft && handleNFTClick(userNft)}
                                                    >
                                                        {isUnlocked ? (
                                                            <img 
                                                                src={`${import.meta.env.BASE_URL}/${nft.image_path}`} 
                                                                alt={nft.name} 
                                                            />
                                                        ) : (
                                                            <span className="question-mark">?</span>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="nft-empty">No NFT categories found</div>
                        )}
                    </div>
                </ModalWindow>

                {/* NFT Detail Modal - Новое модальное окно для просмотра деталей NFT */}
                <ModalWindow
                    isOpen={showNFTDetailModal && selectedNFT !== null}
                    onClose={() => setShowNFTDetailModal(false)}
                    title={selectedNFT?.nft.name || "NFT Details"}
                    icon={nftCollectionIcon}
                >
                    {selectedNFT && (
                        <div className="nft-detail-container">
                            <img 
                                src={`${import.meta.env.BASE_URL}/${selectedNFT.nft.image_path}`} 
                                alt={selectedNFT.nft.name} 
                                className="nft-detail-image" 
                            />
                            <h3 className="nft-detail-name">{selectedNFT.nft.name}</h3>
                            <p className="nft-detail-description">{selectedNFT.nft.description}</p>
                            <p className="nft-detail-acquired">
                                Acquired: {new Date(selectedNFT.acquired_at).toLocaleDateString()}
                            </p>
                        </div>
                    )}
                </ModalWindow>

                {/* Newly Unlocked NFT Modal - Модальное окно для отображения новых разблокированных NFT */}
                <ModalWindow
                    isOpen={showUnlockNFTModal && newlyUnlockedNFTs.length > 0}
                    onClose={() => setShowUnlockNFTModal(false)}
                    title="New NFT Unlocked!"
                    icon={nftCollectionIcon}
                >
                    {newlyUnlockedNFTs.length > 0 && (
                        <div className="unlocked-nft-container">
                            <img 
                                src={`${import.meta.env.BASE_URL}/${newlyUnlockedNFTs[0].nft.image_path}`} 
                                alt={newlyUnlockedNFTs[0].nft.name} 
                                className="unlocked-nft-image" 
                            />
                            <h3 className="unlocked-nft-name">{newlyUnlockedNFTs[0].nft.name}</h3>
                            <p className="unlocked-nft-description">
                                {newlyUnlockedNFTs[0].nft.description}
                            </p>
                            {newlyUnlockedNFTs.length > 1 && (
                                <p className="unlocked-nft-more">
                                    + {newlyUnlockedNFTs.length - 1} more unlocked NFTs!
                                </p>
                            )}
                            <button 
                                onClick={() => setShowUnlockNFTModal(false)}
                                className="unlocked-nft-button"
                            >
                                Add to Collection
                            </button>
                        </div>
                    )}
                </ModalWindow>

                <ModalWindow
                    isOpen={showLevelModal}
                    onClose={() => setShowLevelModal(false)}
                    title="Level Progress"
                    icon={yourLevelIcon}
                >
                    <div className="level-modal-content">
                        <div className="current-level-container">
                            <div className="level-box">{gameState.level}</div>
                            <div className="level-label">УРОВЕНЬ</div>
                        </div>

                        <div className="level-progress-container">
                            <div className="level-progress-bar-container">
                                <div
                                    className="level-progress-bar-fill"
                                    style={{ width: `${getProgressPercent()}%` }}
                                >
                                </div>
                                <div className="level-progress-text">
                                    {isMaxLevelReached() ? (
                                        "MAX LEVEL"
                                    ) : (
                                        `${currentExp.toFixed(1)} / ${getLevelTargetExp().toFixed(0)}`
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="next-ship-image-container">
                            {isMaxLevelReached() ? (
                                <div className="max-level-text">MAX LEVEL</div>
                            ) : (
                                // Проверяем, что nextShip существует перед отображением
                                (() => {
                                    const nextShip = getNextShip();
                                    return nextShip ? 
                                        <img src={nextShip} alt="Next Ship" className="next-ship-image" /> :
                                        <div>Корабль не найден</div>;
                                })()
                            )}
                        </div>
                    </div>
                </ModalWindow>
            </div>
        </Page>
    );
}