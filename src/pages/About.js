import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
    FaUsers, FaRocket, FaAward, FaGlobe, 
    FaQuoteLeft, FaStar, FaCheckCircle,
    FaLinkedin, FaTwitter, FaHeart,
    FaLightbulb, FaHandshake, FaArrowRight
} from 'react-icons/fa';

const About = () => {
    const team = [
        {
            name: 'Ahmed Khan',
            role: 'CEO & Founder',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
            bio: 'Visionary leader with 10+ years in tech industry',
            social: { linkedin: '#', twitter: '#' }
        },
        {
            name: 'Sara Ali',
            role: 'CTO',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
            bio: 'Full-stack developer and AI enthusiast',
            social: { linkedin: '#', twitter: '#' }
        },
        {
            name: 'Usman Ahmed',
            role: 'Lead Designer',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
            bio: 'Creative designer with eye for user experience',
            social: { linkedin: '#', twitter: '#' }
        },
        {
            name: 'Fatima Hassan',
            role: 'Marketing Director',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
            bio: 'Digital marketing strategist and growth hacker',
            social: { linkedin: '#', twitter: '#' }
        }
    ];

    const values = [
        {
            icon: FaRocket,
            title: 'Innovation',
            description: 'We embrace cutting-edge technologies to deliver innovative solutions'
        },
        {
            icon: FaUsers,
            title: 'Collaboration',
            description: 'Working closely with clients to understand and exceed their expectations'
        },
        {
            icon: FaAward,
            title: 'Excellence',
            description: 'Committed to delivering the highest quality in every project'
        },
        {
            icon: FaGlobe,
            title: 'Global Impact',
            description: 'Making a difference for businesses worldwide with our solutions'
        }
    ];

    const timeline = [
        { year: '2019', title: 'Founded', description: 'VertexFlow started with a vision to revolutionize digital solutions' },
        { year: '2020', title: 'First Major Client', description: 'Secured first enterprise client and delivered successful project' },
        { year: '2021', title: 'Team Growth', description: 'Expanded team to 20+ talented professionals' },
        { year: '2022', title: 'AI Integration', description: 'Launched AI and automation division' },
        { year: '2023', title: 'Global Expansion', description: 'Started serving international clients across 15+ countries' },
        { year: '2024', title: 'Innovation Hub', description: 'Opened innovation lab and launched SaaS products' }
    ];

    const stats = [
        { number: '150+', label: 'Projects Delivered', icon: FaRocket },
        { number: '50+', label: 'Happy Clients', icon: FaUsers },
        { number: '30+', label: 'Team Members', icon: FaHeart },
        { number: '15+', label: 'Countries Served', icon: FaGlobe }
    ];

    return (
        <>
            <style>{aboutStyles}</style>
            
            <Helmet>
                <title>About Us | VertexFlow Technologies</title>
                <meta name="description" content="Learn about VertexFlow Technologies - our mission, team, and values in software development and digital innovation." />
            </Helmet>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-bg"></div>
                <div className="about-hero-content">
                    <div className="about-hero-grid">
                        <div className="about-hero-text" data-aos="fade-right">
                            <span className="about-hero-badge">
                                <FaStar /> About Us
                            </span>
                            <h1 className="about-hero-title">
                                About <span className="about-hero-highlight">VertexFlow</span>
                            </h1>
                            <p className="about-hero-desc">
                                We are a team of passionate technologists, designers, and strategists 
                                dedicated to transforming businesses through innovative digital solutions.
                                Our mission is to make technology work for you.
                            </p>
                            <div className="about-hero-buttons">
                                <a href="#team" className="about-hero-btn-primary">
                                    Meet Our Team <FaArrowRight />
                                </a>
                                <a href="#values" className="about-hero-btn-secondary">
                                    Our Values
                                </a>
                            </div>
                        </div>
                        <div className="about-hero-stats" data-aos="fade-left">
                            {stats.map((stat, index) => (
                                <div key={index} className="about-stat-card">
                                    <div className="about-stat-icon">
                                        <stat.icon />
                                    </div>
                                    <h3 className="about-stat-number">{stat.number}</h3>
                                    <p className="about-stat-label">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="about-mission">
                <div className="vertex-container">
                    <div className="about-mission-grid">
                        <div className="about-mission-card" data-aos="fade-right">
                            <div className="about-mission-icon-wrap">
                                <FaRocket className="about-mission-icon" />
                            </div>
                            <span className="about-mission-badge">Our Purpose</span>
                            <h2 className="about-mission-title">Our Mission</h2>
                            <p className="about-mission-text">
                                To empower businesses with innovative technology solutions that drive growth, 
                                efficiency, and digital transformation. We strive to make cutting-edge 
                                technology accessible and impactful for companies of all sizes.
                            </p>
                            <ul className="about-mission-list">
                                <li><FaCheckCircle /> Deliver exceptional quality</li>
                                <li><FaCheckCircle /> Drive innovation forward</li>
                                <li><FaCheckCircle /> Create lasting impact</li>
                            </ul>
                        </div>
                        <div className="about-mission-card about-mission-card-alt" data-aos="fade-left">
                            <div className="about-mission-icon-wrap">
                                <FaGlobe className="about-mission-icon" />
                            </div>
                            <span className="about-mission-badge">Our Goal</span>
                            <h2 className="about-mission-title">Our Vision</h2>
                            <p className="about-mission-text">
                                To become a global leader in digital innovation, creating solutions that 
                                shape the future of technology. We envision a world where every business 
                                can leverage the power of cutting-edge technology.
                            </p>
                            <ul className="about-mission-list">
                                <li><FaCheckCircle /> Global technology leader</li>
                                <li><FaCheckCircle /> Shape digital future</li>
                                <li><FaCheckCircle /> Empower every business</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="about-values" id="values">
                <div className="vertex-container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">OUR VALUES</span>
                        <h2 className="section-title">
                            What <span className="gradient-text">Drives Us</span>
                        </h2>
                        <p className="section-description">
                            Our core values shape everything we do, from how we work to how we deliver results.
                        </p>
                    </div>

                    <div className="about-values-grid">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="about-value-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="about-value-icon-wrap">
                                    <value.icon className="about-value-icon" />
                                </div>
                                <div className="about-value-number">0{index + 1}</div>
                                <h3 className="about-value-title">{value.title}</h3>
                                <p className="about-value-desc">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="about-timeline">
                <div className="vertex-container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">OUR JOURNEY</span>
                        <h2 className="section-title">
                            From Startup to <span className="gradient-text">Success</span>
                        </h2>
                        <p className="section-description">
                            Our journey from a small startup to a global technology company.
                        </p>
                    </div>

                    <div className="about-timeline-wrapper">
                        <div className="about-timeline-line"></div>
                        
                        <div className="about-timeline-items">
                            {timeline.map((item, index) => (
                                <div
                                    key={index}
                                    className={`about-timeline-item ${index % 2 === 0 ? 'about-timeline-left' : 'about-timeline-right'}`}
                                    data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                                    data-aos-delay={index * 100}
                                >
                                    <div className="about-timeline-dot">
                                        <div className="about-timeline-dot-inner"></div>
                                    </div>
                                    <div className="about-timeline-content">
                                        <span className="about-timeline-year">{item.year}</span>
                                        <h3 className="about-timeline-title">{item.title}</h3>
                                        <p className="about-timeline-desc">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="about-team" id="team">
                <div className="vertex-container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">OUR TEAM</span>
                        <h2 className="section-title">
                            Meet the <span className="gradient-text">Innovators</span>
                        </h2>
                        <p className="section-description">
                            Talented professionals dedicated to delivering exceptional results
                        </p>
                    </div>

                    <div className="about-team-grid">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="about-team-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="about-team-image-wrap">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="about-team-image"
                                    />
                                    <div className="about-team-image-overlay">
                                        <div className="about-team-social">
                                            <a href={member.social.linkedin} className="about-team-social-link" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedin />
                                            </a>
                                            <a href={member.social.twitter} className="about-team-social-link" target="_blank" rel="noopener noreferrer">
                                                <FaTwitter />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-team-info">
                                    <h3 className="about-team-name">{member.name}</h3>
                                    <p className="about-team-role">{member.role}</p>
                                    <p className="about-team-bio">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <div className="about-cta-bg"></div>
                <div className="vertex-container">
                    <div className="about-cta-content" data-aos="fade-up">
                        <div className="about-cta-icon">
                            <FaHandshake />
                        </div>
                        <h2 className="about-cta-title">
                            Want to Join Our Team?
                        </h2>
                        <p className="about-cta-text">
                            We're always looking for talented individuals who are passionate about technology 
                            and innovation. Join us in building the future.
                        </p>
                        <div className="about-cta-buttons">
                            <a href="/careers" className="about-cta-btn-primary">
                                View Open Positions <FaArrowRight />
                            </a>
                            <a href="/contact" className="about-cta-btn-secondary">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

// ============================================
// COMPLETE CUSTOM CSS FOR ABOUT PAGE
// ============================================
const aboutStyles = `
  /* ========== HERO SECTION ========== */
  .about-hero {
    position: relative;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
    padding: 160px 0 100px;
    overflow: hidden;
  }

  .about-hero-bg {
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(37,150,190,0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(37,150,190,0.05) 0%, transparent 50%);
  }

  .about-hero-content {
    position: relative;
    z-index: 1;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .about-hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  @media (max-width: 1024px) {
    .about-hero-grid {
      grid-template-columns: 1fr;
    }
  }

  .about-hero-badge {
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

  .about-hero-badge svg {
    color: #fbbf24;
    font-size: 12px;
  }

  .about-hero-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 24px;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  .about-hero-highlight {
    background: linear-gradient(135deg, #2596be 0%, #3aacd8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .about-hero-desc {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: rgba(255,255,255,0.8);
    line-height: 1.7;
    margin-bottom: 40px;
    max-width: 500px;
  }

  .about-hero-buttons {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .about-hero-btn-primary {
    padding: 16px 32px;
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    border-radius: 50px;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(37,150,190,0.3);
  }

  .about-hero-btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(37,150,190,0.5);
  }

  .about-hero-btn-secondary {
    padding: 16px 32px;
    background: transparent;
    color: #ffffff;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 50px;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .about-hero-btn-secondary:hover {
    background: #ffffff;
    color: #2596be;
    border-color: #ffffff;
  }

  /* Hero Stats */
  .about-hero-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .about-stat-card {
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
    padding: 28px 20px;
    text-align: center;
    transition: all 0.3s ease;
  }

  .about-stat-card:hover {
    background: rgba(37,150,190,0.15);
    transform: translateY(-5px);
  }

  .about-stat-icon {
    font-size: 28px;
    color: #2596be;
    margin-bottom: 12px;
  }

  .about-stat-number {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 32px;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 6px;
  }

  .about-stat-label {
    font-size: 13px;
    color: rgba(255,255,255,0.6);
    margin: 0;
  }

  @media (max-width: 768px) {
    .about-hero {
      padding: 120px 0 60px;
    }
    .about-hero-stats {
      grid-template-columns: 1fr 1fr;
    }
    .about-stat-number {
      font-size: 24px;
    }
  }

  /* ========== MISSION & VISION ========== */
  .about-mission {
    padding: 120px 0;
    background: #ffffff;
  }

  .vertex-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .about-mission-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  @media (max-width: 1024px) {
    .about-mission-grid {
      grid-template-columns: 1fr;
    }
    .about-mission {
      padding: 80px 0;
    }
  }

  .about-mission-card {
    background: #ffffff;
    border-radius: 24px;
    padding: 48px 40px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    border: 1px solid #f4f4f5;
    transition: all 0.3s ease;
  }

  .about-mission-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  }

  .about-mission-card-alt {
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
  }

  .about-mission-icon-wrap {
    width: 64px;
    height: 64px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
  }

  .about-mission-card:not(.about-mission-card-alt) .about-mission-icon-wrap {
    background: rgba(37,150,190,0.08);
  }

  .about-mission-card-alt .about-mission-icon-wrap {
    background: rgba(255,255,255,0.2);
  }

  .about-mission-icon {
    font-size: 30px;
  }

  .about-mission-card:not(.about-mission-card-alt) .about-mission-icon {
    color: #2596be;
  }

  .about-mission-card-alt .about-mission-icon {
    color: #ffffff;
  }

  .about-mission-badge {
    display: inline-block;
    padding: 4px 14px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 16px;
  }

  .about-mission-card:not(.about-mission-card-alt) .about-mission-badge {
    background: #f0f9fc;
    color: #2596be;
  }

  .about-mission-card-alt .about-mission-badge {
    background: rgba(255,255,255,0.2);
    color: #ffffff;
  }

  .about-mission-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .about-mission-card-alt .about-mission-title {
    color: #ffffff;
  }

  .about-mission-text {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 28px;
  }

  .about-mission-card:not(.about-mission-card-alt) .about-mission-text {
    color: #6b7280;
  }

  .about-mission-card-alt .about-mission-text {
    color: rgba(255,255,255,0.9);
  }

  .about-mission-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .about-mission-list li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    font-weight: 500;
  }

  .about-mission-card:not(.about-mission-card-alt) .about-mission-list li {
    color: #374151;
  }

  .about-mission-card-alt .about-mission-list li {
    color: #ffffff;
  }

  .about-mission-list svg {
    font-size: 18px;
    flex-shrink: 0;
  }

  .about-mission-card:not(.about-mission-card-alt) .about-mission-list svg {
    color: #10b981;
  }

  .about-mission-card-alt .about-mission-list svg {
    color: #34d399;
  }

  /* ========== VALUES SECTION ========== */
  .about-values {
    padding: 120px 0;
    background: #fafafa;
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

  .about-values-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }

  @media (max-width: 1024px) {
    .about-values-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .about-values-grid {
      grid-template-columns: 1fr;
    }
  }

  .about-value-card {
    background: #ffffff;
    border-radius: 24px;
    padding: 40px 28px;
    text-align: center;
    position: relative;
    overflow: hidden;
    border: 1px solid #f4f4f5;
    transition: all 0.3s ease;
  }

  .about-value-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #2596be, #3aacd8);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  .about-value-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  }

  .about-value-card:hover::before {
    transform: scaleX(1);
  }

  .about-value-icon-wrap {
    width: 72px;
    height: 72px;
    background: rgba(37,150,190,0.08);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    transition: all 0.3s ease;
  }

  .about-value-card:hover .about-value-icon-wrap {
    background: linear-gradient(135deg, #2596be, #1a7a9e);
  }

  .about-value-icon {
    font-size: 34px;
    color: #2596be;
    transition: color 0.3s ease;
  }

  .about-value-card:hover .about-value-icon {
    color: #ffffff;
  }

  .about-value-number {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 48px;
    font-weight: 800;
    color: rgba(37,150,190,0.08);
    position: absolute;
    top: 20px;
    right: 20px;
    line-height: 1;
  }

  .about-value-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 12px;
  }

  .about-value-desc {
    color: #6b7280;
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 768px) {
    .about-values {
      padding: 80px 0;
    }
  }

  /* ========== TIMELINE SECTION ========== */
  .about-timeline {
    padding: 120px 0;
    background: #ffffff;
  }

  .about-timeline-wrapper {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
  }

  .about-timeline-line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: linear-gradient(to bottom, transparent, #2596be, transparent);
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    .about-timeline-line {
      left: 20px;
    }
  }

  .about-timeline-items {
    display: flex;
    flex-direction: column;
    gap: 48px;
    position: relative;
  }

  .about-timeline-item {
    display: flex;
    align-items: center;
    position: relative;
  }

  .about-timeline-left {
    flex-direction: row;
    padding-right: calc(50% + 40px);
  }

  .about-timeline-right {
    flex-direction: row-reverse;
    padding-left: calc(50% + 40px);
  }

  @media (max-width: 768px) {
    .about-timeline-left,
    .about-timeline-right {
      flex-direction: row;
      padding-left: 50px;
      padding-right: 0;
    }
  }

  .about-timeline-dot {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 24px;
    height: 24px;
    background: #ffffff;
    border: 4px solid #2596be;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  @media (max-width: 768px) {
    .about-timeline-dot {
      left: 20px;
    }
  }

  .about-timeline-dot-inner {
    width: 8px;
    height: 8px;
    background: #2596be;
    border-radius: 50%;
  }

  .about-timeline-content {
    background: #ffffff;
    border-radius: 20px;
    padding: 32px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    border: 1px solid #f4f4f5;
    transition: all 0.3s ease;
    width: 100%;
  }

  .about-timeline-content:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    border-color: rgba(37,150,190,0.2);
  }

  .about-timeline-year {
    display: inline-block;
    padding: 6px 16px;
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .about-timeline-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 10px;
  }

  .about-timeline-desc {
    color: #6b7280;
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 768px) {
    .about-timeline {
      padding: 80px 0;
    }
    .about-timeline-items {
      gap: 32px;
    }
    .about-timeline-content {
      padding: 24px;
    }
  }

  /* ========== TEAM SECTION ========== */
  .about-team {
    padding: 120px 0;
    background: #fafafa;
  }

  .about-team-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }

  @media (max-width: 1200px) {
    .about-team-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .about-team-grid {
      grid-template-columns: 1fr;
      max-width: 400px;
      margin: 0 auto;
    }
  }

  .about-team-card {
    background: #ffffff;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    border: 1px solid #f4f4f5;
    transition: all 0.3s ease;
  }

  .about-team-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  }

  .about-team-image-wrap {
    position: relative;
    overflow: hidden;
    height: 280px;
  }

  .about-team-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .about-team-card:hover .about-team-image {
    transform: scale(1.05);
  }

  .about-team-image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(37,150,190,0.8), transparent);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 24px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .about-team-card:hover .about-team-image-overlay {
    opacity: 1;
  }

  .about-team-social {
    display: flex;
    gap: 12px;
  }

  .about-team-social-link {
    width: 40px;
    height: 40px;
    background: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2596be;
    font-size: 16px;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .about-team-social-link:hover {
    background: #2596be;
    color: #ffffff;
    transform: translateY(-3px);
  }

  .about-team-info {
    padding: 28px 24px;
    text-align: center;
  }

  .about-team-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 6px;
  }

  .about-team-role {
    color: #2596be;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 12px;
  }

  .about-team-bio {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
  }

  @media (max-width: 768px) {
    .about-team {
      padding: 80px 0;
    }
  }

  /* ========== CTA SECTION ========== */
  .about-cta {
    position: relative;
    padding: 120px 0;
    background: linear-gradient(135deg, #0a0a0a, #1a1a2e);
    overflow: hidden;
  }

  .about-cta-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(37,150,190,0.15) 0%, transparent 70%);
  }

  .about-cta-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  .about-cta-icon {
    width: 80px;
    height: 80px;
    background: rgba(37,150,190,0.15);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 32px;
    font-size: 36px;
    color: #2596be;
    border: 2px solid rgba(37,150,190,0.3);
  }

  .about-cta-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .about-cta-text {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: rgba(255,255,255,0.8);
    margin-bottom: 48px;
    line-height: 1.6;
  }

  .about-cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .about-cta-btn-primary {
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

  .about-cta-btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(37,150,190,0.5);
  }

  .about-cta-btn-secondary {
    padding: 18px 36px;
    background: transparent;
    color: #ffffff;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .about-cta-btn-secondary:hover {
    background: #ffffff;
    color: #2596be;
    border-color: #ffffff;
  }

  @media (max-width: 768px) {
    .about-cta {
      padding: 80px 0;
    }
  }
`;

export default About;