import {ModalWindow} from '@/components/ModalWindow/ModalWindow';
import {FC, useEffect, useState} from 'react';
import { gameApi } from '@/services/api';




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

const nftSections = [
    {name: 'Solar System', count: 29},
    {name: 'Stars', count: 21},
    {name: 'Constellations', count: 20},
    {name: 'Nebulae', count: 10},
    {name: 'Black Holes', count: 5},
    {name: 'Galaxies', count: 12},
    {name: 'Music', count: 7},
    {name: 'Cinema', count: 11},
    {name: 'Bonus', count: 10}
];

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
    const [showLevelUpAnimation, setShowLevelUpAnimation] = useState(false);


    // Для анимации награды
    const [showReward, setShowReward] = useState(false);
    const [reward, setReward] = useState(0);


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

        fetchGameState();
    }, [userId]);


    // Функция обработки нажатия на корабль
    const handleShipClick = async () => {
        try {
            // Анимация нажатия
            const shipButton = document.querySelector('.ship-button');
            shipButton?.classList.add('clicked');
            setTimeout(() => shipButton?.classList.remove('clicked'), 150);
            
            // Вызываем API и получаем обновленное состояние игры
            const result = await gameApi.click(userId);
            
            // Показываем анимацию награды
            setReward(result.reward);
            setShowReward(true);
            setTimeout(() => setShowReward(false), 1000);
            
            // Обновляем состояние
            setGameState(prev => ({
                ...prev,
                balance: result.new_balance,
                score: result.new_score,
                level: result.level
            }));
            
            // Обновляем опыт
            setCurrentExp(result.new_score);
            
            // Если повысился уровень, показываем анимацию
            if (result.leveled_up) {
                setShowLevelUpAnimation(true);
                setTimeout(() => setShowLevelUpAnimation(false), 2000);
            }
        } catch (error) {
            console.error('Error processing click:', error);
        }
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

                <ModalWindow
                    isOpen={showBonusModal}
                    onClose={() => setShowBonusModal(false)}
                    title="Daily Bonuses"
                    icon={dailyBonusIcon}
                >
                    <div className="grid grid-cols-3 gap-4">
                        {/* День 1 */}
                        <button className="bonus-day-button">
                            <span className="day-label">DAY 1</span>
                            <img src={DropPageIcon} alt={"Bonus icon"} className="bonus-icon"/>
                            <div className="bonus-amount">+500</div>
                        </button>
                        {/* День 2 */}
                        <button className="bonus-day-button">
                            <span className="day-label">DAY 2</span>
                            <img src={DropPageIcon} alt={"Bonus icon"} className="bonus-icon"/>
                            <div className="bonus-amount">+1500</div>
                        </button>
                        {/* День 3 */}
                        <button className="bonus-day-button">
                            <span className="day-label">DAY 3</span>
                            <img src={DropPageIcon} alt={"Bonus icon"} className="bonus-icon"/>
                            <div className="bonus-amount">+3000</div>
                        </button>
                        {/* День 4 */}
                        <button className="bonus-day-button">
                            <span className="day-label">DAY 4</span>
                            <img src={DropPageIcon} alt={"Bonus icon"} className="bonus-icon"/>
                            <div className="bonus-amount">+5000</div>
                        </button>
                        {/* День 5 */}
                        <button className="bonus-day-button">
                            <span className="day-label">DAY 5</span>
                            <img src={DropPageIcon} alt={"Bonus icon"} className="bonus-icon"/>
                            <div className="bonus-amount">+10000</div>
                        </button>
                        {/* День 6 */}
                        <button className="bonus-day-button">
                            <span className="day-label">DAY 6</span>
                            <img src={DropPageIcon} alt={"Bonus icon"} className="bonus-icon"/>
                            <div className="bonus-amount">+15000</div>
                        </button>
                        {/* День 7 */}
                        <button className="bonus-day-button">
                            <span className="day-label">DAY 7</span>
                            <img src={DropPageIcon} alt={"Bonus icon"} className="bonus-icon"/>
                            <div className="bonus-amount">+20000</div>
                        </button>
                        {/* День 8 */}
                        <button className="bonus-day-button">
                            <span className="day-label">DAY 8</span>
                            <img src={DropPageIcon} alt={"Bonus icon"} className="bonus-icon"/>
                            <div className="bonus-amount">+30000</div>
                        </button>
                        {/* День 9 */}
                        <button className="bonus-day-button">
                            <span className="day-label">DAY 9</span>
                            <img src={DropPageIcon} alt={"Bonus icon"} className="bonus-icon"/>
                            <div className="bonus-amount">+50000</div>
                        </button>
                        {/* День 10 */}
                        <button className="bonus-day-button">
                            <span className="day-label">DAY 10</span>
                            <span className="big-question-mark">?</span>
                        </button>
                    </div>
                </ModalWindow>

                <ModalWindow
                    isOpen={showNFTModal}
                    onClose={() => setShowNFTModal(false)}
                    title="NFT Collection"
                    icon={nftCollectionIcon}
                >
                    <div className="nft-container">
                        {nftSections.map((section) => (
                            <div key={section.name} className="nft-section">
                                <h3 className="nft-section-title">{section.name}</h3>
                                <div className="nft-grid">
                                    {Array.from({length: section.count}).map((_, i) => (
                                        <div
                                            key={i}
                                            className="nft-item"
                                        >
                                            ?
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
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