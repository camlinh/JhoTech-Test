import React from 'react';
import './DownloadApp.css';

const DownloadApp = () => {
  return (
    <section className="download-app">
      <div className="container">
        <div className="download-content">
          <div className="download-text">
            <h2 className="section-title">
              Télécharge notre application <span className="logo-text">DJOUBO</span>
            </h2>
            
            <p className="download-description">
              Réservez votre trajet depuis l'aéroport vers la destination de votre choix avec Djoubo. 
              Service rapide, confortable et sécurisé.
            </p>
            
            <div className="download-buttons">
              <button className="download-btn app-store">
                <div className="store-icon">🍎</div>
                <div className="store-text">
                  <div className="store-label">Télécharger sur</div>
                  <div className="store-name">App Store</div>
                </div>
              </button>
              
              <button className="download-btn google-play">
                <div className="store-icon">📱</div>
                <div className="store-text">
                  <div className="store-label">Disponible sur</div>
                  <div className="store-name">Google Play</div>
                </div>
              </button>
            </div>
          </div>
          
          <div className="phone-showcase">
            <div className="phone-mockup">
              <div className="phone-screen">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=250&h=450&fit=crop&crop=center" 
                  alt="Djoubo app interface" 
                  className="phone-image"
                />
                <div className="app-overlay">
                  <div className="app-header">
                    <div className="logo-circle">D</div>
                  </div>
                  <div className="app-content">
                    <h3>Bienvenue sur Djoubo</h3>
                    <p>Votre transport premium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
