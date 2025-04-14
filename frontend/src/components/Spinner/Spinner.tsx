import React from 'react';
import './Spinner.css';

export const Spinner: React.FC = () => {
  return (
    <div className="spinner-container">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
  );
};