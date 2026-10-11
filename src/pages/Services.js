import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
    FaMobile, FaCode, FaRobot, FaCloud, FaPalette, FaChartLine,
    FaArrowRight, FaCheck, FaStar, FaHeadphones, FaShieldAlt,
    FaRocket, FaClock, FaUsers, FaCog
} from 'react-icons/fa';
import axios from 'axios';

const Services = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/services');
            setServices(response.data.data);
        } catch (error) {
            console.error('Error fetching services:', error);
            setServices(defaultServices);
        } finally {
            setLoading(false);
        }
    };

    const defaultServices = [
        {
            title: 'Mobile App Development',
            category: 'software',
            description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
            features: [
                'iOS & Android Development',
                'React Native & Flutter',
                'UI/UX Design',
                'App Store Optimization',
                'API Integration',
                'Push Notifications'
            ],
            pricing: { startingAt: 5000 },
            icon: 'FaMobile'
        },
        {
            title: 'Web Development',
            category: 'software',
            description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance and scalability.',
            features: [
                'Frontend Development',
                'Backend Development',
                'E-commerce Solutions',
                'Progressive Web Apps',
                'CMS Development',
                'API Development'
            ],
            pricing: { startingAt: 3000 },
            icon: 'FaCode'
        },
        {
            title: 'AI & Automation',
            category: 'ai',
            description: 'Intelligent automation solutions powered by artificial intelligence to streamline your business processes.',
            features: [
                'AI Chatbots',
                'Machine Learning',
                'Process Automation',
                'Data Analytics',
                'Natural Language Processing',
                'Predictive Analytics'
            ],
            pricing: { startingAt: 8000 },
            icon: 'FaRobot'
        },
        {
            title: 'SaaS Development',
            category: 'software',
            description: 'Scalable cloud-based software solutions designed to grow with your business and serve millions of users.',
            features: [
                'Cloud Architecture',
                'Multi-tenant Systems',
                'Subscription Management',
                'API Development',
                'Security & Compliance',
                'Performance Optimization'
            ],
            pricing: { startingAt: 10000 },
            icon: 'FaCloud'
        },
        {
            title: 'Graphic Design',
            category: 'agency',
            description: 'Creative design solutions that communicate your brand message effectively and leave a lasting impression.',
            features: [
                'Brand Identity',
                'UI/UX Design',
                'Logo Design',
                'Print Design',
                'Social Media Graphics',
                'Marketing Materials'
            ],
            pricing: { startingAt: 500 },
            icon: 'FaPalette'
        },
        {
            title: 'Digital Marketing',
            category: 'agency',
            description: 'Data-driven marketing strategies to increase your online presence and drive qualified leads to your business.',
            features: [
                'SEO Optimization',
                'Social Media Marketing',
                'Google Ads',
                'Content Marketing',
                'Email Marketing',
                'Analytics & Reporting'
            ],
            pricing: { startingAt: 1000 },
            icon: 'FaChartLine'
        }
    ];

    const packages = [
        {
            name: 'Starter',
            price: '$2,999',
            description: 'Perfect for startups and small businesses',
            features: [
                'Basic Website/App',
                '5 Pages/Screens',
                'Responsive Design',
                'Contact Form',
                'Basic SEO',
                '1 Month Support'
            ],
            popular: false
        },
        {
            name: 'Professional',
            price: '$7,999',
            description: 'Ideal for growing businesses',
            features: [
                'Custom Web Application',
                'Up to 20 Pages/Screens',
                'Advanced UI/UX',
                'API Integration',
                'Admin Dashboard',
                'Payment Integration',
                'Advanced SEO',
                '3 Months Support'
            ],
            popular: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'For large-scale projects',
            features: [
                'Full-scale Solution',
                'Unlimited Pages/Screens',
                'Custom Architecture',
                'Third-party Integrations',
                'AI/ML Features',
                'Load Balancing',
                '24/7 Support',
                'Dedicated Team',
                'Cloud Deployment'
            ],
            popular: false
        }
    ];

    const whyChooseUs = [
        {
            icon: FaStar,
            title: 'Expert Team',
            description: 'Highly skilled developers and designers with years of industry experience'
        },
        {
            icon: FaHeadphones,
            title: '24/7 Support',
            description: 'Round-the-clock technical support and maintenance for your peace of mind'
        },
        {
            icon: FaCheck,
            title: 'Quality Assurance',
            description: 'Rigorous testing and quality checks to ensure bug-free delivery'
        },
        {
            icon: FaArrowRight,
            title: 'Fast Delivery',
            description: 'Agile methodology for quick turnaround without compromising quality'
        }
    ];

    const getIcon = (iconName) => {
        const icons = {
            FaMobile: FaMobile,
            FaCode: FaCode,
            FaRobot: FaRobot,
            FaCloud: FaCloud,
            FaPalette: FaPalette,
            FaChartLine: FaChartLine
        };
        return icons[iconName] || FaCode;
    };

    const filteredServices = activeCategory === 'all' 
        ? defaultServices 
        : defaultServices.filter(service => service.category === activeCategory);

    if (loading) {
        return (
            <>
                <style>{servicesStyles}</style>
                <div className="services-loading">
                    <div className="services-spinner"></div>
                </div>
            </>
        );
    }

    return (
        <>
            <style>{servicesStyles}</style>
            
            <Helmet>
                <title>Services | VertexFlow Technologies</title>
                <meta name="description" content="Explore our comprehensive range of software development, AI automation, and digital marketing services." />
            </Helmet>

            {/* Hero Section */}
            <section className="services-hero">
                <div className="services-hero-overlay"></div>
                <div className="services-hero-content">
                    <span className="services-hero-badge" data-aos="fade-down">OUR SERVICES</span>
                    <h1 className="services-hero-title" data-aos="fade-up">
                        Comprehensive Tech<br /><span className="services-hero-highlight">Solutions</span>
                    </h1>
                    <p className="services-hero-text" data-aos="fade-up" data-aos-delay="100">
                        Comprehensive technology solutions tailored to your business needs. From mobile apps to AI automation, we deliver excellence.
                    </p>
                </div>
                <div className="services-hero-wave">
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z" fill="#ffffff"/>
                    </svg>
                </div>
            </section>

            {/* Category Filter */}
            <section className="services-filter-section">
                <div className="vertex-container">
                    <div className="services-filter-wrapper">
                        {[
                            { id: 'all', label: 'All Services', icon: FaCog },
                            { id: 'software', label: 'Software Development', icon: FaCode },
                            { id: 'agency', label: 'Agency Services', icon: FaPalette },
                            { id: 'ai', label: 'AI Solutions', icon: FaRobot }
                        ].map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`services-filter-btn ${activeCategory === category.id ? 'services-filter-active' : ''}`}
                            >
                                <category.icon className="services-filter-icon" />
                                <span>{category.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-grid-section">
                <div className="vertex-container">
                    <div className="services-grid">
                        {filteredServices.map((service, index) => {
                            const IconComponent = getIcon(service.icon);
                            return (
                                <div
                                    key={index}
                                    className="service-card-detailed"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="service-card-icon-wrap">
                                        <IconComponent className="service-card-icon" />
                                    </div>
                                    
                                    <div className="service-card-content">
                                        <span className="service-card-category">{service.category}</span>
                                        <h3 className="service-card-title">{service.title}</h3>
                                        <p className="service-card-desc">{service.description}</p>
                                        
                                        <div className="service-card-features">
                                            {service.features.slice(0, 4).map((feature, idx) => (
                                                <div key={idx} className="service-card-feature">
                                                    <FaCheck className="service-card-check" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                            {service.features.length > 4 && (
                                                <div className="service-card-more">
                                                    +{service.features.length - 4} more features
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="service-card-footer">
                                        <div className="service-card-pricing">
                                            <span className="service-card-price-label">Starting at</span>
                                            <span className="service-card-price">
                                                ${service.pricing.startingAt.toLocaleString()}
                                            </span>
                                        </div>
                                        <Link
                                            to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="service-card-btn"
                                        >
                                            Learn More <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Pricing Packages */}
            <section className="pricing-section">
                <div className="vertex-container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">PRICING</span>
                        <h2 className="section-title">
                            Choose Your <span className="gradient-text">Package</span>
                        </h2>
                        <p className="section-description">
                            Flexible pricing options designed to fit your project requirements and budget
                        </p>
                    </div>

                    <div className="pricing-grid">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`pricing-card ${pkg.popular ? 'pricing-card-popular' : ''}`}
                                data-aos="fade-up"
                                data-aos-delay={index * 200}
                            >
                                {pkg.popular && (
                                    <div className="pricing-badge">
                                        <FaStar /> Most Popular
                                    </div>
                                )}
                                
                                <div className="pricing-header">
                                    <h3 className="pricing-name">{pkg.name}</h3>
                                    <p className="pricing-desc">{pkg.description}</p>
                                    <div className="pricing-price-wrap">
                                        <span className="pricing-price">{pkg.price}</span>
                                        {pkg.price !== 'Custom' && <span className="pricing-period">/project</span>}
                                    </div>
                                </div>

                                <ul className="pricing-features">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="pricing-feature">
                                            <FaCheck className="pricing-check" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/contact"
                                    className={`pricing-btn ${pkg.popular ? 'pricing-btn-primary' : 'pricing-btn-outline'}`}
                                >
                                    {pkg.popular ? 'Get Started Now' : 'Choose Plan'}
                                    <FaArrowRight />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-us-section">
                <div className="vertex-container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">WHY CHOOSE US</span>
                        <h2 className="section-title">
                            What Sets Us <span className="gradient-text">Apart</span>
                        </h2>
                    </div>

                    <div className="why-us-grid">
                        {whyChooseUs.map((item, index) => (
                            <div
                                key={index}
                                className="why-us-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="why-us-icon-wrap">
                                    <item.icon className="why-us-icon" />
                                </div>
                                <h3 className="why-us-title">{item.title}</h3>
                                <p className="why-us-desc">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta">
                <div className="services-cta-pattern"></div>
                <div className="vertex-container">
                    <div className="services-cta-content" data-aos="fade-up">
                        <h2 className="services-cta-title">
                            Ready to Start Your Project?
                        </h2>
                        <p className="services-cta-text">
                            Let's discuss your requirements and create something extraordinary together
                        </p>
                        <div className="services-cta-buttons">
                            <Link to="/contact" className="services-cta-btn-primary">
                                Get Free Consultation <FaArrowRight />
                            </Link>
                            <a href="https://calendly.com/vertexflow" target="_blank" rel="noopener noreferrer" className="services-cta-btn-outline">
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
// COMPLETE CUSTOM CSS FOR SERVICES PAGE
// ============================================
const servicesStyles = `
  /* Loading */
  .services-loading {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fafafa;
  }

  .services-spinner {
    width: 48px;
    height: 48px;
    border: 3px solid #e4e4e7;
    border-top-color: #2596be;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* ========== HERO SECTION ========== */
  .services-hero {
    position: relative;
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 50%, #0d4f6b 100%);
    padding: 160px 0 120px;
    overflow: hidden;
  }

  .services-hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.2);
  }

  .services-hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .services-hero-badge {
    display: inline-block;
    padding: 8px 20px;
    background: rgba(255,255,255,0.15);
    color: #ffffff;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
    margin-bottom: 24px;
    border: 1px solid rgba(255,255,255,0.2);
    backdrop-filter: blur(10px);
  }

  .services-hero-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 24px;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  .services-hero-highlight {
    color: #7ccfe3;
  }

  .services-hero-text {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: rgba(255,255,255,0.85);
    line-height: 1.7;
    max-width: 600px;
    margin: 0 auto;
  }

  .services-hero-wave {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    z-index: 2;
  }

  .services-hero-wave svg {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    .services-hero {
      padding: 120px 0 80px;
    }
  }

  /* ========== FILTER SECTION ========== */
  .services-filter-section {
    padding: 40px 0;
    background: #ffffff;
    border-bottom: 1px solid #f4f4f5;
    position: sticky;
    top: 80px;
    z-index: 100;
  }

  .services-filter-wrapper {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .services-filter-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    border-radius: 50px;
    border: 2px solid #e4e4e7;
    background: #ffffff;
    color: #6b7280;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-family: 'Inter', sans-serif;
    white-space: nowrap;
  }

  .services-filter-btn:hover {
    border-color: #2596be;
    color: #2596be;
    background: #f0f9fc;
  }

  .services-filter-active {
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 100%);
    color: #ffffff;
    border-color: #2596be;
    box-shadow: 0 4px 15px rgba(37,150,190,0.3);
  }

  .services-filter-active:hover {
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 100%);
    color: #ffffff;
  }

  .services-filter-icon {
    font-size: 16px;
  }

  /* ========== SERVICES GRID ========== */
  .services-grid-section {
    padding: 80px 0 100px;
    background: #fafafa;
  }

  .vertex-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  @media (max-width: 1200px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .services-grid {
      grid-template-columns: 1fr;
    }
  }

  .service-card-detailed {
    background: #ffffff;
    border-radius: 24px;
    padding: 0;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    border: 1px solid #f4f4f5;
  }

  .service-card-detailed:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    border-color: rgba(37,150,190,0.2);
  }

  .service-card-icon-wrap {
    padding: 40px 32px 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .service-card-icon {
    font-size: 42px;
    color: #2596be;
    transition: all 0.3s ease;
  }

  .service-card-detailed:hover .service-card-icon {
    transform: scale(1.1) rotate(5deg);
    color: #1a7a9e;
  }

  .service-card-content {
    padding: 0 32px 24px;
    flex: 1;
  }

  .service-card-category {
    display: inline-block;
    padding: 4px 12px;
    background: #f0f9fc;
    color: #2596be;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 16px;
  }

  .service-card-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 12px;
    line-height: 1.3;
  }

  .service-card-desc {
    color: #6b7280;
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 24px;
  }

  .service-card-features {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .service-card-feature {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #374151;
    font-size: 14px;
  }

  .service-card-check {
    color: #10b981;
    font-size: 16px;
    flex-shrink: 0;
  }

  .service-card-more {
    color: #2596be;
    font-size: 13px;
    font-weight: 600;
    padding-left: 26px;
  }

  .service-card-footer {
    padding: 24px 32px;
    border-top: 1px solid #f4f4f5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fafafa;
  }

  .service-card-pricing {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .service-card-price-label {
    font-size: 12px;
    color: #9ca3af;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .service-card-price {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #2596be;
  }

  .service-card-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 100%);
    color: #ffffff;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(37,150,190,0.25);
  }

  .service-card-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37,150,190,0.4);
  }

  /* ========== PRICING SECTION ========== */
  .pricing-section {
    padding: 120px 0;
    background: #ffffff;
  }

  .section-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .section-badge {
    display: inline-block;
    padding: 8px 20px;
    background: rgba(37,150,190,0.08);
    color: #2596be;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
    margin-bottom: 20px;
  }

  .section-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .gradient-text {
    background: linear-gradient(135deg, #2596be 0%, #3aacd8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .section-description {
    font-size: 1.125rem;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    align-items: start;
  }

  @media (max-width: 1024px) {
    .pricing-grid {
      grid-template-columns: 1fr;
      max-width: 500px;
      margin: 0 auto;
    }
  }

  .pricing-card {
    background: #ffffff;
    border-radius: 24px;
    padding: 48px 36px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    border: 1px solid #f4f4f5;
    transition: all 0.4s ease;
    position: relative;
  }

  .pricing-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  }

  .pricing-card-popular {
    border: 2px solid #2596be;
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(37,150,190,0.15);
    z-index: 1;
  }

  .pricing-card-popular:hover {
    transform: scale(1.05) translateY(-8px);
  }

  @media (max-width: 1024px) {
    .pricing-card-popular {
      transform: scale(1);
    }
    .pricing-card-popular:hover {
      transform: translateY(-8px);
    }
  }

  .pricing-badge {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 100%);
    color: #ffffff;
    padding: 8px 24px;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;
    box-shadow: 0 4px 15px rgba(37,150,190,0.3);
  }

  .pricing-header {
    text-align: center;
    margin-bottom: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid #f4f4f5;
  }

  .pricing-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 26px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 8px;
  }

  .pricing-desc {
    color: #6b7280;
    font-size: 14px;
    margin-bottom: 24px;
  }

  .pricing-price-wrap {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 4px;
  }

  .pricing-price {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 48px;
    font-weight: 800;
    background: linear-gradient(135deg, #2596be 0%, #3aacd8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .pricing-period {
    color: #9ca3af;
    font-size: 16px;
  }

  .pricing-features {
    list-style: none;
    padding: 0;
    margin: 0 0 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .pricing-feature {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #374151;
    font-size: 15px;
  }

  .pricing-check {
    color: #10b981;
    font-size: 18px;
    flex-shrink: 0;
  }

  .pricing-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 18px 24px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
  }

  .pricing-btn-primary {
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 100%);
    color: #ffffff;
    box-shadow: 0 4px 15px rgba(37,150,190,0.3);
  }

  .pricing-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(37,150,190,0.5);
  }

  .pricing-btn-outline {
    background: transparent;
    color: #2596be;
    border: 2px solid #2596be;
  }

  .pricing-btn-outline:hover {
    background: #2596be;
    color: #ffffff;
    transform: translateY(-2px);
  }

  /* ========== WHY US SECTION ========== */
  .why-us-section {
    padding: 120px 0;
    background: #fafafa;
  }

  .why-us-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }

  @media (max-width: 1024px) {
    .why-us-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .why-us-grid {
      grid-template-columns: 1fr;
    }
  }

  .why-us-card {
    text-align: center;
    padding: 40px 24px;
    background: #ffffff;
    border-radius: 20px;
    transition: all 0.3s ease;
    border: 1px solid #f4f4f5;
  }

  .why-us-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.08);
  }

  .why-us-icon-wrap {
    width: 72px;
    height: 72px;
    border-radius: 18px;
    background: rgba(37,150,190,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    transition: all 0.3s ease;
  }

  .why-us-card:hover .why-us-icon-wrap {
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 100%);
  }

  .why-us-icon {
    font-size: 32px;
    color: #2596be;
    transition: color 0.3s ease;
  }

  .why-us-card:hover .why-us-icon {
    color: #ffffff;
  }

  .why-us-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 12px;
  }

  .why-us-desc {
    color: #6b7280;
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
  }

  /* ========== CTA SECTION ========== */
  .services-cta {
    position: relative;
    padding: 120px 0;
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 50%, #0d4f6b 100%);
    overflow: hidden;
  }

  .services-cta-pattern {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  .services-cta-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }

  .services-cta-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .services-cta-text {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: rgba(255,255,255,0.85);
    margin-bottom: 48px;
    line-height: 1.6;
  }

  .services-cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .services-cta-btn-primary {
    background: #ffffff;
    color: #2596be;
    border: none;
    padding: 18px 36px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }

  .services-cta-btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.25);
    background: #fafafa;
  }

  .services-cta-btn-outline {
    background: transparent;
    color: #ffffff;
    border: 2px solid rgba(255,255,255,0.4);
    padding: 18px 36px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
  }

  .services-cta-btn-outline:hover {
    background: #ffffff;
    color: #2596be;
    border-color: #ffffff;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    .pricing-section,
    .why-us-section,
    .services-cta {
      padding: 80px 0;
    }
  }
`;

export default Services;