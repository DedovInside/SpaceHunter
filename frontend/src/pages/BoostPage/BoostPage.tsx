import { FC, useEffect, useState } from 'react';
import { Page } from '@/components/Page.tsx';
import { ModalWindow } from '@/components/ModalWindow/ModalWindow';
import { boostApi, gameApi } from '@/services/api';
import './BoostPage.css';
import BoostPageIcon from '../../components/icons/BoostPageIcon/BoostPageIcon.svg';

// Импортируем иконки для каждого улучшения
import solarPanelsIcon from '../../../assets/Solar-Panels.png';
import thermonuclearIcon from '../../../assets/Thermonuclear-Reactor.png';
import quantumBatteryIcon from '../../../assets/Quantum-Battery.png';
import antimatterIcon from '../../../assets/Antimatter-Generator.png';
import warpDriveIcon from '../../../assets/Warp-Drive.png';
import astrographyIcon from '../../../assets/Astrography-Scanner.png';
import gravityIcon from '../../../assets/Gravity-Stabilizer.png';
import quantumCompassIcon from '../../../assets/Quantum-Compass.png';
import aiAssistantIcon from '../../../assets/AI-Assistant.png';
import laboratoryIcon from '../../../assets/Experimental-Laboratory.png';
import decoderIcon from '../../../assets/Universal-Decoder.png';
import quantumComputerIcon from '../../../assets/Quantum-Computer.png';
import shieldIcon from '../../../assets/Plasma-Shield-Generator.png';
import cannonIcon from '../../../assets/Plasma-Cannon.png';
import stealthIcon from '../../../assets/Stealth-System.png';
import nanobotsIcon from '../../../assets/Self-Repair-Nanobots.png';

// Маппинг изображений по имени файла
const iconMapping: Record<string, string> = {
  'Solar-Panels.png': solarPanelsIcon,
  'Thermonuclear-Reactor.png': thermonuclearIcon,
  'Quantum-Battery.png': quantumBatteryIcon,
  'Antimatter-Generator.png': antimatterIcon,
  'Warp-Drive.png': warpDriveIcon,
  'Astrography-Scanner.png': astrographyIcon,
  'Gravity-Stabilizer.png': gravityIcon,
  'Quantum-Compass.png': quantumCompassIcon,
  'AI-Assistant.png': aiAssistantIcon,
  'Experimental-Laboratory.png': laboratoryIcon,
  'Universal-Decoder.png': decoderIcon,
  'Quantum-Computer.png': quantumComputerIcon,
  'Plasma-Shield-Generator.png': shieldIcon,
  'Plasma-Cannon.png': cannonIcon,
  'Stealth-System.png': stealthIcon,
  'Self-Repair-Nanobots.png': nanobotsIcon,
};

const categories = [
  { id: 'energy', name: 'Energy Modules' },
  { id: 'navigation', name: 'Navigation Systems' },
  { id: 'research', name: 'Research Technologies' },
  { id: 'defense', name: 'Defense Systems' },
];

interface BoostItem {
  boost_id: number;
  name: string;
  category: string;
  description: string;
  icon_name: string;
  passive_income: number;
  click_multiplier: number;
  level: number;
  max_level: number;
  current_cost: number;
}

