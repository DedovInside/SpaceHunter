import React from 'react';
import WebApp from '@twa-dev/sdk';
import './PageHeader.css';

interface HeaderProps {
  farmingRate: number;
  onHelpClick: () => void;
}

export const PageHeader: React.FC<HeaderProps> = ({ farmingRate, onHelpClick }) => {
  return (
    <header className="page-header">
      <div className="user-info">
        <div className="avatar-container">
          <img
            src={WebApp.initDataUnsafe.user?.photo_url}
            alt="User Avatar"
            className="user-avatar"
          />
        </div>
        <div className="farming-rate">
          {farmingRate.toLocaleString()} coin/h
        </div>
      </div>
      <button
        onClick={onHelpClick}
        className="help-button"
      >
        <span className="help-icon">?</span>
      </button>
    </header>
  );
}