import React, { useState } from 'react';
import './Hero.css';
import StepNavigation from './StepNavigation';
import { ArrowRight, LocateFixed, MapPin, Clock3, CalendarDays} from "lucide-react";


const Hero = () => {
  const [activeTab, setActiveTab] = useState('where-when');
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Votre trajet 
        commence ici</h1>
        <StepNavigation />

        
        <div className="booking-form-container">
          
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <div className="input-icon"><LocateFixed size="21" color="#A80606" /></div>
                <input
                  type="text"
                  name="from"
                  placeholder="De. Adresse aéroport, hôtel"
                  value={formData.from}
                  onChange={handleInputChange}
                  className="form-input input-full large"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <div className="input-icon"><MapPin size="21" color="#A80606" /></div>
                <input
                  type="text"
                  name="to"
                  placeholder="A. Adresse aéroport, hôtel"
                  value={formData.to}
                  onChange={handleInputChange}
                  className="form-input input-full large"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="input-group">
                <div className="input-icon"><CalendarDays size="21" color="#A80606" /></div>
                <input
                  type="text"
                  name="date"
                  placeholder="Date. 31 déc"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="form-input small"
                />
              </div>
              
              <div className="input-group">
                <div className="input-icon"><Clock3 size="21" color="#A80606" /></div>
                <input
                  type="text"
                  name="time"
                  placeholder="Heure. 14:30"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="form-input small"
                />
              </div>
              <div className="input-group">
                <button type="submit" className="book-btn">
                  Commander
                  <ArrowRight size="14" className="arrow-right" />
                </button>
              </div>
            </div>
            
            
          </form>
        </div>
        
        {/* <p className="hero-description">
          Djoubo est une application innovante qui redéfinit le transport depuis l'aéroport.
        </p>
        
        <div className="phone-mockups">
          <div className="phone-mockup left">
            <div className="phone-screen">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=600&fit=crop&crop=center" 
                alt="Djoubo app map view" 
                className="phone-image"
              />
            </div>
          </div>
          
          <div className="phone-mockup right">
            <div className="phone-screen">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop&crop=center" 
                alt="Djoubo app welcome screen" 
                className="phone-image"
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
