import { FC, useEffect, useState, useRef } from 'react';
import { Wallet } from 'lucide-react';
import { Page } from '@/components/Page.tsx';
import { gameApi, walletApi } from '@/services/api';
import { TonConnectButton, useTonWallet, useTonConnectUI } from '@tonconnect/ui-react';
import TONCoinPixel from '../../../assets/TON_Coin_Pixel.png';
import './DropPage.css';

export const DropPage: FC = () => {
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  
  // Подключаем tonConnect UI для прямого вызова модального окна
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();
  const tonConnectRef = useRef<HTMLDivElement>(null);
  
  // Получаем Id пользователя из Telegram WebApp
  const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id || 99281932;

  // Загрузка баланса и состояния кошелька только с сервера
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Получаем текущее состояние игры с сервера
        const state = await gameApi.getGameState(userId);
        setBalance(state.balance);
        
        // Получаем статус кошелька ТОЛЬКО с сервера
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

  // Отслеживаем подключение кошелька после нажатия на кнопку
  useEffect(() => {
    if (wallet && wallet.account?.address) {
      (async () => {
        try {
          // Сохраняем адрес только если явно нажали на кнопку подключения
          if (!isWalletConnected) {
            await walletApi.connectWallet(Number(userId), wallet.account.address);
            setIsWalletConnected(true);
            setWalletAddress(wallet.account.address);
          }
        } catch (error) {
          console.error('Error saving wallet address:', error);
        }
      })();
    }
  }, [wallet, userId, isWalletConnected]);

  // Функция для подключения кошелька
  const connectWallet = async () => {
    try {
      // Напрямую открываем модальное окно выбора кошелька
      await tonConnectUI.openModal();
    } catch (error) {
      console.error('Failed to open wallet modal:', error);
    }
  };

  // Функция для открытия кошелька
  const openWallet = async () => {
    try {
      if (wallet) {
        // Открываем уже подключенный кошелек
        await tonConnectUI.openModal();
      }
    } catch (error) {
      console.error('Failed to open wallet:', error);
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
        
        {/* Скрытая оригинальная кнопка TonConnect - больше не нужна */}
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
              onClick={openWallet}
            >
              <Wallet className="wallet-icon" />
              <span className="wallet-button-text">Open Wallet</span>
            </button>
          </div>
        ) : (
          <div className="wallet-button-container">
            <button 
              className="connect-wallet-button"
              onClick={connectWallet}
            >
              <Wallet className="wallet-icon" />
              <span className="wallet-button-text">Connect TON Wallet</span>
            </button>
          </div>
        )}
      </div>
    </Page>
  );
}