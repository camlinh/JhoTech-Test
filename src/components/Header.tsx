import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { ChevronDown, Globe, ArrowRight} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div>
          <img alt="logo" src={logo} className="logo" />
        </div>
        
        <button className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item entreprise flex">
              <a href="#entreprise" className="nav-link">Section entreprise</a>
              <div>
                <ChevronDown size="14" className="icon-down-entreprise" /> 
              </div>
            </li>
            <li className="nav-item">
              <div className="language-selector">
                <Globe size="24" color="#ffffff" strokeWidth={1}/>
                <span>FR</span>
                <ChevronDown size="14" strokeWidth={2}/>
              </div>
            </li>
            <li className="nav-item">
              <button className="login-btn">Connexion <ArrowRight size="14" className="arrow-right" /></button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
