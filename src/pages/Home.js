import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  FaArrowRight, FaCheckCircle, FaStar, FaQuoteLeft,
  FaMobile, FaCode, FaRobot, FaCloud, FaPalette, FaChartLine,
  FaPlay, FaChevronDown
} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  const services = [
    {
      icon: FaMobile,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps using React Native & Flutter',
      link: '/services/mobile-apps'
    },
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Responsive websites and web apps with modern tech stack',
      link: '/services/web-development'
    },
    {
      icon: FaRobot,
      title: 'AI Automation',
      description: 'Smart automation solutions with OpenAI & custom AI models',
      link: '/services/ai-automation'
    },
    {
      icon: FaCloud,
      title: 'SaaS Development',
      description: 'Scalable cloud-based software solutions for businesses',
      link: '/services/saas-development'
    },
    {
      icon: FaPalette,
      title: 'Graphic Design',
      description: 'Creative branding, UI/UX design & visual identity',
      link: '/services/graphic-design'
    },
    {
      icon: FaChartLine,
      title: 'Digital Marketing',
      description: 'SEO, social media & paid advertising campaigns',
      link: '/services/seo-marketing'
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp Inc.',
      role: 'CEO',
      text: 'VertexFlow transformed our business with their AI automation solution. We saw a 200% increase in efficiency.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'Digital Retail',
      role: 'CTO',
      text: 'Outstanding web development services. They delivered our e-commerce platform on time and exceeded expectations.',
      rating: 5
    },
    {
      name: 'Mike Brown',
      company: 'HealthFirst',
      role: 'Director',
      text: 'The mobile app they built for our hospital is phenomenal. Patients love the user experience.',
      rating: 5
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      {/* Home Page Styles */}
      <style>{homeStyles}</style>
      
      <Helmet>
        <title>VertexFlow Technologies | Software Development & Digital Agency</title>
        <meta name="description" content="VertexFlow Technologies - Leading software development company specializing in mobile apps, web development, AI automation, and digital marketing." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-orbs">
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-orb hero-orb-3"></div>
        </div>
        
        <div className="hero-grid-pattern"></div>

        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content" data-aos="fade-right">
              <div className="hero-badge">
                <span className="hero-badge-dot"></span>
                <span>Innovating the Future of Tech</span>
              </div>
              
              <h1 className="hero-title">
                We Build{' '}
                <span className="hero-title-animated">
                  <TypeAnimation
                    sequence={[
                      'Digital Products',
                      2000,
                      'Mobile Apps',
                      2000,
                      'AI Solutions',
                      2000,
                      'Web Platforms',
                      2000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h1>
              
              <p className="hero-description">
                VertexFlow Technologies delivers cutting-edge software solutions 
                that transform businesses. From mobile apps to AI automation, 
                we bring your ideas to life.
              </p>

              <div className="hero-buttons">
                <Link to="/contact" className="btn hero-btn-primary">
                  Start Your Project 
                  <FaArrowRight className="btn-arrow" />
                </Link>
                <Link to="/portfolio" className="btn hero-btn-outline">
                  View Portfolio
                </Link>
              </div>

              <div className="hero-clients">
                <p className="hero-clients-label">TRUSTED BY INNOVATIVE COMPANIES</p>
                <div className="hero-clients-list">
                  {['TechCorp', 'InnovateLabs', 'FutureScale', 'CloudNine'].map((logo) => (
                    <span key={logo} className="hero-client-name">
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="hero-visual" data-aos="fade-left">
              <div className="hero-code-window">
                <div className="hero-code-header">
                  <div className="hero-code-dot hero-code-dot-red"></div>
                  <div className="hero-code-dot hero-code-dot-yellow"></div>
                  <div className="hero-code-dot hero-code-dot-green"></div>
                </div>
                <div className="hero-code-content">
                  <div className="hero-code-line">
                    <span className="code-keyword">const</span>
                    <span className="code-variable"> vertexflow </span>
                    <span className="code-operator">=</span>
                    <span className="code-bracket"> {'{'}</span>
                  </div>
                  <div className="hero-code-line hero-code-indent">
                    <span className="code-property">build</span>
                    <span className="code-operator">:</span>
                    <span className="code-string"> 'Digital Products'</span>
                    <span className="code-comma">,</span>
                  </div>
                  <div className="hero-code-line hero-code-indent">
                    <span className="code-property">scale</span>
                    <span className="code-operator">:</span>
                    <span className="code-string"> 'Businesses'</span>
                    <span className="code-comma">,</span>
                  </div>
                  <div className="hero-code-line hero-code-indent">
                    <span className="code-property">innovate</span>
                    <span className="code-operator">:</span>
                    <span className="code-boolean"> true</span>
                  </div>
                  <div className="hero-code-line">
                    <span className="code-bracket">{'}'}</span>
                  </div>
                </div>
              </div>
              
              <div className="hero-floating-card">
                <div className="hero-floating-icon">
                  <FaStar />
                </div>
                <div>
                  <div className="hero-floating-title">Top Rated</div>
                  <div className="hero-floating-subtitle">On Clutch & Upwork</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <FaChevronDown />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="vertex-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="stat-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="vertex-container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge">OUR SERVICES</span>
            <h2 className="section-title">
              Comprehensive Tech<br /><span className="gradient-text">Solutions</span>
            </h2>
            <p className="section-description">
              From concept to deployment, we provide end-to-end software development 
              and digital marketing services that drive growth.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="service-icon-wrapper">
                  <service.icon className="service-icon" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to={service.link} className="service-link">
                  Learn More 
                  <FaArrowRight className="service-link-arrow" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="vertex-container">
          <div className="process-grid">
            <div data-aos="fade-right">
              <span className="section-badge">OUR PROCESS</span>
              <h2 className="section-title">
                How We Transform Your Ideas
              </h2>
              <p className="section-description" style={{ textAlign: 'left', marginLeft: 0 }}>
                Our proven development methodology ensures successful project delivery every time.
              </p>
              
              <div className="process-steps">
                {[
                  { step: '01', title: 'Discovery & Planning', desc: 'Understanding your vision and creating roadmap' },
                  { step: '02', title: 'Design & Prototype', desc: 'Creating intuitive designs and interactive prototypes' },
                  { step: '03', title: 'Development', desc: 'Building with cutting-edge technology stack' },
                  { step: '04', title: 'Testing & Launch', desc: 'Rigorous testing and smooth deployment' },
                  { step: '05', title: 'Growth & Support', desc: 'Continuous optimization and maintenance' }
                ].map((item, index) => (
                  <div key={index} className="process-step">
                    <div className="process-step-number">
                      <span>{item.step}</span>
                    </div>
                    <div className="process-step-content">
                      <h4 className="process-step-title">{item.title}</h4>
                      <p className="process-step-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="process-visual" data-aos="fade-left">
              <div className="process-video-wrapper">
                <div className="process-video-placeholder">
                  <button className="process-play-btn">
                    <FaPlay />
                  </button>
                </div>
              </div>
              <div className="process-visual-bg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="vertex-container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge">TESTIMONIALS</span>
            <h2 className="section-title">
              What Our<br /><span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <FaQuoteLeft className="testimonial-quote" />
                  <p className="testimonial-text">
                    "{testimonial.text}"
                  </p>
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="testimonial-star" />
                    ))}
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <p className="testimonial-role">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-pattern"></div>
        <div className="vertex-container">
          <div className="cta-content" data-aos="fade-up">
            <h2 className="cta-title">
              Ready to Build Something Amazing?
            </h2>
            <p className="cta-description">
              Let's discuss your project and turn your vision into reality. 
              Get a free consultation today!
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn cta-btn-primary">
                Get Free Consultation
              </Link>
              <a href="https://calendly.com/vertexflow" target="_blank" rel="noopener noreferrer" className="btn cta-btn-outline">
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
// COMPLETE CUSTOM CSS FOR HOME PAGE
// ============================================
const homeStyles = `
  /* ========== HERO SECTION ========== */
  .hero-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
    overflow: hidden;
  }

  /* Hero Background Orbs */
  .hero-bg-orbs {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
  }

  .hero-orb-1 {
    top: 15%;
    left: 20%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(37,150,190,0.12) 0%, transparent 70%);
    animation: orbFloat1 20s ease-in-out infinite;
  }

  .hero-orb-2 {
    bottom: 20%;
    right: 25%;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(37,150,190,0.08) 0%, transparent 70%);
    animation: orbFloat2 25s ease-in-out infinite;
  }

  .hero-orb-3 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(37,150,190,0.05) 0%, transparent 70%);
    animation: orbFloat3 15s ease-in-out infinite;
  }

  @keyframes orbFloat1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(80px, -60px) scale(1.1); }
    66% { transform: translate(-40px, 40px) scale(0.9); }
  }

  @keyframes orbFloat2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-60px, -40px) scale(1.15); }
  }

  @keyframes orbFloat3 {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.2); }
  }

  .hero-grid-pattern {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 60px 60px;
    opacity: 0.5;
  }

  .hero-container {
    position: relative;
    z-index: 1;
    max-width: 1280px;
    margin: 0 auto;
    padding: 120px 24px 80px;
    width: 100%;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  @media (max-width: 1024px) {
    .hero-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  /* Hero Content */
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(20px);
    border-radius: 50px;
    padding: 10px 24px;
    margin-bottom: 32px;
    border: 1px solid rgba(255,255,255,0.12);
  }

  .hero-badge-dot {
    width: 10px;
    height: 10px;
    background: #10b981;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.2); }
  }

  .hero-badge span {
    color: rgba(255,255,255,0.9);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  .hero-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.5rem, 6vw, 5rem);
    font-weight: 800;
    color: #ffffff;
    line-height: 1.1;
    margin-bottom: 24px;
    letter-spacing: -0.02em;
  }

  .hero-title-animated {
    background: linear-gradient(135deg, #2596be 0%, #3aacd8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-description {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: #9ca3af;
    line-height: 1.7;
    margin-bottom: 40px;
    max-width: 540px;
  }

  .hero-buttons {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 60px;
  }

  .hero-btn-primary {
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 100%);
    color: #ffffff;
    border: none;
    padding: 16px 36px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(37,150,190,0.3);
  }

  .hero-btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(37,150,190,0.5);
  }

  .btn-arrow {
    transition: transform 0.3s ease;
  }

  .hero-btn-primary:hover .btn-arrow {
    transform: translateX(5px);
  }

  .hero-btn-outline {
    background: transparent;
    color: #ffffff;
    border: 2px solid rgba(255,255,255,0.3);
    padding: 16px 36px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .hero-btn-outline:hover {
    background: #ffffff;
    color: #2596be;
    border-color: #ffffff;
    transform: translateY(-3px);
  }

  .hero-clients {
    padding-top: 32px;
    border-top: 1px solid rgba(255,255,255,0.08);
  }

  .hero-clients-label {
    font-size: 12px;
    color: #6b7280;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 16px;
    font-weight: 600;
  }

  .hero-clients-list {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
  }

  .hero-client-name {
    color: #6b7280;
    font-weight: 700;
    font-size: 18px;
    transition: color 0.3s ease;
  }

  .hero-client-name:hover {
    color: #2596be;
  }

  /* Hero Visual */
  .hero-visual {
    position: relative;
  }

  .hero-code-window {
    background: rgba(255,255,255,0.03);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 24px;
    border: 1px solid rgba(255,255,255,0.08);
    position: relative;
    z-index: 1;
  }

  .hero-code-header {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
  }

  .hero-code-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .hero-code-dot-red { background: #ef4444; }
  .hero-code-dot-yellow { background: #f59e0b; }
  .hero-code-dot-green { background: #10b981; }

  .hero-code-content {
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    line-height: 1.8;
  }

  .hero-code-line {
    color: #9ca3af;
  }

  .hero-code-indent {
    padding-left: 20px;
  }

  .code-keyword { color: #c084fc; }
  .code-variable { color: #93c5fd; }
  .code-operator { color: #9ca3af; }
  .code-bracket { color: #fbbf24; }
  .code-property { color: #93c5fd; }
  .code-string { color: #34d399; }
  .code-boolean { color: #fb923c; }
  .code-comma { color: #9ca3af; }

  .hero-floating-card {
    position: absolute;
    bottom: -20px;
    right: -20px;
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 2;
    animation: floatCard 3s ease-in-out infinite;
  }

  @keyframes floatCard {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .hero-floating-icon {
    width: 40px;
    height: 40px;
    background: rgba(251,191,36,0.2);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fbbf24;
    font-size: 18px;
  }

  .hero-floating-title {
    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
  }

  .hero-floating-subtitle {
    color: #9ca3af;
    font-size: 12px;
  }

  .hero-scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255,255,255,0.4);
    font-size: 20px;
    animation: scrollBounce 2s infinite;
  }

  @keyframes scrollBounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(10px); }
  }

  /* ========== STATS SECTION ========== */
  .stats-section {
    position: relative;
    margin-top: -80px;
    z-index: 10;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  @media (max-width: 768px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }
  }

  .stat-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 32px 24px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    transition: all 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.12);
  }

  .stat-number {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    background: linear-gradient(135deg, #2596be 0%, #3aacd8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
  }

  .stat-label {
    color: #6b7280;
    font-size: 15px;
    font-weight: 500;
    margin: 0;
  }

  /* ========== SERVICES SECTION ========== */
  .services-section {
    padding: 120px 0;
    background: #fafafa;
  }

  @media (max-width: 768px) {
    .services-section {
      padding: 80px 0;
    }
  }

  .vertex-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
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
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.05em;
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

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  @media (max-width: 1024px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .services-grid {
      grid-template-columns: 1fr;
    }
  }

  .service-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 40px 32px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    border: 1px solid #f4f4f5;
  }

  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, #2596be 0%, #3aacd8 100%);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  .service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    border-color: transparent;
  }

  .service-card:hover::before {
    transform: scaleX(1);
  }

  .service-icon-wrapper {
    width: 64px;
    height: 64px;
    background: rgba(37,150,190,0.08);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    transition: all 0.3s ease;
  }

  .service-card:hover .service-icon-wrapper {
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 100%);
  }

  .service-icon {
    font-size: 28px;
    color: #2596be;
    transition: color 0.3s ease;
  }

  .service-card:hover .service-icon {
    color: #ffffff;
  }

  .service-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 12px;
  }

  .service-description {
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 24px;
    font-size: 15px;
  }

  .service-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #2596be;
    font-weight: 600;
    text-decoration: none;
    font-size: 15px;
    transition: gap 0.3s ease;
  }

  .service-link:hover {
    gap: 12px;
  }

  .service-link-arrow {
    font-size: 13px;
    transition: transform 0.3s ease;
  }

  .service-link:hover .service-link-arrow {
    transform: translateX(3px);
  }

  /* ========== PROCESS SECTION ========== */
  .process-section {
    padding: 120px 0;
    background: #ffffff;
  }

  @media (max-width: 768px) {
    .process-section {
      padding: 80px 0;
    }
  }

  .process-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  @media (max-width: 1024px) {
    .process-grid {
      grid-template-columns: 1fr;
      gap: 60px;
    }
  }

  .process-steps {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 40px;
  }

  .process-step {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    transition: all 0.3s ease;
  }

  .process-step:hover {
    transform: translateX(8px);
  }

  .process-step-number {
    width: 48px;
    height: 48px;
    background: rgba(37,150,190,0.08);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .process-step:hover .process-step-number {
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 100%);
  }

  .process-step-number span {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #2596be;
    transition: color 0.3s ease;
  }

  .process-step:hover .process-step-number span {
    color: #ffffff;
  }

  .process-step-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 6px;
  }

  .process-step-desc {
    color: #6b7280;
    font-size: 15px;
    line-height: 1.5;
    margin: 0;
  }

  .process-video-wrapper {
    background: #f4f4f5;
    border-radius: 24px;
    padding: 32px;
    position: relative;
    z-index: 1;
  }

  .process-video-placeholder {
    aspect-ratio: 16/9;
    background: #e4e4e7;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .process-play-btn {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 100%);
    border: none;
    border-radius: 50%;
    color: #ffffff;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(37,150,190,0.3);
    padding-left: 4px;
  }

  .process-play-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 40px rgba(37,150,190,0.5);
  }

  .process-visual-bg {
    position: absolute;
    bottom: -24px;
    right: -24px;
    width: 100%;
    height: 100%;
    background: rgba(37,150,190,0.06);
    border-radius: 24px;
    z-index: 0;
  }

  .process-visual {
    position: relative;
  }

  /* ========== TESTIMONIALS SECTION ========== */
  .testimonials-section {
    padding: 120px 0;
    background: #fafafa;
  }

  @media (max-width: 768px) {
    .testimonials-section {
      padding: 80px 0;
    }
  }

  .testimonials-swiper {
    padding-bottom: 60px !important;
  }

  .testimonials-swiper .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #d4d4d8;
    opacity: 1;
  }

  .testimonials-swiper .swiper-pagination-bullet-active {
    background: #2596be;
    width: 30px;
    border-radius: 5px;
  }

  .testimonial-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 40px 32px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    height: 100%;
    border: 1px solid #f4f4f5;
  }

  .testimonial-quote {
    font-size: 40px;
    color: rgba(37,150,190,0.15);
    margin-bottom: 24px;
  }

  .testimonial-text {
    color: #374151;
    font-size: 17px;
    line-height: 1.7;
    margin-bottom: 24px;
    font-style: italic;
  }

  .testimonial-stars {
    display: flex;
    gap: 4px;
    margin-bottom: 24px;
  }

  .testimonial-star {
    color: #fbbf24;
    font-size: 18px;
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 16px;
    border-top: 1px solid #f4f4f5;
    padding-top: 24px;
  }

  .testimonial-avatar {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
  }

  .testimonial-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 2px;
  }

  .testimonial-role {
    color: #6b7280;
    font-size: 14px;
    margin: 0;
  }

  /* ========== CTA SECTION ========== */
  .cta-section {
    position: relative;
    padding: 120px 0;
    background: linear-gradient(135deg, #2596be 0%, #1a7a9e 50%, #0d4f6b 100%);
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .cta-section {
      padding: 80px 0;
    }
  }

  .cta-pattern {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 50px 50px;
  }

  .cta-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }

  .cta-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 24px;
    line-height: 1.2;
  }

  .cta-description {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: rgba(255,255,255,0.8);
    margin-bottom: 48px;
    line-height: 1.6;
  }

  .cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-btn-primary {
    background: #ffffff;
    color: #2596be;
    border: none;
    padding: 16px 36px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }

  .cta-btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.25);
    background: #fafafa;
  }

  .cta-btn-outline {
    background: transparent;
    color: #ffffff;
    border: 2px solid rgba(255,255,255,0.4);
    padding: 16px 36px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .cta-btn-outline:hover {
    background: #ffffff;
    color: #2596be;
    border-color: #ffffff;
    transform: translateY(-3px);
  }
`;

export default Home;