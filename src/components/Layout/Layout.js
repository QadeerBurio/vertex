import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../WhatsAppButton';
import AIAssistant from '../AIAssistant';

const Layout = ({ children }) => {
  return (
    <>
      {/* Layout Styles */}
      <style>{layoutStyles}</style>
      
      <div className="vertex-layout">
        <Navbar />
        <main className="vertex-main">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <AIAssistant />
      </div>
    </>
  );
};

// ============================================
// CUSTOM CSS STYLES FOR LAYOUT (SAME FILE)
// ============================================
const layoutStyles = `
  /* Layout Container */
  .vertex-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }

  /* Main Content Area */
  .vertex-main {
    flex: 1;
    position: relative;
    z-index: 1;
    background: #ffffff;
  }

  /* Smooth Page Transitions */
  .vertex-main > * {
    animation: pageFadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes pageFadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Page Loading State */
  .vertex-page-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
  }

  .vertex-page-spinner {
    width: 48px;
    height: 48px;
    border: 3px solid #e4e4e7;
    border-top-color: #2596be;
    border-radius: 50%;
    animation: pageSpin 0.8s linear infinite;
  }

  @keyframes pageSpin {
    to { transform: rotate(360deg); }
  }

  /* Section Spacing */
  .vertex-section {
    padding: 120px 0;
  }

  .vertex-section-sm {
    padding: 80px 0;
  }

  .vertex-section-lg {
    padding: 160px 0;
  }

  @media (max-width: 768px) {
    .vertex-section {
      padding: 80px 0;
    }
    
    .vertex-section-sm {
      padding: 60px 0;
    }
    
    .vertex-section-lg {
      padding: 100px 0;
    }
  }

  /* Container */
  .vertex-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .vertex-container-sm {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .vertex-container-lg {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* Grid Systems */
  .vertex-grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  .vertex-grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .vertex-grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  @media (max-width: 1024px) {
    .vertex-grid-3,
    .vertex-grid-4 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .vertex-grid-2,
    .vertex-grid-3,
    .vertex-grid-4 {
      grid-template-columns: 1fr;
    }
  }

  /* Flex Utilities */
  .vertex-flex {
    display: flex;
  }

  .vertex-flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vertex-flex-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .vertex-flex-column {
    display: flex;
    flex-direction: column;
  }

  /* Text Alignment */
  .vertex-text-center { text-align: center; }
  .vertex-text-left { text-align: left; }
  .vertex-text-right { text-align: right; }

  /* Spacing Utilities */
  .vertex-mt-1 { margin-top: 10px; }
  .vertex-mt-2 { margin-top: 20px; }
  .vertex-mt-3 { margin-top: 30px; }
  .vertex-mt-4 { margin-top: 40px; }
  .vertex-mt-5 { margin-top: 50px; }

  .vertex-mb-1 { margin-bottom: 10px; }
  .vertex-mb-2 { margin-bottom: 20px; }
  .vertex-mb-3 { margin-bottom: 30px; }
  .vertex-mb-4 { margin-bottom: 40px; }
  .vertex-mb-5 { margin-bottom: 50px; }

  .vertex-my-1 { margin: 10px 0; }
  .vertex-my-2 { margin: 20px 0; }
  .vertex-my-3 { margin: 30px 0; }
  .vertex-my-4 { margin: 40px 0; }
  .vertex-my-5 { margin: 50px 0; }

  .vertex-p-1 { padding: 10px; }
  .vertex-p-2 { padding: 20px; }
  .vertex-p-3 { padding: 30px; }
  .vertex-p-4 { padding: 40px; }
  .vertex-p-5 { padding: 50px; }

  /* Gradient Text */
  .vertex-gradient-text {
    background: linear-gradient(135deg, #2596be 0%, #3aacd8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Section Backgrounds */
  .vertex-bg-primary {
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 100%);
  }

  .vertex-bg-dark {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  }

  .vertex-bg-light {
    background: #fafafa;
  }

  .vertex-bg-gray {
    background: #f4f4f5;
  }

  .vertex-bg-white {
    background: #ffffff;
  }

  /* Overlay */
  .vertex-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .vertex-overlay-dark {
    background: rgba(0, 0, 0, 0.5);
  }

  .vertex-overlay-primary {
    background: rgba(37, 150, 190, 0.8);
  }

  /* Position Relative */
  .vertex-relative {
    position: relative;
  }

  .vertex-absolute {
    position: absolute;
  }

  /* Z-index */
  .vertex-z-1 { z-index: 1; }
  .vertex-z-10 { z-index: 10; }
  .vertex-z-100 { z-index: 100; }

  /* Overflow Hidden */
  .vertex-overflow-hidden {
    overflow: hidden;
  }

  /* Width */
  .vertex-w-full { width: 100%; }
  .vertex-w-auto { width: auto; }

  /* Height */
  .vertex-h-full { height: 100%; }
  .vertex-min-h-screen { min-height: 100vh; }

  /* Responsive Visibility */
  @media (max-width: 768px) {
    .vertex-hide-mobile {
      display: none !important;
    }
  }

  @media (min-width: 769px) {
    .vertex-hide-desktop {
      display: none !important;
    }
  }

  /* Scroll to Top Button Animation */
  .vertex-scroll-top-visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .vertex-scroll-top-hidden {
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
  }

  /* Page Transition Effect */
  .vertex-page-enter {
    opacity: 0;
    transform: translateY(20px);
  }

  .vertex-page-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .vertex-page-exit {
    opacity: 1;
  }

  .vertex-page-exit-active {
    opacity: 0;
    transition: all 0.3s ease;
  }

  /* Loading Skeleton */
  .vertex-skeleton {
    background: linear-gradient(90deg, #f4f4f5 25%, #e4e4e7 50%, #f4f4f5 75%);
    background-size: 200% 100%;
    animation: skeletonLoading 1.5s infinite;
    border-radius: 8px;
  }

  @keyframes skeletonLoading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  /* Glass Effect */
  .vertex-glass {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .vertex-glass-dark {
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  /* Shadow Effects */
  .vertex-shadow-sm {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .vertex-shadow-md {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }

  .vertex-shadow-lg {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
  }

  .vertex-shadow-xl {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  }

  /* Border Radius */
  .vertex-rounded-sm { border-radius: 8px; }
  .vertex-rounded-md { border-radius: 12px; }
  .vertex-rounded-lg { border-radius: 16px; }
  .vertex-rounded-xl { border-radius: 20px; }
  .vertex-rounded-2xl { border-radius: 24px; }
  .vertex-rounded-full { border-radius: 50%; }

  /* Focus Styles */
  .vertex-focus-ring:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 150, 190, 0.2);
    border-color: #2596be;
  }

  /* Disabled State */
  .vertex-disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }

  /* Print Styles */
  @media print {
    .vertex-layout {
      background: #ffffff;
    }
    
    .vertex-hide-print {
      display: none !important;
    }
  }

  /* High Contrast Mode */
  @media (prefers-contrast: high) {
    .vertex-glass,
    .vertex-glass-dark {
      backdrop-filter: none;
      background: #ffffff;
    }
  }

  /* Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    .vertex-main > * {
      animation: none;
    }
    
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default Layout;