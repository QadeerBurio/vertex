import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
    FaCalendar, FaUser, FaClock, FaArrowLeft,
    FaFacebook, FaTwitter, FaLinkedin, FaLink,
    FaTags, FaShare, FaEye, FaBookmark, FaHeart,
    FaChevronRight, FaCopy, FaCheck
} from 'react-icons/fa';
import axios from 'axios';

const BlogPost = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);

    useEffect(() => {
        fetchBlogPost();
        window.scrollTo(0, 0);
    }, [slug]);

    const fetchBlogPost = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/blog/${slug}`);
            setBlog(response.data.data);
            
            const relatedResponse = await axios.get(`http://localhost:5000/api/blog/${slug}/related`);
            setRelatedPosts(relatedResponse.data.data);
        } catch (error) {
            setBlog({
                title: 'The Future of AI in Business Automation',
                content: `
                    <h2>Introduction</h2>
                    <p>Artificial Intelligence is revolutionizing the way businesses operate. From automated customer service to intelligent data analysis, AI is becoming an integral part of modern business operations. The rapid advancement of AI technologies has opened up new possibilities for companies of all sizes.</p>
                    
                    <blockquote>
                        <p>"AI is not just a technology trend; it's a fundamental shift in how businesses operate and deliver value to their customers."</p>
                    </blockquote>
                    
                    <h2>The Current State of AI in Business</h2>
                    <p>Today, businesses are leveraging AI in various ways to gain competitive advantages:</p>
                    <ul>
                        <li><strong>Customer Service Chatbots:</strong> 24/7 automated support handling common queries</li>
                        <li><strong>Predictive Analytics:</strong> Forecasting trends and customer behavior</li>
                        <li><strong>Process Automation:</strong> Streamlining repetitive tasks and workflows</li>
                        <li><strong>Personalized Marketing:</strong> Tailored recommendations and content</li>
                        <li><strong>Supply Chain Optimization:</strong> Intelligent inventory and logistics management</li>
                    </ul>
                    
                    <figure>
                        <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800" alt="AI in Business" />
                        <figcaption>AI technology is transforming modern business operations</figcaption>
                    </figure>
                    
                    <h2>Key Benefits of AI Implementation</h2>
                    <p>Implementing AI automation offers numerous advantages that can transform your business:</p>
                    <ol>
                        <li><strong>Increased Efficiency:</strong> Automate routine tasks and free up human resources</li>
                        <li><strong>Cost Reduction:</strong> Lower operational costs through intelligent automation</li>
                        <li><strong>Better Decision Making:</strong> Data-driven insights for strategic planning</li>
                        <li><strong>Enhanced Customer Experience:</strong> Personalized interactions at scale</li>
                        <li><strong>Competitive Advantage:</strong> Stay ahead with cutting-edge technology</li>
                    </ol>
                    
                    <h2>Implementation Strategies</h2>
                    <p>To successfully implement AI in your business, follow these strategic steps:</p>
                    
                    <h3>1. Identify High-Impact Use Cases</h3>
                    <p>Start by identifying areas where AI can add the most value. Focus on processes that are repetitive, data-intensive, or require pattern recognition.</p>
                    
                    <h3>2. Data Collection and Preparation</h3>
                    <p>Quality data is the foundation of successful AI. Ensure you have clean, organized data available for training AI models.</p>
                    
                    <h3>3. Choose the Right Technology Stack</h3>
                    <p>Select AI tools and platforms that align with your business needs. Consider factors like scalability, integration capabilities, and total cost of ownership.</p>
                    
                    <h3>4. Build a Skilled Team</h3>
                    <p>Invest in training your existing team or hire AI specialists who can drive your automation initiatives forward.</p>
                    
                    <h2>Real-World Success Stories</h2>
                    <p>Companies across industries are seeing remarkable results from AI automation:</p>
                    <ul>
                        <li>A retail company reduced customer service costs by 40% using AI chatbots</li>
                        <li>A manufacturing firm improved quality control accuracy by 95% with computer vision</li>
                        <li>A financial services company reduced fraud losses by 60% using machine learning</li>
                    </ul>
                    
                    <h2>Conclusion</h2>
                    <p>The future of business automation lies in intelligent AI systems that can adapt and learn. Companies that embrace this technology early will have a significant advantage in their respective markets. The key is to start small, measure results, and scale successful implementations.</p>
                    
                    <p>Remember, AI is not about replacing humans – it's about augmenting human capabilities and allowing your team to focus on higher-value activities that drive innovation and growth.</p>
                `,
                category: 'Technology',
                tags: ['AI', 'Automation', 'Business', 'Technology', 'Machine Learning'],
                author: 'Ahmed Khan',
                authorBio: 'Senior AI Engineer with 10+ years of experience in machine learning and business automation.',
                authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
                image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
                readTime: 5,
                views: 1234,
                createdAt: '2024-01-15'
            });
            
            setRelatedPosts([
                {
                    _id: '2',
                    title: 'Why Your Business Needs a Mobile App in 2024',
                    slug: 'business-needs-mobile-app-2024',
                    excerpt: 'Mobile apps have become essential for business growth...',
                    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600',
                    category: 'Business',
                    readTime: 4,
                    createdAt: '2024-01-10'
                },
                {
                    _id: '5',
                    title: 'Building Scalable SaaS Applications',
                    slug: 'building-scalable-saas-applications',
                    excerpt: 'Best practices for developing software-as-a-service platforms...',
                    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600',
                    category: 'Development',
                    readTime: 7,
                    createdAt: '2023-12-20'
                },
                {
                    _id: '7',
                    title: 'Cloud Computing Trends to Watch in 2024',
                    slug: 'cloud-computing-trends-2024',
                    excerpt: 'Explore the emerging trends in cloud computing...',
                    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600',
                    category: 'Technology',
                    readTime: 5,
                    createdAt: '2023-12-10'
                }
            ]);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    const shareLinks = [
        { name: 'Facebook', icon: FaFacebook, color: '#1877F2', url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}` },
        { name: 'Twitter', icon: FaTwitter, color: '#1DA1F2', url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${blog?.title}` },
        { name: 'LinkedIn', icon: FaLinkedin, color: '#0077B5', url: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${blog?.title}` }
    ];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (loading) {
        return (
            <>
                <style>{blogPostStyles}</style>
                <div className="blogpost-loading">
                    <div className="blogpost-spinner"></div>
                    <p>Loading article...</p>
                </div>
            </>
        );
    }

    return (
        <>
            <style>{blogPostStyles}</style>
            
            <Helmet>
                <title>{blog?.title} | VertexFlow Technologies</title>
                <meta name="description" content={blog?.excerpt || blog?.title} />
            </Helmet>

            {/* Article Header */}
            <section className="blogpost-hero">
                <div className="blogpost-hero-bg" style={{ backgroundImage: `url(${blog?.image})` }}></div>
                <div className="blogpost-hero-overlay"></div>
                <div className="blogpost-hero-content">
                    <div className="vertex-container">
                        <Link to="/blog" className="blogpost-back-link" data-aos="fade-down">
                            <FaArrowLeft /> Back to Blog
                        </Link>
                        
                        <div className="blogpost-hero-inner">
                            <div className="blogpost-hero-badge" data-aos="fade-up">
                                {blog?.category}
                            </div>
                            
                            <h1 className="blogpost-hero-title" data-aos="fade-up" data-aos-delay="100">
                                {blog?.title}
                            </h1>

                            <div className="blogpost-hero-meta" data-aos="fade-up" data-aos-delay="200">
                                <div className="blogpost-meta-author">
                                    <img src={blog?.authorImage} alt={blog?.author} className="blogpost-author-avatar" />
                                    <div>
                                        <span className="blogpost-author-name">{blog?.author}</span>
                                        <span className="blogpost-author-role">Author</span>
                                    </div>
                                </div>
                                <div className="blogpost-meta-divider"></div>
                                <span className="blogpost-meta-item">
                                    <FaCalendar /> {formatDate(blog?.createdAt)}
                                </span>
                                <span className="blogpost-meta-item">
                                    <FaClock /> {blog?.readTime} min read
                                </span>
                                <span className="blogpost-meta-item">
                                    <FaEye /> {blog?.views?.toLocaleString()} views
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="blogpost-content-section">
                <div className="vertex-container">
                    <div className="blogpost-content-grid">
                        {/* Main Content */}
                        <div className="blogpost-main">
                            {/* Action Bar */}
                            <div className="blogpost-action-bar" data-aos="fade-up">
                                <button 
                                    className={`blogpost-action-btn ${liked ? 'blogpost-action-active' : ''}`}
                                    onClick={() => setLiked(!liked)}
                                >
                                    <FaHeart /> {liked ? 'Liked' : 'Like'}
                                </button>
                                <button 
                                    className={`blogpost-action-btn ${bookmarked ? 'blogpost-action-active' : ''}`}
                                    onClick={() => setBookmarked(!bookmarked)}
                                >
                                    <FaBookmark /> {bookmarked ? 'Saved' : 'Save'}
                                </button>
                                <div className="blogpost-share-buttons">
                                    {shareLinks.map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="blogpost-share-btn"
                                            style={{ '--share-color': link.color }}
                                            title={`Share on ${link.name}`}
                                        >
                                            <link.icon />
                                        </a>
                                    ))}
                                    <button onClick={copyToClipboard} className="blogpost-share-btn blogpost-copy-btn" title="Copy link">
                                        {copied ? <FaCheck /> : <FaLink />}
                                    </button>
                                </div>
                            </div>

                            {/* Article Body */}
                            <div 
                                className="blogpost-article-content"
                                dangerouslySetInnerHTML={{ __html: blog?.content }}
                                data-aos="fade-up"
                            />

                            {/* Tags */}
                            <div className="blogpost-tags-section" data-aos="fade-up">
                                <FaTags className="blogpost-tags-icon" />
                                {blog?.tags.map((tag, idx) => (
                                    <span key={idx} className="blogpost-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Share Bottom */}
                            <div className="blogpost-share-bottom" data-aos="fade-up">
                                <h3>Share this article</h3>
                                <div className="blogpost-share-bottom-buttons">
                                    {shareLinks.map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="blogpost-share-bottom-btn"
                                            style={{ '--share-color': link.color }}
                                        >
                                            <link.icon /> Share on {link.name}
                                        </a>
                                    ))}
                                    <button onClick={copyToClipboard} className="blogpost-share-bottom-btn blogpost-copy-bottom-btn">
                                        {copied ? <><FaCheck /> Copied!</> : <><FaCopy /> Copy Link</>}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="blogpost-sidebar">
                            {/* Author Card */}
                            <div className="blogpost-author-card" data-aos="fade-left">
                                <div className="blogpost-author-card-image">
                                    <img src={blog?.authorImage} alt={blog?.author} />
                                </div>
                                <h3 className="blogpost-author-card-name">{blog?.author}</h3>
                                <p className="blogpost-author-card-bio">{blog?.authorBio}</p>
                                <div className="blogpost-author-card-stats">
                                    <span><strong>10+</strong> Articles</span>
                                    <span><strong>50K+</strong> Readers</span>
                                </div>
                            </div>

                            {/* Table of Contents */}
                            <div className="blogpost-toc" data-aos="fade-left" data-aos-delay="100">
                                <h3 className="blogpost-toc-title">Table of Contents</h3>
                                <ul className="blogpost-toc-list">
                                    <li><a href="#introduction">Introduction</a></li>
                                    <li><a href="#current-state">Current State of AI</a></li>
                                    <li><a href="#benefits">Key Benefits</a></li>
                                    <li><a href="#implementation">Implementation Strategies</a></li>
                                    <li><a href="#conclusion">Conclusion</a></li>
                                </ul>
                            </div>

                            {/* Related Posts */}
                            {relatedPosts.length > 0 && (
                                <div className="blogpost-related" data-aos="fade-left" data-aos-delay="200">
                                    <h3 className="blogpost-related-title">Related Articles</h3>
                                    <div className="blogpost-related-list">
                                        {relatedPosts.map((post, idx) => (
                                            <Link key={idx} to={`/blog/${post.slug}`} className="blogpost-related-item">
                                                <img src={post.image} alt={post.title} className="blogpost-related-image" />
                                                <div className="blogpost-related-content">
                                                    <span className="blogpost-related-category">{post.category}</span>
                                                    <h4 className="blogpost-related-item-title">{post.title}</h4>
                                                    <div className="blogpost-related-meta">
                                                        <span><FaClock /> {post.readTime} min</span>
                                                        <span><FaCalendar /> {formatDate(post.createdAt)}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="blogpost-cta">
                <div className="vertex-container">
                    <div className="blogpost-cta-content" data-aos="fade-up">
                        <h2>Enjoyed this article?</h2>
                        <p>Subscribe to our newsletter for more tech insights and updates.</p>
                        <div className="blogpost-cta-form">
                            <input type="email" placeholder="Enter your email" />
                            <button>Subscribe <FaChevronRight /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

// ============================================
// COMPLETE CUSTOM CSS FOR BLOG POST PAGE
// ============================================
const blogPostStyles = `
  /* Loading */
  .blogpost-loading {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fafafa;
    gap: 20px;
  }

  .blogpost-loading p {
    color: #6b7280;
    font-size: 16px;
  }

  .blogpost-spinner {
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

  .vertex-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* ========== HERO SECTION ========== */
  .blogpost-hero {
    position: relative;
    padding: 160px 0 80px;
    min-height: 450px;
    display: flex;
    align-items: flex-end;
  }

  .blogpost-hero-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .blogpost-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%);
  }

  .blogpost-hero-content {
    position: relative;
    z-index: 1;
    width: 100%;
  }

  .blogpost-back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 24px;
    transition: color 0.3s ease;
  }

  .blogpost-back-link:hover {
    color: #ffffff;
  }

  .blogpost-hero-inner {
    max-width: 800px;
  }

  .blogpost-hero-badge {
    display: inline-block;
    padding: 6px 16px;
    background: rgba(37,150,190,0.9);
    color: #ffffff;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 20px;
    backdrop-filter: blur(10px);
  }

  .blogpost-hero-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 28px;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  .blogpost-hero-meta {
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
    color: rgba(255,255,255,0.8);
  }

  .blogpost-meta-author {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .blogpost-author-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(255,255,255,0.3);
  }

  .blogpost-author-name {
    display: block;
    font-weight: 600;
    font-size: 15px;
    color: #ffffff;
  }

  .blogpost-author-role {
    display: block;
    font-size: 12px;
    color: rgba(255,255,255,0.6);
  }

  .blogpost-meta-divider {
    width: 1px;
    height: 24px;
    background: rgba(255,255,255,0.2);
  }

  .blogpost-meta-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: rgba(255,255,255,0.7);
  }

  .blogpost-meta-item svg {
    font-size: 14px;
    color: #2596be;
  }

  @media (max-width: 768px) {
    .blogpost-hero {
      padding: 140px 0 60px;
    }
    .blogpost-hero-meta {
      gap: 16px;
    }
  }

  /* ========== CONTENT SECTION ========== */
  .blogpost-content-section {
    padding: 80px 0;
    background: #ffffff;
  }

  .blogpost-content-grid {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 60px;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .blogpost-content-grid {
      grid-template-columns: 1fr;
      max-width: 800px;
    }
  }

  /* ========== MAIN CONTENT ========== */
  .blogpost-main {
    min-width: 0;
  }

  /* Action Bar */
  .blogpost-action-bar {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 0;
    margin-bottom: 32px;
    border-bottom: 1px solid #f4f4f5;
    flex-wrap: wrap;
  }

  .blogpost-action-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 20px;
    border: 2px solid #e4e4e7;
    background: #ffffff;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 600;
    color: #6b7280;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
  }

  .blogpost-action-btn:hover {
    border-color: #2596be;
    color: #2596be;
  }

  .blogpost-action-active {
    background: #fef2f2;
    border-color: #ef4444;
    color: #ef4444;
  }

  .blogpost-action-active:hover {
    border-color: #ef4444;
    color: #ef4444;
  }

  .blogpost-action-active svg {
    color: #ef4444;
    fill: #ef4444;
  }

  .blogpost-share-buttons {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
  }

  .blogpost-share-btn {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid #e4e4e7;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    font-size: 14px;
  }

  .blogpost-share-btn:hover {
    background: var(--share-color);
    color: #ffffff;
    border-color: var(--share-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  .blogpost-copy-btn:hover {
    background: #374151;
    color: #ffffff;
    border-color: #374151;
  }

  /* Article Content */
  .blogpost-article-content {
    font-size: 17px;
    line-height: 1.9;
    color: #374151;
    margin-bottom: 48px;
  }

  .blogpost-article-content h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #0a0a0a;
    margin: 48px 0 20px;
    padding-bottom: 12px;
    border-bottom: 2px solid #f4f4f5;
  }

  .blogpost-article-content h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #0a0a0a;
    margin: 36px 0 16px;
  }

  .blogpost-article-content p {
    margin-bottom: 20px;
    line-height: 1.9;
  }

  .blogpost-article-content ul,
  .blogpost-article-content ol {
    margin: 20px 0;
    padding-left: 24px;
  }

  .blogpost-article-content ul {
    list-style: none;
  }

  .blogpost-article-content ul li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 12px;
    line-height: 1.7;
  }

  .blogpost-article-content ul li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 8px;
    height: 8px;
    background: #2596be;
    border-radius: 50%;
  }

  .blogpost-article-content ol li {
    margin-bottom: 12px;
    line-height: 1.7;
    padding-left: 8px;
  }

  .blogpost-article-content blockquote {
    margin: 32px 0;
    padding: 28px 32px;
    background: #f0f9fc;
    border-left: 4px solid #2596be;
    border-radius: 0 12px 12px 0;
  }

  .blogpost-article-content blockquote p {
    font-size: 18px;
    font-style: italic;
    color: #0a0a0a;
    margin: 0;
    line-height: 1.7;
  }

  .blogpost-article-content figure {
    margin: 32px 0;
  }

  .blogpost-article-content figure img {
    width: 100%;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  }

  .blogpost-article-content figcaption {
    text-align: center;
    font-size: 13px;
    color: #9ca3af;
    margin-top: 12px;
    font-style: italic;
  }

  .blogpost-article-content strong {
    color: #0a0a0a;
    font-weight: 600;
  }

  .blogpost-article-content a {
    color: #2596be;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .blogpost-article-content a:hover {
    color: #1a7a9e;
  }

  /* Tags Section */
  .blogpost-tags-section {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    padding: 28px 0;
    border-top: 1px solid #f4f4f5;
    margin-bottom: 24px;
  }

  .blogpost-tags-icon {
    color: #2596be;
    font-size: 18px;
  }

  .blogpost-tag {
    padding: 8px 18px;
    background: #f4f4f5;
    color: #374151;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .blogpost-tag:hover {
    background: #2596be;
    color: #ffffff;
  }

  /* Share Bottom */
  .blogpost-share-bottom {
    padding: 32px 0;
    border-top: 1px solid #f4f4f5;
  }

  .blogpost-share-bottom h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 16px;
  }

  .blogpost-share-bottom-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .blogpost-share-bottom-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: 50px;
    border: 2px solid #e4e4e7;
    background: #ffffff;
    color: #374151;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
  }

  .blogpost-share-bottom-btn:hover {
    background: var(--share-color);
    color: #ffffff;
    border-color: var(--share-color);
  }

  .blogpost-copy-bottom-btn:hover {
    background: #374151;
    color: #ffffff;
    border-color: #374151;
  }

  /* ========== SIDEBAR ========== */
  .blogpost-sidebar {
    position: sticky;
    top: 100px;
    align-self: start;
  }

  @media (max-width: 1024px) {
    .blogpost-sidebar {
      position: static;
    }
  }

  /* Author Card */
  .blogpost-author-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 32px;
    text-align: center;
    border: 1px solid #f4f4f5;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    margin-bottom: 24px;
  }

  .blogpost-author-card-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 16px;
    border: 3px solid #2596be;
  }

  .blogpost-author-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .blogpost-author-card-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 10px;
  }

  .blogpost-author-card-bio {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .blogpost-author-card-stats {
    display: flex;
    justify-content: center;
    gap: 24px;
    font-size: 13px;
    color: #6b7280;
  }

  .blogpost-author-card-stats strong {
    color: #2596be;
    display: block;
    font-size: 18px;
  }

  /* Table of Contents */
  .blogpost-toc {
    background: #ffffff;
    border-radius: 20px;
    padding: 28px;
    border: 1px solid #f4f4f5;
    margin-bottom: 24px;
  }

  .blogpost-toc-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 16px;
  }

  .blogpost-toc-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .blogpost-toc-list a {
    display: block;
    padding: 8px 12px;
    color: #6b7280;
    text-decoration: none;
    font-size: 14px;
    border-radius: 8px;
    transition: all 0.2s ease;
  }

  .blogpost-toc-list a:hover {
    color: #2596be;
    background: #f0f9fc;
    padding-left: 16px;
  }

  /* Related Posts */
  .blogpost-related {
    background: #ffffff;
    border-radius: 20px;
    padding: 28px;
    border: 1px solid #f4f4f5;
  }

  .blogpost-related-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #0a0a0a;
    margin-bottom: 20px;
  }

  .blogpost-related-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .blogpost-related-item {
    display: flex;
    gap: 16px;
    text-decoration: none;
    transition: transform 0.3s ease;
  }

  .blogpost-related-item:hover {
    transform: translateX(5px);
  }

  .blogpost-related-image {
    width: 80px;
    height: 70px;
    border-radius: 12px;
    object-fit: cover;
    flex-shrink: 0;
  }

  .blogpost-related-content {
    flex: 1;
    min-width: 0;
  }

  .blogpost-related-category {
    display: inline-block;
    padding: 2px 10px;
    background: #f0f9fc;
    color: #2596be;
    border-radius: 50px;
    font-size: 10px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  .blogpost-related-item-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #0a0a0a;
    margin-bottom: 8px;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .blogpost-related-meta {
    display: flex;
    gap: 12px;
    font-size: 11px;
    color: #9ca3af;
  }

  .blogpost-related-meta span {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  /* ========== CTA SECTION ========== */
  .blogpost-cta {
    padding: 80px 0;
    background: linear-gradient(135deg, #2596be, #1a7a9e);
  }

  .blogpost-cta-content {
    text-align: center;
    max-width: 480px;
    margin: 0 auto;
    color: #ffffff;
  }

  .blogpost-cta-content h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .blogpost-cta-content p {
    color: rgba(255,255,255,0.85);
    margin-bottom: 28px;
    font-size: 16px;
  }

  .blogpost-cta-form {
    display: flex;
    gap: 10px;
  }

  @media (max-width: 480px) {
    .blogpost-cta-form {
      flex-direction: column;
    }
  }

  .blogpost-cta-form input {
    flex: 1;
    padding: 14px 20px;
    border-radius: 50px;
    border: 2px solid rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.1);
    color: #ffffff;
    font-size: 15px;
    outline: none;
    font-family: 'Inter', sans-serif;
  }

  .blogpost-cta-form input::placeholder {
    color: rgba(255,255,255,0.5);
  }

  .blogpost-cta-form button {
    padding: 14px 28px;
    background: #ffffff;
    color: #2596be;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
  }

  .blogpost-cta-form button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }

  @media (max-width: 768px) {
    .blogpost-content-section {
      padding: 60px 0;
    }
    .blogpost-cta {
      padding: 60px 0;
    }
  }
`;

export default BlogPost;