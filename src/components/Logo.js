import React from 'react';

const Logo = ({ white = false }) => {
  return (
    <>
      {/* Logo Styles */}
      <style>{logoStyles}</style>
      
      <div className="vertex-logo">
        {/* Logo Icon with Badge */}
        <div className="vertex-logo-icon-wrapper">
          <div className={`vertex-logo-icon ${white ? 'vertex-logo-icon-white' : 'vertex-logo-icon-primary'}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill={white ? '#2596be' : 'white'} />
              <path d="M2 17L12 22L22 17" stroke={white ? '#2596be' : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke={white ? '#2596be' : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="vertex-logo-badge"></div>
        </div>
        
        {/* Logo Text */}
        <div className="vertex-logo-text">
          <h2 className={`vertex-logo-title ${white ? 'vertex-logo-title-white' : 'vertex-logo-title-primary'}`}>
            Vertex
            <span className={white ? 'vertex-logo-highlight-white' : 'vertex-logo-highlight-primary'}>
              Flow
            </span>
          </h2>
          <p className={`vertex-logo-subtitle ${white ? 'vertex-logo-subtitle-white' : 'vertex-logo-subtitle-dark'}`}>
            Technologies
          </p>
        </div>
      </div>
    </>
  );
};

// ============================================
// CUSTOM CSS STYLES FOR LOGO
// ============================================
const logoStyles = `
  /* Logo Container */
  .vertex-logo {
    display: flex;
    align-items: center;
    gap: 14px;
    text-decoration: none;
    user-select: none;
    transition: transform 0.3s ease;
  }

  .vertex-logo:hover {
    transform: scale(1.03);
  }

  /* Logo Icon Wrapper - CONTAINS ICON + BADGE */
  .vertex-logo-icon-wrapper {
    position: relative;
    flex-shrink: 0;
    display: inline-flex;
  }

  /* Logo Icon */
  .vertex-logo-icon {
    width: 44px;
    height: 44px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  /* Primary Icon (Light Background - Navbar) */
  .vertex-logo-icon-primary {
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 100%);
    box-shadow: 0 4px 15px rgba(37, 150, 190, 0.3);
  }

  .vertex-logo-icon-primary::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: rotate(45deg);
    transition: all 0.6s ease;
  }

  .vertex-logo:hover .vertex-logo-icon-primary::before {
    left: 100%;
  }

  /* White Icon (Dark Background - Footer/Hero) */
  .vertex-logo-icon-white {
    background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
  }

  .vertex-logo-icon-white::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(37, 150, 190, 0.1),
      transparent
    );
    transform: rotate(45deg);
    transition: all 0.6s ease;
  }

  .vertex-logo:hover .vertex-logo-icon-white::before {
    left: 100%;
  }

  /* Logo Badge (Online Indicator) - Positioned relative to wrapper */
  .vertex-logo-badge {
    position: absolute;
    top: -4px;
    right: -4px;
    width: 14px;
    height: 14px;
    background: #10b981;
    border-radius: 50%;
    border: 3px solid #ffffff;
    animation: logoPulse 2s infinite;
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
    z-index: 2;
  }

  @keyframes logoPulse {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
      box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
    }
    50% {
      transform: scale(1.3);
      opacity: 0.7;
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
    }
  }

  /* Logo Text Container */
  .vertex-logo-text {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  /* Logo Title - VertexFlow */
  .vertex-logo-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 22px;
    font-weight: 800;
    letter-spacing: -0.5px;
    line-height: 1;
    margin: 0;
    transition: color 0.3s ease;
    white-space: nowrap;
  }

  /* DARK/Black for light backgrounds (Navbar) */
  .vertex-logo-title-dark {
    color: #0a0a0a;
  }

  /* WHITE for dark backgrounds (Footer/Hero) */
  .vertex-logo-title-white {
    color: #ffffff;
  }

  /* Logo Highlight - "Flow" part */
  .vertex-logo-highlight-primary {
    color: #2596be;
    transition: color 0.3s ease;
  }

  .vertex-logo-highlight-white {
    color: #ffffff;
    transition: color 0.3s ease;
  }

  .vertex-logo:hover .vertex-logo-highlight-primary {
    color: #3aacd8;
  }

  .vertex-logo:hover .vertex-logo-highlight-white {
    color: #e0e0e0;
  }

  /* Logo Subtitle - Technologies */
  .vertex-logo-subtitle {
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    line-height: 1;
    margin: 0;
    transition: color 0.3s ease;
  }

  .vertex-logo-subtitle-dark {
    color: #6b7280;
  }

  .vertex-logo-subtitle-white {
    color: rgba(255, 255, 255, 0.65);
  }

  /* Responsive Logo */
  @media (max-width: 640px) {
    .vertex-logo {
      gap: 10px;
    }
    
    .vertex-logo-icon {
      width: 38px;
      height: 38px;
      border-radius: 12px;
    }

    .vertex-logo-icon svg {
      width: 20px;
      height: 20px;
    }

    .vertex-logo-title {
      font-size: 19px;
    }

    .vertex-logo-subtitle {
      font-size: 10px;
      letter-spacing: 0.1em;
    }

    .vertex-logo-badge {
      width: 11px;
      height: 11px;
      top: -3px;
      right: -3px;
      border-width: 2px;
    }
  }

  @media (max-width: 480px) {
    .vertex-logo-icon {
      width: 34px;
      height: 34px;
      border-radius: 10px;
    }

    .vertex-logo-icon svg {
      width: 18px;
      height: 18px;
    }

    .vertex-logo-title {
      font-size: 17px;
    }

    .vertex-logo-subtitle {
      font-size: 9px;
    }

    .vertex-logo {
      gap: 8px;
    }

    .vertex-logo-text {
      gap: 2px;
    }
  }

  /* High Contrast Mode */
  @media (prefers-contrast: high) {
    .vertex-logo-icon-primary,
    .vertex-logo-icon-white {
      background: #2596be;
      box-shadow: none;
    }

    .vertex-logo-title-dark,
    .vertex-logo-title-white {
      color: #000000;
    }

    .vertex-logo-highlight-primary,
    .vertex-logo-highlight-white {
      color: #000000;
      font-weight: 800;
    }
  }

  /* Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    .vertex-logo-badge {
      animation: none;
    }

    .vertex-logo-icon-primary::before,
    .vertex-logo-icon-white::before {
      transition: none;
    }
  }

  /* Print Styles */
  @media print {
    .vertex-logo-badge {
      display: none;
    }

    .vertex-logo-icon-primary,
    .vertex-logo-icon-white {
      background: #000000 !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .vertex-logo-title-dark,
    .vertex-logo-title-white {
      color: #000000 !important;
    }

    .vertex-logo-highlight-primary,
    .vertex-logo-highlight-white {
      color: #000000 !important;
    }
  }
`;

export default Logo;