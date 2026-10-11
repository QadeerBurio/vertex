import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
    FaArrowLeft, FaCheck, FaStar, FaRocket,
    FaHeadphones, FaShieldAlt, FaClock, FaArrowRight,
    FaChevronDown, FaChevronUp, FaMobile, FaCode,
    FaRobot, FaCloud, FaPalette, FaChartLine
} from 'react-icons/fa';

const ServiceDetail = () => {
    const { slug } = useParams();
    const [openFaq, setOpenFaq] = useState(null);

    const servicesData = {
        'mobile-apps': {
            title: 'Mobile App Development',
            description: 'Build powerful, scalable mobile applications that engage users and drive business growth.',
            heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200',
            icon: FaMobile,
            overview: 'We specialize in creating native and cross-platform mobile applications that deliver exceptional user experiences. Our team leverages cutting-edge technologies to build apps that are fast, reliable, and feature-rich.',
            features: [
                'iOS & Android Development',
                'React Native & Flutter',
                'Custom UI/UX Design',
                'API Integration',
                'Push Notifications',
                'App Store Optimization',
                'Offline Support',
                'Real-time Sync'
            ],
            process: [
                { step: '01', title: 'Discovery', description: 'Understanding your app idea and requirements' },
                { step: '02', title: 'Design', description: 'Creating wireframes and visual designs' },
                { step: '03', title: 'Development', description: 'Building your app with agile methodology' },
                { step: '04', title: 'Testing', description: 'Rigorous testing on real devices' },
                { step: '05', title: 'Launch', description: 'Deploying to App Store and Play Store' }
            ],
            technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Node.js'],
            pricing: {
                startingAt: 5000,
                packages: [
                    { name: 'MVP', price: 5000, features: ['Basic App', '5 Screens', 'Core Features', '1 Month Support'], popular: false },
                    { name: 'Professional', price: 15000, features: ['Full App', '20 Screens', 'Advanced Features', '3 Months Support', 'API Integration'], popular: true },
                    { name: 'Enterprise', price: 'Custom', features: ['Complex App', 'Unlimited Screens', 'All Features', '12 Months Support', 'Dedicated Team'], popular: false }
                ]
            },
            faq: [
                { question: 'How long does it take to build a mobile app?', answer: 'Timeline varies based on complexity. Simple apps: 2-3 months, Medium: 4-6 months, Complex: 6+ months.' },
                { question: 'Do you provide App Store optimization?', answer: 'Yes, we handle the entire submission process and optimize your listing for better visibility.' },
                { question: 'Can you maintain the app after launch?', answer: 'Absolutely! We offer ongoing maintenance and support packages.' }
            ]
        },
        'web-development': {
            title: 'Web Development',
            description: 'Create stunning, high-performance websites and web applications tailored to your business needs.',
            heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
            icon: FaCode,
            overview: 'From simple landing pages to complex web applications, we build responsive and scalable web solutions using modern technologies and best practices.',
            features: [
                'Custom Website Development',
                'E-commerce Solutions',
                'Progressive Web Apps',
                'CMS Development',
                'API Development',
                'Database Design',
                'Performance Optimization',
                'SEO Optimization'
            ],
            process: [
                { step: '01', title: 'Planning', description: 'Define requirements and architecture' },
                { step: '02', title: 'Design', description: 'Create UI/UX wireframes and mockups' },
                { step: '03', title: 'Development', description: 'Build frontend and backend' },
                { step: '04', title: 'Testing', description: 'QA and performance testing' },
                { step: '05', title: 'Deployment', description: 'Launch and monitoring' }
            ],
            technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS'],
            pricing: {
                startingAt: 3000,
                packages: [
                    { name: 'Starter', price: 3000, features: ['5 Pages', 'Responsive Design', 'Contact Form', 'Basic SEO'], popular: false },
                    { name: 'Business', price: 8000, features: ['20 Pages', 'CMS', 'Blog', 'Advanced SEO', 'Analytics'], popular: true },
                    { name: 'Enterprise', price: 'Custom', features: ['Unlimited Pages', 'Custom Features', 'API Integration', 'Dedicated Support'], popular: false }
                ]
            },
            faq: [
                { question: 'What technologies do you use?', answer: 'We use modern stacks like MERN, MEAN, and JAMstack based on project requirements.' },
                { question: 'Do you provide hosting?', answer: 'Yes, we can set up and manage hosting on platforms like AWS, Vercel, or traditional servers.' },
                { question: 'How long does a typical website take?', answer: 'Simple sites: 2-4 weeks, E-commerce: 6-12 weeks, Complex apps: 3-6 months.' }
            ]
        },
        'ai-automation': {
            title: 'AI & Automation',
            description: 'Intelligent automation solutions powered by artificial intelligence to streamline your business.',
            heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
            icon: FaRobot,
            overview: 'Transform your business with cutting-edge AI and automation solutions. We build intelligent systems that reduce costs, improve efficiency, and drive innovation.',
            features: [
                'AI Chatbots',
                'Machine Learning Models',
                'Process Automation',
                'Data Analytics',
                'Natural Language Processing',
                'Computer Vision',
                'Predictive Analytics',
                'Custom AI Solutions'
            ],
            process: [
                { step: '01', title: 'Assessment', description: 'Analyze your business processes' },
                { step: '02', title: 'Strategy', description: 'Design AI implementation plan' },
                { step: '03', title: 'Development', description: 'Build and train AI models' },
                { step: '04', title: 'Integration', description: 'Integrate with existing systems' },
                { step: '05', title: 'Optimization', description: 'Monitor and improve performance' }
            ],
            technologies: ['Python', 'TensorFlow', 'OpenAI', 'LangChain', 'Docker', 'AWS SageMaker'],
            pricing: {
                startingAt: 8000,
                packages: [
                    { name: 'Starter AI', price: 8000, features: ['Basic Chatbot', 'Simple Automation', '1 AI Model', 'Basic Analytics'], popular: false },
                    { name: 'Professional AI', price: 25000, features: ['Advanced AI', 'Custom Models', 'Full Integration', 'Dashboard', 'API Access'], popular: true },
                    { name: 'Enterprise AI', price: 'Custom', features: ['Full AI Suite', 'Unlimited Models', 'Dedicated Team', '24/7 Monitoring', 'Custom Solutions'], popular: false }
                ]
            },
            faq: [
                { question: 'What types of AI solutions do you build?', answer: 'We build chatbots, ML models, process automation, NLP solutions, computer vision systems, and custom AI applications.' },
                { question: 'How long does AI implementation take?', answer: 'Simple chatbots: 2-4 weeks, ML models: 4-8 weeks, Complex AI systems: 2-6 months.' },
                { question: 'Do you provide AI training?', answer: 'Yes, we provide comprehensive training for your team to manage and maintain AI systems.' }
            ]
        },
        'saas-development': {
            title: 'SaaS Development',
            description: 'Scalable cloud-based software solutions designed to grow with your business.',
            heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
            icon: FaCloud,
            overview: 'Build robust SaaS platforms that serve millions of users. We specialize in creating multi-tenant architectures, subscription management, and scalable cloud solutions.',
            features: [
                'Cloud Architecture',
                'Multi-tenant Systems',
                'Subscription Management',
                'API Development',
                'Security & Compliance',
                'Performance Optimization',
                'Analytics Dashboard',
                'Scalable Infrastructure'
            ],
            process: [
                { step: '01', title: 'Architecture', description: 'Design scalable cloud architecture' },
                { step: '02', title: 'MVP Development', description: 'Build minimum viable product' },
                { step: '03', title: 'Feature Development', description: 'Add advanced features' },
                { step: '04', title: 'Security Audit', description: 'Ensure security compliance' },
                { step: '05', title: 'Launch & Scale', description: 'Deploy and scale globally' }
            ],
            technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'Stripe'],
            pricing: {
                startingAt: 10000,
                packages: [
                    { name: 'SaaS MVP', price: 10000, features: ['Core Features', 'Basic UI', 'Auth System', 'Payment Integration'], popular: false },
                    { name: 'SaaS Pro', price: 35000, features: ['Full Platform', 'Advanced Features', 'Admin Dashboard', 'Analytics', 'API'], popular: true },
                    { name: 'SaaS Enterprise', price: 'Custom', features: ['Full Customization', 'Unlimited Scale', 'Dedicated Team', '24/7 Support', 'SLA'], popular: false }
                ]
            },
            faq: [
                { question: 'What is included in SaaS development?', answer: 'We cover architecture design, development, deployment, security, and ongoing maintenance.' },
                { question: 'How do you handle scalability?', answer: 'We use cloud-native architectures with auto-scaling, load balancing, and microservices.' },
                { question: 'What about security?', answer: 'We implement industry-standard security practices including encryption, authentication, and compliance.' }
            ]
        },
        'graphic-design': {
            title: 'Graphic Design',
            description: 'Creative design solutions that communicate your brand message effectively.',
            heroImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200',
            icon: FaPalette,
            overview: 'Bring your brand to life with stunning visual designs. Our creative team crafts memorable brand identities, engaging UI/UX designs, and impactful marketing materials.',
            features: [
                'Brand Identity',
                'UI/UX Design',
                'Logo Design',
                'Print Design',
                'Social Media Graphics',
                'Marketing Materials',
                'Packaging Design',
                'Brand Guidelines'
            ],
            process: [
                { step: '01', title: 'Brief', description: 'Understand your brand and goals' },
                { step: '02', title: 'Research', description: 'Analyze competitors and trends' },
                { step: '03', title: 'Concept', description: 'Create design concepts' },
                { step: '04', title: 'Refinement', description: 'Refine based on feedback' },
                { step: '05', title: 'Delivery', description: 'Final files and guidelines' }
            ],
            technologies: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe XD', 'Sketch', 'InVision'],
            pricing: {
                startingAt: 500,
                packages: [
                    { name: 'Starter', price: 500, features: ['Logo Design', 'Basic Brand Kit', '2 Revisions', 'Source Files'], popular: false },
                    { name: 'Professional', price: 2000, features: ['Full Brand Identity', 'UI/UX Design', 'Marketing Materials', 'Unlimited Revisions'], popular: true },
                    { name: 'Enterprise', price: 'Custom', features: ['Complete Design System', 'Dedicated Designer', 'Priority Support', 'Monthly Retainer'], popular: false }
                ]
            },
            faq: [
                { question: 'How many revisions do you offer?', answer: 'Revisions vary by package. Professional and Enterprise packages include unlimited revisions.' },
                { question: 'What file formats do you provide?', answer: 'We provide all standard formats including AI, PSD, PNG, JPG, SVG, and PDF.' },
                { question: 'How long does a branding project take?', answer: 'Basic logo: 1-2 weeks, Full brand identity: 3-6 weeks.' }
            ]
        },
        'seo-marketing': {
            title: 'SEO & Digital Marketing',
            description: 'Data-driven marketing strategies to increase your online presence and drive growth.',
            heroImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5f70d?w=1200',
            icon: FaChartLine,
            overview: 'Maximize your online visibility and drive qualified leads with our comprehensive digital marketing services. We use data-driven strategies to deliver measurable results.',
            features: [
                'SEO Optimization',
                'Social Media Marketing',
                'Google Ads Management',
                'Content Marketing',
                'Email Marketing',
                'Analytics & Reporting',
                'Conversion Optimization',
                'PPC Campaigns'
            ],
            process: [
                { step: '01', title: 'Audit', description: 'Analyze current performance' },
                { step: '02', title: 'Strategy', description: 'Develop marketing plan' },
                { step: '03', title: 'Implementation', description: 'Execute campaigns' },
                { step: '04', title: 'Optimization', description: 'Continuous improvement' },
                { step: '05', title: 'Reporting', description: 'Track and report results' }
            ],
            technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Ads', 'Meta Ads', 'Mailchimp', 'HubSpot'],
            pricing: {
                startingAt: 1000,
                packages: [
                    { name: 'Starter', price: 1000, features: ['Basic SEO', 'Social Media Setup', 'Monthly Report', 'Google My Business'], popular: false },
                    { name: 'Growth', price: 3000, features: ['Advanced SEO', 'Social Media Mgmt', 'Google Ads', 'Content Creation', 'Weekly Reports'], popular: true },
                    { name: 'Enterprise', price: 'Custom', features: ['Full Marketing Suite', 'Dedicated Manager', 'Custom Strategy', 'Daily Monitoring', 'PR Services'], popular: false }
                ]
            },
            faq: [
                { question: 'How long until I see SEO results?', answer: 'SEO is a long-term strategy. Typically 3-6 months for significant results, with ongoing improvements.' },
                { question: 'Do you guarantee first page rankings?', answer: 'While we cannot guarantee specific rankings, we use proven strategies to improve your visibility and traffic.' },
                { question: 'What platforms do you advertise on?', answer: 'Google Ads, Facebook/Instagram Ads, LinkedIn Ads, Twitter Ads, and programmatic advertising.' }
            ]
        }
    };

    const service = servicesData[slug] || servicesData['web-development'];
    const IconComponent = service.icon;

    return (
        <>
            <style>{serviceDetailStyles}</style>
            
            <Helmet>
                <title>{service.title} | VertexFlow Technologies</title>
                <meta name="description" content={service.description} />
            </Helmet>

            {/* Hero Section */}
            <section className="svc-hero">
                <div className="svc-hero-bg" style={{ backgroundImage: `url(${service.heroImage})` }}></div>
                <div className="svc-hero-overlay"></div>
                <div className="svc-hero-content">
                    <div className="vertex-container">
                        <Link to="/services" className="svc-back-link" data-aos="fade-down">
                            <FaArrowLeft /> Back to Services
                        </Link>
                        
                        <div className="svc-hero-grid">
                            <div className="svc-hero-text" data-aos="fade-right">
                                <div className="svc-hero-icon">
                                    <IconComponent />
                                </div>
                                <h1 className="svc-hero-title">{service.title}</h1>
                                <p className="svc-hero-desc">{service.description}</p>
                                <div className="svc-hero-actions">
                                    <Link to="/contact" className="svc-btn svc-btn-white">
                                        Get Started <FaArrowRight />
                                    </Link>
                                    <a href="#pricing" className="svc-btn svc-btn-outline-white">
                                        View Pricing
                                    </a>
                                </div>
                            </div>
                            <div className="svc-hero-image-wrap" data-aos="fade-left">
                                <img src={service.heroImage} alt={service.title} className="svc-hero-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="svc-overview">
                <div className="vertex-container">
                    <div className="svc-overview-grid">
                        <div className="svc-overview-content" data-aos="fade-right">
                            <span className="svc-section-badge">OVERVIEW</span>
                            <h2 className="svc-section-title">What We Offer</h2>
                            <p className="svc-overview-text">{service.overview}</p>
                            
                            <div className="svc-badges-grid">
                                {[
                                    { icon: FaRocket, title: 'Fast Delivery', color: '#2596be' },
                                    { icon: FaHeadphones, title: '24/7 Support', color: '#10b981' },
                                    { icon: FaShieldAlt, title: 'Secure & Reliable', color: '#f59e0b' },
                                    { icon: FaClock, title: 'On-Time Delivery', color: '#8b5cf6' }
                                ].map((item, idx) => (
                                    <div key={idx} className="svc-badge-item">
                                        <div className="svc-badge-icon" style={{ background: `${item.color}15`, color: item.color }}>
                                            <item.icon />
                                        </div>
                                        <span className="svc-badge-label">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="svc-features-card" data-aos="fade-left">
                            <h3 className="svc-features-title">Key Features</h3>
                            <div className="svc-features-list">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="svc-feature-item">
                                        <div className="svc-feature-check">
                                            <FaCheck />
                                        </div>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="svc-process">
                <div className="vertex-container">
                    <div className="svc-section-header" data-aos="fade-up">
                        <span className="svc-section-badge">OUR PROCESS</span>
                        <h2 className="svc-section-title">How We Work</h2>
                        <p className="svc-section-desc">Our proven development process ensures successful delivery every time</p>
                    </div>
                    
                    <div className="svc-process-steps">
                        {service.process.map((step, idx) => (
                            <div key={idx} className="svc-process-step" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="svc-process-number">
                                    <span>{step.step}</span>
                                    {idx < service.process.length - 1 && <div className="svc-process-line"></div>}
                                </div>
                                <div className="svc-process-content">
                                    <h3 className="svc-process-title">{step.title}</h3>
                                    <p className="svc-process-desc">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="svc-tech">
                <div className="vertex-container">
                    <div className="svc-section-header" data-aos="fade-up">
                        <span className="svc-section-badge">TECHNOLOGIES</span>
                        <h2 className="svc-section-title">Tech Stack We Use</h2>
                        <p className="svc-section-desc">Modern technologies for optimal performance</p>
                    </div>
                    
                    <div className="svc-tech-grid" data-aos="fade-up">
                        {service.technologies.map((tech, idx) => (
                            <div key={idx} className="svc-tech-item">
                                <span>{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="svc-pricing">
                <div className="vertex-container">
                    <div className="svc-section-header" data-aos="fade-up">
                        <span className="svc-section-badge">PRICING</span>
                        <h2 className="svc-section-title">Choose Your Plan</h2>
                        <p className="svc-section-desc">
                            Starting at ${typeof service.pricing.startingAt === 'number' ? service.pricing.startingAt.toLocaleString() : service.pricing.startingAt}
                        </p>
                    </div>
                    
                    <div className="svc-pricing-grid">
                        {service.pricing.packages.map((pkg, idx) => (
                            <div
                                key={idx}
                                className={`svc-pricing-card ${pkg.popular ? 'svc-pricing-popular' : ''}`}
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                {pkg.popular && (
                                    <div className="svc-pricing-badge">
                                        <FaStar /> Most Popular
                                    </div>
                                )}
                                <div className="svc-pricing-header">
                                    <h3 className="svc-pricing-name">{pkg.name}</h3>
                                    <div className="svc-pricing-price-wrap">
                                        <span className="svc-pricing-price">
                                            ${typeof pkg.price === 'number' ? pkg.price.toLocaleString() : pkg.price}
                                        </span>
                                    </div>
                                </div>
                                <ul className="svc-pricing-features">
                                    {pkg.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="svc-pricing-feature">
                                            <FaCheck className="svc-pricing-check" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className={`svc-pricing-btn ${pkg.popular ? 'svc-pricing-btn-primary' : 'svc-pricing-btn-outline'}`}>
                                    {pkg.popular ? 'Get Started Now' : 'Choose Plan'} <FaArrowRight />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="svc-faq">
                <div className="vertex-container">
                    <div className="svc-section-header" data-aos="fade-up">
                        <span className="svc-section-badge">FAQ</span>
                        <h2 className="svc-section-title">Frequently Asked Questions</h2>
                        <p className="svc-section-desc">Find answers to common questions</p>
                    </div>
                    
                    <div className="svc-faq-list">
                        {service.faq.map((item, idx) => (
                            <div
                                key={idx}
                                className={`svc-faq-item ${openFaq === idx ? 'svc-faq-open' : ''}`}
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                            >
                                <div className="svc-faq-header">
                                    <h3 className="svc-faq-question">{item.question}</h3>
                                    <span className="svc-faq-toggle">
                                        {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                                    </span>
                                </div>
                                <div className="svc-faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="svc-cta">
                <div className="svc-cta-bg"></div>
                <div className="vertex-container">
                    <div className="svc-cta-content" data-aos="fade-up">
                        <h2 className="svc-cta-title">Ready to Start Your Project?</h2>
                        <p className="svc-cta-text">
                            Let's discuss your requirements and build something amazing together
                        </p>
                        <div className="svc-cta-buttons">
                            <Link to="/contact" className="svc-cta-btn-primary">
                                Get Free Consultation <FaArrowRight />
                            </Link>
                            <a href="https://calendly.com/vertexflow" target="_blank" rel="noopener noreferrer" className="svc-cta-btn-outline">
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
// COMPLETE CUSTOM CSS FOR SERVICE DETAIL PAGE
// ============================================
const serviceDetailStyles = `
  .vertex-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* ========== HERO SECTION ========== */
  .svc-hero {
    position: relative;
    padding: 160px 0 100px;
    overflow: hidden;
  }

  .svc-hero-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
  }

  .svc-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 100%);
  }

  .svc-hero-content {
    position: relative;
    z-index: 1;
  }

  .svc-back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 40px;
    transition: color 0.3s ease;
  }

  .svc-back-link:hover {
    color: #ffffff;
  }

  .svc-hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  @media (max-width: 1024px) {
    .svc-hero-grid {
      grid-template-columns: 1fr;
    }
    .svc-hero-image-wrap {
      display: none;
    }
  }

  .svc-hero-icon {
    width: 64px;
    height: 64px;
    background: rgba(37,150,190,0.2);
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: #7ccfe3;
    margin-bottom: 24px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(37,150,190,0.3);
  }

  .svc-hero-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 20px;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  .svc-hero-desc {
    font-size: 1.2rem;
    color: rgba(255,255,255,0.8);
    margin-bottom: 36px;
    line-height: 1.7;
    max-width: 500px;
  }

  .svc-hero-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .svc-btn {
    padding: 16px 32px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
  }

  .svc-btn-white {
    background: #ffffff;
    color: #2596be;
    box-shadow: 0 8px 30px rgba(0,0,0,0.2);
  }

  .svc-btn-white:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.3);
  }

  .svc-btn-outline-white {
    background: transparent;
    color: #ffffff;
    border: 2px solid rgba(255,255,255,0.3);
  }

  .svc-btn-outline-white:hover {
    background: #ffffff;
    color: #2596be;
    border-color: #ffffff;
    transform: translateY(-3px);
  }

  .svc-hero-image-wrap {
    position: relative;
  }

  .svc-hero-image {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    border: 2px solid rgba(255,255,255,0.1);
  }

  @media (max-width: 768px) {
    .svc-hero {
      padding: 120px 0 60px;
    }
  }

  /* ========== SECTION COMMON ========== */
  .svc-section-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .svc-section-badge {
    display: inline-block;
    padding: 6px 18px;
    background: rgba(37,150,190,0.08);
    color: #2596be;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    margin-bottom: 16px;
  }

  .svc-section-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 12px;
  }

  .svc-section-desc {
    color: #6b7280;
    font-size: 1.1rem;
    max-width: 500px;
    margin: 0 auto;
  }

  /* ========== OVERVIEW SECTION ========== */
  .svc-overview {
    padding: 120px 0;
    background: #ffffff;
  }

  .svc-overview-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  @media (max-width: 1024px) {
    .svc-overview-grid {
      grid-template-columns: 1fr;
    }
    .svc-overview {
      padding: 80px 0;
    }
  }

  .svc-overview-text {
    font-size: 1.1rem;
    color: #6b7280;
    line-height: 1.8;
    margin-bottom: 32px;
  }

  .svc-badges-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: 480px) {
    .svc-badges-grid {
      grid-template-columns: 1fr;
    }
  }

  .svc-badge-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 18px;
    background: #fafafa;
    border-radius: 12px;
    border: 1px solid #f4f4f5;
    transition: all 0.3s ease;
  }

  .svc-badge-item:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  }

  .svc-badge-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
  }

  .svc-badge-label {
    font-weight: 600;
    font-size: 14px;
    color: #374151;
  }

  .svc-features-card {
    background: #ffffff;
    border-radius: 24px;
    padding: 40px;
    box-shadow: 0 2px 20px rgba(0,0,0,0.06);
    border: 1px solid #f4f4f5;
  }

  .svc-features-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 24px;
  }

  .svc-features-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .svc-feature-item {
    display: flex;
    align-items: center;
    gap: 14px;
    color: #374151;
    font-size: 15px;
  }

  .svc-feature-check {
    width: 28px;
    height: 28px;
    background: #d1fae5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #10b981;
    font-size: 12px;
    flex-shrink: 0;
  }

  /* ========== PROCESS SECTION ========== */
  .svc-process {
    padding: 120px 0;
    background: #fafafa;
  }

  .svc-process-steps {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 32px;
  }

  @media (max-width: 1200px) {
    .svc-process-steps {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .svc-process-steps {
      grid-template-columns: 1fr;
    }
    .svc-process {
      padding: 80px 0;
    }
  }

  .svc-process-step {
    text-align: center;
    position: relative;
  }

  .svc-process-number {
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 700;
    position: relative;
    z-index: 1;
    box-shadow: 0 8px 25px rgba(37,150,190,0.3);
  }

  .svc-process-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 8px;
  }

  .svc-process-desc {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
  }

  /* ========== TECH SECTION ========== */
  .svc-tech {
    padding: 120px 0;
    background: #ffffff;
  }

  .svc-tech-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }

  .svc-tech-item {
    padding: 14px 28px;
    background: #f0f9fc;
    border: 1px solid rgba(37,150,190,0.15);
    color: #2596be;
    border-radius: 12px;
    font-weight: 600;
    font-size: 15px;
    transition: all 0.3s ease;
    cursor: default;
  }

  .svc-tech-item:hover {
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(37,150,190,0.3);
  }

  @media (max-width: 768px) {
    .svc-tech {
      padding: 80px 0;
    }
  }

  /* ========== PRICING SECTION ========== */
  .svc-pricing {
    padding: 120px 0;
    background: #fafafa;
  }

  .svc-pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    align-items: start;
  }

  @media (max-width: 1024px) {
    .svc-pricing-grid {
      grid-template-columns: 1fr;
      max-width: 450px;
      margin: 0 auto;
    }
  }

  .svc-pricing-card {
    background: #ffffff;
    border-radius: 24px;
    padding: 40px 32px;
    border: 1px solid #f4f4f5;
    position: relative;
    transition: all 0.3s ease;
  }

  .svc-pricing-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  }

  .svc-pricing-popular {
    border: 2px solid #2596be;
    transform: scale(1.03);
    box-shadow: 0 8px 30px rgba(37,150,190,0.15);
  }

  .svc-pricing-popular:hover {
    transform: scale(1.03) translateY(-8px);
  }

  @media (max-width: 1024px) {
    .svc-pricing-popular {
      transform: scale(1);
    }
    .svc-pricing-popular:hover {
      transform: translateY(-8px);
    }
  }

  .svc-pricing-badge {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    padding: 8px 24px;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;
    box-shadow: 0 4px 15px rgba(37,150,190,0.3);
    white-space: nowrap;
  }

  .svc-pricing-header {
    text-align: center;
    margin-bottom: 28px;
    padding-bottom: 28px;
    border-bottom: 1px solid #f4f4f5;
  }

  .svc-pricing-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 12px;
  }

  .svc-pricing-price-wrap {
    display: flex;
    align-items: baseline;
    justify-content: center;
  }

  .svc-pricing-price {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 42px;
    font-weight: 800;
    background: linear-gradient(135deg, #2596be, #3aacd8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .svc-pricing-features {
    list-style: none;
    padding: 0;
    margin: 0 0 32px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .svc-pricing-feature {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #374151;
    font-size: 14px;
  }

  .svc-pricing-check {
    color: #10b981;
    font-size: 16px;
    flex-shrink: 0;
  }

  .svc-pricing-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 16px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
  }

  .svc-pricing-btn-primary {
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    box-shadow: 0 4px 15px rgba(37,150,190,0.3);
  }

  .svc-pricing-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(37,150,190,0.5);
  }

  .svc-pricing-btn-outline {
    background: transparent;
    color: #2596be;
    border: 2px solid #2596be;
  }

  .svc-pricing-btn-outline:hover {
    background: #2596be;
    color: #ffffff;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .svc-pricing {
      padding: 80px 0;
    }
  }

  /* ========== FAQ SECTION ========== */
  .svc-faq {
    padding: 120px 0;
    background: #ffffff;
  }

  .svc-faq-list {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .svc-faq-item {
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .svc-faq-item:hover {
    border-color: #2596be;
  }

  .svc-faq-open {
    border-color: #2596be;
    box-shadow: 0 4px 20px rgba(37,150,190,0.1);
  }

  .svc-faq-header {
    padding: 24px 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  .svc-faq-question {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 17px;
    font-weight: 600;
    color: #0a0a0a;
    margin: 0;
  }

  .svc-faq-toggle {
    width: 32px;
    height: 32px;
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

  .svc-faq-open .svc-faq-toggle {
    background: #2596be;
    color: #ffffff;
  }

  .svc-faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, padding 0.4s ease;
  }

  .svc-faq-open .svc-faq-answer {
    max-height: 300px;
    padding: 0 28px 24px;
  }

  .svc-faq-answer p {
    color: #6b7280;
    line-height: 1.7;
    margin: 0;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    .svc-faq {
      padding: 80px 0;
    }
    .svc-faq-header {
      padding: 20px;
    }
    .svc-faq-open .svc-faq-answer {
      padding: 0 20px 20px;
    }
  }

  /* ========== CTA SECTION ========== */
  .svc-cta {
    position: relative;
    padding: 120px 0;
    background: linear-gradient(135deg, #2596be, #1a7a9e, #0d4f6b);
    overflow: hidden;
  }

  .svc-cta-bg {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  .svc-cta-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  .svc-cta-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 16px;
  }

  .svc-cta-text {
    font-size: 1.1rem;
    color: rgba(255,255,255,0.85);
    margin-bottom: 40px;
    line-height: 1.6;
  }

  .svc-cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .svc-cta-btn-primary {
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

  .svc-cta-btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.25);
  }

  .svc-cta-btn-outline {
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

  .svc-cta-btn-outline:hover {
    background: #ffffff;
    color: #2596be;
    border-color: #ffffff;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    .svc-cta {
      padding: 80px 0;
    }
  }
`;

export default ServiceDetail;