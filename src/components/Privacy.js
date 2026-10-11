import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaShieldAlt, FaLock, FaEye, FaCookie, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <>
      <style>{privacyStyles}</style>
      
      <Helmet>
        <title>Privacy Policy | VertexFlow Technologies</title>
        <meta name="description" content="VertexFlow Technologies Privacy Policy - Learn how we collect, use, and protect your personal information." />
      </Helmet>

      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="privacy-hero-bg"></div>
        <div className="privacy-hero-content">
          <span className="privacy-hero-badge" data-aos="fade-down">
            <FaShieldAlt /> Legal
          </span>
          <h1 className="privacy-hero-title" data-aos="fade-up">
            Privacy <span className="privacy-hero-highlight">Policy</span>
          </h1>
          <p className="privacy-hero-text" data-aos="fade-up" data-aos-delay="100">
            Last updated: January 1, 2024
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content">
        <div className="vertex-container">
          <div className="privacy-grid">
            {/* Sidebar Navigation */}
            <div className="privacy-sidebar" data-aos="fade-right">
              <div className="privacy-nav-card">
                <h3 className="privacy-nav-title">Contents</h3>
                <ul className="privacy-nav-list">
                  <li><a href="#introduction">1. Introduction</a></li>
                  <li><a href="#information-we-collect">2. Information We Collect</a></li>
                  <li><a href="#how-we-use">3. How We Use Your Information</a></li>
                  <li><a href="#data-sharing">4. Data Sharing & Disclosure</a></li>
                  <li><a href="#cookies">5. Cookies & Tracking</a></li>
                  <li><a href="#data-security">6. Data Security</a></li>
                  <li><a href="#your-rights">7. Your Rights</a></li>
                  <li><a href="#third-party">8. Third-Party Services</a></li>
                  <li><a href="#children">9. Children's Privacy</a></li>
                  <li><a href="#changes">10. Changes to This Policy</a></li>
                  <li><a href="#contact-us">11. Contact Us</a></li>
                </ul>
              </div>

              <div className="privacy-contact-card">
                <FaEnvelope className="privacy-contact-icon" />
                <h4>Questions?</h4>
                <p>If you have any questions about this Privacy Policy, please contact us.</p>
                <Link to="/contact" className="privacy-contact-btn">
                  Contact Us <FaArrowRight />
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="privacy-main" data-aos="fade-left">
              <div className="privacy-card">
                <div className="privacy-intro">
                  <div className="privacy-intro-icon">
                    <FaShieldAlt />
                  </div>
                  <p className="privacy-intro-text">
                    At <strong>VertexFlow Technologies</strong>, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully.
                  </p>
                </div>

                {/* Section 1 */}
                <div id="introduction" className="privacy-section">
                  <h2 className="privacy-section-title">
                    <span className="privacy-section-number">01</span>
                    1. Introduction
                  </h2>
                  <p>VertexFlow Technologies ("we," "our," or "us") is committed to protecting the privacy of our users ("you" or "your"). This Privacy Policy applies to all information collected through our website (vertexflow.tech), mobile applications, and any related services.</p>
                  <p>By accessing or using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.</p>
                </div>

                {/* Section 2 */}
                <div id="information-we-collect" className="privacy-section">
                  <h2 className="privacy-section-title">
                    <span className="privacy-section-number">02</span>
                    2. Information We Collect
                  </h2>
                  
                  <h3>Personal Information</h3>
                  <p>We may collect the following types of personal information:</p>
                  <ul className="privacy-list">
                    <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                    <li><strong>Project Information:</strong> Project details, requirements, budget information</li>
                    <li><strong>Communication Data:</strong> Messages, inquiries, and any correspondence</li>
                    <li><strong>Career Applications:</strong> Resume, cover letter, portfolio links, work history</li>
                  </ul>

                  <h3>Automatically Collected Information</h3>
                  <p>When you visit our website, we automatically collect:</p>
                  <ul className="privacy-list">
                    <li><strong>Usage Data:</strong> Pages visited, time spent, clicks, scroll depth</li>
                    <li><strong>Device Information:</strong> Browser type, operating system, device type</li>
                    <li><strong>IP Address:</strong> For analytics and security purposes</li>
                    <li><strong>Cookies:</strong> Session data and preferences (see Section 5)</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div id="how-we-use" className="privacy-section">
                  <h2 className="privacy-section-title">
                    <span className="privacy-section-number">03</span>
                    3. How We Use Your Information
                  </h2>
                  <p>We use the collected information for the following purposes:</p>
                  <ul className="privacy-list">
                    <li><strong>Service Delivery:</strong> To provide, maintain, and improve our services</li>
                    <li><strong>Communication:</strong> To respond to inquiries, send project updates, and provide customer support</li>
                    <li><strong>Marketing:</strong> To send newsletters, promotional materials (with consent)</li>
                    <li><strong>Analytics:</strong> To analyze website usage and improve user experience</li>
                    <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                    <li><strong>Security:</strong> To detect and prevent fraudulent or unauthorized activities</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div id="data-sharing" className="privacy-section">
                  <h2 className="privacy-section-title">
                    <span className="privacy-section-number">04</span>
                    4. Data Sharing & Disclosure
                  </h2>
                  <p>We do <strong>not</strong> sell your personal information. We may share your information in the following circumstances:</p>
                  <ul className="privacy-list">
                    <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in our operations (hosting, analytics, email)</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or asset sale</li>
                    <li><strong>With Consent:</strong> When you have given explicit permission to share</li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div id="cookies" className="privacy-section">
                  <h2 className="privacy-section-title">
                    <span className="privacy-section-number">05</span>
                    5. Cookies & Tracking Technologies
                  </h2>
                  
                  <div className="privacy-info-box">
                    <FaCookie className="privacy-info-icon" />
                    <div>
                      <h4>Cookie Notice</h4>
                      <p>Our website uses cookies to enhance your browsing experience. By continuing to use our site, you agree to our use of cookies.</p>
                    </div>
                  </div>

                  <p>We use the following types of cookies:</p>
                  <ul className="privacy-list">
                    <li><strong>Essential Cookies:</strong> Required for website functionality (session management, security)</li>
                    <li><strong>Analytics Cookies:</strong> To understand how visitors interact with our website (Google Analytics)</li>
                    <li><strong>Preference Cookies:</strong> To remember your settings and preferences</li>
                    <li><strong>Marketing Cookies:</strong> To deliver relevant advertisements (with consent)</li>
                  </ul>
                  <p>You can control cookies through your browser settings. Disabling certain cookies may affect website functionality.</p>
                </div>

                {/* Section 6 */}
                <div id="data-security" className="privacy-section">
                  <h2 className="privacy-section-title">
                    <span className="privacy-section-number">06</span>
                    6. Data Security
                  </h2>
                  
                  <div className="privacy-security-grid">
                    <div className="privacy-security-item">
                      <FaLock className="privacy-security-icon" />
                      <h4>Encryption</h4>
                      <p>All data is encrypted using industry-standard SSL/TLS protocols during transmission.</p>
                    </div>
                    <div className="privacy-security-item">
                      <FaShieldAlt className="privacy-security-icon" />
                      <h4>Access Control</h4>
                      <p>Strict access controls ensure only authorized personnel can access your data.</p>
                    </div>
                    <div className="privacy-security-item">
                      <FaEye className="privacy-security-icon" />
                      <h4>Monitoring</h4>
                      <p>Continuous security monitoring and regular vulnerability assessments.</p>
                    </div>
                  </div>
                  
                  <p>While we implement robust security measures, no method of transmission over the Internet is 100% secure. We strive to protect your information but cannot guarantee absolute security.</p>
                </div>

                {/* Section 7 */}
                <div id="your-rights" className="privacy-section">
                  <h2 className="privacy-section-title">
                    <span className="privacy-section-number">07</span>
                    7. Your Rights
                  </h2>
                  <p>Depending on your location, you may have the following rights:</p>
                  <ul className="privacy-list">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                    <li><strong>Erasure:</strong> Request deletion of your personal data ("Right to be forgotten")</li>
                    <li><strong>Restriction:</strong> Limit processing of your data</li>
                    <li><strong>Portability:</strong> Receive your data in a structured format</li>
                    <li><strong>Objection:</strong> Object to processing for marketing purposes</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
                  </ul>
                  <p>To exercise any of these rights, please contact us at <strong>privacy@vertexflow.tech</strong>.</p>
                </div>

                {/* Section 8 */}
                <div id="third-party" className="privacy-section">
                  <h2 className="privacy-section-title">
                    <span className="privacy-section-number">08</span>
                    8. Third-Party Services
                  </h2>
                  <p>Our website may contain links to third-party websites or services. We use the following third-party services:</p>
                  <ul className="privacy-list">
                    <li><strong>Google Analytics:</strong> For website analytics and insights</li>
                    <li><strong>Calendly:</strong> For appointment scheduling</li>
                    <li><strong>WhatsApp:</strong> For customer communication</li>
                    <li><strong>Cloudinary:</strong> For image hosting and optimization</li>
                  </ul>
                  <p>These third parties have their own privacy policies. We encourage you to review their policies before providing any information.</p>
                </div>

                {/* Section 9 */}
                <div id="children" className="privacy-section">
                  <h2 className="privacy-section-title">
                    <span className="privacy-section-number">09</span>
                    9. Children's Privacy
                  </h2>
                  <p>Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately.</p>
                </div>

                {/* Section 10 */}
                <div id="changes" className="privacy-section">
                  <h2 className="privacy-section-title">
                    <span className="privacy-section-number">10</span>
                    10. Changes to This Policy
                  </h2>
                  <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.</p>
                  <div className="privacy-highlight-box">
                    <p><strong>Last Updated:</strong> January 1, 2024</p>
                  </div>
                </div>

                {/* Section 11 */}
                <div id="contact-us" className="privacy-section">
                  <h2 className="privacy-section-title">
                    <span className="privacy-section-number">11</span>
                    11. Contact Us
                  </h2>
                  <p>If you have questions about this Privacy Policy, please contact us:</p>
                  
                  <div className="privacy-contact-grid">
                    <div className="privacy-contact-method">
                      <FaEnvelope />
                      <div>
                        <h4>Email</h4>
                        <p>privacy@vertexflow.tech</p>
                      </div>
                    </div>
                    <div className="privacy-contact-method">
                      <FaEnvelope />
                      <div>
                        <h4>General Inquiries</h4>
                        <p>info@vertexflow.tech</p>
                      </div>
                    </div>
                  </div>

                  <Link to="/contact" className="privacy-main-contact-btn">
                    Contact Us <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ============================================
