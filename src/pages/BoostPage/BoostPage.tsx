import { FC } from 'react';
import { useState } from 'react';
import { Page } from '@/components/Page.tsx';

import './BoostPage.css';

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

const boostItems = {
  energy: [
    { name: 'SOLAR\nPANELS', icon: solarPanelsIcon },
    { name: 'THERMONUCLEAR\nREACTOR', icon: thermonuclearIcon },
    { name: 'QUANTUM\nBATTERY', icon: quantumBatteryIcon },
    { name: 'ANTIMATTER\nGENERATOR', icon: antimatterIcon }
  ],
  navigation: [
    { name: 'WARP\nDRIVE', icon: warpDriveIcon },
    { name: 'ASTROGRAPHY\nSCANNER', icon: astrographyIcon },
    { name: 'GRAVITY\nSTABILIZER', icon: gravityIcon },
    { name: 'QUANTUM\nCOMPASS', icon: quantumCompassIcon }
  ],
  research: [
    { name: 'AI\nASSISTANT', icon: aiAssistantIcon },
    { name: 'EXPERIMENTAL\nLABORATORY', icon: laboratoryIcon },
    { name: 'UNIVERSAL\nDECODER', icon: decoderIcon },
    { name: 'QUANTUM\nCOMPUTER', icon: quantumComputerIcon }
  ],
  defense: [
    { name: 'PLASMA\nSHIELD', icon: shieldIcon },
    { name: 'PLASMA\nCANNON', icon: cannonIcon },
    { name: 'STEALTH\nSYSTEM', icon: stealthIcon },
    { name: 'SELF-REPAIR\nNANOBOTS', icon: nanobotsIcon }
  ]
};

export const BoostPage: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

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
              onClick={() => console.log(`Clicked on ${item.name}`)}
            >
              <img src={item.icon} alt={item.name} className="boost-card-icon" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </Page>
  );
}