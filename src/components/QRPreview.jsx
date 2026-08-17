import React from 'react';
import QRCode from 'qrcode.react';

const QRPreview = ({ qrData, settings, isGenerated }) => {
  const downloadQRCode = () => {
    const canvas = document.getElementById('qr-canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.download = 'qr-code.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <div className="qr-preview-section">
      <h2 className="section-title">4. YOUR QR CODE</h2>
      <div className="qr-preview-box">
        {isGenerated && qrData ? (
          <div className="qr-generated">
            <QRCode
              id="qr-canvas"
              value={qrData}
              size={settings.qrSize}
              bgColor={settings.backgroundColor}
              fgColor={settings.qrColor}
              level={settings.errorCorrection}
              includeMargin={settings.margin > 0}
              marginSize={settings.margin}
              renderAs="canvas"
            />
          </div>
        ) : (
          <div className="qr-placeholder">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="30" height="30" fill="#d1d5db"/>
              <rect x="80" y="10" width="30" height="30" fill="#d1d5db"/>
              <rect x="10" y="80" width="30" height="30" fill="#d1d5db"/>
              <rect x="50" y="50" width="20" height="20" fill="#d1d5db"/>
              <rect x="80" y="80" width="30" height="30" fill="#d1d5db"/>
            </svg>
            <p className="placeholder-text">Your QR code will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRPreview;
