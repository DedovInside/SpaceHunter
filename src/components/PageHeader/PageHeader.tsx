import React from 'react';
import WebApp from '@twa-dev/sdk';

interface HeaderProps {
  farmingRate: number;
  onHelpClick: () => void;
}

export const PageHeader: React.FC<HeaderProps> = ({ farmingRate, onHelpClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
          <img
            src={WebApp.initDataUnsafe.user?.photo_url}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="bg-purple-800 text-white font-medium">
          {farmingRate.toLocaleString()} coin/h
        </div>
      </div>
      <button
        onClick={onHelpClick}
        className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center transition-colors"
      >
        <span className="w-7 h-7 text-gray-300 flex items-center justify-center">?</span>
      </button>
    </header>
  );
}