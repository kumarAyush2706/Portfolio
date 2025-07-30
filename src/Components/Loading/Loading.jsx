import React, { useState, useEffect } from 'react';
import './Loading.css';

const Loading = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const loadingSteps = [
    "Initializing Portfolio",
    "Loading Components",
    "Preparing Content",
    "Optimizing Experience",
    "Ready to Explore"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onLoadingComplete();
            }, 500);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(stepTimer);
    };
  }, [onLoadingComplete, loadingSteps.length]);

  if (!isVisible) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-container">
        {/* Logo/Name Section */}
        <div className="loading-header">
          <div className="loading-logo">
            <div className="logo-circle">
              <span className="logo-text">A</span>
            </div>
          </div>
          <h1 className="loading-title">Ayush Portfolio</h1>
          <p className="loading-subtitle">Mern Stack Developer</p>
        </div>

        {/* Progress Section */}
        <div className="loading-progress-section">
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <div className="progress-text">{loadingProgress}%</div>
          </div>
          
          <div className="loading-step">
            <div className="step-indicator">
              {loadingSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`step-dot ${index <= currentStep ? 'active' : ''}`}
                ></div>
              ))}
            </div>
            <p className="step-text">{loadingSteps[currentStep]}</p>
          </div>
        </div>

        {/* Animated Elements */}
        <div className="loading-animations">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="loading-spinner">
          <div className="spinner-ring ring-1"></div>
          <div className="spinner-ring ring-2"></div>
          <div className="spinner-ring ring-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading; 