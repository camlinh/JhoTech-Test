import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const features = [
    {
      icon: '✈️',
      title: 'Exclusivité aéroportuaire',
      description: 'Service exclusif disponible uniquement dans les aéroports pour une expérience premium.',
      image: 'luxury-car',
      popup: {
        stars: '⭐⭐⭐⭐⭐',
        text: 'COMMENT S\'EST PASSÉ VOTRE TRAJET?'
      }
    },
    {
      icon: '🚗',
      title: 'Personnalisation totale',
      description: 'Choisissez le type de véhicule qui correspond parfaitement à vos besoins et préférences.',
      image: 'van-service',
      popup: {
        car: 'Fiat E-Ulysse',
        location: '📍'
      }
    },
    {
      icon: '📅',
      title: 'Réservation à l\'avance',
      description: 'Planifiez vos trajets à l\'avance pour une tranquillité d\'esprit totale.',
      image: 'booking-scene',
      popup: {
        date: '31 déc. 14:30',
        from: 'DE. 21 Rue de Paris',
        to: 'A. 3 Boulevard des Capucines'
      }
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">Comment ça fonctionne?</h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              
              <div className={`feature-image ${feature.image}`}>
                {feature.image === 'luxury-car' && (
                  <div className="luxury-car-scene">
                    <img 
                      src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop&crop=center" 
                      alt="Luxury car service at airport" 
                      className="scene-image"
                    />
                    <div className="popup">
                      <div className="stars">{feature.popup.stars}</div>
                      <div className="popup-text">{feature.popup.text}</div>
                    </div>
                  </div>
                )}
                
                {feature.image === 'van-service' && (
                  <div className="van-service-scene">
                    <img 
                      src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop&crop=center" 
                      alt="Van service with driver" 
                      className="scene-image"
                    />
                    <div className="popup">
                      <div className="car-info">{feature.popup.car}</div>
                      <div className="location-icon">{feature.popup.location}</div>
                    </div>
                  </div>
                )}
                
                {feature.image === 'booking-scene' && (
                  <div className="booking-scene">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center" 
                      alt="People booking service" 
                      className="scene-image"
                    />
                    <div className="popup">
                      <div className="booking-info">
                        <div className="date">{feature.popup.date}</div>
                        <div className="from">{feature.popup.from}</div>
                        <div className="to">{feature.popup.to}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
