import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
    FaFileContract, FaShieldAlt, FaBalanceScale, FaExclamationTriangle,
    FaArrowRight, FaEnvelope, FaCheckCircle, FaBan, FaGavel
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <>
      <style>{termsStyles}</style>
      
      <Helmet>
        <title>Terms of Service | VertexFlow Technologies</title>
        <meta name="description" content="VertexFlow Technologies Terms of Service - Read our terms and conditions for using our services." />
      </Helmet>

      {/* Hero Section */}
      <section className="terms-hero">
        <div className="terms-hero-bg"></div>
        <div className="terms-hero-content">
          <span className="terms-hero-badge" data-aos="fade-down">
            <FaFileContract /> Legal
          </span>
          <h1 className="terms-hero-title" data-aos="fade-up">
            Terms of <span className="terms-hero-highlight">Service</span>
          </h1>
          <p className="terms-hero-text" data-aos="fade-up" data-aos-delay="100">
            Last updated: January 1, 2024
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <div className="vertex-container">
          <div className="terms-grid">
            {/* Sidebar Navigation */}
            <div className="terms-sidebar" data-aos="fade-right">
              <div className="terms-nav-card">
                <h3 className="terms-nav-title">Contents</h3>
                <ul className="terms-nav-list">
                  <li><a href="#agreement">1. Agreement to Terms</a></li>
                  <li><a href="#services">2. Services Provided</a></li>
                  <li><a href="#payment">3. Payment Terms</a></li>
                  <li><a href="#intellectual-property">4. Intellectual Property</a></li>
                  <li><a href="#confidentiality">5. Confidentiality</a></li>
                  <li><a href="#limitation">6. Limitation of Liability</a></li>
                  <li><a href="#termination">7. Termination</a></li>
                  <li><a href="#disputes">8. Dispute Resolution</a></li>
                  <li><a href="#changes">9. Changes to Terms</a></li>
                  <li><a href="#contact">10. Contact Information</a></li>
                </ul>
              </div>

              <div className="terms-info-card">
                <FaExclamationTriangle className="terms-info-icon" />
                <h4>Important Notice</h4>
                <p>By using our services, you agree to these terms. Please read them carefully before engaging our services.</p>
              </div>

              <div className="terms-contact-card">
                <FaEnvelope className="terms-contact-icon" />
                <h4>Questions?</h4>
                <p>Contact us for any questions about these terms.</p>
                <Link to="/contact" className="terms-contact-btn">
                  Contact Us <FaArrowRight />
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="terms-main" data-aos="fade-left">
              <div className="terms-card">
                {/* Introduction */}
                <div className="terms-intro">
                  <div className="terms-intro-icon">
                    <FaBalanceScale />
                  </div>
                  <p className="terms-intro-text">
                    These Terms of Service ("<strong>Terms</strong>") govern your use of the services provided by 
                    <strong> VertexFlow Technologies</strong> ("we," "our," or "us"). By accessing or using our services, 
                    you agree to be bound by these Terms. If you do not agree, please do not use our services.
                  </p>
                </div>

                {/* Section 1 */}
                <div id="agreement" className="terms-section">
                  <h2 className="terms-section-title">
                    <span className="terms-section-number">01</span>
                    1. Agreement to Terms
                  </h2>
                  <p>By engaging VertexFlow Technologies for any services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These Terms constitute a legally binding agreement between you and VertexFlow Technologies.</p>
                  
                  <div className="terms-highlight-box">
                    <FaCheckCircle className="terms-highlight-icon" />
                    <div>
                      <h4>Acceptance</h4>
                      <p>Your use of our services, including visiting our website, contacting us, or engaging in any project, constitutes acceptance of these Terms.</p>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div id="services" className="terms-section">
                  <h2 className="terms-section-title">
                    <span className="terms-section-number">02</span>
                    2. Services Provided
                  </h2>
                  
                  <h3>Scope of Services</h3>
                  <p>VertexFlow Technologies provides the following services:</p>
                  <ul className="terms-list">
                    <li>Mobile App Development (iOS & Android)</li>
                    <li>Web Development & Design</li>
                    <li>AI & Automation Solutions</li>
                    <li>SaaS Platform Development</li>
                    <li>Graphic Design & Branding</li>
                    <li>SEO & Digital Marketing</li>
                    <li>Consulting & Technical Support</li>
                  </ul>

                  <h3>Project Scope</h3>
                  <p>Each project will have a detailed scope of work document outlining specific deliverables, timelines, and requirements. Any changes to the scope may result in adjusted timelines and costs.</p>
                </div>

                {/* Section 3 */}
                <div id="payment" className="terms-section">
                  <h2 className="terms-section-title">
                    <span className="terms-section-number">03</span>
                    3. Payment Terms
                  </h2>
                  
                  <h3>Payment Schedule</h3>
                  <p>Our standard payment terms are as follows:</p>
                  <ul className="terms-list">
                    <li><strong>Project Initiation:</strong> 30-50% upfront payment required</li>
                    <li><strong>Milestone Payments:</strong> Based on agreed project milestones</li>
                    <li><strong>Final Payment:</strong> Due upon project completion and before final delivery</li>
                    <li><strong>Monthly Retainers:</strong> Due at the beginning of each month</li>
                  </ul>

                  <h3>Payment Methods</h3>
                  <p>We accept payments via bank transfer, credit/debit cards, PayPal, Payoneer, and Wise. All payments are processed in USD unless otherwise agreed.</p>

                  <h3>Late Payments</h3>
                  <p>Late payments may result in project delays. We reserve the right to suspend services if payments are more than 15 days overdue.</p>

                  <div className="terms-info-box">
                    <FaExclamationTriangle className="terms-info-box-icon" />
                    <div>
                      <h4>Refund Policy</h4>
                      <p>Refunds are handled on a case-by-case basis. Deposits are generally non-refundable once work has commenced. Please refer to your project agreement for specific refund terms.</p>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="intellectual-property" className="terms-section">
                  <h2 className="terms-section-title">
                    <span className="terms-section-number">04</span>
                    4. Intellectual Property Rights
                  </h2>
                  
                  <h3>Client Ownership</h3>
                  <p>Upon full payment, the client receives full ownership of the final deliverables, including:</p>
                  <ul className="terms-list">
                    <li>Source code and compiled applications</li>
                    <li>Design files and assets</li>
                    <li>Documentation created for the project</li>
                    <li>Custom graphics and branding materials</li>
                  </ul>

                  <h3>Our Rights</h3>
                  <p>We retain the right to:</p>
                  <ul className="terms-list">
                    <li>Display projects in our portfolio (with client permission)</li>
                    <li>Use non-proprietary code and techniques across projects</li>
                    <li>Reference the client relationship in marketing materials</li>
                  </ul>

                  <h3>Third-Party Components</h3>
                  <p>Projects may include third-party libraries, frameworks, or tools that are subject to their own licenses. These components remain the property of their respective owners.</p>
                </div>

                {/* Section 5 */}
                <div id="confidentiality" className="terms-section">
                  <h2 className="terms-section-title">
                    <span className="terms-section-number">05</span>
                    5. Confidentiality
                  </h2>
                  
                  <div className="terms-security-grid">
                    <div className="terms-security-item">
                      <FaShieldAlt className="terms-security-icon" />
                      <h4>Data Protection</h4>
                      <p>We treat all client information as confidential and implement appropriate security measures.</p>
                    </div>
                    <div className="terms-security-item">
                      <FaBan className="terms-security-icon" />
                      <h4>Non-Disclosure</h4>
                      <p>We do not share client information with third parties without explicit consent, except as required by law.</p>
                    </div>
                  </div>

                  <p>Both parties agree to maintain the confidentiality of proprietary information shared during the course of the project. This obligation survives the termination of the agreement.</p>
                  
                  <p>We are willing to sign a Non-Disclosure Agreement (NDA) upon request before discussing project details.</p>
                </div>

                {/* Section 6 */}
                <div id="limitation" className="terms-section">
                  <h2 className="terms-section-title">
                    <span className="terms-section-number">06</span>
                    6. Limitation of Liability
                  </h2>
                  
                  <p>To the maximum extent permitted by law:</p>
                  <ul className="terms-list">
                    <li>VertexFlow Technologies' total liability for any claim arising from our services shall not exceed the total amount paid by the client for the specific project.</li>
                    <li>We are not liable for indirect, consequential, or incidental damages.</li>
                    <li>We are not responsible for third-party service disruptions or failures.</li>
                    <li>Clients are responsible for testing and accepting deliverables before deployment.</li>
                  </ul>

                  <div className="terms-warning-box">
                    <FaExclamationTriangle />
                    <p><strong>Disclaimer:</strong> All services are provided "as is" without warranty of any kind, express or implied, except as explicitly stated in the project agreement.</p>
                  </div>
                </div>

                {/* Section 7 */}
                <div id="termination" className="terms-section">
                  <h2 className="terms-section-title">
                    <span className="terms-section-number">07</span>
                    7. Termination
                  </h2>
                  
                  <h3>Termination by Client</h3>
                  <p>You may terminate a project at any time by providing written notice. Upon termination:</p>
                  <ul className="terms-list">
                    <li>You will be invoiced for all work completed up to the termination date</li>
                    <li>Any deposits or advance payments are non-refundable</li>
                    <li>Work-in-progress materials will be delivered upon payment</li>
                  </ul>

                  <h3>Termination by Us</h3>
                  <p>We reserve the right to terminate a project if:</p>
                  <ul className="terms-list">
                    <li>Payment is more than 30 days overdue</li>
                    <li>The client breaches these Terms</li>
                    <li>The working relationship becomes unproductive or hostile</li>
                    <li>The project requirements become technically unfeasible</li>
                  </ul>
                </div>

                {/* Section 8 */}
                <div id="disputes" className="terms-section">
                  <h2 className="terms-section-title">
                    <span className="terms-section-number">08</span>
                    8. Dispute Resolution
                  </h2>
                  
                  <div className="terms-dispute-steps">
                    <div className="terms-dispute-step">
                      <span className="terms-dispute-number">1</span>
                      <div>
                        <h4>Informal Resolution</h4>
                        <p>We encourage resolving disputes through direct communication first.</p>
                      </div>
                    </div>
                    <div className="terms-dispute-arrow">→</div>
                    <div className="terms-dispute-step">
                      <span className="terms-dispute-number">2</span>
                      <div>
                        <h4>Mediation</h4>
                        <p>If unresolved, both parties agree to attempt mediation.</p>
                      </div>
                    </div>
                    <div className="terms-dispute-arrow">→</div>
                    <div className="terms-dispute-step">
                      <span className="terms-dispute-number">3</span>
                      <div>
                        <h4>Arbitration</h4>
                        <p>As a final step, disputes will be resolved through binding arbitration.</p>
                      </div>
                    </div>
                  </div>

                  <h3>Governing Law</h3>
                  <p>These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes shall be resolved in the courts of Islamabad, Pakistan.</p>
                </div>

                {/* Section 9 */}
                <div id="changes" className="terms-section">
                  <h2 className="terms-section-title">
                    <span className="terms-section-number">09</span>
                    9. Changes to Terms
                  </h2>
                  <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified Terms.</p>
                  
                  <p>For ongoing projects, the Terms in effect at the start of the project will apply unless otherwise agreed in writing.</p>

                  <div className="terms-highlight-box">
                    <FaCheckCircle className="terms-highlight-icon" />
                    <div>
                      <h4>Notification</h4>
                      <p>We will make reasonable efforts to notify active clients of material changes to these Terms via email.</p>
                    </div>
                  </div>
                </div>

                {/* Section 10 */}
                <div id="contact" className="terms-section">
                  <h2 className="terms-section-title">
                    <span className="terms-section-number">10</span>
                    10. Contact Information
                  </h2>
                  <p>If you have any questions about these Terms of Service, please contact us:</p>
                  
                  <div className="terms-contact-grid">
                    <div className="terms-contact-method">
                      <FaEnvelope />
                      <div>
                        <h4>Email</h4>
                        <p>legal@vertexflow.tech</p>
                      </div>
                    </div>
                    <div className="terms-contact-method">
                      <FaFileContract />
                      <div>
                        <h4>General Inquiries</h4>
                        <p>info@vertexflow.tech</p>
                      </div>
                    </div>
                  </div>

                  <Link to="/contact" className="terms-main-contact-btn">
                    Contact Us <FaArrowRight />
                  </Link>
                </div>

                {/* Acceptance */}
                <div className="terms-acceptance">
                  <FaGavel className="terms-acceptance-icon" />
                  <div>
                    <h4>Acknowledgment</h4>
                    <p>By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
                    <p className="terms-acceptance-date">Last updated: January 1, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="terms-cta">
        <div className="terms-cta-bg"></div>
        <div className="vertex-container">
          <div className="terms-cta-content" data-aos="fade-up">
            <h2 className="terms-cta-title">Ready to Work With Us?</h2>
            <p className="terms-cta-text">
              Get in touch to discuss your project or ask any questions about our terms.
            </p>
            <div className="terms-cta-buttons">
              <Link to="/contact" className="terms-cta-btn-primary">
                Get Started <FaArrowRight />
              </Link>
              <Link to="/faq" className="terms-cta-btn-secondary">
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ============================================
// CUSTOM CSS FOR TERMS PAGE
// ============================================
const termsStyles = `
  .vertex-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* ========== HERO SECTION ========== */
  .terms-hero {
    position: relative;
    background: linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e);
    padding: 160px 0 80px;
    overflow: hidden;
  }

  .terms-hero-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 30% 50%, rgba(37,150,190,0.08) 0%, transparent 50%);
  }

  .terms-hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 650px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .terms-hero-badge {
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

  .terms-hero-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 16px;
    line-height: 1.15;
  }

  .terms-hero-highlight {
    background: linear-gradient(135deg, #2596be, #3aacd8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .terms-hero-text {
    font-size: 1.05rem;
    color: rgba(255,255,255,0.7);
  }

  @media (max-width: 768px) {
    .terms-hero {
      padding: 120px 0 60px;
    }
  }

  /* ========== CONTENT SECTION ========== */
  .terms-content {
    padding: 80px 0 100px;
    background: #fafafa;
  }

  .terms-grid {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 48px;
    align-items: start;
  }

  @media (max-width: 1024px) {
    .terms-grid {
      grid-template-columns: 1fr;
    }
  }

  /* ========== SIDEBAR ========== */
  .terms-sidebar {
    position: sticky;
    top: 100px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media (max-width: 1024px) {
    .terms-sidebar {
      position: static;
    }
  }

  .terms-nav-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 28px;
    border: 1px solid #f4f4f5;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  }

  .terms-nav-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid #f4f4f5;
  }

  .terms-nav-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .terms-nav-list a {
    display: block;
    padding: 10px 14px;
    color: #6b7280;
    text-decoration: none;
    font-size: 14px;
    border-radius: 10px;
    transition: all 0.2s ease;
    font-weight: 500;
  }

  .terms-nav-list a:hover {
    color: #2596be;
    background: #f0f9fc;
    padding-left: 20px;
  }

  .terms-info-card {
    background: #fffbeb;
    border: 1px solid #fde68a;
    border-radius: 20px;
    padding: 24px;
  }

  .terms-info-icon {
    font-size: 28px;
    color: #f59e0b;
    margin-bottom: 12px;
  }

  .terms-info-card h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #92400e;
    margin-bottom: 8px;
  }

  .terms-info-card p {
    font-size: 13px;
    color: #78350f;
    line-height: 1.6;
    margin: 0;
  }

  .terms-contact-card {
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    border-radius: 20px;
    padding: 28px;
    color: #ffffff;
    text-align: center;
  }

  .terms-contact-icon {
    font-size: 32px;
    margin-bottom: 16px;
    opacity: 0.9;
  }

  .terms-contact-card h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .terms-contact-card p {
    font-size: 13px;
    opacity: 0.85;
    margin-bottom: 20px;
  }

  .terms-contact-btn {
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

  .terms-contact-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }

  /* ========== MAIN CONTENT ========== */
  .terms-card {
    background: #ffffff;
    border-radius: 24px;
    padding: 48px;
    border: 1px solid #f4f4f5;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  }

  @media (max-width: 640px) {
    .terms-card {
      padding: 28px 20px;
    }
  }

  .terms-intro {
    display: flex;
    gap: 20px;
    padding: 28px;
    background: #f0f9fc;
    border-radius: 16px;
    margin-bottom: 40px;
    align-items: flex-start;
  }

  .terms-intro-icon {
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

  .terms-intro-text {
    font-size: 15px;
    color: #374151;
    line-height: 1.7;
    margin: 0;
  }

  .terms-intro-text strong {
    color: #2596be;
  }

  /* Sections */
  .terms-section {
    margin-bottom: 48px;
    padding-bottom: 48px;
    border-bottom: 1px solid #f4f4f5;
  }

  .terms-section:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .terms-section-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .terms-section-number {
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

  .terms-section h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 17px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 24px 0 12px;
  }

  .terms-section p {
    color: #4b5563;
    line-height: 1.8;
    margin-bottom: 16px;
    font-size: 15px;
  }

  .terms-list {
    list-style: none;
    padding: 0;
    margin: 16px 0 24px;
  }

  .terms-list li {
    padding: 10px 0 10px 24px;
    color: #4b5563;
    font-size: 15px;
    line-height: 1.6;
    position: relative;
  }

  .terms-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 18px;
    width: 8px;
    height: 8px;
    background: #2596be;
    border-radius: 50%;
  }

  .terms-list li strong {
    color: #1a1a1a;
  }

  /* Highlight Box */
  .terms-highlight-box {
    display: flex;
    gap: 16px;
    padding: 24px;
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-radius: 16px;
    margin: 20px 0;
    align-items: flex-start;
  }

  .terms-highlight-icon {
    font-size: 24px;
    color: #10b981;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .terms-highlight-box h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #065f46;
    margin-bottom: 4px;
  }

  .terms-highlight-box p {
    font-size: 14px;
    color: #047857;
    margin: 0;
  }

  /* Info Box */
  .terms-info-box {
    display: flex;
    gap: 16px;
    padding: 24px;
    background: #fffbeb;
    border: 1px solid #fde68a;
    border-radius: 16px;
    margin: 20px 0;
    align-items: flex-start;
  }

  .terms-info-box-icon {
    font-size: 24px;
    color: #f59e0b;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .terms-info-box h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #92400e;
    margin-bottom: 4px;
  }

  .terms-info-box p {
    font-size: 14px;
    color: #78350f;
    margin: 0;
  }

  /* Warning Box */
  .terms-warning-box {
    display: flex;
    gap: 14px;
    padding: 20px 24px;
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 16px;
    margin: 20px 0;
    align-items: center;
  }

  .terms-warning-box svg {
    font-size: 24px;
    color: #ef4444;
    flex-shrink: 0;
  }

  .terms-warning-box p {
    font-size: 14px;
    color: #991b1b;
    margin: 0;
  }

  /* Security Grid */
  .terms-security-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 24px 0;
  }

  @media (max-width: 480px) {
    .terms-security-grid {
      grid-template-columns: 1fr;
    }
  }

  .terms-security-item {
    text-align: center;
    padding: 24px 16px;
    background: #fafafa;
    border-radius: 16px;
    border: 1px solid #f4f4f5;
  }

  .terms-security-icon {
    font-size: 32px;
    color: #2596be;
    margin-bottom: 12px;
  }

  .terms-security-item h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 8px;
  }

  .terms-security-item p {
    font-size: 13px;
    color: #6b7280;
    margin: 0;
    line-height: 1.5;
  }

  /* Dispute Steps */
  .terms-dispute-steps {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 24px 0;
    flex-wrap: wrap;
  }

  @media (max-width: 640px) {
    .terms-dispute-steps {
      flex-direction: column;
      align-items: flex-start;
    }
    .terms-dispute-arrow {
      transform: rotate(90deg);
      margin: 4px 0 4px 18px;
    }
  }

  .terms-dispute-step {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    flex: 1;
    padding: 16px;
    background: #fafafa;
    border-radius: 14px;
    border: 1px solid #f4f4f5;
  }

  .terms-dispute-number {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    flex-shrink: 0;
  }

  .terms-dispute-step h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 4px;
  }

  .terms-dispute-step p {
    font-size: 12px;
    color: #6b7280;
    margin: 0;
  }

  .terms-dispute-arrow {
    font-size: 24px;
    color: #2596be;
    font-weight: 700;
  }

  /* Contact Grid */
  .terms-contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 20px 0 28px;
  }

  @media (max-width: 480px) {
    .terms-contact-grid {
      grid-template-columns: 1fr;
    }
  }

  .terms-contact-method {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 20px;
    background: #fafafa;
    border-radius: 14px;
    border: 1px solid #f4f4f5;
  }

  .terms-contact-method svg {
    font-size: 24px;
    color: #2596be;
  }

  .terms-contact-method h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #0a0a0a;
    margin-bottom: 2px;
  }

  .terms-contact-method p {
    font-size: 13px;
    color: #6b7280;
    margin: 0;
  }

  .terms-main-contact-btn {
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

  .terms-main-contact-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37,150,190,0.5);
  }

  /* Acceptance */
  .terms-acceptance {
    display: flex;
    gap: 16px;
    padding: 28px;
    background: linear-gradient(135deg, #f0f9fc, #e0f2f7);
    border-radius: 16px;
    margin-top: 40px;
    border: 2px solid rgba(37,150,190,0.2);
    align-items: flex-start;
  }

  .terms-acceptance-icon {
    font-size: 32px;
    color: #2596be;
    flex-shrink: 0;
    margin-top: 4px;
  }

  .terms-acceptance h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 8px;
  }

  .terms-acceptance p {
    font-size: 14px;
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 8px;
  }

  .terms-acceptance-date {
    font-size: 13px;
    color: #2596be;
    font-weight: 600;
    margin-bottom: 0 !important;
  }

  /* ========== CTA SECTION ========== */
  .terms-cta {
    position: relative;
    padding: 120px 0;
    background: linear-gradient(135deg, #2596be, #1a7a9e, #0d4f6b);
    overflow: hidden;
  }

  .terms-cta-bg {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  .terms-cta-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  .terms-cta-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 16px;
  }

  .terms-cta-text {
    font-size: 1.1rem;
    color: rgba(255,255,255,0.85);
    margin-bottom: 40px;
    line-height: 1.6;
  }

  .terms-cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .terms-cta-btn-primary {
    padding: 18px 36px;
    background: #ffffff;
    color: #2596be;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }

  .terms-cta-btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.25);
  }

  .terms-cta-btn-secondary {
    padding: 18px 36px;
    background: transparent;
    color: #ffffff;
    border: 2px solid rgba(255,255,255,0.4);
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
  }

  .terms-cta-btn-secondary:hover {
    background: #ffffff;
    color: #2596be;
    border-color: #ffffff;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    .terms-cta {
      padding: 80px 0;
    }
    .terms-content {
      padding: 60px 0 80px;
    }
  }
`;

export default Terms;