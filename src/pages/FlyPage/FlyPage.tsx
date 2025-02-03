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
              <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
                <div className="text-2xl font-bold">+1000</div>
                <button className="bg-blue-600 text-white p-2 rounded-lg font-medium">
                  Claim
                </button>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
                <div className="text-2xl font-bold">+2000</div>
                <button className="bg-blue-600 text-white p-2 rounded-lg font-medium">
                  Claim
                </button>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
                <div className="text-2xl font-bold">+3000</div>
                <button className="bg-blue-600 text-white p-2 rounded-lg font-medium">
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
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 100 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
                >
                  ?
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