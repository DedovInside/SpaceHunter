interface TelegramWebApps {
  WebApp: {
    initDataUnsafe: {
      user?: {
        id?: string;
      };
    };
    openTelegramLink: (url: string) => void;
  };
}

interface Window {
  Telegram: TelegramWebApps;
}