import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
    FaQuestionCircle, FaChevronDown, FaChevronUp, FaSearch,
    FaMobile, FaCode, FaRobot, FaCloud, FaPalette, FaChartLine,
    FaArrowRight, FaEnvelope, FaPhone, FaHeadphones
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FAQ = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    const faqCategories = [
        { id: 'all', label: 'All Questions', icon: FaQuestionCircle },
        { id: 'services', label: 'Services', icon: FaCode },
        { id: 'pricing', label: 'Pricing', icon: FaChartLine },
        { id: 'process', label: 'Process', icon: FaCloud },
        { id: 'support', label: 'Support', icon: FaHeadphones },
        { id: 'technical', label: 'Technical', icon: FaRobot }
    ];

    const faqData = [
        {
            id: 1,
            category: 'services',
            question: 'What services does VertexFlow offer?',
            answer: 'We offer a comprehensive range of digital services including Mobile App Development, Web Development, AI & Automation, SaaS Development, Graphic Design, and SEO & Digital Marketing. Each service is tailored to meet your specific business needs.',
            icon: FaCode
        },
        {
            id: 2,
            category: 'services',
            question: 'Do you build custom software solutions?',
            answer: 'Yes! We specialize in building custom software solutions tailored to your unique business requirements. From SaaS platforms to mobile apps, we create solutions that fit your exact needs.',
            icon: FaCloud
        },
        {
            id: 3,
            category: 'services',
            question: 'What technologies do you use for development?',
            answer: 'We use modern, cutting-edge technologies including React, React Native, Flutter, Node.js, Python, MongoDB, PostgreSQL, AWS, Docker, and various AI/ML frameworks. Our tech stack is chosen based on project requirements.',
            icon: FaRobot
        },
        {
            id: 4,
            category: 'services',
            question: 'Can you work with our existing systems?',
            answer: 'Absolutely! We have extensive experience integrating with existing systems, APIs, and legacy applications. Our team ensures smooth integration with minimal disruption to your operations.',
            icon: FaMobile
        },
        {
            id: 5,
            category: 'pricing',
            question: 'How much does a project cost?',
            answer: 'Project costs vary based on scope, complexity, and requirements. We offer flexible pricing models:\n\n• Basic Websites: from $500\n• Mobile Apps: from $3,000\n• AI Solutions: from $5,000\n• Complex Applications: $10,000+\n\nWe provide detailed quotes after understanding your project needs.',
            icon: FaChartLine
        },
        {
            id: 6,
            category: 'pricing',
            question: 'Do you offer fixed-price or hourly rates?',
            answer: 'We offer both fixed-price and hourly rate models. Fixed-price works best for well-defined projects, while hourly rates are ideal for ongoing work or projects with evolving requirements. We also offer monthly retainer packages.',
            icon: FaChartLine
        },
        {
            id: 7,
            category: 'pricing',
            question: 'What payment methods do you accept?',
            answer: 'We accept bank transfers, credit/debit cards, PayPal, Payoneer, and Wise. For international clients, we recommend Payoneer or Wise for lower transfer fees.',
            icon: FaChartLine
        },
        {
            id: 8,
            category: 'pricing',
            question: 'Is there a minimum project size?',
            answer: 'While we handle projects of all sizes, our minimum engagement is typically $500. This ensures we can deliver quality work while maintaining our standards.',
            icon: FaChartLine
        },
        {
            id: 9,
            category: 'process',
            question: 'What is your development process?',
            answer: 'Our proven 5-step process:\n\n1. Discovery & Planning - Understanding your vision\n2. Design & Prototype - Creating wireframes and mockups\n3. Development - Building with agile methodology\n4. Testing & QA - Rigorous quality assurance\n5. Launch & Support - Deployment and ongoing maintenance',
            icon: FaCloud
        },
        {
            id: 10,
            category: 'process',
            question: 'How long does a typical project take?',
            answer: 'Timelines vary by project:\n\n• Landing Page: 1-2 weeks\n• Website: 2-6 weeks\n• Mobile App: 2-4 months\n• SaaS Platform: 3-6 months\n• AI Solution: 1-4 months\n\nWe provide detailed timelines during the planning phase.',
            icon: FaCloud
        },
        {
            id: 11,
            category: 'process',
            question: 'How do you communicate during projects?',
            answer: 'We maintain transparent communication through:\n\n• Regular progress updates (weekly/daily)\n• Project management tools (Jira, Trello)\n• Video calls (Zoom, Google Meet)\n• Instant messaging (Slack, WhatsApp)\n• Detailed documentation',
            icon: FaCloud
        },
        {
            id: 12,
            category: 'process',
            question: 'Can I make changes during development?',
            answer: 'Yes! We follow agile methodology which allows for changes and iterations during development. We discuss scope changes and their impact on timeline and budget transparently.',
            icon: FaCloud
        },
        {
            id: 13,
            category: 'support',
            question: 'What kind of support do you offer after launch?',
            answer: 'We offer comprehensive post-launch support:\n\n• Bug fixes and maintenance\n• Performance optimization\n• Security updates\n• Feature enhancements\n• 24/7 emergency support (premium plans)\n• Technical consulting',
            icon: FaHeadphones
        },
        {
            id: 14,
            category: 'support',
            question: 'How quickly do you respond to support requests?',
            answer: 'Our typical response times:\n\n• Standard Support: Within 24 hours\n• Priority Support: Within 4 hours\n• Emergency/Critical: Within 1 hour\n\nResponse times may vary based on your support plan.',
            icon: FaHeadphones
        },
        {
            id: 15,
            category: 'support',
            question: 'Do you provide training for our team?',
            answer: 'Yes! We provide comprehensive training sessions for your team including:\n\n• Admin panel training\n• Content management system training\n• Technical documentation\n• Video tutorials\n• Hands-on workshops',
            icon: FaHeadphones
        },
        {
            id: 16,
            category: 'technical',
            question: 'Do you provide hosting and deployment?',
            answer: 'Yes, we handle complete deployment including:\n\n• Server setup and configuration\n• Cloud deployment (AWS, Google Cloud, Azure)\n• Domain and SSL configuration\n• CI/CD pipeline setup\n• Database setup and optimization',
            icon: FaRobot
        },
        {
            id: 17,
            category: 'technical',
            question: 'How do you ensure code quality?',
            answer: 'We maintain high code quality through:\n\n• Code reviews by senior developers\n• Automated testing (unit, integration, E2E)\n• Continuous Integration/Deployment (CI/CD)\n• Coding standards and best practices\n• Regular security audits',
            icon: FaRobot
        },
        {
            id: 18,
            category: 'technical',
            question: 'Is my data secure with your solutions?',
            answer: 'Security is our top priority. We implement:\n\n• SSL/TLS encryption\n• Secure authentication (OAuth, JWT)\n• Regular security updates\n• GDPR compliance\n• Data backup and recovery\n• Role-based access control',
            icon: FaRobot
        },
        {
            id: 19,
            category: 'technical',
            question: 'Can you scale the application as my business grows?',
            answer: 'Absolutely! We build scalable solutions using:\n\n• Cloud-native architecture\n• Microservices when needed\n• Load balancing and auto-scaling\n• Database optimization\n• Caching strategies\n• CDN integration',
            icon: FaRobot
        },
        {
            id: 20,
            category: 'technical',
            question: 'Do you offer API development services?',
            answer: 'Yes! We build robust RESTful and GraphQL APIs with:\n\n• Comprehensive documentation\n• Rate limiting and security\n• Version management\n• Third-party integrations\n• Webhook support',
            icon: FaRobot
        }
    ];

    const filteredFaqs = faqData.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <>
            <style>{faqStyles}</style>
            
            <Helmet>
                <title>FAQ | VertexFlow Technologies</title>
                <meta name="description" content="Frequently Asked Questions about VertexFlow Technologies - Services, pricing, process, support, and technical questions." />
            </Helmet>

            {/* Hero Section */}
            <section className="faq-hero">
                <div className="faq-hero-bg"></div>
                <div className="faq-hero-content">
                    <span className="faq-hero-badge" data-aos="fade-down">
                        <FaQuestionCircle /> Help Center
                    </span>
                    <h1 className="faq-hero-title" data-aos="fade-up">
                        Frequently Asked <span className="faq-hero-highlight">Questions</span>
                    </h1>
                    <p className="faq-hero-text" data-aos="fade-up" data-aos-delay="100">
                        Find answers to common questions about our services, pricing, process, and more.
                        Can't find what you're looking for? Contact us directly.
                    </p>
                    
                    {/* Search */}
                    <div className="faq-hero-search" data-aos="fade-up" data-aos-delay="200">
                        <FaSearch className="faq-hero-search-icon" />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search your question here..."
                            className="faq-hero-search-input"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="faq-content">
                <div className="vertex-container">
                    {/* Category Filter */}
                    <div className="faq-categories" data-aos="fade-up">
                        {faqCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => { setActiveCategory(category.id); setOpenFaq(null); }}
                                className={`faq-category-btn ${activeCategory === category.id ? 'faq-category-active' : ''}`}
                            >
                                <category.icon className="faq-category-icon" />
                                <span>{category.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* FAQ Grid */}
                    <div className="faq-grid">
                        {/* FAQ List */}
                        <div className="faq-main">
                            {filteredFaqs.length === 0 ? (
                                <div className="faq-empty">
                                    <FaSearch className="faq-empty-icon" />
                                    <h3>No questions found</h3>
                                    <p>Try a different search term or category</p>
                                </div>
                            ) : (
                                <div className="faq-list">
                                    {filteredFaqs.map((faq, index) => (
                                        <div
                                            key={faq.id}
                                            className={`faq-item ${openFaq === faq.id ? 'faq-item-open' : ''}`}
                                            data-aos="fade-up"
                                            data-aos-delay={index * 50}
                                        >
                                            <div
                                                className="faq-item-header"
                                                onClick={() => toggleFaq(faq.id)}
                                            >
                                                <div className="faq-item-left">
                                                    <div className="faq-item-icon">
                                                        <faq.icon />
                                                    </div>
                                                    <h3 className="faq-item-question">{faq.question}</h3>
                                                </div>
                                                <span className="faq-item-toggle">
                                                    {openFaq === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                                                </span>
                                            </div>
                                            <div className="faq-item-answer">
                                                <div className="faq-item-answer-content">
                                                    {faq.answer.split('\n').map((line, i) => (
                                                        <span key={i}>
                                                            {line}
                                                            {i < faq.answer.split('\n').length - 1 && <br />}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="faq-sidebar" data-aos="fade-left">
                            {/* Quick Links */}
                            <div className="faq-sidebar-card">
                                <h3 className="faq-sidebar-title">Quick Links</h3>
                                <ul className="faq-sidebar-links">
                                    <li><Link to="/services">Our Services <FaArrowRight /></Link></li>
                                    <li><Link to="/portfolio">View Portfolio <FaArrowRight /></Link></li>
                                    <li><Link to="/contact">Contact Us <FaArrowRight /></Link></li>
                                    <li><Link to="/careers">Careers <FaArrowRight /></Link></li>
                                    <li><Link to="/blog">Blog & Insights <FaArrowRight /></Link></li>
                                </ul>
                            </div>

                            {/* Still Have Questions */}
                            <div className="faq-help-card">
                                <div className="faq-help-icon">
                                    <FaQuestionCircle />
                                </div>
                                <h3>Still Have Questions?</h3>
                                <p>Can't find the answer you're looking for? Our team is here to help.</p>
                                <div className="faq-help-buttons">
                                    <Link to="/contact" className="faq-help-btn-primary">
                                        <FaEnvelope /> Contact Us
                                    </Link>
                                    <a href="tel:+923001234567" className="faq-help-btn-secondary">
                                        <FaPhone /> Call Now
                                    </a>
                                </div>
                            </div>

                            {/* Popular Questions */}
                            <div className="faq-sidebar-card">
                                <h3 className="faq-sidebar-title">Popular Questions</h3>
                                <ul className="faq-popular-list">
                                    {faqData.slice(0, 5).map((faq) => (
                                        <li 
                                            key={faq.id} 
                                            className="faq-popular-item"
                                            onClick={() => {
                                                setActiveCategory('all');
                                                setSearchTerm('');
                                                setOpenFaq(faq.id);
                                                window.scrollTo({ top: 300, behavior: 'smooth' });
                                            }}
                                        >
                                            <FaQuestionCircle className="faq-popular-icon" />
                                            <span>{faq.question}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="faq-cta">
                <div className="faq-cta-bg"></div>
                <div className="vertex-container">
                    <div className="faq-cta-content" data-aos="fade-up">
                        <h2 className="faq-cta-title">Ready to Start Your Project?</h2>
                        <p className="faq-cta-text">
                            Get in touch with our team and let's discuss your requirements
                        </p>
                        <div className="faq-cta-buttons">
                            <Link to="/contact" className="faq-cta-btn-primary">
                                Get Free Consultation <FaArrowRight />
                            </Link>
                            <a href="https://calendly.com/vertexflow" target="_blank" rel="noopener noreferrer" className="faq-cta-btn-secondary">
                                Schedule a Call
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

// ============================================
// CUSTOM CSS FOR FAQ PAGE
// ============================================
const faqStyles = `
  .vertex-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* ========== HERO SECTION ========== */
  .faq-hero {
    position: relative;
    background: linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e);
    padding: 160px 0 100px;
    overflow: hidden;
  }

  .faq-hero-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 30% 50%, rgba(37,150,190,0.08) 0%, transparent 50%);
  }

  .faq-hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 750px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .faq-hero-badge {
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

  .faq-hero-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 20px;
    line-height: 1.15;
  }

  .faq-hero-highlight {
    background: linear-gradient(135deg, #2596be, #3aacd8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .faq-hero-text {
    font-size: 1.1rem;
    color: rgba(255,255,255,0.8);
    max-width: 550px;
    margin: 0 auto 32px;
    line-height: 1.7;
  }

  .faq-hero-search {
    position: relative;
    max-width: 550px;
    margin: 0 auto;
  }

  .faq-hero-search-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    font-size: 18px;
    z-index: 2;
  }

  .faq-hero-search-input {
    width: 100%;
    padding: 18px 24px 18px 56px;
    border-radius: 50px;
    border: 2px solid rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.08);
    color: #ffffff;
    font-size: 16px;
    outline: none;
    font-family: 'Inter', sans-serif;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .faq-hero-search-input::placeholder {
    color: rgba(255,255,255,0.4);
  }

  .faq-hero-search-input:focus {
    border-color: #2596be;
    background: rgba(255,255,255,0.12);
    box-shadow: 0 0 0 4px rgba(37,150,190,0.1);
  }

  @media (max-width: 768px) {
    .faq-hero {
      padding: 120px 0 60px;
    }
  }

  /* ========== CONTENT SECTION ========== */
  .faq-content {
    padding: 60px 0 100px;
    background: #fafafa;
  }

  /* Categories */
  .faq-categories {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 48px;
  }

  .faq-category-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: 50px;
    border: 2px solid #e4e4e7;
    background: #ffffff;
    color: #6b7280;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
  }

  .faq-category-btn:hover {
    border-color: #2596be;
    color: #2596be;
    background: #f0f9fc;
  }

  .faq-category-active {
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    border-color: #2596be;
    box-shadow: 0 4px 15px rgba(37,150,190,0.3);
  }

  .faq-category-active:hover {
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
  }

  .faq-category-icon {
    font-size: 16px;
  }

  /* FAQ Grid */
  .faq-grid {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 40px;
    align-items: start;
  }

  @media (max-width: 1024px) {
    .faq-grid {
      grid-template-columns: 1fr;
    }
  }

  /* FAQ List */
  .faq-empty {
    text-align: center;
    padding: 80px 0;
  }

  .faq-empty-icon {
    font-size: 64px;
    color: #d4d4d8;
    margin-bottom: 20px;
  }

  .faq-empty h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 24px;
    color: #374151;
    margin-bottom: 8px;
  }

  .faq-empty p {
    color: #9ca3af;
  }

  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .faq-item {
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .faq-item:hover {
    border-color: #2596be;
  }

  .faq-item-open {
    border-color: #2596be;
    box-shadow: 0 4px 20px rgba(37,150,190,0.1);
  }

  .faq-item-header {
    padding: 22px 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    gap: 16px;
    transition: background 0.2s ease;
  }

  .faq-item-header:hover {
    background: #fafafa;
  }

  .faq-item-left {
    display: flex;
    align-items: center;
    gap: 16px;
    flex: 1;
  }

  .faq-item-icon {
    width: 44px;
    height: 44px;
    background: rgba(37,150,190,0.08);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2596be;
    font-size: 20px;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .faq-item-open .faq-item-icon {
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
  }

  .faq-item-question {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #0a0a0a;
    margin: 0;
    line-height: 1.4;
  }

  .faq-item-toggle {
    width: 34px;
    height: 34px;
    background: #f4f4f5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
    font-size: 14px;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .faq-item-open .faq-item-toggle {
    background: #2596be;
    color: #ffffff;
  }

  .faq-item-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, padding 0.4s ease;
  }

  .faq-item-open .faq-item-answer {
    max-height: 500px;
    padding: 0 28px 24px;
  }

  .faq-item-answer-content {
    color: #4b5563;
    line-height: 1.8;
    font-size: 15px;
    padding-left: 60px;
  }

  @media (max-width: 640px) {
    .faq-item-header {
      padding: 18px 20px;
    }
    .faq-item-open .faq-item-answer {
      padding: 0 20px 20px;
    }
    .faq-item-answer-content {
      padding-left: 60px;
    }
    .faq-item-icon {
      width: 38px;
      height: 38px;
      font-size: 18px;
    }
    .faq-item-question {
      font-size: 14px;
    }
  }

  /* ========== SIDEBAR ========== */
  .faq-sidebar {
    position: sticky;
    top: 100px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media (max-width: 1024px) {
    .faq-sidebar {
      position: static;
    }
  }

  .faq-sidebar-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 28px;
    border: 1px solid #f4f4f5;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  }

  .faq-sidebar-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid #f4f4f5;
  }

  .faq-sidebar-links {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .faq-sidebar-links a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    color: #374151;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    border-radius: 10px;
    transition: all 0.2s ease;
  }

  .faq-sidebar-links a:hover {
    background: #f0f9fc;
    color: #2596be;
  }

  .faq-sidebar-links a svg {
    font-size: 12px;
    color: #2596be;
    transition: transform 0.2s ease;
  }

  .faq-sidebar-links a:hover svg {
    transform: translateX(3px);
  }

  /* Help Card */
  .faq-help-card {
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    border-radius: 20px;
    padding: 32px 28px;
    text-align: center;
    color: #ffffff;
  }

  .faq-help-icon {
    width: 60px;
    height: 60px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
    font-size: 28px;
    border: 2px solid rgba(255,255,255,0.3);
  }

  .faq-help-card h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .faq-help-card p {
    font-size: 14px;
    opacity: 0.9;
    margin-bottom: 24px;
    line-height: 1.5;
  }

  .faq-help-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .faq-help-btn-primary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 20px;
    background: #ffffff;
    color: #2596be;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
  }

  .faq-help-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }

  .faq-help-btn-secondary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 20px;
    background: transparent;
    color: #ffffff;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
  }

  .faq-help-btn-secondary:hover {
    background: rgba(255,255,255,0.1);
    border-color: #ffffff;
  }

  /* Popular Questions */
  .faq-popular-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .faq-popular-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 12px;
    color: #6b7280;
    font-size: 13px;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.2s ease;
  }

  .faq-popular-item:hover {
    background: #f0f9fc;
    color: #2596be;
  }

  .faq-popular-icon {
    color: #2596be;
    font-size: 14px;
    margin-top: 2px;
    flex-shrink: 0;
  }

  /* ========== CTA SECTION ========== */
  .faq-cta {
    position: relative;
    padding: 120px 0;
    background: linear-gradient(135deg, #2596be, #1a7a9e, #0d4f6b);
    overflow: hidden;
  }

  .faq-cta-bg {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  .faq-cta-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  .faq-cta-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 16px;
  }

  .faq-cta-text {
    font-size: 1.1rem;
    color: rgba(255,255,255,0.85);
    margin-bottom: 40px;
    line-height: 1.6;
  }

  .faq-cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .faq-cta-btn-primary {
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

  .faq-cta-btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.25);
  }

  .faq-cta-btn-secondary {
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

  .faq-cta-btn-secondary:hover {
    background: #ffffff;
    color: #2596be;
    border-color: #ffffff;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    .faq-cta {
      padding: 80px 0;
    }
    .faq-content {
      padding: 40px 0 80px;
    }
  }
`;

export default FAQ;