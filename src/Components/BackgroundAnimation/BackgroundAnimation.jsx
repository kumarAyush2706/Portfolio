import React from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  // MERN Stack code snippets
  const codeSnippets = [
    'const', 'function', 'useState', 'useEffect', 'return', 'export', 'import',
    'MongoDB', 'Express', 'React', 'Node.js', 'API', 'Database', 'Server',
    'Component', 'Props', 'State', 'Hook', 'Route', 'Schema', 'Model',
    'async', 'await', 'Promise', 'fetch', 'axios', 'JSON', 'REST'
  ];

  return (
    <div className="background-animation">
      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(25)].map((_, index) => (
          <div
            key={index}
            className={`particle particle-${index + 1}`}
            style={{
              '--delay': `${Math.random() * 25}s`,
              '--duration': `${20 + Math.random() * 15}s`,
              '--size': `${3 + Math.random() * 6}px`,
              '--opacity': `${0.15 + Math.random() * 0.25}`,
            }}
          ></div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="gradient-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="geometric-shapes">
        <div className="shape shape-triangle"></div>
        <div className="shape shape-circle"></div>
        <div className="shape shape-square"></div>
        <div className="shape shape-diamond"></div>
      </div>

      {/* Wave Effect */}
      <div className="wave-container">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>

      {/* Grid Pattern */}
      <div className="grid-pattern"></div>

      {/* Light Rays */}
      <div className="light-rays">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="light-ray"
            style={{
              '--angle': `${index * 30}deg`,
              '--delay': `${index * 0.3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Code Particles (MERN Theme) */}
      <div className="code-particles">
        {codeSnippets.map((snippet, index) => (
          <div
            key={index}
            className="code-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 30}s`,
              animationDuration: `${25 + Math.random() * 20}s`,
            }}
          >
            {snippet}
          </div>
        ))}
      </div>

      {/* Database Connections */}
      <div className="db-connections">
        {/* Database Lines */}
        {[...Array(8)].map((_, index) => (
          <div
            key={`line-${index}`}
            className="db-line"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 200}px`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          ></div>
        ))}
        
        {/* Database Nodes */}
        {[...Array(12)].map((_, index) => (
          <div
            key={`node-${index}`}
            className="db-node"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundAnimation; 