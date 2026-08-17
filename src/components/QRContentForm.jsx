import React from 'react';

const QRContentForm = ({ selectedType, inputData, onInputChange, validationError }) => {
  const renderForm = () => {
    switch (selectedType) {
      case 'website':
        return (
          <div className="form-group">
            <label htmlFor="website-url">Website URL</label>
            <input
              type="text"
              id="website-url"
              className="form-input"
              placeholder="https://qr-codes-generator.io"
              value={inputData.url || ''}
              onChange={(e) => onInputChange({ ...inputData, url: e.target.value })}
            />
            {validationError && <p className="error-message">{validationError}</p>}
            <p className="helper-text">Enter your website URL</p>
          </div>
        );

      case 'text':
        return (
          <div className="form-group">
            <label htmlFor="text-content">Text</label>
            <textarea
              id="text-content"
              className="form-input form-textarea"
              placeholder="Enter your text"
              value={inputData.text || ''}
              onChange={(e) => onInputChange({ ...inputData, text: e.target.value })}
              rows={4}
            />
            {validationError && <p className="error-message">{validationError}</p>}
          </div>
        );

      case 'phone':
        return (
          <div className="form-group">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="tel"
              id="phone-number"
              className="form-input"
              placeholder="+1 234 567 8900"
              value={inputData.phone || ''}
              onChange={(e) => onInputChange({ ...inputData, phone: e.target.value })}
            />
            {validationError && <p className="error-message">{validationError}</p>}
          </div>
        );

      case 'sms':
        return (
          <div className="form-group">
            <label htmlFor="sms-phone">Phone Number</label>
            <input
              type="tel"
              id="sms-phone"
              className="form-input"
              placeholder="+1 234 567 8900"
              value={inputData.phone || ''}
              onChange={(e) => onInputChange({ ...inputData, phone: e.target.value })}
            />
            <label htmlFor="sms-message" className="mt-3">Message</label>
            <input
              type="text"
              id="sms-message"
              className="form-input"
              placeholder="Enter your message"
              value={inputData.message || ''}
              onChange={(e) => onInputChange({ ...inputData, message: e.target.value })}
            />
            {validationError && <p className="error-message">{validationError}</p>}
          </div>
        );

      case 'email':
        return (
          <div className="form-group">
            <label htmlFor="email-address">Email Address</label>
            <input
              type="email"
              id="email-address"
              className="form-input"
              placeholder="example@email.com"
              value={inputData.email || ''}
              onChange={(e) => onInputChange({ ...inputData, email: e.target.value })}
            />
            <label htmlFor="email-subject" className="mt-3">Subject</label>
            <input
              type="text"
              id="email-subject"
              className="form-input"
              placeholder="Email subject"
              value={inputData.subject || ''}
              onChange={(e) => onInputChange({ ...inputData, subject: e.target.value })}
            />
            <label htmlFor="email-message" className="mt-3">Message</label>
            <textarea
              id="email-message"
              className="form-input form-textarea"
              placeholder="Enter your message"
              value={inputData.message || ''}
              onChange={(e) => onInputChange({ ...inputData, message: e.target.value })}
              rows={3}
            />
            {validationError && <p className="error-message">{validationError}</p>}
          </div>
        );

      case 'location':
        return (
          <div className="form-group">
            <label htmlFor="location-lat">Latitude</label>
            <input
              type="text"
              id="location-lat"
              className="form-input"
              placeholder="40.7128"
              value={inputData.latitude || ''}
              onChange={(e) => onInputChange({ ...inputData, latitude: e.target.value })}
            />
            <label htmlFor="location-lon" className="mt-3">Longitude</label>
            <input
              type="text"
              id="location-lon"
              className="form-input"
              placeholder="-74.0060"
              value={inputData.longitude || ''}
              onChange={(e) => onInputChange({ ...inputData, longitude: e.target.value })}
            />
            {validationError && <p className="error-message">{validationError}</p>}
          </div>
        );

      case 'wifi':
        return (
          <div className="form-group">
            <label htmlFor="wifi-name">Network Name (SSID)</label>
            <input
              type="text"
              id="wifi-name"
              className="form-input"
              placeholder="Your WiFi network"
              value={inputData.networkName || ''}
              onChange={(e) => onInputChange({ ...inputData, networkName: e.target.value })}
            />
            <label htmlFor="wifi-password" className="mt-3">Password</label>
            <input
              type="text"
              id="wifi-password"
              className="form-input"
              placeholder="WiFi password"
              value={inputData.password || ''}
              onChange={(e) => onInputChange({ ...inputData, password: e.target.value })}
            />
            <label htmlFor="wifi-security" className="mt-3">Security Type</label>
            <select
              id="wifi-security"
              className="form-input"
              value={inputData.security || 'WPA'}
              onChange={(e) => onInputChange({ ...inputData, security: e.target.value })}
            >
              <option value="WPA">WPA/WPA2</option>
              <option value="WEP">WEP</option>
              <option value="nopass">No Password</option>
            </select>
            {validationError && <p className="error-message">{validationError}</p>}
          </div>
        );

      case 'whatsapp':
        return (
          <div className="form-group">
            <label htmlFor="wa-phone">Phone Number</label>
            <input
              type="tel"
              id="wa-phone"
              className="form-input"
              placeholder="+1 234 567 8900"
              value={inputData.phone || ''}
              onChange={(e) => onInputChange({ ...inputData, phone: e.target.value })}
            />
            <label htmlFor="wa-message" className="mt-3">Message</label>
            <textarea
              id="wa-message"
              className="form-input form-textarea"
              placeholder="Enter your message"
              value={inputData.message || ''}
              onChange={(e) => onInputChange({ ...inputData, message: e.target.value })}
              rows={3}
            />
            {validationError && <p className="error-message">{validationError}</p>}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="qr-content-section">
      <h2 className="section-title">2. ENTER YOUR CONTENT</h2>
      {renderForm()}
    </div>
  );
};

export default QRContentForm;
