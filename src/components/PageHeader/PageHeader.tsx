import React from 'react';
import { HelpCircle } from 'lucide-react';
import WebApp from '@twa-dev/sdk';

interface HeaderProps {
  farmingRate: number;
  onHelpClick: () => void;
}

export const PageHeader: React.FC<HeaderProps> = ({ farmingRate, onHelpClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-gray-900 flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-3">
        <img
          src={WebApp.initDataUnsafe.user?.photo_url}
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="text-green-400 font-medium">
          {farmingRate.toLocaleString()} coin/h
        </div>
      </div>
      <button
        onClick={onHelpClick}
        className="p-2 hover:bg-gray-800 rounded-full transition-colors"
      >
        <HelpCircle className="w-6 h-6 text-gray-300" />
      </button>
    </header>
  );
}