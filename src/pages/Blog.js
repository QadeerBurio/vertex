import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
    FaSearch, FaCalendar, FaUser, FaClock, FaArrowRight,
    FaTags, FaBookOpen, FaNewspaper, FaFire,
    FaChevronLeft, FaChevronRight, FaRss
} from 'react-icons/fa';
import axios from 'axios';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/blog');
            setBlogs(response.data.data);
        } catch (error) {
            setBlogs([
                {
                    _id: '1',
                    title: 'The Future of AI in Business Automation',
                    slug: 'future-of-ai-business-automation',
                    excerpt: 'Discover how artificial intelligence is transforming business operations and what it means for the future of work.',
                    category: 'Technology',
                    tags: ['AI', 'Automation', 'Business'],
                    author: 'Ahmed Khan',
                    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600',
                    readTime: 5,
                    featured: true,
                    createdAt: '2024-01-15'
                },
                {
                    _id: '2',
                    title: 'Why Your Business Needs a Mobile App in 2024',
                    slug: 'business-needs-mobile-app-2024',
                    excerpt: 'Mobile apps have become essential for business growth. Learn why your business needs one.',
                    category: 'Business',
                    tags: ['Mobile', 'Business', 'Technology'],
                    author: 'Sara Ali',
                    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600',
                    readTime: 4,
                    featured: false,
                    createdAt: '2024-01-10'
                },
                {
                    _id: '3',
                    title: 'React vs Vue vs Angular: Which Framework to Choose?',
                    slug: 'react-vs-vue-vs-angular',
                    excerpt: 'A comprehensive comparison of popular frontend frameworks to help you make the right choice.',
                    category: 'Development',
                    tags: ['React', 'Vue', 'Angular', 'JavaScript'],
                    author: 'Usman Ahmed',
                    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600',
                    readTime: 8,
                    featured: false,
                    createdAt: '2024-01-05'
                },
                {
                    _id: '4',
                    title: 'SEO Strategies That Actually Work in 2024',
                    slug: 'seo-strategies-2024',
                    excerpt: 'Stay ahead of the competition with the latest SEO techniques and best practices.',
                    category: 'Marketing',
                    tags: ['SEO', 'Marketing', 'Digital'],
                    author: 'Fatima Hassan',
                    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5f70d?w=600',
                    readTime: 6,
                    featured: false,
                    createdAt: '2023-12-28'
                },
                {
                    _id: '5',
                    title: 'Building Scalable SaaS Applications from Scratch',
                    slug: 'building-scalable-saas-applications',
                    excerpt: 'Best practices and architecture patterns for developing software-as-a-service platforms.',
                    category: 'Development',
                    tags: ['SaaS', 'Cloud', 'Architecture'],
                    author: 'Ahmed Khan',
                    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600',
                    readTime: 7,
                    featured: true,
                    createdAt: '2023-12-20'
                },
                {
                    _id: '6',
                    title: 'The Complete Guide to UI/UX Design Principles',
                    slug: 'ui-ux-design-principles-guide',
                    excerpt: 'Master the fundamentals of user interface and experience design for better products.',
                    category: 'Design',
                    tags: ['UI', 'UX', 'Design'],
                    author: 'Sara Ali',
                    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600',
                    readTime: 10,
                    featured: false,
                    createdAt: '2023-12-15'
                },
                {
                    _id: '7',
                    title: 'Cloud Computing Trends to Watch in 2024',
                    slug: 'cloud-computing-trends-2024',
                    excerpt: 'Explore the emerging trends in cloud computing that will shape the tech industry.',
                    category: 'Technology',
                    tags: ['Cloud', 'Technology', 'Trends'],
                    author: 'Usman Ahmed',
                    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600',
                    readTime: 5,
                    featured: false,
                    createdAt: '2023-12-10'
                },
                {
                    _id: '8',
                    title: 'Digital Marketing Strategies for Startups',
                    slug: 'digital-marketing-startups',
                    excerpt: 'Effective marketing strategies tailored for startups with limited budgets.',
                    category: 'Marketing',
                    tags: ['Marketing', 'Startup', 'Growth'],
                    author: 'Fatima Hassan',
                    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
                    readTime: 6,
                    featured: false,
                    createdAt: '2023-12-05'
                },
                {
                    _id: '9',
                    title: 'Getting Started with Machine Learning',
                    slug: 'getting-started-machine-learning',
                    excerpt: 'A beginner-friendly guide to understanding and implementing machine learning.',
                    category: 'Technology',
                    tags: ['AI', 'Machine Learning', 'Python'],
                    author: 'Ahmed Khan',
                    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600',
                    readTime: 12,
                    featured: false,
                    createdAt: '2023-11-28'
                }
            ]);
        } finally {
            setLoading(false);
        }
    };

    const categories = ['all', 'Technology', 'Development', 'Business', 'Marketing', 'Design'];
    
    const categoryCounts = {};
    categories.forEach(cat => {
        categoryCounts[cat] = cat === 'all' ? blogs.length : blogs.filter(b => b.category === cat).length;
    });

    const filteredBlogs = blogs.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = activeCategory === 'all' || blog.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const featuredBlog = filteredBlogs.find(b => b.featured);

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const regularBlogs = filteredBlogs.filter(b => !b.featured);
    const currentBlogs = currentPage === 1 && featuredBlog 
        ? [featuredBlog, ...regularBlogs.slice(0, blogsPerPage - 1)]
        : regularBlogs.slice(indexOfFirstBlog - (featuredBlog && currentPage === 1 ? 1 : 0), indexOfLastBlog - (featuredBlog && currentPage === 1 ? 1 : 0));
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <>
                <style>{blogStyles}</style>
                <div className="blog-loading">
                    <div className="blog-spinner"></div>
                    <p>Loading articles...</p>
                </div>
            </>
        );
    }

    return (
        <>
            <style>{blogStyles}</style>
            
            <Helmet>
                <title>Blog | VertexFlow Technologies</title>
                <meta name="description" content="Read our latest articles on technology, development, design, and digital marketing." />
            </Helmet>

            {/* Hero Section */}
            <section className="blog-hero">
                <div className="blog-hero-bg"></div>
                <div className="blog-hero-content">
                    <span className="blog-hero-badge" data-aos="fade-down">
                        <FaBookOpen /> Blog
                    </span>
                    <h1 className="blog-hero-title" data-aos="fade-up">
                        Insights & <span className="blog-hero-highlight">Articles</span>
                    </h1>
                    <p className="blog-hero-text" data-aos="fade-up" data-aos-delay="100">
                        Expert insights, tutorials, and updates from the world of technology,
                        development, and digital innovation.
                    </p>
                </div>
            </section>

            {/* Search and Filter */}
            <section className="blog-filter-section">
                <div className="vertex-container">
                    <div className="blog-filter-wrapper">
                        <div className="blog-search">
                            <FaSearch className="blog-search-icon" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                                placeholder="Search articles by title, tag, or keyword..."
                                className="blog-search-input"
                            />
                        </div>
                        <div className="blog-categories">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => { setActiveCategory(category); setCurrentPage(1); }}
                                    className={`blog-category-btn ${activeCategory === category ? 'blog-category-active' : ''}`}
                                >
                                    {category === 'all' ? 'All Posts' : category}
                                    <span className="blog-category-count">({categoryCounts[category]})</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="blog-grid-section">
                <div className="vertex-container">
                    {currentBlogs.length === 0 ? (
                        <div className="blog-empty">
                            <FaSearch className="blog-empty-icon" />
                            <h3>No articles found</h3>
                            <p>Try adjusting your search or filter criteria</p>
                        </div>
                    ) : (
                        <>
                            <div className="blog-grid">
                                {currentBlogs.map((blog, index) => (
                                    <article
                                        key={blog._id}
                                        className={`blog-card ${blog.featured ? 'blog-card-featured' : ''}`}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <Link to={`/blog/${blog.slug}`} className="blog-card-image-wrap">
                                            <img
                                                src={blog.image}
                                                alt={blog.title}
                                                className="blog-card-image"
                                            />
                                            {blog.featured && (
                                                <div className="blog-featured-badge">
                                                    <FaFire /> Featured
                                                </div>
                                            )}
                                            <div className="blog-card-category">
                                                {blog.category}
                                            </div>
                                        </Link>

                                        <div className="blog-card-body">
                                            <div className="blog-card-meta">
                                                <span className="blog-meta-item">
                                                    <FaUser />
                                                    {blog.author}
                                                </span>
                                                <span className="blog-meta-item">
                                                    <FaCalendar />
                                                    {formatDate(blog.createdAt)}
                                                </span>
                                                <span className="blog-meta-item">
                                                    <FaClock />
                                                    {blog.readTime} min read
                                                </span>
                                            </div>

                                            <Link to={`/blog/${blog.slug}`}>
                                                <h2 className="blog-card-title">{blog.title}</h2>
                                            </Link>

                                            <p className="blog-card-excerpt">{blog.excerpt}</p>

                                            <div className="blog-card-tags">
                                                {blog.tags.map((tag, idx) => (
                                                    <span key={idx} className="blog-tag">
                                                        <FaTags />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <Link to={`/blog/${blog.slug}`} className="blog-read-more">
                                                Read Article <FaArrowRight />
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="blog-pagination">
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="blog-page-btn"
                                    >
                                        <FaChevronLeft />
                                    </button>
                                    
                                    {[...Array(totalPages)].map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentPage(index + 1)}
                                            className={`blog-page-btn ${currentPage === index + 1 ? 'blog-page-active' : ''}`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                    
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="blog-page-btn"
                                    >
                                        <FaChevronRight />
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="blog-newsletter">
                <div className="blog-newsletter-bg"></div>
                <div className="vertex-container">
                    <div className="blog-newsletter-content" data-aos="fade-up">
                        <div className="blog-newsletter-icon">
                            <FaRss />
                        </div>
                        <h2 className="blog-newsletter-title">Stay Updated</h2>
                        <p className="blog-newsletter-text">
                            Get the latest tech insights, tutorials, and updates delivered straight to your inbox.
                            No spam, unsubscribe anytime.
                        </p>
                        <div className="blog-newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="blog-newsletter-input"
                            />
                            <button className="blog-newsletter-btn">
                                Subscribe <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

// ============================================
// COMPLETE CUSTOM CSS FOR BLOG PAGE
// ============================================
const blogStyles = `
  /* Loading */
  .blog-loading {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fafafa;
    gap: 20px;
  }

  .blog-loading p {
    color: #6b7280;
    font-size: 16px;
  }

  .blog-spinner {
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
  .blog-hero {
    position: relative;
    background: linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e);
    padding: 160px 0 100px;
    overflow: hidden;
  }

  .blog-hero-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 30% 50%, rgba(37,150,190,0.08) 0%, transparent 50%);
  }

  .blog-hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .blog-hero-badge {
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

  .blog-hero-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 20px;
    line-height: 1.15;
  }

  .blog-hero-highlight {
    background: linear-gradient(135deg, #2596be, #3aacd8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .blog-hero-text {
    font-size: 1.15rem;
    color: rgba(255,255,255,0.8);
    max-width: 550px;
    margin: 0 auto;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    .blog-hero {
      padding: 120px 0 60px;
    }
  }

  /* ========== COMMON ========== */
  .vertex-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* ========== FILTER SECTION ========== */
  .blog-filter-section {
    padding: 32px 0;
    background: #ffffff;
    border-bottom: 1px solid #f4f4f5;
    position: sticky;
    top: 80px;
    z-index: 100;
  }

  .blog-filter-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .blog-search {
    position: relative;
    max-width: 550px;
    margin: 0 auto;
    width: 100%;
  }

  .blog-search-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    font-size: 18px;
  }

  .blog-search-input {
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

  .blog-search-input:focus {
    border-color: #2596be;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(37,150,190,0.08);
  }

  .blog-search-input::placeholder {
    color: #9ca3af;
  }

  .blog-categories {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .blog-category-btn {
    padding: 10px 22px;
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

  .blog-category-btn:hover {
    border-color: #2596be;
    color: #2596be;
    background: #f0f9fc;
  }

  .blog-category-active {
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    border-color: #2596be;
    box-shadow: 0 4px 15px rgba(37,150,190,0.3);
  }

  .blog-category-active:hover {
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
  }

  .blog-category-count {
    font-size: 12px;
    opacity: 0.8;
  }

  /* ========== BLOG GRID ========== */
  .blog-grid-section {
    padding: 60px 0 100px;
    background: #fafafa;
  }

  .blog-empty {
    text-align: center;
    padding: 80px 0;
  }

  .blog-empty-icon {
    font-size: 64px;
    color: #d4d4d8;
    margin-bottom: 20px;
  }

  .blog-empty h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 24px;
    color: #374151;
    margin-bottom: 8px;
  }

  .blog-empty p {
    color: #9ca3af;
  }

  .blog-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  @media (max-width: 1200px) {
    .blog-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .blog-grid {
      grid-template-columns: 1fr;
    }
  }

  /* Blog Card */
  .blog-card {
    background: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    border: 1px solid #f4f4f5;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .blog-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  }

  .blog-card-featured {
    border: 2px solid rgba(37,150,190,0.3);
    position: relative;
  }

  .blog-card-image-wrap {
    position: relative;
    overflow: hidden;
    height: 220px;
    display: block;
    text-decoration: none;
  }

  .blog-card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .blog-card:hover .blog-card-image {
    transform: scale(1.08);
  }

  .blog-featured-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 6px 14px;
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: #ffffff;
    border-radius: 50px;
    font-size: 11px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 5px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    box-shadow: 0 4px 12px rgba(245,158,11,0.3);
  }

  .blog-card-category {
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 6px 16px;
    background: rgba(37,150,190,0.9);
    color: #ffffff;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 600;
    backdrop-filter: blur(10px);
  }

  .blog-card-body {
    padding: 28px 24px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .blog-card-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 16px;
  }

  .blog-meta-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: #9ca3af;
    font-weight: 500;
  }

  .blog-meta-item svg {
    color: #2596be;
    font-size: 12px;
  }

  .blog-card-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 19px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 12px;
    line-height: 1.4;
    transition: color 0.3s ease;
    text-decoration: none;
  }

  .blog-card-title:hover {
    color: #2596be;
  }

  .blog-card-excerpt {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 20px;
    flex: 1;
  }

  .blog-card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
  }

  .blog-tag {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 10px;
    background: #f4f4f5;
    color: #6b7280;
    border-radius: 50px;
    font-size: 11px;
    font-weight: 500;
  }

  .blog-tag svg {
    font-size: 10px;
    color: #2596be;
  }

  .blog-read-more {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #2596be;
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    transition: gap 0.3s ease;
    margin-top: auto;
  }

  .blog-read-more:hover {
    gap: 12px;
  }

  /* Pagination */
  .blog-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 48px;
  }

  .blog-page-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid #e4e4e7;
    background: #ffffff;
    color: #6b7280;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
  }

  .blog-page-btn:hover:not(:disabled) {
    border-color: #2596be;
    color: #2596be;
  }

  .blog-page-active {
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    border-color: #2596be;
    box-shadow: 0 4px 12px rgba(37,150,190,0.3);
  }

  .blog-page-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* ========== NEWSLETTER ========== */
  .blog-newsletter {
    position: relative;
    padding: 120px 0;
    background: linear-gradient(135deg, #2596be, #1a7a9e, #0d4f6b);
    overflow: hidden;
  }

  .blog-newsletter-bg {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 50px 50px;
  }

  .blog-newsletter-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 550px;
    margin: 0 auto;
  }

  .blog-newsletter-icon {
    width: 72px;
    height: 72px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 28px;
    font-size: 32px;
    color: #ffffff;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.3);
  }

  .blog-newsletter-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 16px;
  }

  .blog-newsletter-text {
    font-size: 1.1rem;
    color: rgba(255,255,255,0.85);
    margin-bottom: 36px;
    line-height: 1.6;
  }

  .blog-newsletter-form {
    display: flex;
    gap: 12px;
    max-width: 480px;
    margin: 0 auto;
  }

  @media (max-width: 540px) {
    .blog-newsletter-form {
      flex-direction: column;
    }
  }

  .blog-newsletter-input {
    flex: 1;
    padding: 16px 24px;
    border-radius: 50px;
    border: 2px solid rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.1);
    color: #ffffff;
    font-size: 15px;
    outline: none;
    font-family: 'Inter', sans-serif;
    transition: all 0.3s ease;
  }

  .blog-newsletter-input::placeholder {
    color: rgba(255,255,255,0.5);
  }

  .blog-newsletter-input:focus {
    background: rgba(255,255,255,0.15);
    border-color: #ffffff;
    box-shadow: 0 0 0 4px rgba(255,255,255,0.1);
  }

  .blog-newsletter-btn {
    padding: 16px 32px;
    background: #ffffff;
    color: #2596be;
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
    white-space: nowrap;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }

  .blog-newsletter-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    background: #fafafa;
  }

  @media (max-width: 768px) {
    .blog-newsletter {
      padding: 80px 0;
    }
    .blog-grid-section {
      padding: 40px 0 80px;
    }
  }
`;

export default Blog;