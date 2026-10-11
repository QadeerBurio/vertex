import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
    FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock,
    FaPaperPlane, FaWhatsapp, FaLinkedin, FaInstagram,
    FaFacebook, FaTwitter, FaCheckCircle, FaSpinner,
    FaArrowRight, FaBuilding, FaUser, FaTag
} from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [activeField, setActiveField] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFocus = (fieldName) => {
        setActiveField(fieldName);
    };

    const handleBlur = () => {
        setActiveField('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            setSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                budget: '',
                message: ''
            });
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: FaMapMarkerAlt,
            title: 'Our Office',
            details: ['Islamabad, Pakistan', 'Serving clients worldwide'],
            color: '#2596be'
        },
        {
            icon: FaPhone,
            title: 'Phone',
            details: ['+92 300 1234567', '+92 51 1234567'],
            color: '#10b981'
        },
        {
            icon: FaEnvelope,
            title: 'Email',
            details: ['info@vertexflow.tech', 'support@vertexflow.tech'],
            color: '#f59e0b'
        },
        {
            icon: FaClock,
            title: 'Working Hours',
            details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
            color: '#8b5cf6'
        }
    ];

    const socialLinks = [
        { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: '#0077B5' },
        { icon: FaInstagram, href: '#', label: 'Instagram', color: '#E4405F' },
        { icon: FaFacebook, href: '#', label: 'Facebook', color: '#1877F2' },
        { icon: FaTwitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
        { icon: FaWhatsapp, href: '#', label: 'WhatsApp', color: '#25D366' }
    ];

    return (
        <>
            <style>{contactStyles}</style>
            
            <Helmet>
                <title>Contact Us | VertexFlow Technologies</title>
                <meta name="description" content="Get in touch with VertexFlow Technologies for software development, AI solutions, and digital marketing services." />
            </Helmet>

            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-bg"></div>
                <div className="contact-hero-content">
                    <span className="contact-hero-badge" data-aos="fade-down">
                        <FaEnvelope /> Contact Us
                    </span>
                    <h1 className="contact-hero-title" data-aos="fade-up">
                        Get in <span className="contact-hero-highlight">Touch</span>
                    </h1>
                    <p className="contact-hero-text" data-aos="fade-up" data-aos-delay="100">
                        Have a project in mind? Let's discuss how we can help you achieve your goals.
                        We're here to answer your questions and bring your vision to life.
                    </p>
                </div>
                <div className="contact-hero-wave">
                    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="#fafafa"/>
                    </svg>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-main">
                <div className="vertex-container">
                    <div className="contact-grid">
                        {/* Contact Info Sidebar */}
                        <div className="contact-sidebar">
                            <div className="contact-info-cards">
                                {contactInfo.map((info, index) => (
                                    <div
                                        key={index}
                                        className="contact-info-card"
                                        data-aos="fade-right"
                                        data-aos-delay={index * 100}
                                        style={{ '--accent-color': info.color }}
                                    >
                                        <div className="contact-info-icon-wrap">
                                            <info.icon className="contact-info-icon" />
                                        </div>
                                        <div className="contact-info-content">
                                            <h3 className="contact-info-title">{info.title}</h3>
                                            {info.details.map((detail, idx) => (
                                                <p key={idx} className="contact-info-detail">{detail}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="contact-social" data-aos="fade-up">
                                <h3 className="contact-social-title">Follow Us On Social Media</h3>
                                <p className="contact-social-text">Stay connected and get the latest updates</p>
                                <div className="contact-social-icons">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-social-icon"
                                            aria-label={social.label}
                                            style={{ '--social-color': social.color }}
                                        >
                                            <social.icon />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Response Badge */}
                            <div className="contact-quick-response" data-aos="fade-up">
                                <div className="contact-response-icon">
                                    <FaCheckCircle />
                                </div>
                                <div>
                                    <h4>Quick Response</h4>
                                    <p>We typically respond within 2-4 hours during business days</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrap" data-aos="fade-left">
                            <div className="contact-form-card">
                                <div className="contact-form-header">
                                    <h2 className="contact-form-title">Send Us a Message</h2>
                                    <p className="contact-form-subtitle">
                                        Fill out the form below and we'll get back to you within 24 hours
                                    </p>
                                </div>
                                
                                {success && (
                                    <div className="contact-success-message">
                                        <div className="contact-success-icon">
                                            <FaCheckCircle />
                                        </div>
                                        <div>
                                            <p className="contact-success-title">Message Sent Successfully!</p>
                                            <p className="contact-success-text">
                                                Thank you for reaching out. We'll get back to you within 24 hours.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {error && (
                                    <div className="contact-error-message">
                                        <p>{error}</p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="contact-form-row">
                                        <div className={`contact-form-group ${activeField === 'name' ? 'contact-form-group-active' : ''}`}>
                                            <label className="contact-form-label">
                                                <FaUser className="contact-label-icon" />
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('name')}
                                                onBlur={handleBlur}
                                                required
                                                className="contact-form-input"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className={`contact-form-group ${activeField === 'email' ? 'contact-form-group-active' : ''}`}>
                                            <label className="contact-form-label">
                                                <FaEnvelope className="contact-label-icon" />
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('email')}
                                                onBlur={handleBlur}
                                                required
                                                className="contact-form-input"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="contact-form-row">
                                        <div className={`contact-form-group ${activeField === 'phone' ? 'contact-form-group-active' : ''}`}>
                                            <label className="contact-form-label">
                                                <FaPhone className="contact-label-icon" />
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('phone')}
                                                onBlur={handleBlur}
                                                className="contact-form-input"
                                                placeholder="+92 300 1234567"
                                            />
                                        </div>
                                        <div className={`contact-form-group ${activeField === 'company' ? 'contact-form-group-active' : ''}`}>
                                            <label className="contact-form-label">
                                                <FaBuilding className="contact-label-icon" />
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('company')}
                                                onBlur={handleBlur}
                                                className="contact-form-input"
                                                placeholder="Your Company Ltd."
                                            />
                                        </div>
                                    </div>

                                    <div className="contact-form-row">
                                        <div className={`contact-form-group ${activeField === 'service' ? 'contact-form-group-active' : ''}`}>
                                            <label className="contact-form-label">
                                                <FaTag className="contact-label-icon" />
                                                Service Required *
                                            </label>
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('service')}
                                                onBlur={handleBlur}
                                                required
                                                className="contact-form-input contact-form-select"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="Mobile App Development">Mobile App Development</option>
                                                <option value="Web Development">Web Development</option>
                                                <option value="AI & Automation">AI & Automation</option>
                                                <option value="SaaS Development">SaaS Development</option>
                                                <option value="Graphic Design">Graphic Design</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div className={`contact-form-group ${activeField === 'budget' ? 'contact-form-group-active' : ''}`}>
                                            <label className="contact-form-label">
                                                Budget Range
                                            </label>
                                            <select
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('budget')}
                                                onBlur={handleBlur}
                                                className="contact-form-input contact-form-select"
                                            >
                                                <option value="">Select budget</option>
                                                <option value="Under $1,000">Under $1,000</option>
                                                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                                                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                                                <option value="$25,000+">$25,000+</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className={`contact-form-group ${activeField === 'message' ? 'contact-form-group-active' : ''}`}>
                                        <label className="contact-form-label">
                                            Project Details *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus('message')}
                                            onBlur={handleBlur}
                                            required
                                            rows="5"
                                            className="contact-form-input contact-form-textarea"
                                            placeholder="Tell us about your project, goals, and requirements..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="contact-submit-btn"
                                    >
                                        {loading ? (
                                            <>
                                                <FaSpinner className="contact-spinner" />
                                                Sending Message...
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane />
                                                Send Message
                                                <FaArrowRight className="contact-submit-arrow" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="contact-map-section">
                <div className="vertex-container">
                    <div className="contact-map-wrapper" data-aos="fade-up">
                        <div className="contact-map-overlay">
                            <div className="contact-map-card">
                                <FaMapMarkerAlt className="contact-map-icon" />
                                <h3>Visit Our Office</h3>
                                <p>We'd love to meet you in person</p>
                            </div>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.123456789!2d73.0479!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b0!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="VertexFlow Office Location"
                            className="contact-map-iframe"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="contact-cta">
                <div className="vertex-container">
                    <div className="contact-cta-content" data-aos="fade-up">
                        <h2 className="contact-cta-title">
                            Prefer a Quick Call?
                        </h2>
                        <p className="contact-cta-text">
                            Schedule a free 30-minute consultation with our team
                        </p>
                        <div className="contact-cta-buttons">
                            <a href="tel:+923001234567" className="contact-cta-btn-primary">
                                <FaPhone /> Call Now
                            </a>
                            <a href="https://calendly.com/vertexflow" target="_blank" rel="noopener noreferrer" className="contact-cta-btn-secondary">
                                Schedule Meeting <FaArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

// ============================================
// COMPLETE CUSTOM CSS FOR CONTACT PAGE
// ============================================
const contactStyles = `
  /* ========== HERO SECTION ========== */
  .contact-hero {
    position: relative;
    background: linear-gradient(135deg, #2596be, #1a7a9e, #0d4f6b);
    padding: 160px 0 140px;
    overflow: hidden;
  }

  .contact-hero-bg {
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 50%, rgba(255,255,255,0.05) 0%, transparent 50%);
  }

  .contact-hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .contact-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    background: rgba(255,255,255,0.2);
    color: #ffffff;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.05em;
    margin-bottom: 24px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
  }

  .contact-hero-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 20px;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  .contact-hero-highlight {
    color: #7ccfe3;
  }

  .contact-hero-text {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: rgba(255,255,255,0.9);
    line-height: 1.7;
    max-width: 550px;
    margin: 0 auto;
  }

  .contact-hero-wave {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    z-index: 2;
  }

  .contact-hero-wave svg {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 768px) {
    .contact-hero {
      padding: 120px 0 100px;
    }
  }

  /* ========== MAIN CONTACT SECTION ========== */
  .contact-main {
    padding: 80px 0 60px;
    background: #fafafa;
  }

  .vertex-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 48px;
  }

  @media (max-width: 1024px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }

  /* ========== SIDEBAR ========== */
  .contact-info-cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 32px;
  }

  .contact-info-card {
    display: flex;
    gap: 16px;
    padding: 24px;
    background: #ffffff;
    border-radius: 16px;
    border: 1px solid #f4f4f5;
    transition: all 0.3s ease;
    border-left: 4px solid var(--accent-color);
  }

  .contact-info-card:hover {
    transform: translateX(5px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  }

  .contact-info-icon-wrap {
    width: 48px;
    height: 48px;
    background: rgba(37,150,190,0.08);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .contact-info-icon {
    font-size: 22px;
    color: #2596be;
  }

  .contact-info-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 4px;
  }

  .contact-info-detail {
    color: #6b7280;
    font-size: 14px;
    margin: 0;
    line-height: 1.5;
  }

  /* Social Section */
  .contact-social {
    background: #ffffff;
    border-radius: 16px;
    padding: 28px 24px;
    border: 1px solid #f4f4f5;
    margin-bottom: 24px;
    text-align: center;
  }

  .contact-social-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 8px;
  }

  .contact-social-text {
    color: #9ca3af;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .contact-social-icons {
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  .contact-social-icon {
    width: 44px;
    height: 44px;
    background: #f4f4f5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
    font-size: 18px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .contact-social-icon:hover {
    background: var(--social-color);
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }

  /* Quick Response */
  .contact-quick-response {
    background: linear-gradient(135deg, #f0f9fc, #e0f2f7);
    border-radius: 16px;
    padding: 24px;
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .contact-response-icon {
    width: 48px;
    height: 48px;
    background: #10b981;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 22px;
    flex-shrink: 0;
  }

  .contact-quick-response h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 4px;
  }

  .contact-quick-response p {
    color: #6b7280;
    font-size: 13px;
    margin: 0;
    line-height: 1.4;
  }

  /* ========== FORM ========== */
  .contact-form-card {
    background: #ffffff;
    border-radius: 24px;
    padding: 48px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    border: 1px solid #f4f4f5;
  }

  @media (max-width: 640px) {
    .contact-form-card {
      padding: 28px 20px;
    }
  }

  .contact-form-header {
    margin-bottom: 36px;
  }

  .contact-form-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 10px;
  }

  .contact-form-subtitle {
    color: #6b7280;
    font-size: 15px;
    margin: 0;
  }

  /* Success Message */
  .contact-success-message {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 28px;
    animation: slideDown 0.4s ease;
  }

  @keyframes slideDown {
    from { transform: translateY(-10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .contact-success-icon {
    width: 48px;
    height: 48px;
    background: #10b981;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 24px;
    flex-shrink: 0;
  }

  .contact-success-title {
    font-weight: 700;
    color: #065f46;
    font-size: 16px;
    margin-bottom: 4px;
  }

  .contact-success-text {
    color: #047857;
    font-size: 14px;
    margin: 0;
  }

  /* Error Message */
  .contact-error-message {
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 16px;
    padding: 16px 24px;
    margin-bottom: 28px;
  }

  .contact-error-message p {
    color: #dc2626;
    margin: 0;
    font-size: 14px;
  }

  /* Form */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .contact-form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  @media (max-width: 640px) {
    .contact-form-row {
      grid-template-columns: 1fr;
    }
  }

  .contact-form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .contact-form-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 600;
    color: #374151;
  }

  .contact-label-icon {
    font-size: 14px;
    color: #2596be;
  }

  .contact-form-input {
    padding: 14px 18px;
    border: 2px solid #e4e4e7;
    border-radius: 12px;
    font-size: 15px;
    color: #1a1a1a;
    outline: none;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
    background: #fafafa;
  }

  .contact-form-input:focus {
    border-color: #2596be;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(37,150,190,0.08);
  }

  .contact-form-group-active .contact-form-input {
    border-color: #2596be;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(37,150,190,0.08);
  }

  .contact-form-input::placeholder {
    color: #9ca3af;
  }

  .contact-form-select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%236b7280' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    padding-right: 40px;
    cursor: pointer;
  }

  .contact-form-textarea {
    resize: vertical;
    min-height: 120px;
  }

  /* Submit Button */
  .contact-submit-btn {
    width: 100%;
    padding: 18px 32px;
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
    box-shadow: 0 4px 15px rgba(37,150,190,0.3);
    position: relative;
    overflow: hidden;
  }

  .contact-submit-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
  }

  .contact-submit-btn:hover::before {
    left: 100%;
  }

  .contact-submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(37,150,190,0.5);
  }

  .contact-submit-btn:active {
    transform: translateY(0);
  }

  .contact-submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  .contact-submit-arrow {
    transition: transform 0.3s ease;
  }

  .contact-submit-btn:hover .contact-submit-arrow {
    transform: translateX(5px);
  }

  .contact-spinner {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* ========== MAP SECTION ========== */
  .contact-map-section {
    padding: 0 0 80px;
    background: #fafafa;
  }

  .contact-map-wrapper {
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    position: relative;
  }

  .contact-map-overlay {
    position: absolute;
    top: 40px;
    left: 40px;
    z-index: 10;
    pointer-events: none;
  }

  .contact-map-card {
    background: #ffffff;
    padding: 20px 28px;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .contact-map-icon {
    font-size: 28px;
    color: #2596be;
  }

  .contact-map-card h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 2px;
  }

  .contact-map-card p {
    color: #6b7280;
    font-size: 14px;
    margin: 0;
  }

  @media (max-width: 640px) {
    .contact-map-overlay {
      top: 20px;
      left: 20px;
      right: 20px;
    }
    .contact-map-card {
      padding: 16px 20px;
    }
  }

  .contact-map-iframe {
    display: block;
  }

  /* ========== CTA SECTION ========== */
  .contact-cta {
    padding: 100px 0 120px;
    background: linear-gradient(135deg, #0a0a0a, #1a1a2e);
    position: relative;
    overflow: hidden;
  }

  .contact-cta::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(37,150,190,0.1) 0%, transparent 70%);
  }

  .contact-cta-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  .contact-cta-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 16px;
  }

  .contact-cta-text {
    font-size: 1.1rem;
    color: rgba(255,255,255,0.8);
    margin-bottom: 40px;
  }

  .contact-cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .contact-cta-btn-primary {
    padding: 18px 36px;
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(37,150,190,0.3);
  }

  .contact-cta-btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(37,150,190,0.5);
  }

  .contact-cta-btn-secondary {
    padding: 18px 36px;
    background: transparent;
    color: #ffffff;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
  }

  .contact-cta-btn-secondary:hover {
    background: #ffffff;
    color: #2596be;
    border-color: #ffffff;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    .contact-cta {
      padding: 80px 0;
    }
    .contact-main {
      padding: 60px 0 40px;
    }
  }
`;

export default Contact;