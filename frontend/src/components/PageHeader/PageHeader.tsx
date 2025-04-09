import React, { useState, useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import './PageHeader.css';
import { ModalWindow } from '../ModalWindow/ModalWindow';

import { gameApi } from '../../services/api';



import FlyPageIcon from '../icons/FlyPageIcon/FlyPageIcon.svg';
import BoostPageIcon from '../icons/BoostPageIcon/BoostPageIcon.svg';
import TasksPageIcon from '../icons/TasksPageIcon/TasksPageIcon.svg';
import MePageIcon from '../icons/MePageIcon/MePageIcon.svg';
import DropPageIcon from '../icons/DropPageIcon/DropPageIcon.svg';


export const PageHeader: React.FC = () => {

    const [passiveIncome, setPassiveIncome] = useState(0);
    const [showHelpModal, setShowHelpModal] = useState(false);
    const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id || 99281932;

    // Загружаем пассивный доход при монтировании
    useEffect(() => {
        const fetchPassiveIncome = async () => {
            try {
                const data = await gameApi.getPassiveIncome(userId);
                setPassiveIncome(data.passive_income_rate);
            } catch (error) {
                console.error('Error fetching passive income:', error);
            }
        };
    
        // Загружаем пассивный доход при монтировании
        fetchPassiveIncome();
        
        // Обновляем отображение пассивного дохода каждые 30 секунд
        const displayIntervalId = setInterval(fetchPassiveIncome, 30000);
        
        // Применяем пассивный доход каждую минуту
        const applyIncomeInterval = setInterval(async () => {
            try {
                const result = await gameApi.applyPassiveIncome(userId);
                if (result?.applied_income > 0) {
                    console.log(`Passive income applied: +${result.applied_income} CSM`);
                }
            } catch (error) {
                console.error('Error applying passive income:', error);
            }
        }, 60000); // 60 секунд = 1 минута
        
        // Очищаем оба интервала при размонтировании компонента
        return () => {
            clearInterval(displayIntervalId);
            clearInterval(applyIncomeInterval);
        };
    }, [userId]);
    
    const handleHelpClick = () => {
        setShowHelpModal(true);
    };

    return (
        <>
            <header className="page-header">
                <div className="user-info">
                    <div className="avatar-container">
                        <img
                            src={WebApp.initDataUnsafe.user?.photo_url}
                            alt="User Avatar"
                            className="user-avatar"
                        />
                    </div>
                    <div className="farming-rate">
                        {passiveIncome.toLocaleString()} CSM/h
                    </div>
                </div>
                <button
                    onClick={handleHelpClick}
                    className="help-button"
                >
                    <span className="help-icon">?</span>
                </button>
            </header>

            <ModalWindow
                isOpen={showHelpModal}
                onClose={() => setShowHelpModal(false)}
                title="Краткое руководство"
            >
                <div className="help-content">
                    <div className="help-section">
                        <h3 className="help-section-title">
                            Fly Page
                            <img src={FlyPageIcon} alt="Fly Icon" />
                        </h3>
                        <p>Основная игровая страница, где вы можете нажимать на корабль для получения монет. Здесь также доступны: Ежедневные бонусы, Коллекция NFT и информация о вашем уровне.</p>
                    </div>

                    <div className="help-section">
                        <h3 className="help-section-title">
                            Boosts Page
                            <img src={BoostPageIcon} alt="Boost Icon" />
                        </h3>
                        <p>Улучшайте свой корабль, приобретая модули в четырех категориях: Энергия, Навигация, Исследования и Защита. Каждое улучшение увеличивает доход и скорость сбора монет.</p>
                    </div>

                    <div className="help-section">
                        <h3 className="help-section-title">
                            Tasks Page
                            <img src={TasksPageIcon} alt="Tasks Icon" />
                        </h3>
                        <p>Выполняйте ежедневные и глобальные задания для получения дополнительных наград. Задания обновляются каждый день и предлагают различные способы заработать монеты.</p>
                    </div>

                    <div className="help-section">
                        <h3 className="help-section-title">
                            Me Page
                            <img src={MePageIcon} alt="Me Icon" />
                        </h3>
                        <p>Просматривайте список ваших друзей, играющих в игру, отсортированный по количеству монет. Пригласите новых друзей, чтобы получить бонусы и соревноваться в рейтинге.</p>
                    </div>

                    <div className="help-section">
                        <h3 className="help-section-title">
                            Drop Page
                            <img src={DropPageIcon} alt="Drop Icon" />
                        </h3>
                        <p>Подключите TON-кошелек для вывода своих игровых монет. Здесь отображается ваш текущий игровой баланс и возможности обмена внутриигровой валюты.</p>
                    </div>
                </div>
            </ModalWindow>
        </>
    );
}