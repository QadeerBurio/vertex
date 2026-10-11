import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
    FaCookie, FaShieldAlt, FaCheckCircle, FaTimesCircle,
    FaArrowRight, FaEnvelope, FaCog, FaDatabase
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cookies = () => {
  return (
    <>
      <style>{cookiesStyles}</style>
      
      <Helmet>
        <title>Cookie Policy | VertexFlow Technologies</title>
        <meta name="description" content="VertexFlow Technologies Cookie Policy - Learn how we use cookies and tracking technologies on our website." />
      </Helmet>

      {/* Hero Section */}
      <section className="cookie-hero">
        <div className="cookie-hero-bg"></div>
        <div className="cookie-hero-content">
          <span className="cookie-hero-badge" data-aos="fade-down">
            <FaCookie /> Legal
          </span>
          <h1 className="cookie-hero-title" data-aos="fade-up">
            Cookie <span className="cookie-hero-highlight">Policy</span>
          </h1>
          <p className="cookie-hero-text" data-aos="fade-up" data-aos-delay="100">
            Last updated: January 1, 2024
          </p>
        </div>
      </section>

      {/* Cookie Content */}
      <section className="cookie-content">
        <div className="vertex-container">
          <div className="cookie-grid">
            {/* Sidebar Navigation */}
            <div className="cookie-sidebar" data-aos="fade-right">
              <div className="cookie-nav-card">
                <h3 className="cookie-nav-title">Contents</h3>
                <ul className="cookie-nav-list">
                  <li><a href="#what-are-cookies">1. What Are Cookies?</a></li>
                  <li><a href="#how-we-use">2. How We Use Cookies</a></li>
                  <li><a href="#types-of-cookies">3. Types of Cookies We Use</a></li>
                  <li><a href="#third-party">4. Third-Party Cookies</a></li>
                  <li><a href="#cookie-list">5. Cookie List</a></li>
                  <li><a href="#your-choices">6. Your Choices</a></li>
                  <li><a href="#manage-cookies">7. How to Manage Cookies</a></li>
                  <li><a href="#changes">8. Changes to This Policy</a></li>
                  <li><a href="#contact">9. Contact Us</a></li>
                </ul>
              </div>

              <div className="cookie-info-card">
                <FaShieldAlt className="cookie-info-icon" />
                <h4>Your Privacy Matters</h4>
                <p>We are committed to being transparent about how we use cookies on our website.</p>
              </div>

              <div className="cookie-contact-card">
                <FaEnvelope className="cookie-contact-icon" />
                <h4>Questions?</h4>
                <p>Contact us for any questions about cookies.</p>
                <Link to="/contact" className="cookie-contact-btn">
                  Contact Us <FaArrowRight />
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="cookie-main" data-aos="fade-left">
              <div className="cookie-card">
                {/* Introduction */}
                <div className="cookie-intro">
                  <div className="cookie-intro-icon">
                    <FaCookie />
                  </div>
                  <p className="cookie-intro-text">
                    This Cookie Policy explains how <strong>VertexFlow Technologies</strong> ("we," "our," or "us") 
                    uses cookies and similar tracking technologies on our website. By using our website, you consent 
                    to the use of cookies as described in this policy.
                  </p>
                </div>

                {/* Section 1 */}
                <div id="what-are-cookies" className="cookie-section">
                  <h2 className="cookie-section-title">
                    <span className="cookie-section-number">01</span>
                    1. What Are Cookies?
                  </h2>
                  <p>Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. They are widely used to make websites work more efficiently, improve user experience, and provide information to website owners.</p>
                  
                  <p>Cookies can be:</p>
                  <ul className="cookie-list">
                    <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                    <li><strong>Persistent Cookies:</strong> Remain on your device until they expire or you delete them</li>
                    <li><strong>First-Party Cookies:</strong> Set by the website you are visiting</li>
                    <li><strong>Third-Party Cookies:</strong> Set by a domain other than the website you are visiting</li>
                  </ul>

                  <div className="cookie-info-box">
                    <FaCookie className="cookie-info-box-icon" />
                    <div>
                      <h4>Did You Know?</h4>
                      <p>Cookies have been around since 1994 and are used by virtually all modern websites to provide essential functionality.</p>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div id="how-we-use" className="cookie-section">
                  <h2 className="cookie-section-title">
                    <span className="cookie-section-number">02</span>
                    2. How We Use Cookies
                  </h2>
                  <p>We use cookies for the following purposes:</p>
                  
                  <div className="cookie-purpose-grid">
                    <div className="cookie-purpose-item">
                      <FaShieldAlt className="cookie-purpose-icon" />
                      <h4>Security</h4>
                      <p>To protect our website and users from malicious activity</p>
                    </div>
                    <div className="cookie-purpose-item">
                      <FaCog className="cookie-purpose-icon" />
                      <h4>Functionality</h4>
                      <p>To remember your preferences and settings</p>
                    </div>
                    <div className="cookie-purpose-item">
                      <FaDatabase className="cookie-purpose-icon" />
                      <h4>Analytics</h4>
                      <p>To understand how visitors use our website</p>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div id="types-of-cookies" className="cookie-section">
                  <h2 className="cookie-section-title">
                    <span className="cookie-section-number">03</span>
                    3. Types of Cookies We Use
                  </h2>
                  
                  <h3>Essential Cookies (Strictly Necessary)</h3>
                  <p>These cookies are required for the website to function properly. They enable core functionality such as security, network management, and accessibility. You may disable these by changing your browser settings, but this may affect how the website functions.</p>
                  
                  <h3>Performance & Analytics Cookies</h3>
                  <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve our website's performance and user experience.</p>
                  
                  <h3>Functional Cookies</h3>
                  <p>These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings. They may be set by us or by third-party providers whose services we have added to our pages.</p>
                  
                  <h3>Marketing Cookies</h3>
                  <p>These cookies track your browsing habits to deliver relevant advertisements and measure campaign effectiveness. They are usually placed by advertising networks with our permission.</p>

                  <div className="cookie-table-wrap">
                    <table className="cookie-table">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Purpose</th>
                          <th>Duration</th>
                          <th>Essential</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Session</td>
                          <td>Maintain user session</td>
                          <td>Browser close</td>
                          <td><FaCheckCircle className="cookie-table-yes" /> Yes</td>
                        </tr>
                        <tr>
                          <td>CSRF Token</td>
                          <td>Security protection</td>
                          <td>Session</td>
                          <td><FaCheckCircle className="cookie-table-yes" /> Yes</td>
                        </tr>
                        <tr>
                          <td>Analytics</td>
                          <td>Track usage patterns</td>
                          <td>2 years</td>
                          <td><FaTimesCircle className="cookie-table-no" /> No</td>
                        </tr>
                        <tr>
                          <td>Preferences</td>
                          <td>Remember settings</td>
                          <td>1 year</td>
                          <td><FaTimesCircle className="cookie-table-no" /> No</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="third-party" className="cookie-section">
                  <h2 className="cookie-section-title">
                    <span className="cookie-section-number">04</span>
                    4. Third-Party Cookies
                  </h2>
                  <p>We use the following third-party services that may set cookies on your device:</p>
                  
                  <ul className="cookie-list">
                    <li><strong>Google Analytics:</strong> For website analytics and performance monitoring. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                    <li><strong>Calendly:</strong> For appointment scheduling functionality. <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                    <li><strong>Cloudinary:</strong> For image optimization and delivery. <a href="https://cloudinary.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                  </ul>
                  
                  <p>These third parties may use cookies in accordance with their own privacy policies. We recommend reviewing their policies for more information.</p>
                </div>

                {/* Section 5 */}
                <div id="cookie-list" className="cookie-section">
                  <h2 className="cookie-section-title">
                    <span className="cookie-section-number">05</span>
                    5. Cookie List
                  </h2>
                  <p>Here is a detailed list of cookies we use on our website:</p>
                  
                  <div className="cookie-table-wrap">
                    <table className="cookie-table">
                      <thead>
                        <tr>
                          <th>Cookie Name</th>
                          <th>Provider</th>
                          <th>Type</th>
                          <th>Duration</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>_ga</td>
                          <td>Google</td>
                          <td>Analytics</td>
                          <td>2 years</td>
                          <td>Used to distinguish users</td>
                        </tr>
                        <tr>
                          <td>_gid</td>
                          <td>Google</td>
                          <td>Analytics</td>
                          <td>24 hours</td>
                          <td>Used to distinguish users</td>
                        </tr>
                        <tr>
                          <td>_gat</td>
                          <td>Google</td>
                          <td>Performance</td>
                          <td>1 minute</td>
                          <td>Used to throttle request rate</td>
                        </tr>
                        <tr>
                          <td>vf_session</td>
                          <td>VertexFlow</td>
                          <td>Essential</td>
                          <td>Session</td>
                          <td>Maintains user session</td>
                        </tr>
                        <tr>
                          <td>vf_prefs</td>
                          <td>VertexFlow</td>
                          <td>Functional</td>
                          <td>1 year</td>
                          <td>Remembers user preferences</td>
                        </tr>
                        <tr>
                          <td>vf_cookie_consent</td>
                          <td>VertexFlow</td>
                          <td>Functional</td>
                          <td>1 year</td>
                          <td>Stores cookie consent choice</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 6 */}
                <div id="your-choices" className="cookie-section">
                  <h2 className="cookie-section-title">
                    <span className="cookie-section-number">06</span>
                    6. Your Choices Regarding Cookies
                  </h2>
                  
                  <div className="cookie-choice-grid">
                    <div className="cookie-choice-card cookie-choice-accept">
                      <FaCheckCircle className="cookie-choice-icon" />
                      <h4>Accept All Cookies</h4>
                      <p>Get the full website experience with all features and personalization.</p>
                    </div>
                    <div className="cookie-choice-card cookie-choice-custom">
                      <FaCog className="cookie-choice-icon" />
                      <h4>Customize Settings</h4>
                      <p>Choose which types of cookies you want to allow on our website.</p>
                    </div>
                    <div className="cookie-choice-card cookie-choice-reject">
                      <FaTimesCircle className="cookie-choice-icon" />
                      <h4>Reject Optional Cookies</h4>
                      <p>Only allow essential cookies required for the website to function.</p>
                    </div>
                  </div>
                  
                  <p>When you first visit our website, you will see a cookie consent banner allowing you to manage your cookie preferences. You can change your preferences at any time.</p>
                </div>

                {/* Section 7 */}
                <div id="manage-cookies" className="cookie-section">
                  <h2 className="cookie-section-title">
                    <span className="cookie-section-number">07</span>
                    7. How to Manage Cookies
                  </h2>
                  <p>You can control and manage cookies through your browser settings. Here's how to do it in popular browsers:</p>
                  
                  <div className="cookie-browser-grid">
                    <div className="cookie-browser-item">
                      <strong>Google Chrome</strong>
                      <p>Settings → Privacy & Security → Cookies & Site Data</p>
                    </div>
                    <div className="cookie-browser-item">
                      <strong>Mozilla Firefox</strong>
                      <p>Options → Privacy & Security → Cookies & Site Data</p>
                    </div>
                    <div className="cookie-browser-item">
                      <strong>Safari</strong>
                      <p>Preferences → Privacy → Cookies & Website Data</p>
                    </div>
                    <div className="cookie-browser-item">
                      <strong>Microsoft Edge</strong>
                      <p>Settings → Site Permissions → Cookies & Site Data</p>
                    </div>
                  </div>
                  
                  <p>Please note that disabling certain cookies may affect the functionality of our website and your user experience.</p>

                  <div className="cookie-warning-box">
                    <FaShieldAlt />
                    <p><strong>Important:</strong> Blocking all cookies may prevent some parts of our website from functioning properly.</p>
                  </div>
                </div>

                {/* Section 8 */}
                <div id="changes" className="cookie-section">
                  <h2 className="cookie-section-title">
                    <span className="cookie-section-number">08</span>
                    8. Changes to This Cookie Policy
                  </h2>
                  <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically to stay informed about how we use cookies.</p>
                  
                  <div className="cookie-highlight-box">
                    <FaCheckCircle className="cookie-highlight-icon" />
                    <div>
                      <h4>Notification</h4>
                      <p>We will notify users of material changes to this Cookie Policy via our website or email.</p>
                    </div>
                  </div>
                </div>

                {/* Section 9 */}
                <div id="contact" className="cookie-section">
                  <h2 className="cookie-section-title">
                    <span className="cookie-section-number">09</span>
                    9. Contact Us
                  </h2>
                  <p>If you have any questions about our Cookie Policy, please contact us:</p>
                  
                  <div className="cookie-contact-grid">
                    <div className="cookie-contact-method">
                      <FaEnvelope />
                      <div>
                        <h4>Email</h4>
                        <p>privacy@vertexflow.tech</p>
                      </div>
                    </div>
                    <div className="cookie-contact-method">
                      <FaEnvelope />
                      <div>
                        <h4>General Inquiries</h4>
                        <p>info@vertexflow.tech</p>
                      </div>
                    </div>
                  </div>

                  <Link to="/contact" className="cookie-main-contact-btn">
                    Contact Us <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cookie-cta">
        <div className="cookie-cta-bg"></div>
        <div className="vertex-container">
          <div className="cookie-cta-content" data-aos="fade-up">
            <h2 className="cookie-cta-title">Have Questions About Privacy?</h2>
            <p className="cookie-cta-text">
              Check out our Privacy Policy or contact our team for more information.
            </p>
            <div className="cookie-cta-buttons">
              <Link to="/privacy" className="cookie-cta-btn-primary">
                View Privacy Policy <FaArrowRight />
              </Link>
              <Link to="/contact" className="cookie-cta-btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ============================================
// CUSTOM CSS FOR COOKIE POLICY PAGE
// ============================================
const cookiesStyles = `
  .vertex-container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }

  /* Hero */
  .cookie-hero { position: relative; background: linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e); padding: 160px 0 80px; overflow: hidden; }
  .cookie-hero-bg { position: absolute; inset: 0; background: radial-gradient(circle at 30% 50%, rgba(37,150,190,0.08) 0%, transparent 50%); }
  .cookie-hero-content { position: relative; z-index: 1; text-align: center; max-width: 650px; margin: 0 auto; padding: 0 24px; }
  .cookie-hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 20px; background: rgba(245,158,11,0.15); color: #fbbf24; border-radius: 50px; font-size: 13px; font-weight: 600; letter-spacing: 0.05em; margin-bottom: 24px; border: 1px solid rgba(245,158,11,0.3); }
  .cookie-hero-title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 800; color: #fff; margin-bottom: 16px; line-height: 1.15; }
  .cookie-hero-highlight { background: linear-gradient(135deg, #2596be, #3aacd8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .cookie-hero-text { font-size: 1.05rem; color: rgba(255,255,255,0.7); }
  @media (max-width: 768px) { .cookie-hero { padding: 120px 0 60px; } }

  /* Content */
  .cookie-content { padding: 80px 0 100px; background: #fafafa; }
  .cookie-grid { display: grid; grid-template-columns: 280px 1fr; gap: 48px; align-items: start; }
  @media (max-width: 1024px) { .cookie-grid { grid-template-columns: 1fr; } }

  /* Sidebar */
  .cookie-sidebar { position: sticky; top: 100px; display: flex; flex-direction: column; gap: 24px; }
  @media (max-width: 1024px) { .cookie-sidebar { position: static; } }
  .cookie-nav-card { background: #fff; border-radius: 20px; padding: 28px; border: 1px solid #f4f4f5; box-shadow: 0 2px 12px rgba(0,0,0,0.04); }
  .cookie-nav-title { font-family: 'Space Grotesk', sans-serif; font-size: 18px; font-weight: 700; color: #0a0a0a; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid #f4f4f5; }
  .cookie-nav-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 4px; }
  .cookie-nav-list a { display: block; padding: 10px 14px; color: #6b7280; text-decoration: none; font-size: 14px; border-radius: 10px; transition: all 0.2s ease; font-weight: 500; }
  .cookie-nav-list a:hover { color: #2596be; background: #f0f9fc; padding-left: 20px; }
  .cookie-info-card { background: #fffbeb; border: 1px solid #fde68a; border-radius: 20px; padding: 24px; }
  .cookie-info-icon { font-size: 28px; color: #f59e0b; margin-bottom: 12px; }
  .cookie-info-card h4 { font-family: 'Space Grotesk', sans-serif; font-size: 16px; font-weight: 700; color: #92400e; margin-bottom: 8px; }
  .cookie-info-card p { font-size: 13px; color: #78350f; line-height: 1.6; margin: 0; }
  .cookie-contact-card { background: linear-gradient(135deg, #2596be, #1a7a9e); border-radius: 20px; padding: 28px; color: #fff; text-align: center; }
  .cookie-contact-icon { font-size: 32px; margin-bottom: 16px; opacity: 0.9; }
  .cookie-contact-card h4 { font-family: 'Space Grotesk', sans-serif; font-size: 18px; font-weight: 700; margin-bottom: 8px; }
  .cookie-contact-card p { font-size: 13px; opacity: 0.85; margin-bottom: 20px; }
  .cookie-contact-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: #fff; color: #2596be; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 14px; transition: all 0.3s ease; }
  .cookie-contact-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.2); }

  /* Main Card */
  .cookie-card { background: #fff; border-radius: 24px; padding: 48px; border: 1px solid #f4f4f5; box-shadow: 0 2px 12px rgba(0,0,0,0.04); }
  @media (max-width: 640px) { .cookie-card { padding: 28px 20px; } }
  .cookie-intro { display: flex; gap: 20px; padding: 28px; background: #f0f9fc; border-radius: 16px; margin-bottom: 40px; align-items: flex-start; }
  .cookie-intro-icon { width: 48px; height: 48px; background: linear-gradient(135deg, #f59e0b, #d97706); border-radius: 14px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 22px; flex-shrink: 0; }
  .cookie-intro-text { font-size: 15px; color: #374151; line-height: 1.7; margin: 0; }
  .cookie-intro-text strong { color: #2596be; }

  /* Sections */
  .cookie-section { margin-bottom: 48px; padding-bottom: 48px; border-bottom: 1px solid #f4f4f5; }
  .cookie-section:last-of-type { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
  .cookie-section-title { font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 700; color: #0a0a0a; margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }
  .cookie-section-number { width: 36px; height: 36px; background: linear-gradient(135deg, #2596be, #1a7a9e); color: #fff; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; flex-shrink: 0; }
  .cookie-section h3 { font-family: 'Space Grotesk', sans-serif; font-size: 17px; font-weight: 600; color: #1a1a1a; margin: 24px 0 12px; }
  .cookie-section p { color: #4b5563; line-height: 1.8; margin-bottom: 16px; font-size: 15px; }
  .cookie-list { list-style: none; padding: 0; margin: 16px 0 24px; }
  .cookie-list li { padding: 10px 0 10px 24px; color: #4b5563; font-size: 15px; line-height: 1.6; position: relative; }
  .cookie-list li::before { content: ''; position: absolute; left: 0; top: 18px; width: 8px; height: 8px; background: #2596be; border-radius: 50%; }
  .cookie-list li strong { color: #1a1a1a; }
  .cookie-list a { color: #2596be; text-decoration: underline; }

  /* Info Box */
  .cookie-info-box { display: flex; gap: 16px; padding: 24px; background: #f0f9fc; border: 1px solid #b9e4f0; border-radius: 16px; margin: 20px 0; align-items: flex-start; }
  .cookie-info-box-icon { font-size: 28px; color: #2596be; flex-shrink: 0; }
  .cookie-info-box h4 { font-family: 'Space Grotesk', sans-serif; font-size: 16px; font-weight: 700; color: #0a0a0a; margin-bottom: 4px; }
  .cookie-info-box p { font-size: 14px; color: #4b5563; margin: 0; }

  /* Purpose Grid */
  .cookie-purpose-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 24px 0; }
  @media (max-width: 640px) { .cookie-purpose-grid { grid-template-columns: 1fr; } }
  .cookie-purpose-item { text-align: center; padding: 24px 16px; background: #fafafa; border-radius: 16px; border: 1px solid #f4f4f5; }
  .cookie-purpose-icon { font-size: 32px; color: #2596be; margin-bottom: 12px; }
  .cookie-purpose-item h4 { font-family: 'Space Grotesk', sans-serif; font-size: 16px; font-weight: 700; color: #0a0a0a; margin-bottom: 8px; }
  .cookie-purpose-item p { font-size: 13px; color: #6b7280; margin: 0; line-height: 1.5; }

  /* Table */
  .cookie-table-wrap { overflow-x: auto; margin: 20px 0; }
  .cookie-table { width: 100%; border-collapse: collapse; font-size: 14px; }
  .cookie-table th { background: linear-gradient(135deg, #2596be, #1a7a9e); color: #fff; padding: 14px 16px; text-align: left; font-weight: 600; white-space: nowrap; }
  .cookie-table th:first-child { border-radius: 10px 0 0 0; }
  .cookie-table th:last-child { border-radius: 0 10px 0 0; }
  .cookie-table td { padding: 12px 16px; border-bottom: 1px solid #f4f4f5; color: #4b5563; }
  .cookie-table tr:hover td { background: #fafafa; }
  .cookie-table-yes { color: #10b981; font-size: 18px; }
  .cookie-table-no { color: #ef4444; font-size: 18px; }

  /* Choice Grid */
  .cookie-choice-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 24px 0; }
  @media (max-width: 768px) { .cookie-choice-grid { grid-template-columns: 1fr; } }
  .cookie-choice-card { text-align: center; padding: 28px 20px; border-radius: 16px; border: 2px solid #f4f4f5; transition: all 0.3s ease; }
  .cookie-choice-card:hover { transform: translateY(-4px); box-shadow: 0 8px 25px rgba(0,0,0,0.06); }
  .cookie-choice-accept { border-color: #bbf7d0; background: #f0fdf4; }
  .cookie-choice-custom { border-color: #b9e4f0; background: #f0f9fc; }
  .cookie-choice-reject { border-color: #fecaca; background: #fef2f2; }
  .cookie-choice-icon { font-size: 36px; margin-bottom: 12px; }
  .cookie-choice-accept .cookie-choice-icon { color: #10b981; }
  .cookie-choice-custom .cookie-choice-icon { color: #2596be; }
  .cookie-choice-reject .cookie-choice-icon { color: #ef4444; }
  .cookie-choice-card h4 { font-family: 'Space Grotesk', sans-serif; font-size: 16px; font-weight: 700; color: #0a0a0a; margin-bottom: 8px; }
  .cookie-choice-card p { font-size: 13px; color: #6b7280; margin: 0; line-height: 1.5; }

  /* Browser Grid */
  .cookie-browser-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 20px 0; }
  @media (max-width: 480px) { .cookie-browser-grid { grid-template-columns: 1fr; } }
  .cookie-browser-item { padding: 16px 20px; background: #fafafa; border-radius: 12px; border: 1px solid #f4f4f5; }
  .cookie-browser-item strong { display: block; color: #0a0a0a; margin-bottom: 6px; font-size: 14px; }
  .cookie-browser-item p { font-size: 13px; color: #6b7280; margin: 0; }

  /* Warning Box */
  .cookie-warning-box { display: flex; gap: 12px; padding: 20px 24px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 14px; margin: 20px 0; align-items: center; }
  .cookie-warning-box svg { font-size: 24px; color: #ef4444; flex-shrink: 0; }
  .cookie-warning-box p { font-size: 14px; color: #991b1b; margin: 0; }

  /* Highlight Box */
  .cookie-highlight-box { display: flex; gap: 16px; padding: 24px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 16px; margin: 20px 0; align-items: flex-start; }
  .cookie-highlight-icon { font-size: 24px; color: #10b981; flex-shrink: 0; }
  .cookie-highlight-box h4 { font-family: 'Space Grotesk', sans-serif; font-size: 16px; font-weight: 700; color: #065f46; margin-bottom: 4px; }
  .cookie-highlight-box p { font-size: 14px; color: #047857; margin: 0; }

  /* Contact Grid */
  .cookie-contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0 28px; }
  @media (max-width: 480px) { .cookie-contact-grid { grid-template-columns: 1fr; } }
  .cookie-contact-method { display: flex; align-items: center; gap: 14px; padding: 20px; background: #fafafa; border-radius: 14px; border: 1px solid #f4f4f5; }
  .cookie-contact-method svg { font-size: 24px; color: #2596be; }
  .cookie-contact-method h4 { font-family: 'Space Grotesk', sans-serif; font-size: 15px; font-weight: 600; color: #0a0a0a; margin-bottom: 2px; }
  .cookie-contact-method p { font-size: 13px; color: #6b7280; margin: 0; }
  .cookie-main-contact-btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; background: linear-gradient(135deg, #2596be, #1a7a9e); color: #fff; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 15px; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(37,150,190,0.3); }
  .cookie-main-contact-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(37,150,190,0.5); }

  /* CTA */
  .cookie-cta { position: relative; padding: 120px 0; background: linear-gradient(135deg, #2596be, #1a7a9e, #0d4f6b); overflow: hidden; }
  .cookie-cta-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 60px 60px; }
  .cookie-cta-content { position: relative; z-index: 1; text-align: center; max-width: 600px; margin: 0 auto; }
  .cookie-cta-title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 700; color: #fff; margin-bottom: 16px; }
  .cookie-cta-text { font-size: 1.1rem; color: rgba(255,255,255,0.85); margin-bottom: 40px; line-height: 1.6; }
  .cookie-cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
  .cookie-cta-btn-primary { padding: 18px 36px; background: #fff; color: #2596be; border-radius: 50px; font-weight: 600; font-size: 16px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s ease; box-shadow: 0 8px 30px rgba(0,0,0,0.15); }
  .cookie-cta-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.25); }
  .cookie-cta-btn-secondary { padding: 18px 36px; background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.4); border-radius: 50px; font-weight: 600; font-size: 16px; text-decoration: none; transition: all 0.3s ease; }
  .cookie-cta-btn-secondary:hover { background: #fff; color: #2596be; border-color: #fff; transform: translateY(-3px); }
  @media (max-width: 768px) { .cookie-cta { padding: 80px 0; } .cookie-content { padding: 60px 0 80px; } }
`;

export default Cookies;