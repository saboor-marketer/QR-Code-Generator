import React, { useState } from 'react';

const Header = () => {
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="10" height="10" fill="#6366f1"/>
              <rect x="20" y="2" width="10" height="10" fill="#6366f1"/>
              <rect x="2" y="20" width="10" height="10" fill="#6366f1"/>
              <rect x="14" y="14" width="4" height="4" fill="#6366f1"/>
            </svg>
          </div>
          <div className="logo-text">
            <h1>QR Code Generator</h1>
            <p>Start Creating QR Codes for Free Today</p>
          </div>
        </div>
        
        <nav className="header-nav">
          <div className="nav-item dropdown">
            <button 
              className="nav-link"
              onClick={() => setProductDropdownOpen(!productDropdownOpen)}
            >
              Product
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="dropdown-arrow">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {productDropdownOpen && (
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">Features</a>
                <a href="#" className="dropdown-item">Pricing</a>
                <a href="#" className="dropdown-item">API</a>
              </div>
            )}
          </div>
          <a href="#" className="nav-link">Blog</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Partners</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
        
        <div className="header-right">
          <button className="btn-login">Log in</button>
          <button className="btn-signup">SIGN UP</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
