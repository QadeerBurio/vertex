import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
    FaSearch, FaMapMarkerAlt, FaClock, FaDollarSign,
    FaBriefcase, FaUsers, FaLaptop, FaHeart,
    FaGraduationCap, FaPlane, FaCoffee,
    FaCheckCircle, FaTimes, FaArrowRight,
    FaUpload, FaFileAlt, FaStar, FaRocket
} from 'react-icons/fa';
import axios from 'axios';

const Careers = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);
    const [showApplicationForm, setShowApplicationForm] = useState(false);
    const [applicationData, setApplicationData] = useState({
        name: '',
        email: '',
        phone: '',
        coverLetter: '',
        portfolio: '',
        resume: null
    });
    const [applicationSubmitted, setApplicationSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [fileName, setFileName] = useState('');

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/careers');
            setJobs(response.data.data);
        } catch (error) {
            setJobs([
                {
                    _id: '1',
                    title: 'Senior React Developer',
                    department: 'Engineering',
                    location: 'Remote',
                    type: 'Full-time',
                    salary: { min: 3000, max: 5000 },
                    description: 'We are looking for an experienced React developer to join our team and build amazing web applications.',
                    requirements: [
                        '5+ years of experience in React development',
                        'Strong understanding of JavaScript/TypeScript',
                        'Experience with Node.js and Express',
                        'Knowledge of MongoDB or PostgreSQL',
                        'Excellent problem-solving skills'
                    ],
                    responsibilities: [
                        'Develop and maintain web applications',
                        'Collaborate with cross-functional teams',
                        'Write clean, maintainable code',
                        'Participate in code reviews',
                        'Mentor junior developers'
                    ]
                },
                {
                    _id: '2',
                    title: 'UI/UX Designer',
                    department: 'Design',
                    location: 'Islamabad',
                    type: 'Full-time',
                    salary: { min: 2000, max: 3500 },
                    description: 'Creative UI/UX designer needed to create stunning user experiences for our digital products.',
                    requirements: [
                        '3+ years of UI/UX design experience',
                        'Proficiency in Figma and Adobe Suite',
                        'Strong portfolio demonstrating design process',
                        'Understanding of user-centered design principles',
                        'Experience with prototyping tools'
                    ],
                    responsibilities: [
                        'Create user interfaces and experiences',
                        'Conduct user research and testing',
                        'Develop wireframes and prototypes',
                        'Collaborate with development team',
                        'Maintain design system'
                    ]
                },
                {
                    _id: '3',
                    title: 'Flutter Developer',
                    department: 'Engineering',
                    location: 'Remote',
                    type: 'Contract',
                    salary: { min: 2500, max: 4000 },
                    description: 'Looking for a skilled Flutter developer to build cross-platform mobile applications.',
                    requirements: [
                        '3+ years of Flutter development',
                        'Published apps on App Store and Play Store',
                        'Experience with state management',
                        'Knowledge of Firebase integration',
                        'Understanding of REST APIs'
                    ],
                    responsibilities: [
                        'Develop cross-platform mobile apps',
                        'Implement pixel-perfect UI designs',
                        'Optimize app performance',
                        'Write unit and integration tests',
                        'Deploy to app stores'
                    ]
                },
                {
                    _id: '4',
                    title: 'Digital Marketing Specialist',
                    department: 'Marketing',
                    location: 'Islamabad',
                    type: 'Full-time',
                    salary: { min: 1500, max: 2500 },
                    description: 'Join our marketing team to drive growth through innovative digital marketing strategies.',
                    requirements: [
                        '2+ years of digital marketing experience',
                        'Experience with SEO and SEM',
                        'Knowledge of Google Analytics and Ads',
                        'Social media marketing expertise',
                        'Content marketing skills'
                    ],
                    responsibilities: [
                        'Develop marketing strategies',
                        'Manage social media campaigns',
                        'Analyze marketing metrics',
                        'Create engaging content',
                        'Optimize conversion rates'
                    ]
                }
            ]);
        } finally {
            setLoading(false);
        }
    };

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleApply = (job) => {
        setSelectedJob(job);
        setShowApplicationForm(true);
        setApplicationSubmitted(false);
        setApplicationData({
            name: '',
            email: '',
            phone: '',
            coverLetter: '',
            portfolio: '',
            resume: null
        });
        setFileName('');
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setApplicationData({...applicationData, resume: file});
            setFileName(file.name);
        }
    };

    const handleApplicationSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        
        const formData = new FormData();
        formData.append('name', applicationData.name);
        formData.append('email', applicationData.email);
        formData.append('phone', applicationData.phone);
        formData.append('coverLetter', applicationData.coverLetter);
        formData.append('portfolio', applicationData.portfolio);
        if (applicationData.resume) {
            formData.append('resume', applicationData.resume);
        }

        try {
            await axios.post(
                `http://localhost:5000/api/careers/${selectedJob._id}/apply`,
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );
            setApplicationSubmitted(true);
        } catch (error) {
            console.error('Error submitting application:', error);
        } finally {
            setSubmitting(false);
        }
    };

    const perks = [
        { icon: FaLaptop, title: 'Remote Work', description: 'Work from anywhere in the world with flexible hours' },
        { icon: FaHeart, title: 'Health Benefits', description: 'Comprehensive health, dental, and vision insurance' },
        { icon: FaGraduationCap, title: 'Learning Budget', description: '$2,000 annual learning & development fund' },
        { icon: FaPlane, title: 'Paid Time Off', description: '25 days paid vacation plus public holidays' },
        { icon: FaCoffee, title: 'Team Events', description: 'Regular team building activities and retreats' },
        { icon: FaUsers, title: 'Great Culture', description: 'Inclusive, collaborative, and supportive environment' }
    ];

    if (loading) {
        return (
            <>
                <style>{careersStyles}</style>
                <div className="careers-loading">
                    <div className="careers-spinner"></div>
                    <p>Loading opportunities...</p>
                </div>
            </>
        );
    }

    return (
        <>
            <style>{careersStyles}</style>
            
            <Helmet>
                <title>Careers | VertexFlow Technologies</title>
                <meta name="description" content="Join VertexFlow Technologies - Explore career opportunities in software development, design, and marketing." />
            </Helmet>

            {/* Hero Section */}
            <section className="careers-hero">
                <div className="careers-hero-bg"></div>
                <div className="careers-hero-content">
                    <span className="careers-hero-badge" data-aos="fade-down">
                        <FaStar /> We're Hiring!
                    </span>
                    <h1 className="careers-hero-title" data-aos="fade-up">
                        Join Our <span className="careers-hero-highlight">Team</span>
                    </h1>
                    <p className="careers-hero-text" data-aos="fade-up" data-aos-delay="100">
                        Be part of an innovative team building the future of technology.
                        We're looking for passionate individuals to join our growing family.
                    </p>
                    <div className="careers-hero-stats" data-aos="fade-up" data-aos-delay="200">
                        <div className="careers-stat">
                            <span className="careers-stat-number">{jobs.length}+</span>
                            <span className="careers-stat-label">Open Positions</span>
                        </div>
                        <div className="careers-stat-divider"></div>
                        <div className="careers-stat">
                            <span className="careers-stat-number">30+</span>
                            <span className="careers-stat-label">Team Members</span>
                        </div>
                        <div className="careers-stat-divider"></div>
                        <div className="careers-stat">
                            <span className="careers-stat-number">4.9</span>
                            <span className="careers-stat-label">Glassdoor Rating</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Perks Section */}
            <section className="careers-perks">
                <div className="vertex-container">
                    <div className="careers-section-header" data-aos="fade-up">
                        <span className="careers-section-badge">WHY VERTEXFLOW</span>
                        <h2 className="careers-section-title">
                            Perks & <span className="gradient-text">Benefits</span>
                        </h2>
                        <p className="careers-section-desc">
                            We take care of our team with industry-leading benefits
                        </p>
                    </div>

                    <div className="careers-perks-grid">
                        {perks.map((perk, index) => (
                            <div
                                key={index}
                                className="careers-perk-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="careers-perk-icon-wrap">
                                    <perk.icon className="careers-perk-icon" />
                                </div>
                                <h3 className="careers-perk-title">{perk.title}</h3>
                                <p className="careers-perk-desc">{perk.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="careers-positions">
                <div className="vertex-container">
                    <div className="careers-section-header" data-aos="fade-up">
                        <span className="careers-section-badge">OPEN POSITIONS</span>
                        <h2 className="careers-section-title">
                            Current <span className="gradient-text">Openings</span>
                        </h2>
                        <p className="careers-section-desc">
                            Find your next career opportunity
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="careers-search-wrap" data-aos="fade-up">
                        <div className="careers-search">
                            <FaSearch className="careers-search-icon" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search by title, department, or location..."
                                className="careers-search-input"
                            />
                        </div>
                    </div>

                    {/* Job Listings */}
                    <div className="careers-jobs-list">
                        {filteredJobs.length === 0 ? (
                            <div className="careers-no-jobs">
                                <FaSearch className="careers-no-jobs-icon" />
                                <h3>No positions found</h3>
                                <p>Try adjusting your search criteria</p>
                            </div>
                        ) : (
                            filteredJobs.map((job, index) => (
                                <div
                                    key={job._id}
                                    className="careers-job-card"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="careers-job-main">
                                        <div className="careers-job-header">
                                            <h3 className="careers-job-title">{job.title}</h3>
                                            <span className="careers-job-type">{job.type}</span>
                                        </div>
                                        
                                        <div className="careers-job-meta">
                                            <span className="careers-job-meta-item">
                                                <FaBriefcase /> {job.department}
                                            </span>
                                            <span className="careers-job-meta-item">
                                                <FaMapMarkerAlt /> {job.location}
                                            </span>
                                            <span className="careers-job-meta-item">
                                                <FaDollarSign /> ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()}
                                            </span>
                                        </div>
                                        
                                        <p className="careers-job-desc">{job.description}</p>
                                        
                                        <div className="careers-job-details">
                                            <div className="careers-job-detail-col">
                                                <h4 className="careers-job-detail-title">Requirements</h4>
                                                <ul className="careers-job-detail-list">
                                                    {job.requirements.slice(0, 3).map((req, idx) => (
                                                        <li key={idx}>
                                                            <FaCheckCircle className="careers-list-icon" />
                                                            {req}
                                                        </li>
                                                    ))}
                                                    {job.requirements.length > 3 && (
                                                        <li className="careers-list-more">
                                                            +{job.requirements.length - 3} more requirements
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                            <div className="careers-job-detail-col">
                                                <h4 className="careers-job-detail-title">Responsibilities</h4>
                                                <ul className="careers-job-detail-list">
                                                    {job.responsibilities.slice(0, 3).map((resp, idx) => (
                                                        <li key={idx}>
                                                            <FaCheckCircle className="careers-list-icon" />
                                                            {resp}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="careers-job-action">
                                        <button
                                            onClick={() => handleApply(job)}
                                            className="careers-apply-btn"
                                        >
                                            Apply Now <FaArrowRight />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Application Form Modal */}
            {showApplicationForm && selectedJob && (
                <div className="careers-modal-overlay" onClick={() => setShowApplicationForm(false)}>
                    <div className="careers-modal" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setShowApplicationForm(false)}
                            className="careers-modal-close"
                        >
                            <FaTimes />
                        </button>
                        
                        <div className="careers-modal-header">
                            <div className="careers-modal-badge">
                                <FaRocket /> Application
                            </div>
                            <h2 className="careers-modal-title">Apply for {selectedJob.title}</h2>
                            <div className="careers-modal-meta">
                                <span><FaBriefcase /> {selectedJob.department}</span>
                                <span><FaMapMarkerAlt /> {selectedJob.location}</span>
                                <span><FaClock /> {selectedJob.type}</span>
                            </div>
                        </div>

                        <div className="careers-modal-body">
                            {applicationSubmitted ? (
                                <div className="careers-success">
                                    <div className="careers-success-icon">
                                        <FaCheckCircle />
                                    </div>
                                    <h3>Application Submitted!</h3>
                                    <p>Thank you for your interest. We'll review your application and get back to you within 5-7 business days.</p>
                                    <button
                                        onClick={() => setShowApplicationForm(false)}
                                        className="careers-success-btn"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleApplicationSubmit} className="careers-form">
                                    <div className="careers-form-row">
                                        <div className="careers-form-group">
                                            <label>Full Name *</label>
                                            <input
                                                type="text"
                                                required
                                                value={applicationData.name}
                                                onChange={(e) => setApplicationData({...applicationData, name: e.target.value})}
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="careers-form-row careers-form-row-2">
                                        <div className="careers-form-group">
                                            <label>Email Address *</label>
                                            <input
                                                type="email"
                                                required
                                                value={applicationData.email}
                                                onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div className="careers-form-group">
                                            <label>Phone Number</label>
                                            <input
                                                type="tel"
                                                value={applicationData.phone}
                                                onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                                                placeholder="+92 300 1234567"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="careers-form-group">
                                        <label>Resume *</label>
                                        <div className="careers-file-upload">
                                            <input
                                                type="file"
                                                required
                                                onChange={handleFileChange}
                                                accept=".pdf,.doc,.docx"
                                                id="resume-upload"
                                            />
                                            <label htmlFor="resume-upload" className="careers-file-label">
                                                {fileName ? (
                                                    <>
                                                        <FaFileAlt /> {fileName}
                                                    </>
                                                ) : (
                                                    <>
                                                        <FaUpload /> Click to upload resume (PDF, DOC, DOCX)
                                                    </>
                                                )}
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <div className="careers-form-group">
                                        <label>Cover Letter</label>
                                        <textarea
                                            rows="4"
                                            value={applicationData.coverLetter}
                                            onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                                            placeholder="Tell us why you'd be a great fit for this role..."
                                        />
                                    </div>
                                    
                                    <div className="careers-form-group">
                                        <label>Portfolio URL</label>
                                        <input
                                            type="url"
                                            value={applicationData.portfolio}
                                            onChange={(e) => setApplicationData({...applicationData, portfolio: e.target.value})}
                                            placeholder="https://yourportfolio.com"
                                        />
                                    </div>
                                    
                                    <div className="careers-form-actions">
                                        <button type="submit" className="careers-submit-btn" disabled={submitting}>
                                            {submitting ? 'Submitting...' : 'Submit Application'}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowApplicationForm(false)}
                                            className="careers-cancel-btn"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

// ============================================
// COMPLETE CUSTOM CSS FOR CAREERS PAGE
// ============================================
const careersStyles = `
  /* Loading */
  .careers-loading {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fafafa;
    gap: 20px;
  }

  .careers-loading p {
    color: #6b7280;
    font-size: 16px;
  }

  .careers-spinner {
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
  .careers-hero {
    position: relative;
    background: linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e);
    padding: 160px 0 100px;
    overflow: hidden;
  }

  .careers-hero-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 30% 50%, rgba(37,150,190,0.1) 0%, transparent 50%);
  }

  .careers-hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .careers-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    background: rgba(16,185,129,0.15);
    color: #34d399;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.05em;
    margin-bottom: 24px;
    border: 1px solid rgba(16,185,129,0.3);
  }

  .careers-hero-badge svg {
    color: #fbbf24;
  }

  .careers-hero-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 20px;
    line-height: 1.15;
  }

  .careers-hero-highlight {
    background: linear-gradient(135deg, #2596be, #3aacd8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .careers-hero-text {
    font-size: 1.15rem;
    color: rgba(255,255,255,0.8);
    margin-bottom: 48px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.7;
  }

  .careers-hero-stats {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }

  .careers-stat {
    text-align: center;
  }

  .careers-stat-number {
    display: block;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 4px;
  }

  .careers-stat-label {
    font-size: 13px;
    color: rgba(255,255,255,0.6);
  }

  .careers-stat-divider {
    width: 1px;
    height: 40px;
    background: rgba(255,255,255,0.15);
  }

  @media (max-width: 768px) {
    .careers-hero {
      padding: 120px 0 60px;
    }
    .careers-hero-stats {
      gap: 20px;
      flex-wrap: wrap;
    }
  }

  /* ========== COMMON ========== */
  .vertex-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .careers-section-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .careers-section-badge {
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

  .careers-section-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 16px;
  }

  .gradient-text {
    background: linear-gradient(135deg, #2596be, #3aacd8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .careers-section-desc {
    color: #6b7280;
    font-size: 1.1rem;
    max-width: 500px;
    margin: 0 auto;
  }

  /* ========== PERKS SECTION ========== */
  .careers-perks {
    padding: 120px 0;
    background: #ffffff;
  }

  .careers-perks-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  @media (max-width: 1024px) {
    .careers-perks-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .careers-perks-grid {
      grid-template-columns: 1fr;
    }
  }

  .careers-perk-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 36px 28px;
    text-align: center;
    border: 1px solid #f4f4f5;
    transition: all 0.3s ease;
  }

  .careers-perk-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.08);
    border-color: rgba(37,150,190,0.2);
  }

  .careers-perk-icon-wrap {
    width: 64px;
    height: 64px;
    background: rgba(37,150,190,0.08);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    transition: all 0.3s ease;
  }

  .careers-perk-card:hover .careers-perk-icon-wrap {
    background: linear-gradient(135deg, #2596be, #1a7a9e);
  }

  .careers-perk-icon {
    font-size: 28px;
    color: #2596be;
    transition: color 0.3s ease;
  }

  .careers-perk-card:hover .careers-perk-icon {
    color: #ffffff;
  }

  .careers-perk-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 10px;
  }

  .careers-perk-desc {
    color: #6b7280;
    font-size: 15px;
    line-height: 1.5;
    margin: 0;
  }

  @media (max-width: 768px) {
    .careers-perks {
      padding: 80px 0;
    }
  }

  /* ========== POSITIONS SECTION ========== */
  .careers-positions {
    padding: 120px 0;
    background: #fafafa;
  }

  .careers-search-wrap {
    max-width: 600px;
    margin: 0 auto 48px;
  }

  .careers-search {
    position: relative;
  }

  .careers-search-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    font-size: 20px;
  }

  .careers-search-input {
    width: 100%;
    padding: 16px 20px 16px 56px;
    border: 2px solid #e4e4e7;
    border-radius: 50px;
    font-size: 15px;
    color: #1a1a1a;
    outline: none;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
    background: #ffffff;
  }

  .careers-search-input:focus {
    border-color: #2596be;
    box-shadow: 0 0 0 4px rgba(37,150,190,0.08);
  }

  .careers-search-input::placeholder {
    color: #9ca3af;
  }

  .careers-no-jobs {
    text-align: center;
    padding: 80px 0;
  }

  .careers-no-jobs-icon {
    font-size: 64px;
    color: #d4d4d8;
    margin-bottom: 20px;
  }

  .careers-no-jobs h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 24px;
    color: #374151;
    margin-bottom: 8px;
  }

  .careers-no-jobs p {
    color: #9ca3af;
  }

  .careers-jobs-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .careers-job-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 36px;
    border: 1px solid #f4f4f5;
    transition: all 0.3s ease;
  }

  .careers-job-card:hover {
    box-shadow: 0 8px 30px rgba(0,0,0,0.06);
    border-color: rgba(37,150,190,0.2);
  }

  .careers-job-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .careers-job-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #0a0a0a;
  }

  .careers-job-type {
    padding: 6px 16px;
    background: #f0f9fc;
    color: #2596be;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
  }

  .careers-job-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
  }

  .careers-job-meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #6b7280;
    font-size: 14px;
    font-weight: 500;
  }

  .careers-job-meta-item svg {
    color: #2596be;
    font-size: 14px;
  }

  .careers-job-desc {
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 24px;
    font-size: 15px;
  }

  .careers-job-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-bottom: 28px;
  }

  @media (max-width: 640px) {
    .careers-job-details {
      grid-template-columns: 1fr;
    }
    .careers-job-card {
      padding: 24px;
    }
  }

  .careers-job-detail-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 12px;
  }

  .careers-job-detail-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .careers-job-detail-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: #374151;
    font-size: 14px;
    line-height: 1.5;
  }

  .careers-list-icon {
    color: #10b981;
    font-size: 14px;
    margin-top: 3px;
    flex-shrink: 0;
  }

  .careers-list-more {
    color: #2596be !important;
    font-weight: 600;
    padding-left: 24px;
  }

  .careers-job-action {
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid #f4f4f5;
    padding-top: 24px;
  }

  .careers-apply-btn {
    padding: 14px 32px;
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
    box-shadow: 0 4px 15px rgba(37,150,190,0.3);
  }

  .careers-apply-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(37,150,190,0.5);
  }

  @media (max-width: 768px) {
    .careers-positions {
      padding: 80px 0;
    }
  }

  /* ========== MODAL ========== */
  .careers-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.7);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    backdrop-filter: blur(5px);
  }

  .careers-modal {
    background: #ffffff;
    border-radius: 24px;
    max-width: 650px;
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

  .careers-modal-close {
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
    cursor: pointer;
    z-index: 10;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    font-size: 16px;
    color: #374151;
    transition: all 0.3s ease;
  }

  .careers-modal-close:hover {
    background: #ef4444;
    color: #ffffff;
    transform: rotate(90deg);
  }

  .careers-modal-header {
    padding: 40px 40px 0;
    border-bottom: 1px solid #f4f4f5;
    padding-bottom: 28px;
  }

  .careers-modal-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    background: #f0f9fc;
    color: #2596be;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .careers-modal-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 16px;
  }

  .careers-modal-meta {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .careers-modal-meta span {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #6b7280;
    font-size: 14px;
  }

  .careers-modal-body {
    padding: 32px 40px 40px;
  }

  @media (max-width: 640px) {
    .careers-modal-header,
    .careers-modal-body {
      padding-left: 24px;
      padding-right: 24px;
    }
  }

  /* Success State */
  .careers-success {
    text-align: center;
    padding: 40px 0;
  }

  .careers-success-icon {
    width: 80px;
    height: 80px;
    background: #d1fae5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    font-size: 40px;
    color: #10b981;
  }

  .careers-success h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 24px;
    color: #0a0a0a;
    margin-bottom: 12px;
  }

  .careers-success p {
    color: #6b7280;
    margin-bottom: 28px;
  }

  .careers-success-btn {
    padding: 14px 36px;
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }

  /* Form */
  .careers-form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .careers-form-row {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .careers-form-row-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  @media (max-width: 480px) {
    .careers-form-row-2 {
      grid-template-columns: 1fr;
    }
  }

  .careers-form-group label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #374151;
    margin-bottom: 8px;
  }

  .careers-form-group input,
  .careers-form-group textarea {
    width: 100%;
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

  .careers-form-group input:focus,
  .careers-form-group textarea:focus {
    border-color: #2596be;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(37,150,190,0.08);
  }

  .careers-form-group textarea {
    resize: vertical;
    min-height: 100px;
  }

  .careers-file-upload {
    position: relative;
  }

  .careers-file-upload input[type="file"] {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .careers-file-label {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 16px 20px;
    border: 2px dashed #d4d4d8;
    border-radius: 12px;
    color: #6b7280;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: #fafafa;
  }

  .careers-file-label:hover {
    border-color: #2596be;
    color: #2596be;
    background: #f0f9fc;
  }

  .careers-form-actions {
    display: flex;
    gap: 12px;
    padding-top: 8px;
  }

  .careers-submit-btn {
    flex: 1;
    padding: 16px;
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
    box-shadow: 0 4px 15px rgba(37,150,190,0.3);
  }

  .careers-submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(37,150,190,0.5);
  }

  .careers-submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  .careers-cancel-btn {
    padding: 16px 32px;
    background: transparent;
    color: #6b7280;
    border: 2px solid #e4e4e7;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
  }

  .careers-cancel-btn:hover {
    border-color: #ef4444;
    color: #ef4444;
  }
`;

export default Careers;