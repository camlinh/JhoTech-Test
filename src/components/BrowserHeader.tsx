import React from 'react';
import './BrowserHeader.css';
import deviceIcon from '../assets/Sidebar.png';
import { ChevronLeft, ChevronRight, Shield, Share, Plus, Copy, RotateCcw } from "lucide-react";

const BrowserHeader = () => {
  return (
    <div className="browser-header">
      <div className="browser-controls">
        {/* Window Controls */}
        <div className="window-controls">
          <div className="control-btn close"></div>
          <div className="control-btn minimize"></div>
          <div className="control-btn maximize"></div>
        </div>
        
        {/* Device Icon */}
        <div className="device-icon">
          <img alt="device icon" src={deviceIcon} className="device-icon-img"/>
        </div>
        
        {/* Navigation Arrows */}
        <div className="navigation-arrows">
          <ChevronLeft size={24} color="#B7B7B7" strokeWidth={2} className="nav-arrow-left" />
          <ChevronRight size={24} color="#5A5A5A" strokeWidth={2} />
        </div>
        <div className="security-icon">
            <Shield
                color="transparent"
                fill="#B7B7B7"
                style={{
                position: "absolute",
                width: "17px",
                height: "20px",
                clipPath: "polygon(0 0, 50% 0, 50% 100%, 0% 100%)", // chỉ tô bên trái
                }}
            />
            <Shield color="#B7B7B7" strokeWidth={2} style={{
                width: "17px",
                height: "20px",
                }} />
        </div>

        
        {/* Address Bar */}
        <div className="address-bar">

          <div className="security-icons">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="lock-icon">
              <rect x="4" y="6" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1"/>
              <path d="M5.5 6V4C5.5 3.2 6.2 2.5 7 2.5S8.5 3.2 8.5 4V6" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <span className="url-text">djoubo.com</span>
          <RotateCcw size={14} color="#E3E3E3" strokeWidth={2} className="RotateCcw"/>
        </div>
        
        {/* Action Icons */}
        <div className="action-icons">
          <Share size={24} color="#B7B7B7" strokeWidth={2} className="icon-share" />
          <Plus size={24} color="#B7B7B7" strokeWidth={2} className="icon-plus"/>
          <Copy size={24} color="#B7B7B7" strokeWidth={2} className="icon-layout-dashboard"/>
        </div>
      </div>
    </div>
  );
};

export default BrowserHeader;
