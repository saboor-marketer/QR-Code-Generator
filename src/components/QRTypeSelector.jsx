import React from 'react';

const QRTypeSelector = ({ selectedType, onTypeChange }) => {
  const types = [
    { id: 'website', label: 'Website', icon: '🌐' },
    { id: 'text', label: 'Text', icon: '📝' },
    { id: 'phone', label: 'Phone', icon: '📞' },
    { id: 'sms', label: 'SMS', icon: '💬' },
    { id: 'email', label: 'Email', icon: '✉️' },
    { id: 'location', label: 'Location', icon: '📍' },
    { id: 'wifi', label: 'WiFi', icon: '📶' },
    { id: 'whatsapp', label: 'WhatsApp', icon: '💚' },
  ];

  return (
    <div className="qr-type-section">
      <h2 className="section-title">1. SELECT QR CODE TYPE</h2>
      <div className="qr-type-selector">
        {types.map((type) => (
          <button
            key={type.id}
            className={`qr-type-button ${selectedType === type.id ? 'active' : ''}`}
            onClick={() => onTypeChange(type.id)}
          >
            <span className="qr-type-icon">{type.icon}</span>
            <span className="qr-type-label">{type.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QRTypeSelector;
