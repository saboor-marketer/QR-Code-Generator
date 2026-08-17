import React, { useState } from 'react';

const ActionButtons = ({ onGenerate, onCustomize, onDownload, isGenerated, isGenerating }) => {
  const [copyText, setCopyText] = useState('Copy');

  const handleCopy = async () => {
    try {
      const canvas = document.getElementById('qr-canvas');
      if (canvas) {
        canvas.toBlob(async (blob) => {
          const item = new ClipboardItem({ 'image/png': blob });
          await navigator.clipboard.write([item]);
          setCopyText('Copied!');
          setTimeout(() => setCopyText('Copy'), 2000);
        });
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="action-buttons">
      <button 
        className="btn-generate"
        onClick={onGenerate}
        disabled={isGenerating}
      >
        {isGenerating ? 'Generating...' : 'Generate QR Code'}
      </button>
      
      <button 
        className="btn-customize"
        onClick={onCustomize}
      >
        Customize
      </button>
      
      {isGenerated && (
        <>
          <button 
            className="btn-download"
            onClick={onDownload}
          >
            Download QR Code
          </button>
          
          <button 
            className="btn-copy"
            onClick={handleCopy}
          >
            {copyText}
          </button>
        </>
      )}
    </div>
  );
};

export default ActionButtons;
