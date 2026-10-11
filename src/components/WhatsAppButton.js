import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = '+923001234567'; // Replace with your number
  const message = 'Hi VertexFlow! I would like to discuss a project.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Show tooltip on first visit
    const hasSeenTooltip = localStorage.getItem('whatsapp-tooltip-seen');
    if (!hasSeenTooltip) {
      setShowTooltip(true);
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(false);
        localStorage.setItem('whatsapp-tooltip-seen', 'true');
      }, 5000);
      
      return () => {
        clearTimeout(timer);
        clearTimeout(tooltipTimer);
      };
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* WhatsApp Button Styles */}
      <style>{whatsappStyles}</style>
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`vertex-whatsapp ${isVisible ? 'vertex-whatsapp-visible' : ''} ${isHovered ? 'vertex-whatsapp-hovered' : ''}`}
        title="Chat with us on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Contact us on WhatsApp"
      >
        {/* Main Button */}
        <div className="vertex-whatsapp-button">
          <FaWhatsapp className="vertex-whatsapp-icon" />
          
          {/* Pulse Ring */}
          <div className="vertex-whatsapp-pulse"></div>
          
          {/* Notification Badge */}
          <div className="vertex-whatsapp-badge">
            <span>1</span>
          </div>
        </div>

        {/* Tooltip */}
        <div className={`vertex-whatsapp-tooltip ${showTooltip || isHovered ? 'vertex-whatsapp-tooltip-visible' : ''}`}>
          <div className="vertex-whatsapp-tooltip-content">
            <span className="vertex-whatsapp-tooltip-emoji">👋</span>
            <span className="vertex-whatsapp-tooltip-text">Chat with us!</span>
            <span className="vertex-whatsapp-tooltip-status">We reply instantly</span>
          </div>
          <div className="vertex-whatsapp-tooltip-arrow"></div>
        </div>

        {/* Ripple Effect on Click */}
        <div className="vertex-whatsapp-ripple"></div>
      </a>
    </>
  );
};

// ============================================
// CUSTOM CSS STYLES FOR WHATSAPP BUTTON (SAME FILE)
// ============================================
const whatsappStyles = `
  /* WhatsApp Container */
  .vertex-whatsapp {
    position: fixed;
    bottom: 100px;
    right: 30px;
    z-index: 999;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: translateY(20px) scale(0.8);
    pointer-events: none;
  }

  .vertex-whatsapp-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: all;
  }

  .vertex-whatsapp-hovered {
    transform: translateY(-5px) scale(1.05);
  }

  /* Main Button */
  .vertex-whatsapp-button {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .vertex-whatsapp-hovered .vertex-whatsapp-button {
    box-shadow: 0 12px 35px rgba(37, 211, 102, 0.6);
  }

  .vertex-whatsapp-button:active {
    transform: scale(0.95);
  }

  /* WhatsApp Icon */
  .vertex-whatsapp-icon {
    font-size: 32px;
    color: #ffffff;
    position: relative;
    z-index: 2;
    animation: whatsappFloat 3s ease-in-out infinite;
  }

  @keyframes whatsappFloat {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-3px);
    }
  }

  /* Pulse Ring Animation */
  .vertex-whatsapp-pulse {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #25D366;
    animation: whatsappPulse 2s ease-out infinite;
    z-index: 1;
  }

  @keyframes whatsappPulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.6;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.8);
      opacity: 0;
    }
  }

  /* Notification Badge */
  .vertex-whatsapp-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 24px;
    height: 24px;
    background: #ef4444;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    border: 3px solid #ffffff;
    animation: badgeBounce 2s infinite;
    box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);
  }

  .vertex-whatsapp-badge span {
    font-size: 12px;
    font-weight: 700;
    color: #ffffff;
    line-height: 1;
  }

  @keyframes badgeBounce {
    0%, 100% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.2);
    }
    20% {
      transform: scale(1);
    }
    30% {
      transform: scale(1.1);
    }
    40% {
      transform: scale(1);
    }
  }

  /* Tooltip */
  .vertex-whatsapp-tooltip {
    position: absolute;
    right: 75px;
    top: 50%;
    transform: translateY(-50%);
    background: #ffffff;
    border-radius: 16px;
    padding: 0;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    white-space: nowrap;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  .vertex-whatsapp-tooltip-visible {
    opacity: 1;
    visibility: visible;
  }

  .vertex-whatsapp-tooltip-content {
    padding: 14px 20px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: relative;
    z-index: 1;
  }

  .vertex-whatsapp-tooltip-emoji {
    font-size: 20px;
    margin-bottom: 2px;
  }

  .vertex-whatsapp-tooltip-text {
    font-size: 14px;
    font-weight: 600;
    color: #1a1a1a;
    letter-spacing: 0.01em;
  }

  .vertex-whatsapp-tooltip-status {
    font-size: 12px;
    color: #10b981;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .vertex-whatsapp-tooltip-status::before {
    content: '';
    width: 7px;
    height: 7px;
    background: #10b981;
    border-radius: 50%;
    animation: statusPulse 1.5s infinite;
  }

  @keyframes statusPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* Tooltip Arrow */
  .vertex-whatsapp-tooltip-arrow {
    position: absolute;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid #ffffff;
    filter: drop-shadow(2px 0 2px rgba(0, 0, 0, 0.05));
  }

  /* Ripple Effect */
  .vertex-whatsapp-ripple {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(37, 211, 102, 0.3);
    transition: all 0.6s ease;
  }

  .vertex-whatsapp:active .vertex-whatsapp-ripple {
    width: 200px;
    height: 200px;
    opacity: 0;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .vertex-whatsapp {
      bottom: 80px;
      right: 20px;
    }

    .vertex-whatsapp-button {
      width: 55px;
      height: 55px;
    }

    .vertex-whatsapp-icon {
      font-size: 28px;
    }

    .vertex-whatsapp-badge {
      width: 22px;
      height: 22px;
      top: -4px;
      right: -4px;
    }

    .vertex-whatsapp-badge span {
      font-size: 11px;
    }

    .vertex-whatsapp-tooltip {
      right: 70px;
    }

    .vertex-whatsapp-tooltip-content {
      padding: 12px 16px;
    }

    .vertex-whatsapp-tooltip-text {
      font-size: 13px;
    }

    .vertex-whatsapp-tooltip-status {
      font-size: 11px;
    }
  }

  @media (max-width: 480px) {
    .vertex-whatsapp {
      bottom: 70px;
      right: 15px;
    }

    .vertex-whatsapp-button {
      width: 50px;
      height: 50px;
    }

    .vertex-whatsapp-icon {
      font-size: 26px;
    }

    .vertex-whatsapp-tooltip {
      display: none;
    }
  }

  /* Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    .vertex-whatsapp-icon {
      animation: none;
    }

    .vertex-whatsapp-pulse {
      animation: none;
    }

    .vertex-whatsapp-badge {
      animation: none;
    }
  }

  /* High Contrast Mode */
  @media (prefers-contrast: high) {
    .vertex-whatsapp-button {
      background: #075E54;
      border: 2px solid #ffffff;
    }

    .vertex-whatsapp-pulse {
      display: none;
    }
  }

  /* Print Styles */
  @media print {
    .vertex-whatsapp {
      display: none !important;
    }
  }
`;

export default WhatsAppButton;