import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, FaInstagram, FaLinkedin, FaTwitter, 
  FaYoutube, FaArrowRight, FaMapMarkerAlt, FaPhone, FaEnvelope,
  FaPaperPlane, FaCheckCircle
} from 'react-icons/fa';
import Logo from '../Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true);
      setEmail('');
      setLoading(false);
      
      // Reset after 5 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }, 1500);
  };

  const footerLinks = {
    services: [
      { name: 'Mobile Apps', path: '/services/mobile-apps' },
      { name: 'Web Development', path: '/services/web-development' },
      { name: 'AI Automation', path: '/services/ai-automation' },
      { name: 'SaaS Development', path: '/services/saas-development' },
      { name: 'Graphic Design', path: '/services/graphic-design' },
      { name: 'SEO & Marketing', path: '/services/seo-marketing' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Blog', path: '/blog' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' }
    ],
    resources: [
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Testimonials', path: '/about#testimonials' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' }
    ]
  };

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: '#0077B5' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: '#E4405F' },
    { icon: FaFacebook, href: '#', label: 'Facebook', color: '#1877F2' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: FaYoutube, href: '#', label: 'YouTube', color: '#FF0000' }
  ];

  return (
    <>
      {/* Footer Styles */}
      <style>{footerStyles}</style>
      
      <footer className="vertex-footer">
        {/* Newsletter Section */}
        <div className="vertex-footer-newsletter">
          <div className="vertex-footer-container">
            <div className="vertex-newsletter-grid">
              <div className="vertex-newsletter-content">
                <h3 className="vertex-newsletter-title">Subscribe to Our Newsletter</h3>
                <p className="vertex-newsletter-text">
                  Get the latest tech insights, updates, and exclusive offers delivered straight to your inbox.
                </p>
              </div>
              
              <form onSubmit={handleSubscribe} className="vertex-newsletter-form">
                <div className="vertex-newsletter-input-group">
                  <FaEnvelope className="vertex-input-icon" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="vertex-newsletter-input"
                    required
                  />
                  <button 
                    type="submit" 
                    className={`vertex-btn vertex-btn-subscribe ${loading ? 'vertex-btn-loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="vertex-loading-spinner"></span>
                    ) : subscribed ? (
                      <>
                        <FaCheckCircle /> Subscribed!
                      </>
                    ) : (
                      <>
                        Subscribe <FaPaperPlane />
                      </>
                    )}
                  </button>
                </div>
                {subscribed && (
                  <div className="vertex-subscribe-success">
                    <FaCheckCircle /> Thank you for subscribing! Check your inbox.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="vertex-footer-main">
          <div className="vertex-footer-container">
            <div className="vertex-footer-grid">
              
              {/* Company Info */}
              <div className="vertex-footer-brand">
                <Logo white />
                <p className="vertex-footer-description">
                  VertexFlow Technologies is a leading software development and digital agency 
                  specializing in cutting-edge solutions for businesses worldwide. We transform 
                  ideas into powerful digital products.
                </p>
                
                <div className="vertex-footer-contact">
                  <div className="vertex-contact-item">
                    <div className="vertex-contact-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="vertex-contact-text">
                      <span className="vertex-contact-label">Location</span>
                      <span>Islamabad, Pakistan</span>
                    </div>
                  </div>
                  
                  <div className="vertex-contact-item">
                    <div className="vertex-contact-icon">
                      <FaPhone />
                    </div>
                    <div className="vertex-contact-text">
                      <span className="vertex-contact-label">Phone</span>
                      <span>+92 300 1234567</span>
                    </div>
                  </div>
                  
                  <div className="vertex-contact-item">
                    <div className="vertex-contact-icon">
                      <FaEnvelope />
                    </div>
                    <div className="vertex-contact-text">
                      <span className="vertex-contact-label">Email</span>
                      <span>info@vertexflow.tech</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="vertex-social-links">
                  <span className="vertex-social-title">Follow Us</span>
                  <div className="vertex-social-icons">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="vertex-social-icon"
                        aria-label={social.label}
                        style={{ '--social-color': social.color }}
                      >
                        <social.icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services Column */}
              <div className="vertex-footer-column">
                <h4 className="vertex-footer-heading">Services</h4>
                <ul className="vertex-footer-links">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} className="vertex-footer-link">
                        <FaArrowRight className="vertex-link-arrow" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div className="vertex-footer-column">
                <h4 className="vertex-footer-heading">Company</h4>
                <ul className="vertex-footer-links">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} className="vertex-footer-link">
                        <FaArrowRight className="vertex-link-arrow" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Column */}
              <div className="vertex-footer-column">
                <h4 className="vertex-footer-heading">Resources</h4>
                <ul className="vertex-footer-links">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path} className="vertex-footer-link">
                        <FaArrowRight className="vertex-link-arrow" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="vertex-footer-bottom">
          <div className="vertex-footer-container">
            <div className="vertex-bottom-content">
              <p className="vertex-copyright">
                © {currentYear} <span>VertexFlow Technologies</span>. All rights reserved.
              </p>
              <div className="vertex-bottom-links">
                <Link to="/privacy" className="vertex-bottom-link">Privacy Policy</Link>
                <span className="vertex-bottom-divider">|</span>
                <Link to="/terms" className="vertex-bottom-link">Terms of Service</Link>
                <span className="vertex-bottom-divider">|</span>
                <Link to="/cookies" className="vertex-bottom-link">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button 
          className="vertex-back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <FaArrowRight />
        </button>
      </footer>
    </>
  );
};

// ============================================
// CUSTOM CSS STYLES FOR FOOTER (SAME FILE)
// ============================================
const footerStyles = `
  /* Footer Container */
  .vertex-footer {
    background: #0a0a0a;
    color: #ffffff;
    position: relative;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .vertex-footer-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* Newsletter Section */
  .vertex-footer-newsletter {
    background: linear-gradient(135deg, #111111 0%, #1a1a1a 100%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 60px 0;
  }

  .vertex-newsletter-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
  }

  @media (max-width: 768px) {
    .vertex-newsletter-grid {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }

  .vertex-newsletter-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 12px;
    letter-spacing: -0.02em;
  }

  .vertex-newsletter-text {
    font-size: 16px;
    color: #9ca3af;
    line-height: 1.6;
    margin: 0;
  }

  .vertex-newsletter-form {
    width: 100%;
  }

  .vertex-newsletter-input-group {
    display: flex;
    align-items: center;
    background: #1f1f1f;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    padding: 6px 6px 6px 20px;
    transition: all 0.3s ease;
    position: relative;
  }

  .vertex-newsletter-input-group:focus-within {
    border-color: #2596be;
    box-shadow: 0 0 0 3px rgba(37, 150, 190, 0.1);
  }

  .vertex-input-icon {
    color: #6b7280;
    font-size: 18px;
    flex-shrink: 0;
  }

  .vertex-newsletter-input {
    flex: 1;
    background: transparent;
    border: none;
    padding: 16px 16px;
    color: #ffffff;
    font-size: 16px;
    outline: none;
    font-family: 'Inter', sans-serif;
  }

  .vertex-newsletter-input::placeholder {
    color: #6b7280;
  }

  .vertex-btn-subscribe {
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 100%);
    color: #ffffff;
    border: none;
    padding: 16px 32px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    flex-shrink: 0;
    font-family: 'Inter', sans-serif;
  }

  .vertex-btn-subscribe:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 150, 190, 0.4);
  }

  .vertex-btn-subscribe:active {
    transform: translateY(0);
  }

  .vertex-btn-loading {
    opacity: 0.7;
    pointer-events: none;
  }

  .vertex-loading-spinner {
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .vertex-subscribe-success {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #10b981;
    font-size: 14px;
    margin-top: 12px;
    animation: fadeInUp 0.4s ease;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 640px) {
    .vertex-newsletter-input-group {
      flex-direction: column;
      background: transparent;
      border: none;
      padding: 0;
      gap: 12px;
    }
    
    .vertex-input-icon {
      display: none;
    }
    
    .vertex-newsletter-input {
      background: #1f1f1f;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 50px;
      width: 100%;
      padding: 16px 20px;
    }
    
    .vertex-btn-subscribe {
      width: 100%;
      justify-content: center;
    }
  }

  /* Main Footer Content */
  .vertex-footer-main {
    padding: 80px 0 60px;
  }

  .vertex-footer-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 48px;
  }

  @media (max-width: 1024px) {
    .vertex-footer-grid {
      grid-template-columns: 1fr 1fr;
    }
    
    .vertex-footer-brand {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 640px) {
    .vertex-footer-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  /* Brand Section */
  .vertex-footer-description {
    color: #9ca3af;
    line-height: 1.8;
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 15px;
    max-width: 400px;
  }

  /* Contact Items */
  .vertex-footer-contact {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .vertex-contact-item {
    display: flex;
    align-items: center;
    gap: 16px;
    color: #9ca3af;
  }

  .vertex-contact-icon {
    width: 44px;
    height: 44px;
    background: rgba(37, 150, 190, 0.1);
    border: 1px solid rgba(37, 150, 190, 0.2);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2596be;
    font-size: 16px;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .vertex-contact-item:hover .vertex-contact-icon {
    background: #2596be;
    color: #ffffff;
    border-color: #2596be;
  }

  .vertex-contact-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .vertex-contact-label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #6b7280;
    font-weight: 600;
  }

  /* Social Links */
  .vertex-social-links {
    margin-top: 32px;
    padding-top: 28px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .vertex-social-title {
    font-size: 14px;
    color: #9ca3af;
    margin-bottom: 16px;
    display: block;
    font-weight: 500;
  }

  .vertex-social-icons {
    display: flex;
    gap: 12px;
  }

  .vertex-social-icon {
    width: 42px;
    height: 42px;
    background: #1f1f1f;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9ca3af;
    font-size: 18px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .vertex-social-icon:hover {
    background: var(--social-color);
    color: #ffffff;
    border-color: var(--social-color);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  /* Footer Columns */
  .vertex-footer-column {
    min-width: 0;
  }

  .vertex-footer-heading {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 24px;
    position: relative;
    padding-bottom: 16px;
  }

  .vertex-footer-heading::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 3px;
    background: #2596be;
    border-radius: 2px;
  }

  .vertex-footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .vertex-footer-link {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #9ca3af;
    text-decoration: none;
    font-size: 15px;
    transition: all 0.3s ease;
    padding: 4px 0;
  }

  .vertex-link-arrow {
    font-size: 10px;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
    color: #2596be;
  }

  .vertex-footer-link:hover {
    color: #2596be;
    padding-left: 4px;
  }

  .vertex-footer-link:hover .vertex-link-arrow {
    opacity: 1;
    transform: translateX(0);
  }

  /* Bottom Bar */
  .vertex-footer-bottom {
    background: #0d0d0d;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding: 24px 0;
  }

  .vertex-bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  @media (max-width: 640px) {
    .vertex-bottom-content {
      flex-direction: column;
      text-align: center;
    }
  }

  .vertex-copyright {
    color: #6b7280;
    font-size: 14px;
    margin: 0;
  }

  .vertex-copyright span {
    color: #2596be;
    font-weight: 600;
  }

  .vertex-bottom-links {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .vertex-bottom-link {
    color: #6b7280;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
  }

  .vertex-bottom-link:hover {
    color: #2596be;
  }

  .vertex-bottom-divider {
    color: #374151;
    font-size: 14px;
  }

  /* Back to Top Button */
  .vertex-back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 100%);
    color: #ffffff;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    box-shadow: 0 4px 15px rgba(37, 150, 190, 0.4);
    transition: all 0.3s ease;
    transform: rotate(-90deg);
    z-index: 998;
  }

  .vertex-back-to-top:hover {
    transform: rotate(-90deg) translateY(-3px);
    box-shadow: 0 8px 25px rgba(37, 150, 190, 0.6);
  }

  @media (max-width: 640px) {
    .vertex-back-to-top {
      bottom: 20px;
      right: 20px;
      width: 42px;
      height: 42px;
      font-size: 16px;
    }
  }
`;

export default Footer;