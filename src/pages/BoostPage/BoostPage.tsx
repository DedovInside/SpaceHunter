import { FC } from 'react';
import { useState } from 'react';
import { Page } from '@/components/Page.tsx';
import { ModalWindow } from '@/components/ModalWindow/ModalWindow';

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

const categories = [
    { id: 'energy', name: 'Energy Modules'},
    { id: 'navigation', name: 'Navigation Systems'},
    { id: 'research', name: 'Research Technologies'},
    { id: 'defense', name: 'Defense Systems'},
  ];

interface BoostItem {
  name: string;
  icon: string;
  passiveIncome: number; // базовое значение пассивного дохода в час
  speedBoost: number;    // базовое увеличение скорости в % (нажатие на центральную кнопку в разделе "FlyPage" приносит больше монет за раз)
  level: number;         // текущий уровень улучшения
  cost: number;          // базовая стоимость улучшения
  description: string;   // описание улучшения
}

const boostItems: Record<string, BoostItem[]> = {
  energy: [
    {
      name: 'SOLAR\nPANELS',
      icon: solarPanelsIcon,
      passiveIncome: 100,
      speedBoost: 5,
      level: 0,
      cost: 1000,
      description: 'Используйте энергию далёких звёзд для генерации постоянного потока энергии вашего корабля.'
    },
    {
      name: 'THERMONUCLEAR\nREACTOR',
      icon: thermonuclearIcon,
      passiveIncome: 250,
      speedBoost: 8,
      level: 0,
      cost: 2500,
      description: 'Высвободите мощь термоядерного синтеза для создания мощных энергетических импульсов.'
    },
    {
      name: 'QUANTUM\nBATTERY',
      icon: quantumBatteryIcon,
      passiveIncome: 150,
      speedBoost: 6,
      level: 0,
      cost: 1500,
      description: 'Храните огромные объёмы энергии в квантовых полях для бесперебойного питания в долгих путешествиях.'
    },
    {
      name: 'ANTIMATTER\nGENERATOR',
      icon: antimatterIcon,
      passiveIncome: 300,
      speedBoost: 10,
      level: 0,
      cost: 3000,
      description: 'Преобразуйте столкновения материи и антиматерии в чистую энергию для непревзойдённой мощности.'
    }
  ],
  navigation: [
    {
      name: 'WARP\nDRIVE',
      icon: warpDriveIcon,
      passiveIncome: 100,
      speedBoost: 5,
      level: 0,
      cost: 1000,
      description: 'Искривляйте пространство-время для создания коротких путей через космос, значительно сокращая время полёта.'
    },
    {
      name: 'ASTROGRAPHY\nSCANNER',
      icon: astrographyIcon,
      passiveIncome: 100,
      speedBoost: 5,
      level: 0,
      cost: 1000,
      description: 'Картографируйте звёздные явления в реальном времени для прокладки оптимального курса в космосе.'
    },
    {
      name: 'GRAVITY\nSTABILIZER',
      icon: gravityIcon,
      passiveIncome: 100,
      speedBoost: 5,
      level: 0,
      cost: 1000,
      description: 'Нейтрализуйте гравитационные силы для сохранения стабильности при манёврах на высокой скорости.'
    },
   {
    name: 'QUANTUM\nCOMPASS',
    icon: quantumCompassIcon,
    passiveIncome: 100,
    speedBoost: 5,
    level: 0,
    cost: 1000,
    description: 'Навигация через квантовую запутанность обеспечивает точное позиционирование в любом секторе космоса.'
   }
  ],
  research: [
    {
      name: 'AI\nASSISTANT',
      icon: aiAssistantIcon,
      passiveIncome: 100,
      speedBoost: 5,
      level: 0,
      cost: 1000,
      description: 'Продвинутая система ИИ оптимизирует работу корабля и предсказывает космические явления.'
    },
    {
      name: 'EXPERIMENTAL\nLABORATORY',
      icon: laboratoryIcon,
      passiveIncome: 100,
      speedBoost: 5,
      level: 0,
      cost: 1000,
      description: 'Передовая лаборатория для исследования и внедрения новых космических технологий.'
    },
    {
      name: 'UNIVERSAL\nDECODER',
      icon: decoderIcon,
      passiveIncome: 100,
      speedBoost: 5,
      level: 0,
      cost: 1000,
      description: 'Анализируйте и расшифровывайте инопланетные сигналы и артефакты, чтобы раскрыть их технологические секреты.'
    },
    {
      name: 'QUANTUM\nCOMPUTER',
      icon: quantumComputerIcon,
      passiveIncome: 100,
      speedBoost: 5,
      level: 0,
      cost: 1000,
      description: 'Обрабатывайте огромные объёмы космических данных для обнаружения скрытых ресурсов и возможностей.'
    }
  ],
  defense: [
    {
      name: 'PLASMA\nSHIELD',
      icon: shieldIcon,
      passiveIncome: 100,
      speedBoost: 5,
      level: 0,
      cost: 1000,
      description: 'Создайте непроницаемый энергетический барьер, отражающий внешние угрозы и радиацию.'
    },
    {
      name: 'PLASMA\nCANNON',
      icon: cannonIcon,
      passiveIncome: 100,
      speedBoost: 5,
      level: 0,
      cost: 1000,
      description: 'Используйте сверхгорячую плазму как оружие для защиты от враждебных сущностей в космосе.'
    },
    {
      name: 'STEALTH\nSYSTEM',
      icon: stealthIcon,
      passiveIncome: 100,
      speedBoost: 5,
      level: 0,
      cost: 1000,
      description: 'Изгибайте свет и энергию вокруг корабля, становясь практически невидимым.'
    },
    {
      name: 'SELF-REPAIR\nNANOBOTS',
      icon: nanobotsIcon,
      passiveIncome: 100,
      speedBoost: 5,
      level: 0,
      cost: 1000,
      description: 'Микроскопические роботы автоматически ремонтируют повреждения и обслуживают системы корабля.'
    }
  ]
};