export const BoostPage: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [selectedBoost, setSelectedBoost] = useState<BoostItem | null>(null);
  const [boosts, setBoosts] = useState<BoostItem[]>([]);
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [upgradeError, setUpgradeError] = useState<string | null>(null);

  // Получаем ID пользователя из Telegram WebApp или используем тестовый ID
  const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id || 99281932;

  // Загружаем бусты и баланс пользователя
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // Получаем бусты пользователя
        const userBoosts = await boostApi.getUserBoosts(userId);
        setBoosts(userBoosts);
        
        // Получаем текущий баланс
        const gameState = await gameApi.getGameState(userId);
        setBalance(gameState.balance);
      } catch (error) {
        console.error('Error fetching boosts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  // Фильтруем бусты по выбранной категории
  const filteredBoosts = boosts.filter(
    (boost) => boost.category === selectedCategory
  );

  // Получение иконки буста из маппинга
  const getBoostIcon = (iconName: string) => {
    return iconMapping[iconName];
  };

  // Обработка апгрейда буста
  const handleUpgrade = async () => {
    if (!selectedBoost) return;
    
    try {
      setUpgradeError(null);
      const result = await boostApi.upgradeBoost(userId, selectedBoost.boost_id);
      
      // Обновляем баланс
      setBalance(result.new_balance);
      
      // Обновляем список бустов с новыми данными
      setBoosts(prev => prev.map(boost => 
        boost.boost_id === result.boost_id
          ? { 
              ...boost, 
              level: result.level,
              current_cost: result.new_cost
            }
          : boost
      ));
      
      // Обновляем выбранный буст
      setSelectedBoost(prev => prev ? {
        ...prev,
        level: result.level,
        current_cost: result.new_cost
      } : null);
      
    } catch (error: any) {
      console.error('Error upgrading boost:', error);
      setUpgradeError(error.detail || 'Failed to upgrade boost');
    }
  };

  return (
    <Page back={false}>
      <div className="boost-page-container">
        {/* Категории бустов */}
        <div className="boost-categories-container">
          {categories.map(({ id, name }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id)}
              className={`boost-category-card ${
                selectedCategory === id
                  ? 'boost-category-active'
                  : 'boost-category-inactive'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
  
        {isLoading ? (
          <div className="flex items-center justify-center h-48">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="boost-cards-container">
            {filteredBoosts.map((item) => (
              <button
                key={item.boost_id}
                className="boost-card-button"
                onClick={() => setSelectedBoost(item)}
              >
                <img 
                  src={getBoostIcon(item.icon_name)} 
                  alt={item.name} 
                  className="boost-card-icon" 
                />
                <span className="boost-card-text">{item.name.replace(' ', '\n')}</span>
              </button>
            ))}
          </div>
        )}

        {/* Модальное окно для апгрейда буста */}
        <ModalWindow
          isOpen={!!selectedBoost}
          onClose={() => {
            setSelectedBoost(null);
            setUpgradeError(null);
          }}
          title={selectedBoost?.name || ''}
          icon={BoostPageIcon}
        >
          {selectedBoost && (
            <div className="boost-modal-content">
              <img 
                src={getBoostIcon(selectedBoost.icon_name)} 
                alt={selectedBoost.name} 
                className="boost-modal-image" 
              />
              <div className="boost-modal-info">
                <p className="boost-description">{selectedBoost.description}</p>
                <div className="boost-stats">
                  <p>Level: {selectedBoost.level}/{selectedBoost.max_level}</p>
                  <p>
                    Passive Income:
                    <span>+{selectedBoost.passive_income * (1 + selectedBoost.level * 0.2)} CSM/hour</span>
                  </p>
                  <p>
                    Speed Boost:
                    <span>+{Math.round(selectedBoost.click_multiplier * 20)}%</span>
                  </p>
                  {selectedBoost.level < selectedBoost.max_level ? (
                    <p>
                      Upgrade Cost:
                      <span>{selectedBoost.current_cost} CSM</span>
                    </p>
                  ) : null}
                </div>
                
                {upgradeError && (
                  <div className="upgrade-error">{upgradeError}</div>
                )}
                
                <button 
                  className="upgrade-button"
                  disabled={
                    selectedBoost.level === selectedBoost.max_level || 
                    balance < selectedBoost.current_cost
                  }
                  onClick={handleUpgrade}
                >
                  {selectedBoost.level === selectedBoost.max_level 
                    ? 'MAX LEVEL' 
                    : balance < selectedBoost.current_cost
                      ? 'NOT ENOUGH CSM'
                      : 'UPGRADE'
                  }
                </button>
              </div>
            </div>
          )}
        </ModalWindow>
      </div>
    </Page>
  );
};