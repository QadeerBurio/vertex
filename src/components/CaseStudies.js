import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
    FaArrowRight, FaSearch, FaFilter, FaStar, FaQuoteLeft,
    FaChartLine, FaUsers, FaRocket, FaCheckCircle,
    FaMobile, FaCode, FaRobot, FaCloud, FaPalette,
    FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight,
    FaPlay, FaEye, FaClock
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedCase, setSelectedCase] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { id: 'all', label: 'All Studies', count: 9 },
        { id: 'web', label: 'Web Apps', count: 3 },
        { id: 'mobile', label: 'Mobile Apps', count: 2 },
        { id: 'ai', label: 'AI Solutions', count: 2 },
        { id: 'saas', label: 'SaaS', count: 2 }
    ];

    const caseStudies = [
        {
            id: 1,
            title: 'HealthCare Management System',
            category: 'web',
            client: 'HealthFirst Medical Center',
            industry: 'Healthcare',
            duration: '6 months',
            team: '5 members',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
            logo: '🏥',
            summary: 'Built a comprehensive hospital management system serving 50,000+ patients with real-time appointment scheduling and electronic health records.',
            challenge: 'HealthFirst was struggling with manual patient records, leading to long wait times and inefficient operations. They needed a digital solution to manage 500+ daily patients across 3 locations.',
            solution: 'We developed a custom web application with React and Node.js, featuring patient management, appointment scheduling, electronic health records, billing integration, and a doctor dashboard.',
            results: [
                { metric: '60%', label: 'Reduced Wait Times' },
                { metric: '40%', label: 'Cost Reduction' },
                { metric: '95%', label: 'Patient Satisfaction' },
                { metric: '3x', label: 'Efficiency Increase' }
            ],
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS'],
            features: ['Patient Management', 'Appointment Scheduling', 'EHR System', 'Billing', 'Doctor Dashboard'],
            testimonial: {
                text: 'VertexFlow delivered an outstanding healthcare solution that transformed our operations completely.',
                author: 'Dr. Sarah Johnson',
                role: 'Medical Director, HealthFirst',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
            }
        },
        {
            id: 2,
            title: 'Food Delivery Mobile App',
            category: 'mobile',
            client: 'FoodExpress Delivery',
            industry: 'Food & Beverage',
            duration: '4 months',
            team: '4 members',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800',
            logo: '🍔',
            summary: 'Developed a feature-rich food delivery app with real-time tracking, processing 10,000+ orders daily across 5 cities.',
            challenge: 'FoodExpress needed a scalable mobile solution to handle rapid growth from 1 city to 5 cities while maintaining performance and user experience.',
            solution: 'Built a cross-platform app using React Native with Firebase backend, integrating real-time GPS tracking, multiple payment gateways, and an intelligent order routing system.',
            results: [
                { metric: '200%', label: 'Order Growth' },
                { metric: '4.8', label: 'App Store Rating' },
                { metric: '50K+', label: 'Active Users' },
                { metric: '99.9%', label: 'Uptime' }
            ],
            technologies: ['React Native', 'Firebase', 'Node.js', 'Stripe', 'Google Maps API'],
            features: ['Real-time Tracking', 'Payment Integration', 'Restaurant Dashboard', 'Push Notifications', 'Loyalty Program'],
            testimonial: {
                text: 'Our food delivery app has seen 200% growth since launch. The team\'s expertise is unmatched.',
                author: 'Mike Chen',
                role: 'CEO, FoodExpress',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
            }
        },
        {
            id: 3,
            title: 'E-Commerce Platform Redesign',
            category: 'web',
            client: 'FashionHub Retail',
            industry: 'E-Commerce',
            duration: '3 months',
            team: '3 members',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
            logo: '🛍️',
            summary: 'Redesigned and rebuilt an e-commerce platform resulting in 150% increase in conversions and 80% faster page load times.',
            challenge: 'FashionHub\'s legacy platform was slow, had poor mobile experience, and was losing customers due to checkout abandonment.',
            solution: 'Complete redesign using Next.js with server-side rendering, implementing optimized product search, streamlined checkout, and personalized recommendations.',
            results: [
                { metric: '150%', label: 'Conversion Increase' },
                { metric: '80%', label: 'Faster Load Time' },
                { metric: '45%', label: 'Lower Bounce Rate' },
                { metric: '$2M+', label: 'Additional Revenue' }
            ],
            technologies: ['Next.js', 'MongoDB', 'Stripe', 'AWS', 'Algolia'],
            features: ['Product Management', 'Smart Search', 'Payment Gateway', 'Order Tracking', 'Analytics'],
            testimonial: {
                text: 'The redesigned platform exceeded our expectations. Sales have never been better.',
                author: 'Lisa Thompson',
                role: 'CTO, FashionHub',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
            }
        },
        {
            id: 4,
            title: 'AI Customer Service Chatbot',
            category: 'ai',
            client: 'TechSupport Pro',
            industry: 'Technology',
            duration: '2 months',
            team: '3 members',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
            logo: '🤖',
            summary: 'Deployed an AI chatbot handling 70% of customer inquiries automatically, reducing support costs by 55%.',
            challenge: 'TechSupport Pro was overwhelmed with 5,000+ daily support tickets, leading to long response times and customer dissatisfaction.',
            solution: 'Built an AI chatbot using OpenAI\'s GPT and LangChain, integrated with their knowledge base and CRM for intelligent, contextual responses.',
            results: [
                { metric: '70%', label: 'Auto-Resolution' },
                { metric: '55%', label: 'Cost Reduction' },
                { metric: '90%', label: 'Customer Satisfaction' },
                { metric: '24/7', label: 'Availability' }
            ],
            technologies: ['Python', 'OpenAI', 'LangChain', 'React', 'Docker'],
            features: ['Natural Language', 'Multi-language', 'CRM Integration', 'Analytics', '24/7 Operation'],
            testimonial: {
                text: 'The AI chatbot revolutionized our support. Response times dropped from hours to seconds.',
                author: 'James Wilson',
                role: 'VP Support, TechSupport Pro',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100'
            }
        },
        {
            id: 5,
            title: 'Real Estate Platform',
            category: 'web',
            client: 'PropertyFinder Group',
            industry: 'Real Estate',
            duration: '5 months',
            team: '6 members',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
            logo: '🏠',
            summary: 'Built a property listing platform with virtual tours, serving 200+ agents and 10,000+ property listings.',
            challenge: 'PropertyFinder needed a modern platform with virtual tour capabilities to adapt to changing market demands and remote viewing trends.',
            solution: 'Created a full-featured real estate platform with React, Django, and Google Maps integration, featuring virtual tours, mortgage calculator, and agent CRM.',
            results: [
                { metric: '200+', label: 'Active Agents' },
                { metric: '10K+', label: 'Listings' },
                { metric: '85%', label: 'Lead Increase' },
                { metric: '60%', label: 'Faster Sales' }
            ],
            technologies: ['React', 'Django', 'PostgreSQL', 'Google Maps', 'Three.js'],
            features: ['Virtual Tours', 'Advanced Search', 'Agent Dashboard', 'Mortgage Calculator', 'CRM'],
            testimonial: {
                text: 'This platform transformed how we do business. Virtual tours became our competitive edge.',
                author: 'Robert Martinez',
                role: 'CEO, PropertyFinder',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
            }
        },
        {
            id: 6,
            title: 'Fitness Tracking App',
            category: 'mobile',
            client: 'FitLife Wellness',
            industry: 'Health & Fitness',
            duration: '4 months',
            team: '4 members',
            image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800',
            logo: '💪',
            summary: 'Developed a comprehensive fitness app with AI-powered workout recommendations and 100K+ downloads.',
            challenge: 'FitLife wanted to create a personalized fitness experience that adapts to each user\'s progress and goals using AI.',
            solution: 'Built a Flutter app with ML Kit for pose detection, Firebase for real-time sync, and a recommendation engine for personalized workouts and meal plans.',
            results: [
                { metric: '100K+', label: 'Downloads' },
                { metric: '4.7', label: 'App Rating' },
                { metric: '85%', label: 'User Retention' },
                { metric: '50K', label: 'Daily Active Users' }
            ],
            technologies: ['Flutter', 'Firebase', 'ML Kit', 'Node.js', 'HealthKit'],
            features: ['Workout Tracking', 'Meal Planning', 'AI Coach', 'Social Features', 'Wearable Sync'],
            testimonial: {
                text: 'Our users love the personalization. The AI recommendations have been a game-changer.',
                author: 'Emma Davis',
                role: 'Founder, FitLife',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'
            }
        },
        {
            id: 7,
            title: 'SaaS Analytics Dashboard',
            category: 'saas',
            client: 'DataViz Solutions',
            industry: 'Business Intelligence',
            duration: '5 months',
            team: '5 members',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
            logo: '📊',
            summary: 'Created a real-time analytics platform processing 1M+ data points daily for enterprise clients.',
            challenge: 'DataViz needed a high-performance analytics dashboard capable of handling massive data volumes with sub-second query response times.',
            solution: 'Built with Vue.js frontend, Python backend, and PostgreSQL with TimescaleDB for time-series data. Implemented real-time data streaming and custom visualization libraries.',
            results: [
                { metric: '1M+', label: 'Daily Data Points' },
                { metric: '<1s', label: 'Query Response' },
                { metric: '50+', label: 'Enterprise Clients' },
                { metric: '99.99%', label: 'Uptime SLA' }
            ],
            technologies: ['Vue.js', 'Python', 'PostgreSQL', 'TimescaleDB', 'Chart.js', 'WebSocket'],
            features: ['Real-time Analytics', 'Custom Reports', 'Data Export', 'Team Collaboration', 'API Access'],
            testimonial: {
                text: 'The performance is incredible. Our clients can now analyze data in real-time.',
                author: 'David Kim',
                role: 'CTO, DataViz Solutions',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100'
            }
        },
        {
            id: 8,
            title: 'AI-Powered Recommendation Engine',
            category: 'ai',
            client: 'ShopSmart E-Commerce',
            industry: 'Retail',
            duration: '3 months',
            team: '4 members',
            image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
            logo: '🧠',
            summary: 'Implemented an AI recommendation engine increasing average order value by 35% and customer retention by 45%.',
            challenge: 'ShopSmart wanted to personalize the shopping experience for 2M+ users across their product catalog of 100K+ items.',
            solution: 'Built a machine learning recommendation system using collaborative filtering and neural networks, processing user behavior in real-time.',
            results: [
                { metric: '35%', label: 'AOV Increase' },
                { metric: '45%', label: 'Retention Boost' },
                { metric: '60%', label: 'Click-through Rate' },
                { metric: '28%', label: 'Revenue Growth' }
            ],
            technologies: ['Python', 'TensorFlow', 'Redis', 'Docker', 'Kubernetes', 'FastAPI'],
            features: ['Personalized Recommendations', 'Real-time Processing', 'A/B Testing', 'Analytics Dashboard'],
            testimonial: {
                text: 'The recommendation engine paid for itself within 2 months. Incredible ROI.',
                author: 'Alex Chen',
                role: 'CEO, ShopSmart',
                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100'
            }
        },
        {
            id: 9,
            title: 'Social Media Management SaaS',
            category: 'saas',
            client: 'SocialPro Agency',
            industry: 'Marketing',
            duration: '6 months',
            team: '6 members',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
            logo: '📱',
            summary: 'Built a social media management platform serving 500+ agencies with multi-platform scheduling and analytics.',
            challenge: 'SocialPro needed a unified platform to manage multiple social media accounts, schedule posts, and track analytics across different platforms.',
            solution: 'Developed a comprehensive SaaS platform with React frontend, Node.js microservices, Redis for queuing, and integrations with all major social media APIs.',
            results: [
                { metric: '500+', label: 'Agency Clients' },
                { metric: '10K+', label: 'Managed Accounts' },
                { metric: '80%', label: 'Time Saved' },
                { metric: '$5M+', label: 'Client Revenue' }
            ],
            technologies: ['React', 'Node.js', 'Redis', 'Bull Queue', 'PostgreSQL', 'Docker'],
            features: ['Post Scheduling', 'Analytics Dashboard', 'Content Calendar', 'Team Management', 'API Integration'],
            testimonial: {
                text: 'This platform streamlined our entire workflow. Our team productivity increased dramatically.',
                author: 'Maria Santos',
                role: 'Director, SocialPro Agency',
                image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100'
            }
        }
    ];

    const filteredCases = caseStudies.filter(study => {
        const matchesCategory = activeCategory === 'all' || study.category === activeCategory;
        const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            study.industry.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <style>{caseStudiesStyle}</style>
            
            <Helmet>
                <title>Case Studies | VertexFlow Technologies</title>
                <meta name="description" content="Explore our case studies showcasing successful projects and client results." />
            </Helmet>

            {/* Hero */}
            <section className="cs-hero">
                <div className="cs-hero-bg"></div>
                <div className="cs-hero-inner">
                    <span className="cs-hero-badge" data-aos="fade-down"><FaStar /> Success Stories</span>
                    <h1 className="cs-hero-title" data-aos="fade-up">Case <span className="cs-hero-hl">Studies</span></h1>
                    <p className="cs-hero-text" data-aos="fade-up" data-aos-delay="100">Real projects, real results. See how we've helped businesses grow.</p>
                    <div className="cs-hero-stats" data-aos="fade-up" data-aos-delay="200">
                        <div className="cs-stat"><span className="cs-stat-num">9+</span><span className="cs-stat-lbl">Case Studies</span></div>
                        <div className="cs-stat-div"></div>
                        <div className="cs-stat"><span className="cs-stat-num">150+</span><span className="cs-stat-lbl">Projects</span></div>
                        <div className="cs-stat-div"></div>
                        <div className="cs-stat"><span className="cs-stat-num">98%</span><span className="cs-stat-lbl">Satisfaction</span></div>
                    </div>
                </div>
            </section>

            {/* Filter */}
            <section className="cs-filter">
                <div className="vertex-container">
                    <div className="cs-filter-wrap">
                        <div className="cs-search">
                            <FaSearch className="cs-search-icon" />
                            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search projects..." className="cs-search-input" />
                        </div>
                        <div className="cs-cats">
                            {categories.map((cat) => (
                                <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`cs-cat-btn ${activeCategory === cat.id ? 'cs-cat-active' : ''}`}>{cat.label} <span>({cat.count})</span></button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="cs-grid-sec">
                <div className="vertex-container">
                    {filteredCases.length === 0 ? (
                        <div className="cs-empty"><FaSearch className="cs-empty-icon" /><h3>No studies found</h3><p>Try a different search</p></div>
                    ) : (
                        <div className="cs-grid">
                            {filteredCases.map((study, index) => (
                                <div key={study.id} className="cs-card" data-aos="fade-up" data-aos-delay={index * 100}>
                                    <div className="cs-card-img-wrap">
                                        <img src={study.image} alt={study.title} className="cs-card-img" />
                                        <div className="cs-card-overlay">
                                            <button onClick={() => setSelectedCase(study)} className="cs-card-view"><FaEye /> View Case Study</button>
                                        </div>
                                        <span className="cs-card-logo">{study.logo}</span>
                                        <span className="cs-card-cat">{study.category}</span>
                                    </div>
                                    <div className="cs-card-body">
                                        <div className="cs-card-meta"><span><FaClock /> {study.duration}</span><span><FaUsers /> {study.team}</span></div>
                                        <h3 className="cs-card-title">{study.title}</h3>
                                        <p className="cs-card-client">{study.client}</p>
                                        <p className="cs-card-summary">{study.summary}</p>
                                        <div className="cs-card-results">
                                            {study.results.slice(0, 2).map((r, i) => (
                                                <div key={i} className="cs-result"><span className="cs-result-metric">{r.metric}</span><span className="cs-result-label">{r.label}</span></div>
                                            ))}
                                        </div>
                                        <div className="cs-card-tech">
                                            {study.technologies.slice(0, 3).map((t, i) => (<span key={i} className="cs-tech-tag">{t}</span>))}
                                        </div>
                                        <button onClick={() => setSelectedCase(study)} className="cs-card-btn">Read Full Study <FaArrowRight /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Modal */}
            {selectedCase && (
                <div className="cs-modal-overlay" onClick={() => setSelectedCase(null)}>
                    <div className="cs-modal" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setSelectedCase(null)} className="cs-modal-close"><FaTimes /></button>
                        <div className="cs-modal-img-wrap">
                            <img src={selectedCase.image} alt={selectedCase.title} className="cs-modal-img" />
                            <span className="cs-modal-logo">{selectedCase.logo}</span>
                        </div>
                        <div className="cs-modal-body">
                            <div className="cs-modal-header">
                                <span className="cs-modal-cat">{selectedCase.category}</span>
                                <div className="cs-modal-meta"><span><FaClock /> {selectedCase.duration}</span><span><FaUsers /> {selectedCase.team}</span></div>
                            </div>
                            <h2 className="cs-modal-title">{selectedCase.title}</h2>
                            <p className="cs-modal-client">Client: {selectedCase.client} • {selectedCase.industry}</p>
                            <div className="cs-modal-results">
                                {selectedCase.results.map((r, i) => (
                                    <div key={i} className="cs-modal-result"><span className="cs-modal-metric">{r.metric}</span><span className="cs-modal-label">{r.label}</span></div>
                                ))}
                            </div>
                            <div className="cs-modal-grid">
                                <div><h3>The Challenge</h3><p>{selectedCase.challenge}</p></div>
                                <div><h3>Our Solution</h3><p>{selectedCase.solution}</p></div>
                            </div>
                            <h3>Technologies</h3>
                            <div className="cs-modal-tech">{selectedCase.technologies.map((t, i) => (<span key={i} className="cs-modal-tech-tag">{t}</span>))}</div>
                            <h3>Key Features</h3>
                            <ul className="cs-modal-features">{selectedCase.features.map((f, i) => (<li key={i}><FaCheckCircle /> {f}</li>))}</ul>
                            {selectedCase.testimonial && (
                                <div className="cs-modal-testimonial">
                                    <FaQuoteLeft className="cs-modal-quote" />
                                    <p>"{selectedCase.testimonial.text}"</p>
                                    <div className="cs-modal-author">
                                        <img src={selectedCase.testimonial.image} alt={selectedCase.testimonial.author} />
                                        <div><strong>{selectedCase.testimonial.author}</strong><span>{selectedCase.testimonial.role}</span></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* CTA */}
            <section className="cs-cta">
                <div className="cs-cta-bg"></div>
                <div className="vertex-container">
                    <div className="cs-cta-inner" data-aos="fade-up">
                        <h2>Want to Be Our Next Success Story?</h2>
                        <p>Let's discuss your project and create amazing results together</p>
                        <div className="cs-cta-btns">
                            <Link to="/contact" className="cs-cta-btn1">Start Your Project <FaArrowRight /></Link>
                            <Link to="/portfolio" className="cs-cta-btn2">View Portfolio</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

// ============================================
// CUSTOM CSS - NO ERRORS
// ============================================
const caseStudiesStyle = `
  .vertex-container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }

  /* Hero */
  .cs-hero { position: relative; background: linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e); padding: 160px 0 100px; overflow: hidden; }
  .cs-hero-bg { position: absolute; inset: 0; background: radial-gradient(circle at 30% 50%, rgba(37,150,190,0.08) 0%, transparent 50%); }
  .cs-hero-inner { position: relative; z-index: 1; text-align: center; max-width: 700px; margin: 0 auto; padding: 0 24px; }
  .cs-hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 20px; background: rgba(245,158,11,0.15); color: #fbbf24; border-radius: 50px; font-size: 13px; font-weight: 600; letter-spacing: 0.05em; margin-bottom: 24px; border: 1px solid rgba(245,158,11,0.3); }
  .cs-hero-title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 800; color: #fff; margin-bottom: 16px; line-height: 1.15; }
  .cs-hero-hl { background: linear-gradient(135deg, #2596be, #3aacd8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .cs-hero-text { font-size: 1.1rem; color: rgba(255,255,255,0.8); max-width: 500px; margin: 0 auto 40px; }
  .cs-hero-stats { display: flex; align-items: center; justify-content: center; gap: 32px; }
  .cs-stat { text-align: center; }
  .cs-stat-num { display: block; font-family: 'Space Grotesk', sans-serif; font-size: 28px; font-weight: 700; color: #fff; }
  .cs-stat-lbl { font-size: 13px; color: rgba(255,255,255,0.6); }
  .cs-stat-div { width: 1px; height: 40px; background: rgba(255,255,255,0.15); }
  @media (max-width: 768px) { .cs-hero { padding: 120px 0 60px; } .cs-hero-stats { gap: 20px; flex-wrap: wrap; } }

  /* Filter */
  .cs-filter { padding: 28px 0; background: #fff; border-bottom: 1px solid #f4f4f5; position: sticky; top: 80px; z-index: 100; }
  .cs-filter-wrap { display: flex; flex-direction: column; gap: 16px; }
  .cs-search { position: relative; max-width: 450px; margin: 0 auto; width: 100%; }
  .cs-search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #9ca3af; font-size: 16px; }
  .cs-search-input { width: 100%; padding: 13px 16px 13px 44px; border: 2px solid #e4e4e7; border-radius: 50px; font-size: 14px; color: #1a1a1a; outline: none; font-family: 'Inter', sans-serif; background: #fafafa; transition: all 0.3s ease; }
  .cs-search-input:focus { border-color: #2596be; background: #fff; box-shadow: 0 0 0 3px rgba(37,150,190,0.08); }
  .cs-cats { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; }
  .cs-cat-btn { padding: 8px 18px; border-radius: 50px; border: 2px solid #e4e4e7; background: #fff; color: #6b7280; font-weight: 600; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 5px; font-family: 'Inter', sans-serif; transition: all 0.3s ease; }
  .cs-cat-btn span { font-size: 11px; opacity: 0.7; }
  .cs-cat-btn:hover { border-color: #2596be; color: #2596be; }
  .cs-cat-active { background: linear-gradient(135deg, #2596be, #1a7a9e); color: #fff; border-color: #2596be; box-shadow: 0 3px 12px rgba(37,150,190,0.3); }
  .cs-cat-active:hover { color: #fff; background: linear-gradient(135deg, #2596be, #1a7a9e); }

  /* Grid */
  .cs-grid-sec { padding: 50px 0 100px; background: #fafafa; }
  .cs-empty { text-align: center; padding: 80px 0; }
  .cs-empty-icon { font-size: 56px; color: #d4d4d8; margin-bottom: 16px; }
  .cs-empty h3 { font-family: 'Space Grotesk', sans-serif; font-size: 22px; color: #374151; margin-bottom: 6px; }
  .cs-empty p { color: #9ca3af; }
  .cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
  @media (max-width: 1200px) { .cs-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 768px) { .cs-grid { grid-template-columns: 1fr; } }

  .cs-card { background: #fff; border-radius: 18px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.04); border: 1px solid #f4f4f5; transition: all 0.3s ease; }
  .cs-card:hover { transform: translateY(-6px); box-shadow: 0 15px 50px rgba(0,0,0,0.08); }
  .cs-card-img-wrap { position: relative; height: 190px; overflow: hidden; }
  .cs-card-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
  .cs-card:hover .cs-card-img { transform: scale(1.06); }
  .cs-card-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; }
  .cs-card:hover .cs-card-overlay { opacity: 1; }
  .cs-card-view { display: flex; align-items: center; gap: 6px; padding: 10px 22px; background: #fff; color: #2596be; border: none; border-radius: 50px; font-weight: 600; font-size: 13px; cursor: pointer; font-family: 'Inter', sans-serif; }
  .cs-card-view:hover { background: #2596be; color: #fff; }
  .cs-card-logo { position: absolute; top: 10px; left: 10px; width: 36px; height: 36px; background: #fff; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
  .cs-card-cat { position: absolute; top: 10px; right: 10px; padding: 4px 10px; background: rgba(37,150,190,0.9); color: #fff; border-radius: 50px; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
  .cs-card-body { padding: 20px; }
  .cs-card-meta { display: flex; gap: 14px; font-size: 11px; color: #9ca3af; margin-bottom: 10px; }
  .cs-card-meta span { display: flex; align-items: center; gap: 4px; }
  .cs-card-title { font-family: 'Space Grotesk', sans-serif; font-size: 17px; font-weight: 700; color: #0a0a0a; margin-bottom: 4px; line-height: 1.3; }
  .cs-card-client { font-size: 12px; color: #2596be; font-weight: 500; margin-bottom: 10px; }
  .cs-card-summary { font-size: 12px; color: #6b7280; line-height: 1.5; margin-bottom: 14px; }
  .cs-card-results { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 14px; padding: 12px; background: #fafafa; border-radius: 10px; }
  .cs-result { text-align: center; }
  .cs-result-metric { display: block; font-family: 'Space Grotesk', sans-serif; font-size: 18px; font-weight: 700; color: #2596be; }
  .cs-result-label { display: block; font-size: 10px; color: #6b7280; }
  .cs-card-tech { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 14px; }
  .cs-tech-tag { padding: 3px 9px; background: #f4f4f5; color: #6b7280; border-radius: 50px; font-size: 10px; font-weight: 500; }
  .cs-card-btn { width: 100%; padding: 11px; background: transparent; border: 2px solid #2596be; color: #2596be; border-radius: 50px; font-weight: 600; font-size: 13px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; font-family: 'Inter', sans-serif; transition: all 0.3s ease; }
  .cs-card-btn:hover { background: #2596be; color: #fff; }

  /* Modal */
  .cs-modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px; }
  .cs-modal { background: #fff; border-radius: 22px; max-width: 750px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; animation: modalIn 0.4s ease; }
  @keyframes modalIn { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
  .cs-modal-close { position: absolute; top: 14px; right: 14px; width: 36px; height: 36px; background: #fff; border: none; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 10; box-shadow: 0 2px 8px rgba(0,0,0,0.1); font-size: 14px; color: #374151; transition: all 0.3s ease; }
  .cs-modal-close:hover { background: #ef4444; color: #fff; transform: rotate(90deg); }
  .cs-modal-img-wrap { height: 220px; position: relative; overflow: hidden; border-radius: 22px 22px 0 0; }
  .cs-modal-img { width: 100%; height: 100%; object-fit: cover; }
  .cs-modal-logo { position: absolute; bottom: -18px; left: 20px; width: 44px; height: 44px; background: #fff; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; box-shadow: 0 3px 12px rgba(0,0,0,0.1); }
  .cs-modal-body { padding: 30px 36px 36px; }
  @media (max-width: 640px) { .cs-modal-body { padding: 20px; } }
  .cs-modal-header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px; }
  .cs-modal-cat { padding: 4px 12px; background: #f0f9fc; color: #2596be; border-radius: 50px; font-size: 11px; font-weight: 600; text-transform: uppercase; }
  .cs-modal-meta { display: flex; gap: 14px; font-size: 12px; color: #6b7280; }
  .cs-modal-meta span { display: flex; align-items: center; gap: 4px; }
  .cs-modal-title { font-family: 'Space Grotesk', sans-serif; font-size: 26px; font-weight: 700; color: #0a0a0a; margin-bottom: 6px; }
  .cs-modal-client { color: #2596be; font-weight: 500; margin-bottom: 20px; font-size: 14px; }
  .cs-modal-results { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; padding: 20px; background: #fafafa; border-radius: 14px; margin-bottom: 24px; }
  @media (max-width: 640px) { .cs-modal-results { grid-template-columns: repeat(2, 1fr); } }
  .cs-modal-result { text-align: center; }
  .cs-modal-metric { display: block; font-family: 'Space Grotesk', sans-serif; font-size: 26px; font-weight: 700; color: #2596be; }
  .cs-modal-label { display: block; font-size: 11px; color: #6b7280; margin-top: 2px; }
  .cs-modal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
  @media (max-width: 640px) { .cs-modal-grid { grid-template-columns: 1fr; } }
  .cs-modal-body h3 { font-family: 'Space Grotesk', sans-serif; font-size: 16px; font-weight: 700; color: #0a0a0a; margin: 20px 0 10px; }
  .cs-modal-body p { color: #4b5563; line-height: 1.7; font-size: 14px; margin: 0; }
  .cs-modal-tech { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 8px; }
  .cs-modal-tech-tag { padding: 5px 12px; background: #f4f4f5; color: #374151; border-radius: 50px; font-size: 12px; font-weight: 500; }
  .cs-modal-features { list-style: none; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  @media (max-width: 480px) { .cs-modal-features { grid-template-columns: 1fr; } }
  .cs-modal-features li { display: flex; align-items: center; gap: 7px; color: #374151; font-size: 13px; }
  .cs-modal-features li svg { color: #10b981; font-size: 13px; }
  .cs-modal-testimonial { padding: 20px; background: #f0f9fc; border-radius: 14px; margin-top: 20px; border-left: 4px solid #2596be; }
  .cs-modal-quote { font-size: 24px; color: rgba(37,150,190,0.2); margin-bottom: 8px; }
  .cs-modal-testimonial p { font-size: 14px; color: #374151; font-style: italic; line-height: 1.6; margin-bottom: 12px; }
  .cs-modal-author { display: flex; align-items: center; gap: 10px; }
  .cs-modal-author img { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; }
  .cs-modal-author strong { display: block; color: #0a0a0a; font-size: 13px; }
  .cs-modal-author span { color: #6b7280; font-size: 11px; }

  /* CTA */
  .cs-cta { position: relative; padding: 100px 0; background: linear-gradient(135deg, #2596be, #1a7a9e, #0d4f6b); overflow: hidden; }
  .cs-cta-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 50px 50px; }
  .cs-cta-inner { position: relative; z-index: 1; text-align: center; max-width: 550px; margin: 0 auto; }
  .cs-cta-inner h2 { font-family: 'Space Grotesk', sans-serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; color: #fff; margin-bottom: 14px; }
  .cs-cta-inner p { font-size: 1.1rem; color: rgba(255,255,255,0.85); margin-bottom: 36px; }
  .cs-cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .cs-cta-btn1 { padding: 16px 32px; background: #fff; color: #2596be; border-radius: 50px; font-weight: 600; font-size: 15px; text-decoration: none; display: inline-flex; align-items: center; gap: 7px; transition: all 0.3s ease; box-shadow: 0 6px 25px rgba(0,0,0,0.15); }
  .cs-cta-btn1:hover { transform: translateY(-2px); box-shadow: 0 10px 35px rgba(0,0,0,0.25); }
  .cs-cta-btn2 { padding: 16px 32px; background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.4); border-radius: 50px; font-weight: 600; font-size: 15px; text-decoration: none; transition: all 0.3s ease; }
  .cs-cta-btn2:hover { background: #fff; color: #2596be; border-color: #fff; }
  @media (max-width: 768px) { .cs-cta { padding: 80px 0; } }
`;

export default CaseStudies;