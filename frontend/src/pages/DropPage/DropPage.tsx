import { FC, useEffect, useState, useRef } from 'react';
import { Wallet } from 'lucide-react';
import { Page } from '@/components/Page.tsx';
import { gameApi, walletApi } from '@/services/api';
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import TONCoinPixel from '../../../assets/TON_Coin_Pixel.png';
import './DropPage.css';

export const DropPage: FC = () => {
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  
  const wallet = useTonWallet();
  const tonConnectRef = useRef<HTMLDivElement>(null);
  
  // Получаем Id пользователя из Telegram WebApp
  const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id || 99281932;

  // Загрузка баланса и состояния кошелька
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Получаем текущее состояние игры с сервера
        const state = await gameApi.getGameState(userId);
        setBalance(state.balance);
        
        // Получаем статус кошелька
        const walletStatus = await walletApi.getWalletStatus(Number(userId));
        setIsWalletConnected(walletStatus.is_connected);
        if (walletStatus.address) {
          setWalletAddress(walletStatus.address);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, [userId]);

  // Отслеживание изменений в подключении кошелька
  useEffect(() => {
    const saveWalletAddress = async () => {
      try {
        if (wallet && wallet.account?.address) {
          // Сохраняем адрес кошелька в базе, если он подключен
          if (!isWalletConnected || walletAddress !== wallet.account.address) {
            await walletApi.connectWallet(Number(userId), wallet.account.address);
            setIsWalletConnected(true);
            setWalletAddress(wallet.account.address);
          }
        } else if (isWalletConnected && !wallet) {
          // Отключаем кошелек, если он был отключен в UI
          await walletApi.disconnectWallet(Number(userId));
          setIsWalletConnected(false);
          setWalletAddress('');
        }
      } catch (error) {
        console.error('Wallet update error:', error);
      }
    };
    
    saveWalletAddress();
  }, [wallet, userId, isWalletConnected, walletAddress]);

  // Обработчик клика по кнопке кошелька
  const handleWalletButtonClick = () => {
    const buttonElement = tonConnectRef.current?.querySelector('button');
    if (buttonElement) {
      buttonElement.click();
    }
  };

  return (
    <Page back={false}>
      <div className="drop-page-container">
        <div className="coins-container">
          <div className="balance-title">YOUR BALANCE</div>
          <div className="balance-value-container">
            <div className="coins-amount">
              {isLoading ? 'Loading...' : `${balance.toFixed(0)} CSM`}
            </div>
          </div>
        </div>
        
        <img src={TONCoinPixel} alt="TON Coin" className="ton-coin-image" />
        
        {/* Скрытая оригинальная кнопка TonConnect */}
        <div className="hidden-ton-connect" ref={tonConnectRef}>
          <TonConnectButton />
        </div>
        
        {isWalletConnected && walletAddress ? (
          <div className="connected-wallet-container">
            <div className="wallet-info">
              <p className="wallet-address">
                {`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}
              </p>
              <p className="wallet-connected-text">Wallet Connected</p>
            </div>
            <button 
              className="connect-wallet-button"
              onClick={handleWalletButtonClick}
            >
              <Wallet className="wallet-icon" />
              Open Wallet
            </button>
          </div>
        ) : (
          <div className="wallet-button-container">
            {/* Наша стилизованная кнопка */}
            <button 
              className="connect-wallet-button"
              onClick={handleWalletButtonClick}
            >
              <Wallet className="wallet-icon" />
              Connect TON Wallet
            </button>
          </div>
        )}
      </div>
    </Page>
  );
}