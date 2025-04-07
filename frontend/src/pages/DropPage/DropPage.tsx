import type { FC } from 'react';
import { Wallet } from 'lucide-react';
import { Page } from '@/components/Page.tsx';
import TONCoinPixel from '../../../assets/TON_Coin_Pixel.png';
import './DropPage.css';

export const DropPage: FC = () => {
  return (
    <Page back={false}>
      <div className="drop-page-container">
        <div className="coins-container">
          <div className="balance-title">YOUR BALANCE</div>
          <div className="balance-value-container">
            <div className="coins-amount">
              {(900744739827434).toLocaleString()}
            </div>
          </div>
        </div>
        
        <img src={TONCoinPixel} alt="TON Coin" className="ton-coin-image" />
        
        <button className="connect-wallet-button">
          <Wallet className="wallet-icon" />
          Connect TON Wallet
        </button>
      </div>
    </Page>
  );
}