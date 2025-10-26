import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">
          Posez votre question et nous serons heureux de vous aider!
        </h2>
        
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-icon">👤</div>
              <input
                type="text"
                name="name"
                placeholder="Nom"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <div className="input-icon">📧</div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <div className="input-icon">📱</div>
              <input
                type="tel"
                name="phone"
                placeholder="Téléphone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <div className="input-icon">💬</div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                rows={4}
                required
              />
            </div>
            
            <button type="submit" className="submit-btn">
              Envoyer
            </button>
          </form>
          
          <div className="contact-image">
            <img 
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop&crop=center" 
              alt="Luxury car interior view" 
              className="contact-bg-image"
            />
            <div className="image-overlay">
              <div className="overlay-text">
                <h3>Service Premium</h3>
                <p>Confort et sécurité garantis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
