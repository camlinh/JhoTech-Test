import React from 'react';
import './StepNavigation.css';

interface StepNavigationProps {
  activeStep?: number;
}

const StepNavigation: React.FC<StepNavigationProps> = ({ activeStep = 1 }) => {
  const steps = [
    { label: "Ou et quand?" },
    { label: "Personnalisation" },
    { label: "Valider" }
  ];

  return (
    <div className="step-navigation">
      <div className="step-line"></div>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-item">
            <div 
              className={`step-circle ${index + 1 === activeStep ? 'active' : 'inactive'}`}
            >
              <div className="step-dot"></div>
            </div>
            <span className="step-label">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepNavigation;

