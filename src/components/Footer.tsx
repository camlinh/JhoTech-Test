import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">DJOUBO</span>
            </div>
            <p className="footer-description">
              Réservez votre trajet depuis l'aéroport vers la destination de votre choix avec Djoubo. 
              Service rapide, confortable et sécurisé.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">À propos de Djoubo</h4>
            <ul className="footer-links">
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#aide">Aide</a></li>
              <li><a href="#entreprise">Entreprise</a></li>
              <li><a href="#cgu">CGU</a></li>
              <li><a href="#cgv">CGV</a></li>
              <li><a href="#mentions">Mentions légales</a></li>
              <li><a href="#privacy">Politique de confidentialité</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Retrouvez nous sur les stores</h4>
            <div className="store-buttons">
              <button className="store-btn app-store">
                <div className="store-icon">🍎</div>
                <div className="store-text">
                  <div className="store-label">App Store</div>
                </div>
              </button>
              
              <button className="store-btn google-play">
                <div className="store-icon">📱</div>
                <div className="store-text">
                  <div className="store-label">Google Play</div>
                </div>
              </button>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Retrouvez nous sur les réseaux sociaux</h4>
            <div className="social-links">
              <a href="#" className="social-link facebook">📘</a>
              <a href="#" className="social-link instagram">📷</a>
              <a href="#" className="social-link linkedin">💼</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            Djoubo © 2024. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
