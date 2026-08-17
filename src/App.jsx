import React, { useState } from 'react';
import Header from './components/Header';
import QRTypeSelector from './components/QRTypeSelector';
import QRContentForm from './components/QRContentForm';
import ScanTracking from './components/ScanTracking';
import StyleSettings from './components/StyleSettings';
import QRPreview from './components/QRPreview';
import ActionButtons from './components/ActionButtons';
import { generateQRData } from './utils/qrData';
import {
  validateWebsite,
  validateText,
  validatePhone,
  validateEmail,
  validateLocation,
  validateWiFi,
  validateWhatsApp
} from './utils/validation';
import './App.css';

function App() {
  const [selectedType, setSelectedType] = useState('website');
  const [inputData, setInputData] = useState({ url: '' });
  const [generatedQR, setGeneratedQR] = useState('');
  const [isTrackingEnabled, setIsTrackingEnabled] = useState(false);
  const [isStyleOpen, setIsStyleOpen] = useState(false);
  const [qrSettings, setQRSettings] = useState({
    qrColor: '#1e293b',
    backgroundColor: '#ffffff',
    qrSize: 256,
    margin: 2,
    errorCorrection: 'M'
  });
  const [validationError, setValidationError] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setInputData({});
    setValidationError('');
    setIsGenerated(false);
    setGeneratedQR('');
  };

  const handleInputChange = (data) => {
    setInputData(data);
    setValidationError('');
  };

  const validateInput = () => {
    switch (selectedType) {
      case 'website':
        return validateWebsite(inputData.url);
      case 'text':
        return validateText(inputData.text);
      case 'phone':
        return validatePhone(inputData.phone);
      case 'sms':
        return validatePhone(inputData.phone);
      case 'email':
        return validateEmail(inputData.email);
      case 'location':
        return validateLocation(inputData.latitude, inputData.longitude);
      case 'wifi':
        return validateWiFi(inputData.networkName, inputData.password);
      case 'whatsapp':
        return validateWhatsApp(inputData.phone);
      default:
        return null;
    }
  };

  const handleGenerate = () => {
    const error = validateInput();
    if (error) {
      setValidationError(error);
      return;
    }

    setIsGenerating(true);
    
    setTimeout(() => {
      const qrData = generateQRData(selectedType, inputData);
      setGeneratedQR(qrData);
      setIsGenerated(true);
      setIsGenerating(false);
    }, 300);
  };

  const handleCustomize = () => {
    setIsStyleOpen(!isStyleOpen);
  };

  const handleDownload = () => {
    const canvas = document.getElementById('qr-canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.download = 'qr-code.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="app-card">
          <div className="card-content">
            <div className="left-column">
              <QRTypeSelector 
                selectedType={selectedType} 
                onTypeChange={handleTypeChange} 
              />
              <QRContentForm 
                selectedType={selectedType}
                inputData={inputData}
                onInputChange={handleInputChange}
                validationError={validationError}
              />
              <ScanTracking 
                isEnabled={isTrackingEnabled}
                onToggle={() => setIsTrackingEnabled(!isTrackingEnabled)}
              />
              <StyleSettings
                isOpen={isStyleOpen}
                onToggle={(open) => setIsStyleOpen(open)}
                settings={qrSettings}
                onSettingsChange={setQRSettings}
              />
            </div>
            <div className="right-column">
              <QRPreview 
                qrData={generatedQR}
                settings={qrSettings}
                isGenerated={isGenerated}
              />
              <ActionButtons
                onGenerate={handleGenerate}
                onCustomize={handleCustomize}
                onDownload={handleDownload}
                isGenerated={isGenerated}
                isGenerating={isGenerating}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
