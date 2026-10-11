import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import Logo from '../Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const services = [
    { name: 'Mobile Apps', path: '/services/mobile-apps' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'AI & Automation', path: '/services/ai-automation' },
    { name: 'SaaS Development', path: '/services/saas-development' },
    { name: 'Graphic Design', path: '/services/graphic-design' },
    { name: 'SEO & Marketing', path: '/services/seo-marketing' }
  ];

  return (
    <>
      {/* Navbar Styles */}
      <style>{navbarStyles}</style>
      
      <nav className={`vertex-navbar ${scrolled ? 'vertex-navbar-scrolled' : 'vertex-navbar-transparent'}`}>
        <div className="vertex-navbar-container">
          {/* Logo */}
          <Link to="/" className="vertex-logo-wrapper">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="vertex-desktop-menu">
            <Link to="/" className="vertex-nav-link">
              Home
            </Link>
            
            <div 
              className="vertex-dropdown-wrapper"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link to="/services" className="vertex-nav-link vertex-nav-link-with-icon">
                <span>Services</span>
                <FaChevronDown className="vertex-dropdown-icon" />
              </Link>
              
              {servicesDropdown && (
                <div className="vertex-dropdown-menu">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="vertex-dropdown-item"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/portfolio" className="vertex-nav-link">
              Portfolio
            </Link>
            <Link to="/about" className="vertex-nav-link">
              About
            </Link>
            <Link to="/blog" className="vertex-nav-link">
              Blog
            </Link>
            <Link to="/careers" className="vertex-nav-link">
              Careers
            </Link>
            <Link to="/contact" className="vertex-btn vertex-btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`vertex-mobile-toggle ${isOpen ? 'vertex-mobile-toggle-active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`vertex-mobile-menu ${isOpen ? 'vertex-mobile-menu-open' : ''}`}>
          <Link to="/" className="vertex-mobile-link">Home</Link>
          <Link to="/services" className="vertex-mobile-link">Services</Link>
          <Link to="/portfolio" className="vertex-mobile-link">Portfolio</Link>
          <Link to="/about" className="vertex-mobile-link">About</Link>
          <Link to="/blog" className="vertex-mobile-link">Blog</Link>
          <Link to="/careers" className="vertex-mobile-link">Careers</Link>
          <Link to="/contact" className="vertex-btn vertex-btn-primary vertex-mobile-btn">
            Get Started
          </Link>
        </div>
      </nav>
    </>
  );
};

// ============================================
// CUSTOM CSS STYLES FOR NAVBAR (SAME FILE)
// ============================================
const navbarStyles = `
  /* Navbar Container */
  .vertex-navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 0;
  }

  /* Transparent Navbar (Top of page) */
  .vertex-navbar-transparent {
    background: transparent;
    box-shadow: none;
  }

  /* Scrolled Navbar */
  .vertex-navbar-scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  /* Navbar Inner Container */
  .vertex-navbar-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
  }

  /* Logo Wrapper */
  .vertex-logo-wrapper {
    display: flex;
    align-items: center;
    text-decoration: none;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  .vertex-logo-wrapper:hover {
    transform: scale(1.02);
  }

  /* Desktop Menu */
  .vertex-desktop-menu {
    display: none;
    align-items: center;
    gap: 35px;
  }

  @media (min-width: 1024px) {
    .vertex-desktop-menu {
      display: flex;
    }
  }

  /* Navigation Links */
  .vertex-nav-link {
    color: #ffffff;
    font-weight: 500;
    font-size: 15px;
    position: relative;
    padding: 8px 0;
    text-decoration: none;
    transition: color 0.3s ease;
    letter-spacing: 0.01em;
    white-space: nowrap;
  }

  .vertex-navbar-scrolled .vertex-nav-link {
    color: #374151;
  }

  /* Nav Link Underline Effect */
  .vertex-nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #2596be;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    border-radius: 2px;
  }

  .vertex-nav-link:hover {
    color: #2596be;
  }

  .vertex-nav-link:hover::after {
    transform: scaleX(1);
  }

  /* Nav Link with Icon */
  .vertex-nav-link-with-icon {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .vertex-dropdown-icon {
    font-size: 10px;
    transition: transform 0.3s ease;
  }

  .vertex-dropdown-wrapper:hover .vertex-dropdown-icon {
    transform: rotate(180deg);
  }

  /* Dropdown Wrapper */
  .vertex-dropdown-wrapper {
    position: relative;
  }

  /* Dropdown Menu */
  .vertex-dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 12px;
    width: 280px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(0, 0, 0, 0.08);
    padding: 12px 8px;
    animation: dropdownFadeIn 0.3s ease;
    z-index: 100;
  }

  @keyframes dropdownFadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Dropdown Items */
  .vertex-dropdown-item {
    display: block;
    padding: 14px 20px;
    color: #374151;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    border-radius: 10px;
    transition: all 0.2s ease;
    margin: 2px 0;
  }

  .vertex-dropdown-item:hover {
    background: #f0f9fc;
    color: #2596be;
    padding-left: 24px;
  }

  /* Primary Button */
  .vertex-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 28px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: none;
    cursor: pointer;
    letter-spacing: 0.01em;
    white-space: nowrap;
  }

  .vertex-btn-primary {
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 100%);
    color: #ffffff;
    box-shadow: 0 4px 15px rgba(37, 150, 190, 0.3);
    position: relative;
    overflow: hidden;
  }

  .vertex-btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  .vertex-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 150, 190, 0.4);
    color: #ffffff;
  }

  .vertex-btn-primary:hover::before {
    left: 100%;
  }

  .vertex-btn-primary:active {
    transform: translateY(0);
  }

  /* Mobile Toggle Button */
  .vertex-mobile-toggle {
    display: flex;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 10px;
    z-index: 1001;
  }

  .vertex-mobile-toggle span {
    display: block;
    width: 28px;
    height: 2.5px;
    background: #ffffff;
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  .vertex-navbar-scrolled .vertex-mobile-toggle span {
    background: #1a1a1a;
  }

  .vertex-mobile-toggle-active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
    background: #1a1a1a;
  }

  .vertex-mobile-toggle-active span:nth-child(2) {
    opacity: 0;
    transform: translateX(-20px);
  }

  .vertex-mobile-toggle-active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
    background: #1a1a1a;
  }

  @media (min-width: 1024px) {
    .vertex-mobile-toggle {
      display: none;
    }
  }

  /* Mobile Menu */
  .vertex-mobile-menu {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    padding: 24px;
    gap: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }

  .vertex-mobile-menu-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  @media (min-width: 1024px) {
    .vertex-mobile-menu {
      display: none;
    }
  }

  /* Mobile Menu Links */
  .vertex-mobile-link {
    display: block;
    padding: 14px 20px;
    color: #374151;
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
    border-radius: 12px;
    transition: all 0.2s ease;
  }

  .vertex-mobile-link:hover {
    background: #f0f9fc;
    color: #2596be;
    padding-left: 28px;
  }

  /* Mobile Button */
  .vertex-mobile-btn {
    width: 100%;
    text-align: center;
    margin-top: 8px;
    padding: 16px;
    font-size: 16px;
  }
`;

export default Navbar;