export const BoostPage: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [selectedBoost, setSelectedBoost] = useState<BoostItem | null>(null);

  const calculateUpgradeCost = (item: BoostItem) => {
    return item.cost * Math.pow(1.5, item.level); // стоимость растёт на 50% с каждым уровнем
  };

  const calculateBoostStats = (item: BoostItem) => {
    const multiplier = 1 + (item.level * 0.2); // каждый уровень увеличивает эффект на 20%
    return {
      income: item.passiveIncome * multiplier,
      speed: item.speedBoost * multiplier
    };
  };

  return (
    <Page back={false}>
      <div className="boost-page-container">
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
  
        <div className="boost-cards-container">
          {boostItems[selectedCategory as keyof typeof boostItems].map((item, index) => (
            <button
              key={index}
              className="boost-card-button"
              onClick={() => setSelectedBoost(item)}
            >
              <img src={item.icon} alt={item.name} className="boost-card-icon" />
              <span className="boost-card-text">{item.name}</span>
            </button>
          ))}
        </div>

        <ModalWindow
          isOpen={!!selectedBoost}
          onClose={() => setSelectedBoost(null)}
          title={selectedBoost?.name.replace('\n', ' ') || ''}
          icon={BoostPageIcon}
        >
          <div className="boost-modal-content">
            <img src={selectedBoost?.icon} alt={selectedBoost?.name} className="boost-modal-image" />
            <div className="boost-modal-info">
              <p className="boost-description">{selectedBoost?.description}</p>
              <div className="boost-stats">
                <p>Level: {selectedBoost?.level}/8</p>
                {selectedBoost && (
                  <>
                    <p>
                      Passive Income:
                      <span>+{calculateBoostStats(selectedBoost).income} $KSM/hour</span>
                    </p>
                    <p>
                      Speed Boost:
                      <span>+{calculateBoostStats(selectedBoost).speed}%</span>
                    </p>
                    <p>
                      Upgrade Cost:
                      <span>{calculateUpgradeCost(selectedBoost)} $KSM</span>
                    </p>
                  </>
                )}
              </div>
              <button 
                className="upgrade-button"
                disabled={selectedBoost?.level === 8}
                onClick={() => {
                  // Здесь будет логика апгрейда
                  console.log('Upgrade clicked');
                }}
              >
                {selectedBoost?.level === 8 ? 'MAX LEVEL' : 'UPGRADE'}
              </button>
            </div>
          </div>
        </ModalWindow>
      </div>
    </Page>
  );
}