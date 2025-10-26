import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'Réservation rapide',
      description: 'Réservez votre trajet en quelques clics avec notre interface intuitive et moderne.',
      phoneContent: {
        type: 'booking',
        price: '29,00€',
        status: 'Confirmé'
      }
    },
    {
      title: 'Suivi en temps réel',
      description: 'Suivez votre chauffeur en temps réel sur la carte et recevez des notifications de statut.',
      phoneContent: {
        type: 'tracking',
        route: 'Route optimisée',
        eta: '5 min',
        status: 'En ligne'
      }
    },
    {
      title: 'Assistant Client Intégrée',
      description: 'Obtenez une assistance client instantanée directement dans l\'application.',
      phoneContent: {
        type: 'support',
        message: 'Bonjour! Comment puis-je vous aider?',
        status: 'En ligne'
      }
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Fonctionnalités</h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
              
              <div className="phone-mockup">
                <div className="phone-screen">
                  {feature.phoneContent.type === 'booking' && (
                    <div className="booking-screen">
                      <img 
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=350&fit=crop&crop=center" 
                        alt="Booking confirmation screen" 
                        className="phone-image"
                      />
                      <div className="overlay-content">
                        <div className="booking-header">
                          <h4>Réservation confirmée</h4>
                          <div className="price">{feature.phoneContent.price}</div>
                        </div>
                        <div className="booking-status">
                          <div className="status-badge">{feature.phoneContent.status}</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {feature.phoneContent.type === 'tracking' && (
                    <div className="tracking-screen">
                      <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=350&fit=crop&crop=center" 
                        alt="Real-time tracking map" 
                        className="phone-image"
                      />
                      <div className="overlay-content">
                        <div className="tracking-info">
                          <div className="route">{feature.phoneContent.route}</div>
                          <div className="eta">ETA: {feature.phoneContent.eta}</div>
                          <div className="status">{feature.phoneContent.status}</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {feature.phoneContent.type === 'support' && (
                    <div className="support-screen">
                      <img 
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=350&fit=crop&crop=center" 
                        alt="Customer support chat" 
                        className="phone-image"
                      />
                      <div className="overlay-content">
                        <div className="chat-header">
                          <h4>Support Client</h4>
                          <div className="status">{feature.phoneContent.status}</div>
                        </div>
                        <div className="chat-message">
                          {feature.phoneContent.message}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
