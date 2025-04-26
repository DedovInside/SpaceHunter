import { FC, useEffect, useState, useRef } from 'react';
import { Wallet } from 'lucide-react';
import { Page } from '@/components/Page.tsx';
import { gameApi, walletApi } from '@/services/api';
import { TonConnectButton, useTonWallet, useTonConnectUI } from '@tonconnect/ui-react';
import { toUserFriendlyAddress } from '@tonconnect/sdk';
import TONCoinPixel from '../../../assets/TON_Coin_Pixel.png';
import './DropPage.css';

export const DropPage: FC = () => {
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();
  const tonConnectRef = useRef<HTMLDivElement>(null);

  const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id || 99281932;

  // Начальная проверка состояния кошелька
  useEffect(() => {
    const initializeWalletStatus = async () => {
      try {
        const walletStatus = await walletApi.getWalletStatus(Number(userId));
        console.log('Initial walletStatus:', walletStatus);
        setIsWalletConnected(walletStatus.is_connected);
        if (walletStatus.address) {
          setWalletAddress(walletStatus.address);
        } else if (wallet) {
          await tonConnectUI.disconnect();
          setIsWalletConnected(false);
          setWalletAddress('');
        }
      } catch (error) {
        console.error('Error initializing wallet status:', error);
        setIsWalletConnected(false);
        setWalletAddress('');
      }
    };

    initializeWalletStatus();
  }, [userId, tonConnectUI]);

  // Синхронизация состояния кошелька
  useEffect(() => {
    const handleStatusChange = async (walletInfo: any) => {
      if (!walletInfo) {
        console.log('Wallet disconnected');
        setIsWalletConnected(false);
        setWalletAddress('');
        return;
      }

      try {
        const walletStatus = await walletApi.getWalletStatus(Number(userId));
        console.log('onStatusChange walletStatus:', walletStatus);
        if (!walletStatus.is_connected) {
          console.log('Server says wallet is not connected, disconnecting...');
          await tonConnectUI.disconnect();
          setIsWalletConnected(false);
          setWalletAddress('');
        } else {
          const userFriendlyAddress = toUserFriendlyAddress(walletInfo.account.address);
          console.log('Wallet connected:', userFriendlyAddress);
          setIsWalletConnected(true);
          setWalletAddress(userFriendlyAddress);
        }
      } catch (error) {
        console.error('Error checking wallet status:', error);
        await tonConnectUI.disconnect();
        setIsWalletConnected(false);
        setWalletAddress('');
      }
    };

    const unsubscribe = tonConnectUI.onStatusChange(handleStatusChange);

    return () => {
      unsubscribe();
    };
  }, [tonConnectUI, userId]);

  // Загрузка баланса
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const state = await gameApi.getGameState(userId);
        setBalance(state.balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, [userId]);

  // Отслеживаем подключение кошелька
  useEffect(() => {
    if (wallet && wallet.account?.address && !isWalletConnected) {
      (async () => {
        try {
          const userFriendlyAddress = toUserFriendlyAddress(wallet.account.address);
          await walletApi.connectWallet(Number(userId), userFriendlyAddress);
          setIsWalletConnected(true);
          setWalletAddress(userFriendlyAddress);
        } catch (error) {
          console.error('Error saving wallet address:', error);
          await tonConnectUI.disconnect();
          setIsWalletConnected(false);
          setWalletAddress('');
        }
      })();
    }
  }, [wallet, userId, isWalletConnected, tonConnectUI]);

  const connectWallet = async () => {
    try {
      await tonConnectUI.openModal();
    } catch (error) {
      console.error('Failed to open wallet modal:', error);
      alert('Failed to connect wallet. Please try again.');
    }
  };

  const disconnectWallet = async () => {
    try {
      await tonConnectUI.disconnect();
      await walletApi.disconnectWallet(Number(userId));
      setIsWalletConnected(false);
      setWalletAddress('');
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  const copyWalletAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    alert('Wallet address copied to clipboard!');
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

        <div className="hidden-ton-connect" ref={tonConnectRef}>
          <TonConnectButton />
        </div>

        {isWalletConnected && walletAddress ? (
          <div className="connected-wallet-container">
            <div className="wallet-info">
              <p className="wallet-address" onClick={copyWalletAddress}>
                {`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}
              </p>
              <p className="wallet-connected-text">Wallet Connected</p>
            </div>
            <button className="connect-wallet-button" onClick={disconnectWallet}>
              <Wallet className="wallet-icon" />
              <span className="wallet-button-text">Disconnect Wallet</span>
            </button>
          </div>
        ) : (
          <div className="wallet-button-container">
            <button className="connect-wallet-button" onClick={connectWallet}>
              <Wallet className="wallet-icon" />
              <span className="wallet-button-text">Connect TON Wallet</span>
            </button>
          </div>
        )}
      </div>
    </Page>
  );
};