// CUSTOM CSS FOR PRIVACY PAGE
// ============================================
const privacyStyles = `
  .vertex-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* ========== HERO SECTION ========== */
  .privacy-hero {
    position: relative;
    background: linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e);
    padding: 160px 0 80px;
    overflow: hidden;
  }

  .privacy-hero-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 30% 50%, rgba(37,150,190,0.08) 0%, transparent 50%);
  }

  .privacy-hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 650px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .privacy-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    background: rgba(37,150,190,0.15);
    color: #7ccfe3;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.05em;
    margin-bottom: 24px;
    border: 1px solid rgba(37,150,190,0.3);
  }

  .privacy-hero-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 16px;
    line-height: 1.15;
  }

  .privacy-hero-highlight {
    background: linear-gradient(135deg, #2596be, #3aacd8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .privacy-hero-text {
    font-size: 1.05rem;
    color: rgba(255,255,255,0.7);
  }

  @media (max-width: 768px) {
    .privacy-hero {
      padding: 120px 0 60px;
    }
  }

  /* ========== CONTENT SECTION ========== */
  .privacy-content {
    padding: 80px 0 100px;
    background: #fafafa;
  }

  .privacy-grid {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 48px;
    align-items: start;
  }

  @media (max-width: 1024px) {
    .privacy-grid {
      grid-template-columns: 1fr;
    }
  }

  /* ========== SIDEBAR ========== */
  .privacy-sidebar {
    position: sticky;
    top: 100px;
  }

  @media (max-width: 1024px) {
    .privacy-sidebar {
      position: static;
    }
  }

  .privacy-nav-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 28px;
    border: 1px solid #f4f4f5;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    margin-bottom: 24px;
  }

  .privacy-nav-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid #f4f4f5;
  }

  .privacy-nav-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .privacy-nav-list a {
    display: block;
    padding: 10px 14px;
    color: #6b7280;
    text-decoration: none;
    font-size: 14px;
    border-radius: 10px;
    transition: all 0.2s ease;
    font-weight: 500;
  }

  .privacy-nav-list a:hover {
    color: #2596be;
    background: #f0f9fc;
    padding-left: 20px;
  }

  .privacy-contact-card {
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    border-radius: 20px;
    padding: 28px;
    color: #ffffff;
    text-align: center;
  }

  .privacy-contact-icon {
    font-size: 32px;
    margin-bottom: 16px;
    opacity: 0.9;
  }

  .privacy-contact-card h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .privacy-contact-card p {
    font-size: 13px;
    opacity: 0.85;
    margin-bottom: 20px;
    line-height: 1.5;
  }

  .privacy-contact-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: #ffffff;
    color: #2596be;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
  }

  .privacy-contact-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }

  /* ========== MAIN CONTENT ========== */
  .privacy-card {
    background: #ffffff;
    border-radius: 24px;
    padding: 48px;
    border: 1px solid #f4f4f5;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  }

  @media (max-width: 640px) {
    .privacy-card {
      padding: 28px 20px;
    }
  }

  .privacy-intro {
    display: flex;
    gap: 20px;
    padding: 28px;
    background: #f0f9fc;
    border-radius: 16px;
    margin-bottom: 40px;
    align-items: flex-start;
  }

  .privacy-intro-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 22px;
    flex-shrink: 0;
  }

  .privacy-intro-text {
    font-size: 15px;
    color: #374151;
    line-height: 1.7;
    margin: 0;
  }

  .privacy-intro-text strong {
    color: #2596be;
  }

  /* Sections */
  .privacy-section {
    margin-bottom: 48px;
    padding-bottom: 48px;
    border-bottom: 1px solid #f4f4f5;
  }

  .privacy-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .privacy-section-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .privacy-section-number {
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    flex-shrink: 0;
  }

  .privacy-section h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 17px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 24px 0 12px;
  }

  .privacy-section p {
    color: #4b5563;
    line-height: 1.8;
    margin-bottom: 16px;
    font-size: 15px;
  }

  .privacy-list {
    list-style: none;
    padding: 0;
    margin: 16px 0 24px;
  }

  .privacy-list li {
    padding: 10px 0 10px 24px;
    color: #4b5563;
    font-size: 15px;
    line-height: 1.6;
    position: relative;
  }

  .privacy-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 18px;
    width: 8px;
    height: 8px;
    background: #2596be;
    border-radius: 50%;
  }

  .privacy-list li strong {
    color: #1a1a1a;
  }

  /* Info Box */
  .privacy-info-box {
    display: flex;
    gap: 16px;
    padding: 24px;
    background: #fffbeb;
    border: 1px solid #fde68a;
    border-radius: 16px;
    margin: 20px 0;
    align-items: flex-start;
  }

  .privacy-info-icon {
    font-size: 28px;
    color: #f59e0b;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .privacy-info-box h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #92400e;
    margin-bottom: 4px;
  }

  .privacy-info-box p {
    font-size: 14px;
    color: #78350f;
    margin: 0;
  }

  /* Security Grid */
  .privacy-security-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 24px 0;
  }

  @media (max-width: 640px) {
    .privacy-security-grid {
      grid-template-columns: 1fr;
    }
  }

  .privacy-security-item {
    text-align: center;
    padding: 24px 16px;
    background: #fafafa;
    border-radius: 16px;
    border: 1px solid #f4f4f5;
  }

  .privacy-security-icon {
    font-size: 32px;
    color: #2596be;
    margin-bottom: 12px;
  }

  .privacy-security-item h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 8px;
  }

  .privacy-security-item p {
    font-size: 13px;
    color: #6b7280;
    margin: 0;
    line-height: 1.5;
  }

  /* Highlight Box */
  .privacy-highlight-box {
    padding: 16px 24px;
    background: #f0f9fc;
    border-left: 4px solid #2596be;
    border-radius: 0 12px 12px 0;
    margin: 20px 0;
  }

  .privacy-highlight-box p {
    margin: 0;
    color: #0a0a0a;
    font-size: 14px;
  }

  /* Contact Grid */
  .privacy-contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 20px 0 28px;
  }

  @media (max-width: 480px) {
    .privacy-contact-grid {
      grid-template-columns: 1fr;
    }
  }

  .privacy-contact-method {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 20px;
    background: #fafafa;
    border-radius: 14px;
    border: 1px solid #f4f4f5;
  }

  .privacy-contact-method svg {
    font-size: 24px;
    color: #2596be;
  }

  .privacy-contact-method h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #0a0a0a;
    margin-bottom: 2px;
  }

  .privacy-contact-method p {
    font-size: 13px;
    color: #6b7280;
    margin: 0;
  }

  .privacy-main-contact-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(37,150,190,0.3);
  }

  .privacy-main-contact-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37,150,190,0.5);
  }

  @media (max-width: 768px) {
    .privacy-content {
      padding: 60px 0 80px;
    }
  }
`;

export default Privacy;