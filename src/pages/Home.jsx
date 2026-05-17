import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaChurch, FaUsers, FaHandHoldingHeart, FaChevronLeft, FaChevronRight, FaBible, FaPrayingHands } from 'react-icons/fa';
import { blogPosts } from '../data/blogPosts';
import '../styles/Home.css';

const slides = [
  {
    image: '/hero-1.jpg',
    title: 'Becoming like Jesus...',
    subtitle: 'Helping others become like Him — Matthew 28:19-20',
  },
  {
    image: '/hero-2.jpg',
    title: 'A Community of Faith',
    subtitle: 'Growing together in love, unity, and purity on campus',
  },
  {
    image: '/hero-3.jpg',
    title: 'Feed My Sheep',
    subtitle: 'John 21:17 — Discipleship, fellowship, and the Word of God',
  },
  {
    image: '/hero-4.jpg',
    title: 'Welcome & Worship',
    subtitle: 'Come experience the warmth of our community at CGS',
  },
  {
    image: '/hero-5.jpg',
    title: 'The Chapel of the Good Shepherd',
    subtitle: 'University of Agriculture, Makurdi — A place of prayer for all',
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleNewsletter = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <>
      {/* ===== HERO SLIDER ===== */}
      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div key={index} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide.image} alt={slide.title} className="hero-slide-bg" />
            <div className="hero-overlay" />
            <div className="hero-content">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
              <div className="hero-buttons">
                <Link to="/about" className="btn btn-primary">Learn More</Link>
                <Link to="/visitors" className="btn btn-outline">I'm New Here</Link>
              </div>
            </div>
          </div>
        ))}

        <div className="hero-arrows">
          <button className="hero-arrow" onClick={prevSlide} aria-label="Previous slide"><FaChevronLeft /></button>
          <button className="hero-arrow" onClick={nextSlide} aria-label="Next slide"><FaChevronRight /></button>
        </div>

        <div className="hero-controls">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ===== EVENT BANNER ===== */}
      <section className="event-banner">
        <div className="container event-banner-inner">
          <div className="event-info">
            <h3>Welcome & Orientation — Fresh Students</h3>
            <p>Theme: Running To Win | Message • Seminars • Songs Ministration • Drama & More</p>
          </div>
          <Link to="/visitors" className="btn btn-gold">Register Now</Link>
        </div>
      </section>

      {/* ===== QUICK INFO ===== */}
      <section className="quick-info">
        <div className="container">
          <div className="section-title">
            <h2>Welcome to CGS</h2>
            <p>The Chapel of the Good Shepherd, University of Agriculture Makurdi</p>
          </div>
          <div className="quick-info-grid">
            <div className="info-card">
              <div className="info-card-img"><img src="/iamnew.jpeg" alt="I'm New" /></div>
              <h3>I'm New Here</h3>
              <p>First time visitor? We'd love to meet you! Find out how, where and when we worship. Come experience the warmth of our community.</p>
              <Link to="/visitors" className="btn btn-secondary" style={{ marginTop: '20px' }}>Visit Us</Link>
            </div>
            <div className="info-card">
              <div className="info-card-img"><img src="/chapel.jpeg" alt="About CGS" /></div>
              <h3>About Our Church</h3>
              <p>As the culture becomes increasingly hostile to the message of Christ, we remain steadfast in our commitment to the Gospel and community discipleship.</p>
              <Link to="/about" className="btn btn-secondary" style={{ marginTop: '20px' }}>Learn More</Link>
            </div>
            <div className="info-card">
              <div className="info-card-img"><img src="/church.jpeg" alt="Our Community" /></div>
              <h3>Church Members</h3>
              <p>As it was in the earliest days, the church thrives when its members are actively engaged in worship, fellowship, and service to one another.</p>
              <Link to="/about" className="btn btn-secondary" style={{ marginTop: '20px' }}>Join Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <span className="verse-tag"><FaPrayingHands /> Our Mission</span>
              <h2>Our Mission Statement</h2>
              <blockquote>
                "To bring the members of the University Community to know Jesus Christ personally as Lord and Saviour,
                to grow to become like Him in faith, Love, Unity and Purity for effective kingdom Service."
              </blockquote>
            </div>
            <div className="mission-visual">
              <img src="/chapel.jpeg" alt="Our Chapel" />
              <div className="mission-decoration" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG PREVIEW ===== */}
      <section className="blog-preview">
        <div className="container">
          <div className="section-title">
            <h2>Latest From Our Blog</h2>
            <p>Sermons, devotionals, and insights from the Chapel community</p>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div className="blog-card" key={post.id}>
                <div className="blog-card-img">
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span>By {post.author}</span>
                    <span>{post.category}</span>
                  </div>
                  <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
                  <p>{post.excerpt.substring(0, 120)}...</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/blog" className="btn btn-primary">View All Posts</Link>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="newsletter-section">
        <div className="container newsletter-inner">
          <h2>Stay Connected</h2>
          <p>Subscribe to our newsletter and stay updated with chapel activities</p>
          <form className="newsletter-form" onSubmit={handleNewsletter}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
