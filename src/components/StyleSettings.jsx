import React, { useState } from 'react';

const StyleSettings = ({ isOpen, onToggle, settings, onSettingsChange }) => {
  const [localOpen, setLocalOpen] = useState(isOpen);

  const handleToggle = () => {
    setLocalOpen(!localOpen);
    onToggle(!localOpen);
  };

  return (
    <div className="style-settings-section">
      <button className="style-settings-header" onClick={handleToggle}>
        <h2 className="section-title">3. CHOOSE YOUR STYLE</h2>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 20 20" 
          fill="none" 
          className={`dropdown-arrow ${localOpen ? 'open' : ''}`}
        >
          <path 
            d="M5 8L10 13L15 8" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
      {localOpen && (
        <div className="style-settings-content">
          <div className="style-row">
            <div className="style-group">
              <label htmlFor="qr-color">QR Color</label>
              <div className="color-picker-wrapper">
                <input
                  type="color"
                  id="qr-color"
                  value={settings.qrColor}
                  onChange={(e) => onSettingsChange({ ...settings, qrColor: e.target.value })}
                  className="color-picker"
                />
                <span className="color-value">{settings.qrColor}</span>
              </div>
            </div>
            
            <div className="style-group">
              <label htmlFor="bg-color">Background Color</label>
              <div className="color-picker-wrapper">
                <input
                  type="color"
                  id="bg-color"
                  value={settings.backgroundColor}
                  onChange={(e) => onSettingsChange({ ...settings, backgroundColor: e.target.value })}
                  className="color-picker"
                />
                <span className="color-value">{settings.backgroundColor}</span>
              </div>
            </div>
          </div>
          
          <div className="style-row">
            <div className="style-group">
              <label htmlFor="qr-size">QR Size: {settings.qrSize}px</label>
              <input
                type="range"
                id="qr-size"
                min="128"
                max="512"
                step="32"
                value={settings.qrSize}
                onChange={(e) => onSettingsChange({ ...settings, qrSize: parseInt(e.target.value) })}
                className="range-slider"
              />
            </div>
          </div>
          
          <div className="style-row">
            <div className="style-group">
              <label htmlFor="qr-margin">Margin: {settings.margin}</label>
              <input
                type="range"
                id="qr-margin"
                min="0"
                max="10"
                step="1"
                value={settings.margin}
                onChange={(e) => onSettingsChange({ ...settings, margin: parseInt(e.target.value) })}
                className="range-slider"
              />
            </div>
          </div>
          
          <div className="style-row">
            <div className="style-group">
              <label htmlFor="error-correction">Error Correction</label>
              <select
                id="error-correction"
                value={settings.errorCorrection}
                onChange={(e) => onSettingsChange({ ...settings, errorCorrection: e.target.value })}
                className="form-input"
              >
                <option value="L">L - Low (7%)</option>
                <option value="M">M - Medium (15%)</option>
                <option value="Q">Q - Quartile (25%)</option>
                <option value="H">H - High (30%)</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StyleSettings;
