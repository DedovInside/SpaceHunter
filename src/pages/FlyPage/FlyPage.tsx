import { ModalWindow } from '@/components/ModalWindow/ModalWindow';
import { FC, useState } from 'react';
import { Page } from '@/components/Page.tsx';

import NFTCollectionIcon from '../../components/icons/NFTCollectionIcon/NFTCollectionIcon.svg';
import DailyBonusIcon from '../../components/icons/DailyBonusIcon/DailyBonusIcon.svg';
import YourLevelIcon from '../../components/icons/YourLevelIcon/YourLevelIcon.svg';

import dailyBonusIcon from '../../../assets/Daily_Bonus_Modal_Icon.png';
import nftCollectionIcon from '../../../assets/NFT_Collection_Modal_Icon.png';
import yourLevelIcon from '../../../assets/Your_Level_Modal_Icon.png';

import './FlyPage.css';

const nftSections = [
  { name: 'Planets', count: 8 },
  { name: 'Satellites', count: 14 },
  { name: 'Stars', count: 21 },
  { name: 'Constellations', count: 21 },
  { name: 'Nebulae', count: 10 },
  { name: 'Black Holes', count: 11 },
  { name: 'Galaxies', count: 12 },
  { name: 'Music', count: 7 },
  { name: 'Cinema', count: 12 },
  { name: 'Bonus', count: 10 }
];

export const FlyPage: FC = () => {

    const [clicks, setClicks] = useState(0);
    const [showBonusModal, setShowBonusModal] = useState(false);
    const [showNFTModal, setShowNFTModal] = useState(false);
    const [showLevelModal, setShowLevelModal] = useState(false);

    return  (
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

          <div className="text-2xl font-bold mb-8">
            {clicks} $KSM
          </div>

          <button
            onClick={() => setClicks(c => c + 1)}
            className="mt-12 transform active:scale-280 transition-transform scale-280"
          >
            <img
              src="https://images.unsplash.com/photo-1636819488524-1f019c4e1c44?auto=format&fit=crop&w=300"
              alt="Spaceship"
              className="w-32 h-32 object-contain"
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
              <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
                <div className="text-sm mb-1">DAY 1</div>
                <div className="text-2xl font-bold">+500</div>
                <button className="bg-blue-600 text-white p-2 rounded-lg font-medium mt-2">
                  Claim
                </button>
              </div>
              {/* День 2 */}
              <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
                <div className="text-sm mb-1">DAY 2</div>
                <div className="text-2xl font-bold">+1500</div>
                <button className="bg-blue-600 text-white p-2 rounded-lg font-medium mt-2">
                  Claim
                </button>
              </div>
              {/* День 3 */}
              <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
                <div className="text-sm mb-1">DAY 3</div>
                <div className="text-2xl font-bold">+3000</div>
                <button className="bg-blue-600 text-white p-2 rounded-lg font-medium mt-2">
                  Claim
                </button>
              </div>
              {/* День 4 */}
              <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
                <div className="text-sm mb-1">DAY 4</div>
                <div className="text-2xl font-bold">+5000</div>
                <button className="bg-blue-600 text-white p-2 rounded-lg font-medium mt-2">
                  Claim
                </button>
              </div>
              {/* День 5 */}
              <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
                <div className="text-sm mb-1">DAY 5</div>
                <div className="text-2xl font-bold">+10000</div>
                <button className="bg-blue-600 text-white p-2 rounded-lg font-medium mt-2">
                  Claim
                </button>
              </div>
              {/* День 6 */}
              <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
                <div className="text-sm mb-1">DAY 6</div>
                <div className="text-2xl font-bold">+15000</div>
                <button className="bg-blue-600 text-white p-2 rounded-lg font-medium mt-2">
                  Claim
                </button>
              </div>
              {/* День 7 */}
              <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
                <div className="text-sm mb-1">DAY 7</div>
                <div className="text-2xl font-bold">+20000</div>
                <button className="bg-blue-600 text-white p-2 rounded-lg font-medium mt-2">
                  Claim
                </button>
              </div>
              {/* День 8 */}
              <div className="bg-gray-600 p-4 rounded-lg flex flex-col items-center">
                <div className="text-sm mb-1">DAY 8</div>
                <div className="text-2xl font-bold">+30000</div>
                <button className="bg-blue-600 text-white p-2 rounded-lg font-medium mt-2">
                  Claim
                </button>
              </div>
              {/* День 9 */}
              <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
                <div className="text-sm mb-1">DAY 9</div>
                <div className="text-2xl font-bold">+50000</div>
                <button className="bg-blue-600 text-white p-2 rounded-lg font-medium mt-2">
                  Claim
                </button>
              </div>
              {/* День 10 */}
              <div className="col-start-2 bg-gray-800 p-4 rounded-lg flex flex-col items-center">
                <div className="text-sm mb-1">DAY 10</div>
                <div className="text-2xl font-bold">?</div>
                <button className="bg-blue-600 text-white p-2 rounded-lg font-medium mt-2">
                  Claim
                </button>
              </div>
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
                    {Array.from({ length: section.count }).map((_, i) => (
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