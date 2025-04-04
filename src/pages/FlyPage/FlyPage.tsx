import {ModalWindow} from '@/components/ModalWindow/ModalWindow';
import {FC, useState} from 'react';
import {Page} from '@/components/Page.tsx';

import NFTCollectionIcon from '../../components/icons/NFTCollectionIcon/NFTCollectionIcon.svg';
import DailyBonusIcon from '../../components/icons/DailyBonusIcon/DailyBonusIcon.svg';
import YourLevelIcon from '../../components/icons/YourLevelIcon/YourLevelIcon.svg';

import dailyBonusIcon from '../../../assets/Daily_Bonus_Modal_Icon.png';
import nftCollectionIcon from '../../../assets/NFT_Collection_Modal_Icon.png';
import yourLevelIcon from '../../../assets/Your_Level_Modal_Icon.png';

import DropPageIcon from '../../components/icons/DropPageIcon/DropPageIcon.svg';


//import ImperialDestroyer from '../../../assets/Imperial_Destroyer_Pixel_Art.png';
//import Vostok from '../../../assets/Vostok_Pixel_Art.png';
//import Starship from '../../../assets/Starship_Pixel_Art.png';
//import SpaceShuttle from '../../../assets/Space_Shuttle_Pixel_Art.png';
//import MilleniumFalcon from '../../../assets/Millenium_Falcon_Pixel_Art.png';
import EnergiaBuran from '../../../assets/Energia_Buran_Pixel_Art.png';
//import Angara from '../../../assets/Angara_Pixel_Art.png';


import './FlyPage.css';

const nftSections = [
    {name: 'Planets', count: 8},
    {name: 'Satellites', count: 14},
    {name: 'Stars', count: 21},
    {name: 'Constellations', count: 21},
    {name: 'Nebulae', count: 10},
    {name: 'Black Holes', count: 11},
    {name: 'Galaxies', count: 12},
    {name: 'Music', count: 7},
    {name: 'Cinema', count: 12},
    {name: 'Bonus', count: 10}
];

export const FlyPage: FC = () => {

    const [clicks, setClicks] = useState(0);
    const [showBonusModal, setShowBonusModal] = useState(false);
    const [showNFTModal, setShowNFTModal] = useState(false);
    const [showLevelModal, setShowLevelModal] = useState(false);

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
                    {clicks} $KSM
                </div>

                <button
                    onClick={() => setClicks(c => c + 1)}
                    className="mt-12 ship-button"
                >
                    <img
                        src={EnergiaBuran}
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
                    <div>Content</div>
                </ModalWindow>
            </div>
        </Page>
    );
}