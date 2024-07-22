// LoadingScreen.js
import React from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
  return (
    <div id="loading-screen">
      <div id="loading-bar-1" className="loading-bar"></div>
      <div id="loading-bar-2" className="loading-bar"></div>
      <div id="loading-bar-3" className="loading-bar"></div>
      <div id="loading-bar-4" className="loading-bar"></div>
      <div id="loading-name">Aubrey</div>
    </div>
  );
}

export default LoadingScreen;
