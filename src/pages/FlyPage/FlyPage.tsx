import { ModalWindow } from '@/components/ModalWindow/ModalWindow';
import { FC, useState } from 'react';
import { Page } from '@/components/Page.tsx';


export const FlyPage: FC = () => {

    const [clicks, setClicks] = useState(0);
    const [showBonusModal, setShowBonusModal] = useState(false);
    const [showNFTModal, setShowNFTModal] = useState(false);
    const [showLevelModal, setShowLevelModal] = useState(false);

    return  (
      <Page back={false}>
        <div className="flex flex-col items-center p-4 pt-20 pb-20">
          <div className="grid grid-cols-3 gap-4 w-full max-w-md mb-8 justify-items-center">
            <button
              onClick={() => setShowBonusModal(true)}
              className="bg-blue-600 text-white p-4 rounded-full font-medium w-20 h-20 flex items-center justify-center"
            >
              Daily Bonuses
            </button>
            <button
              onClick={() => setShowNFTModal(true)}
              className="bg-purple-600 text-white p-4 rounded-full font-medium w-20 h-20 flex items-center justify-center"
            >
              NFT Collection
            </button>
            <button
              onClick={() => setShowLevelModal(true)}
              className="bg-green-600 text-white p-4 rounded-full font-medium w-20 h-20 flex items-center justify-center"
            >
              Level
            </button>
          </div>

          <div className="text-2xl font-bold mb-8">
            {clicks} $KSM
          </div>

          <button
            onClick={() => setClicks(c => c + 1)}
            className="mb-4 transform active:scale-95 transition-transform"
          >
            <img
              src="https://images.unsplash.com/photo-1636819488524-1f019c4e1c44?auto=format&fit=crop&w=300"
              alt="Spaceship"
              className="w-32 h-32 object-contain"
            />
          </button>


          <ModalWindow isOpen={showBonusModal} onClose={() => setShowBonusModal(false)} title="Daily Bonuses">
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
            children = {<div>Content</div>}
          >
            {/* Level information content */}


          </ModalWindow>
        </div>
    </Page>
    );
}