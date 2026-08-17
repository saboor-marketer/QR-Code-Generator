import React from 'react';

const ScanTracking = ({ isEnabled, onToggle }) => {
  return (
    <div className="scan-tracking">
      <div className="tracking-left">
        <div className="tracking-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="#6366f1" strokeWidth="2" fill="none"/>
            <path d="M10 6V10L13 13" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="tracking-text">Track your scans</span>
      </div>
      <div className="tracking-right">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={onToggle}
          />
          <span className="toggle-slider"></span>
        </label>
      </div>
      {isEnabled && (
        <div className="tracking-info">
          <p>Scan tracking is enabled. Note: This is a frontend-only demo.</p>
        </div>
      )}
    </div>
  );
};

export default ScanTracking;
