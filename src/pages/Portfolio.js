import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
    FaExternalLinkAlt, FaGithub, FaSearch, FaFilter,
    FaTimes, FaArrowRight, FaCheckCircle, FaStar,
    FaQuoteLeft, FaPlay, FaEye
} from 'react-icons/fa';

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const projects = [
        {
            id: 1,
            title: 'HealthCare Management System',
            category: 'web',
            type: 'Web Application',
            description: 'A comprehensive hospital management system with patient records, appointment scheduling, and billing.',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
            features: [
                'Patient Management',
                'Appointment Scheduling',
                'Electronic Health Records',
                'Billing & Invoicing',
                'Doctor Dashboard',
                'Pharmacy Integration'
            ],
            liveLink: '#',
            githubLink: '#',
            testimonial: {
                text: 'VertexFlow delivered an outstanding healthcare solution that transformed our operations.',
                author: 'Dr. Sarah Johnson',
                role: 'Medical Director, HealthFirst'
            }
        },
        {
            id: 2,
            title: 'Food Delivery App',
            category: 'mobile',
            type: 'Mobile App',
            description: 'Feature-rich food delivery application with real-time tracking, payment integration, and restaurant management.',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600',
            technologies: ['React Native', 'Firebase', 'Node.js', 'Stripe'],
            features: [
                'Real-time Order Tracking',
                'Multiple Payment Options',
                'Restaurant Dashboard',
                'Customer Reviews',
                'Push Notifications',
                'Loyalty Program'
            ],
            liveLink: '#',
            githubLink: '#',
            testimonial: {
                text: 'Our food delivery app has seen 200% growth since launch. Amazing work!',
                author: 'Mike Chen',
                role: 'CEO, FoodExpress'
            }
        },
        {
            id: 3,
            title: 'E-Commerce Platform',
            category: 'web',
            type: 'Web Application',
            description: 'Full-featured e-commerce platform with inventory management, payment processing, and analytics dashboard.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
            technologies: ['Next.js', 'MongoDB', 'Stripe', 'AWS'],
            features: [
                'Product Management',
                'Shopping Cart',
                'Payment Gateway',
                'Order Tracking',
                'Inventory Management',
                'Analytics Dashboard'
            ],
            liveLink: '#',
            githubLink: '#'
        },
        {
            id: 4,
            title: 'AI Chatbot Platform',
            category: 'ai',
            type: 'AI Solution',
            description: 'Intelligent chatbot platform powered by OpenAI for customer support automation.',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600',
            technologies: ['Python', 'OpenAI', 'React', 'Docker'],
            features: [
                'Natural Language Processing',
                'Multi-language Support',
                'Custom Training',
                'Analytics Dashboard',
                'Integration APIs',
                '24/7 Operation'
            ],
            liveLink: '#',
            githubLink: '#'
        },
        {
            id: 5,
            title: 'Real Estate Platform',
            category: 'web',
            type: 'Web Application',
            description: 'Property listing and management platform with virtual tours and advanced search capabilities.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600',
            technologies: ['React', 'Django', 'PostgreSQL', 'Google Maps'],
            features: [
                'Property Listings',
                'Virtual Tours',
                'Advanced Search',
                'Agent Dashboard',
                'Mortgage Calculator',
                'Neighborhood Insights'
            ],
            liveLink: '#',
            githubLink: '#'
        },
        {
            id: 6,
            title: 'Fitness Tracking App',
            category: 'mobile',
            type: 'Mobile App',
            description: 'Comprehensive fitness app with workout tracking, meal planning, and progress monitoring.',
            image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600',
            technologies: ['Flutter', 'Firebase', 'Node.js', 'ML Kit'],
            features: [
                'Workout Tracking',
                'Meal Planning',
                'Progress Monitoring',
                'Social Features',
                'Wearable Integration',
                'AI Recommendations'
            ],
            liveLink: '#',
            githubLink: '#'
        },
        {
            id: 7,
            title: 'SaaS Analytics Dashboard',
            category: 'saas',
            type: 'SaaS Platform',
            description: 'Business analytics platform with real-time data visualization and reporting tools.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
            technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Chart.js'],
            features: [
                'Real-time Analytics',
                'Custom Reports',
                'Data Visualization',
                'Team Collaboration',
                'API Access',
                'Export Options'
            ],
            liveLink: '#',
            githubLink: '#'
        },
        {
            id: 8,
            title: 'Social Media Management Tool',
            category: 'saas',
            type: 'SaaS Platform',
            description: 'All-in-one social media management platform for scheduling, analytics, and engagement.',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600',
            technologies: ['React', 'Node.js', 'Redis', 'Bull Queue'],
            features: [
                'Post Scheduling',
                'Analytics Dashboard',
                'Content Calendar',
                'Team Management',
                'Engagement Tracking',
                'Competitor Analysis'
            ],
            liveLink: '#',
            githubLink: '#'
        }
    ];

    const categories = [
        { id: 'all', label: 'All Projects', count: projects.length },
        { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
        { id: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
        { id: 'ai', label: 'AI Solutions', count: projects.filter(p => p.category === 'ai').length },
        { id: 'saas', label: 'SaaS Platforms', count: projects.filter(p => p.category === 'saas').length }
    ];

    const filteredProjects = projects.filter(project => {
        const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <style>{portfolioStyles}</style>
            
            <Helmet>
                <title>Portfolio | VertexFlow Technologies</title>
                <meta name="description" content="Explore our portfolio of successful projects including web apps, mobile apps, AI solutions, and SaaS platforms." />
            </Helmet>

            {/* Hero Section */}
            <section className="portfolio-hero">
                <div className="portfolio-hero-overlay"></div>
                <div className="portfolio-hero-particles">
                    {[...Array(30)].map((_, i) => (
                        <div key={i} className="portfolio-particle" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${Math.random() * 3 + 2}s`
                        }}></div>
                    ))}
                </div>
                <div className="portfolio-hero-content">
                    <span className="portfolio-hero-badge" data-aos="fade-down">
                        <FaStar /> Our Work
                    </span>
                    <h1 className="portfolio-hero-title" data-aos="fade-up">
                        Our <span className="portfolio-hero-highlight">Portfolio</span>
                    </h1>
                    <p className="portfolio-hero-text" data-aos="fade-up" data-aos-delay="100">
                        Showcasing our best work and successful projects across various industries. 
                        Each project represents our commitment to excellence.
                    </p>
                    <div className="portfolio-hero-stats" data-aos="fade-up" data-aos-delay="200">
                        <div className="portfolio-stat">
                            <span className="portfolio-stat-number">{projects.length}+</span>
                            <span className="portfolio-stat-label">Projects</span>
                        </div>
                        <div className="portfolio-stat-divider"></div>
                        <div className="portfolio-stat">
                            <span className="portfolio-stat-number">5+</span>
                            <span className="portfolio-stat-label">Industries</span>
                        </div>
                        <div className="portfolio-stat-divider"></div>
                        <div className="portfolio-stat">
                            <span className="portfolio-stat-number">100%</span>
                            <span className="portfolio-stat-label">Client Satisfaction</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter & Search Section */}
            <section className="portfolio-filter-section">
                <div className="vertex-container">
                    <div className="portfolio-filter-wrapper">
                        <div className="portfolio-search">
                            <FaSearch className="portfolio-search-icon" />
                            <input
                                type="text"
                                placeholder="Search projects by name, technology..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="portfolio-search-input"
                            />
                        </div>
                        <div className="portfolio-categories">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`portfolio-category-btn ${activeCategory === category.id ? 'portfolio-category-active' : ''}`}
                                >
                                    {category.label}
                                    <span className="portfolio-category-count">({category.count})</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="portfolio-grid-section">
                <div className="vertex-container">
                    {filteredProjects.length === 0 ? (
                        <div className="portfolio-empty">
                            <FaSearch className="portfolio-empty-icon" />
                            <h3>No projects found</h3>
                            <p>Try adjusting your search or filter criteria</p>
                        </div>
                    ) : (
                        <div className="portfolio-grid">
                            {filteredProjects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="portfolio-card"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="portfolio-card-image-wrap">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="portfolio-card-image"
                                        />
                                        <div className="portfolio-card-overlay">
                                            <div className="portfolio-card-actions">
                                                <a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="portfolio-action-btn portfolio-action-primary"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <FaPlay /> Live Demo
                                                </a>
                                                <a
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="portfolio-action-btn portfolio-action-secondary"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <FaGithub /> Source Code
                                                </a>
                                            </div>
                                        </div>
                                        <div className="portfolio-card-type-badge">
                                            {project.type}
                                        </div>
                                    </div>

                                    <div className="portfolio-card-body">
                                        <h3 className="portfolio-card-title">{project.title}</h3>
                                        <p className="portfolio-card-desc">{project.description}</p>

                                        <div className="portfolio-card-tech">
                                            {project.technologies.map((tech, idx) => (
                                                <span key={idx} className="portfolio-tech-tag">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="portfolio-card-features">
                                            {project.features.slice(0, 3).map((feature, idx) => (
                                                <div key={idx} className="portfolio-feature-item">
                                                    <FaCheckCircle className="portfolio-feature-check" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {project.testimonial && (
                                            <div className="portfolio-card-testimonial">
                                                <FaQuoteLeft className="portfolio-testimonial-quote" />
                                                <p className="portfolio-testimonial-text">
                                                    "{project.testimonial.text}"
                                                </p>
                                                <p className="portfolio-testimonial-author">
                                                    — {project.testimonial.author}, {project.testimonial.role}
                                                </p>
                                            </div>
                                        )}

                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="portfolio-detail-btn"
                                        >
                                            <FaEye /> View Full Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Project Modal */}
            {selectedProject && (
                <div className="portfolio-modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="portfolio-modal" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="portfolio-modal-close"
                        >
                            <FaTimes />
                        </button>
                        
                        <div className="portfolio-modal-image-wrap">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="portfolio-modal-image"
                            />
                        </div>

                        <div className="portfolio-modal-body">
                            <span className="portfolio-modal-type">{selectedProject.type}</span>
                            <h2 className="portfolio-modal-title">{selectedProject.title}</h2>
                            <p className="portfolio-modal-desc">{selectedProject.description}</p>

                            <div className="portfolio-modal-grid">
                                <div className="portfolio-modal-section">
                                    <h3 className="portfolio-modal-heading">Technologies Used</h3>
                                    <div className="portfolio-modal-tech-list">
                                        {selectedProject.technologies.map((tech, idx) => (
                                            <span key={idx} className="portfolio-modal-tech">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="portfolio-modal-section">
                                    <h3 className="portfolio-modal-heading">Key Features</h3>
                                    <ul className="portfolio-modal-features">
                                        {selectedProject.features.map((feature, idx) => (
                                            <li key={idx} className="portfolio-modal-feature">
                                                <FaCheckCircle className="portfolio-modal-check" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {selectedProject.testimonial && (
                                <div className="portfolio-modal-testimonial">
                                    <FaQuoteLeft className="portfolio-modal-quote-icon" />
                                    <p className="portfolio-modal-testimonial-text">
                                        "{selectedProject.testimonial.text}"
                                    </p>
                                    <div className="portfolio-modal-testimonial-author">
                                        <div className="portfolio-modal-avatar">
                                            {selectedProject.testimonial.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="portfolio-modal-author-name">
                                                {selectedProject.testimonial.author}
                                            </p>
                                            <p className="portfolio-modal-author-role">
                                                {selectedProject.testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="portfolio-modal-actions">
                                <a
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio-modal-btn-primary"
                                >
                                    <FaExternalLinkAlt /> View Live Project
                                </a>
                                <a
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio-modal-btn-secondary"
                                >
                                    <FaGithub /> Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <section className="portfolio-cta">
                <div className="portfolio-cta-bg"></div>
                <div className="vertex-container">
                    <div className="portfolio-cta-content" data-aos="fade-up">
                        <h2 className="portfolio-cta-title">
                            Have a Project in Mind?
                        </h2>
                        <p className="portfolio-cta-text">
                            Let's build something amazing together. Get in touch to discuss your project requirements.
                        </p>
                        <a href="/contact" className="portfolio-cta-btn">
                            Start Your Project <FaArrowRight />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

// ============================================
// COMPLETE CUSTOM CSS FOR PORTFOLIO PAGE
// ============================================
const portfolioStyles = `
  /* ========== HERO SECTION ========== */
  .portfolio-hero {
    position: relative;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
    padding: 160px 0 100px;
    overflow: hidden;
    min-height: 500px;
    display: flex;
    align-items: center;
  }

  .portfolio-hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.3);
  }

  .portfolio-hero-particles {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .portfolio-particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: rgba(37,150,190,0.5);
    border-radius: 50%;
    animation: particleFloat 3s ease-in-out infinite;
  }

  @keyframes particleFloat {
    0%, 100% { transform: translateY(0); opacity: 0.3; }
    50% { transform: translateY(-20px); opacity: 1; }
  }

  .portfolio-hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .portfolio-hero-badge {
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

  .portfolio-hero-badge svg {
    color: #fbbf24;
    font-size: 12px;
  }

  .portfolio-hero-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 20px;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  .portfolio-hero-highlight {
    background: linear-gradient(135deg, #2596be 0%, #3aacd8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .portfolio-hero-text {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: rgba(255,255,255,0.8);
    line-height: 1.7;
    max-width: 600px;
    margin: 0 auto 40px;
  }

  .portfolio-hero-stats {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    flex-wrap: wrap;
  }

  .portfolio-stat {
    text-align: center;
  }

  .portfolio-stat-number {
    display: block;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 4px;
  }

  .portfolio-stat-label {
    display: block;
    font-size: 13px;
    color: rgba(255,255,255,0.6);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .portfolio-stat-divider {
    width: 1px;
    height: 40px;
    background: rgba(255,255,255,0.15);
  }

  @media (max-width: 768px) {
    .portfolio-hero {
      padding: 120px 0 60px;
    }
    .portfolio-hero-stats {
      gap: 20px;
    }
    .portfolio-stat-number {
      font-size: 22px;
    }
  }

  /* ========== FILTER SECTION ========== */
  .portfolio-filter-section {
    padding: 32px 0;
    background: #ffffff;
    border-bottom: 1px solid #f4f4f5;
    position: sticky;
    top: 80px;
    z-index: 100;
  }

  .vertex-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .portfolio-filter-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .portfolio-search {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
  }

  .portfolio-search-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    font-size: 18px;
  }

  .portfolio-search-input {
    width: 100%;
    padding: 16px 20px 16px 52px;
    border: 2px solid #e4e4e7;
    border-radius: 50px;
    font-size: 15px;
    color: #1a1a1a;
    outline: none;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
    background: #fafafa;
  }

  .portfolio-search-input:focus {
    border-color: #2596be;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(37,150,190,0.08);
  }

  .portfolio-search-input::placeholder {
    color: #9ca3af;
  }

  .portfolio-categories {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .portfolio-category-btn {
    padding: 10px 24px;
    border-radius: 50px;
    border: 2px solid #e4e4e7;
    background: #ffffff;
    color: #6b7280;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .portfolio-category-btn:hover {
    border-color: #2596be;
    color: #2596be;
    background: #f0f9fc;
  }

  .portfolio-category-active {
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 100%);
    color: #ffffff;
    border-color: #2596be;
    box-shadow: 0 4px 15px rgba(37,150,190,0.3);
  }

  .portfolio-category-active:hover {
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 100%);
    color: #ffffff;
  }

  .portfolio-category-count {
    font-size: 12px;
    opacity: 0.8;
  }

  /* ========== PROJECTS GRID ========== */
  .portfolio-grid-section {
    padding: 60px 0 100px;
    background: #fafafa;
  }

  .portfolio-empty {
    text-align: center;
    padding: 80px 0;
  }

  .portfolio-empty-icon {
    font-size: 64px;
    color: #d4d4d8;
    margin-bottom: 20px;
  }

  .portfolio-empty h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 24px;
    color: #374151;
    margin-bottom: 8px;
  }

  .portfolio-empty p {
    color: #9ca3af;
  }

  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  @media (max-width: 1200px) {
    .portfolio-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .portfolio-grid {
      grid-template-columns: 1fr;
    }
  }

  /* Portfolio Card */
  .portfolio-card {
    background: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    border: 1px solid #f4f4f5;
    transition: all 0.4s ease;
  }

  .portfolio-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  }

  .portfolio-card-image-wrap {
    position: relative;
    overflow: hidden;
    height: 240px;
  }

  .portfolio-card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .portfolio-card:hover .portfolio-card-image {
    transform: scale(1.08);
  }

  .portfolio-card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 24px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .portfolio-card:hover .portfolio-card-overlay {
    opacity: 1;
  }

  .portfolio-card-actions {
    display: flex;
    gap: 12px;
  }

  .portfolio-action-btn {
    padding: 10px 20px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
  }

  .portfolio-action-primary {
    background: #ffffff;
    color: #2596be;
  }

  .portfolio-action-primary:hover {
    background: #2596be;
    color: #ffffff;
  }

  .portfolio-action-secondary {
    background: rgba(255,255,255,0.2);
    color: #ffffff;
    border: 1px solid rgba(255,255,255,0.3);
  }

  .portfolio-action-secondary:hover {
    background: rgba(255,255,255,0.3);
  }

  .portfolio-card-type-badge {
    position: absolute;
    top: 16px;
    left: 16px;
    padding: 6px 16px;
    background: rgba(37,150,190,0.9);
    color: #ffffff;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 600;
    backdrop-filter: blur(10px);
    letter-spacing: 0.03em;
  }

  .portfolio-card-body {
    padding: 28px 24px;
  }

  .portfolio-card-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 10px;
  }

  .portfolio-card-desc {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .portfolio-card-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
  }

  .portfolio-tech-tag {
    padding: 4px 12px;
    background: #f4f4f5;
    color: #6b7280;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 500;
  }

  .portfolio-card-features {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
  }

  .portfolio-feature-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: #374151;
  }

  .portfolio-feature-check {
    color: #10b981;
    font-size: 14px;
    flex-shrink: 0;
  }

  .portfolio-card-testimonial {
    padding: 16px;
    background: #fafafa;
    border-radius: 12px;
    margin-bottom: 20px;
    border-left: 3px solid #2596be;
  }

  .portfolio-testimonial-quote {
    color: rgba(37,150,190,0.2);
    font-size: 20px;
    margin-bottom: 8px;
  }

  .portfolio-testimonial-text {
    color: #374151;
    font-size: 13px;
    font-style: italic;
    line-height: 1.6;
    margin-bottom: 8px;
  }

  .portfolio-testimonial-author {
    color: #2596be;
    font-size: 12px;
    font-weight: 600;
    margin: 0;
  }

  .portfolio-detail-btn {
    width: 100%;
    padding: 14px;
    background: transparent;
    border: 2px solid #2596be;
    color: #2596be;
    border-radius: 50px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
  }

  .portfolio-detail-btn:hover {
    background: #2596be;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37,150,190,0.3);
  }

  /* ========== MODAL ========== */
  .portfolio-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.7);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    backdrop-filter: blur(5px);
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .portfolio-modal {
    background: #ffffff;
    border-radius: 24px;
    max-width: 900px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    animation: modalSlideUp 0.4s ease;
  }

  @keyframes modalSlideUp {
    from { transform: translateY(40px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .portfolio-modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
    background: #ffffff;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #374151;
    font-size: 18px;
    cursor: pointer;
    z-index: 10;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
  }

  .portfolio-modal-close:hover {
    background: #ef4444;
    color: #ffffff;
    transform: rotate(90deg);
  }

  .portfolio-modal-image-wrap {
    height: 300px;
    overflow: hidden;
    border-radius: 24px 24px 0 0;
  }

  .portfolio-modal-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .portfolio-modal-body {
    padding: 40px;
  }

  .portfolio-modal-type {
    display: inline-block;
    padding: 6px 16px;
    background: #f0f9fc;
    color: #2596be;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .portfolio-modal-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 16px;
  }

  .portfolio-modal-desc {
    color: #6b7280;
    font-size: 16px;
    line-height: 1.7;
    margin-bottom: 32px;
  }

  .portfolio-modal-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-bottom: 32px;
  }

  @media (max-width: 768px) {
    .portfolio-modal-grid {
      grid-template-columns: 1fr;
    }
    .portfolio-modal-body {
      padding: 24px;
    }
  }

  .portfolio-modal-heading {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 16px;
  }

  .portfolio-modal-tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .portfolio-modal-tech {
    padding: 8px 16px;
    background: #f4f4f5;
    color: #374151;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 500;
  }

  .portfolio-modal-features {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .portfolio-modal-feature {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #374151;
    font-size: 15px;
  }

  .portfolio-modal-check {
    color: #10b981;
    font-size: 18px;
  }

  .portfolio-modal-testimonial {
    padding: 24px;
    background: #fafafa;
    border-radius: 16px;
    margin-bottom: 32px;
    border-left: 4px solid #2596be;
  }

  .portfolio-modal-quote-icon {
    color: rgba(37,150,190,0.2);
    font-size: 32px;
    margin-bottom: 12px;
  }

  .portfolio-modal-testimonial-text {
    color: #374151;
    font-size: 16px;
    font-style: italic;
    line-height: 1.7;
    margin-bottom: 16px;
  }

  .portfolio-modal-testimonial-author {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .portfolio-modal-avatar {
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
  }

  .portfolio-modal-author-name {
    font-weight: 600;
    color: #0a0a0a;
    margin-bottom: 2px;
  }

  .portfolio-modal-author-role {
    font-size: 13px;
    color: #6b7280;
    margin: 0;
  }

  .portfolio-modal-actions {
    display: flex;
    gap: 16px;
  }

  .portfolio-modal-btn-primary {
    flex: 1;
    padding: 16px 24px;
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(37,150,190,0.3);
    cursor: pointer;
  }

  .portfolio-modal-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(37,150,190,0.5);
  }

  .portfolio-modal-btn-secondary {
    padding: 16px 24px;
    background: transparent;
    color: #2596be;
    border: 2px solid #2596be;
    border-radius: 50px;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .portfolio-modal-btn-secondary:hover {
    background: #2596be;
    color: #ffffff;
  }

  /* ========== CTA SECTION ========== */
  .portfolio-cta {
    position: relative;
    padding: 120px 0;
    background: linear-gradient(135deg, #2596be, #1a7a9e, #0d4f6b);
    overflow: hidden;
  }

  .portfolio-cta-bg {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  .portfolio-cta-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  .portfolio-cta-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .portfolio-cta-text {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: rgba(255,255,255,0.85);
    margin-bottom: 40px;
    line-height: 1.6;
  }

  .portfolio-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 18px 40px;
    background: #ffffff;
    color: #2596be;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }

  .portfolio-cta-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.25);
    background: #fafafa;
  }

  @media (max-width: 768px) {
    .portfolio-cta {
      padding: 80px 0;
    }
    .portfolio-modal-body {
      padding: 20px;
    }
  }
`;

export default Portfolio;