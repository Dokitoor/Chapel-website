import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaChurch, FaUsers, FaHandHoldingHeart, FaChevronLeft, FaChevronRight, FaBible, FaPrayingHands } from 'react-icons/fa';
import '../styles/Home.css';

const slides = [
  {
    image: '/hero-worship.png',
    title: 'Becoming like Jesus...',
    subtitle: 'Helping others become like Him — Matthew 28:19-20',
  },
  {
    image: '/hero-community.png',
    title: 'A Community of Faith',
    subtitle: 'Growing together in love, unity, and purity on campus',
  },
  {
    image: '/hero-bible-study.png',
    title: 'Feed My Sheep',
    subtitle: 'John 21:17 — Discipleship, fellowship, and the Word of God',
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
              <div className="info-card-icon"><FaChurch /></div>
              <h3>I'm New Here</h3>
              <p>First time visitor? We'd love to meet you! Find out how, where and when we worship. Come experience the warmth of our community.</p>
              <Link to="/visitors" className="btn btn-secondary" style={{ marginTop: '20px' }}>Visit Us</Link>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaBible /></div>
              <h3>About Our Church</h3>
              <p>As the culture becomes increasingly hostile to the message of Christ, we remain steadfast in our commitment to the Gospel and community discipleship.</p>
              <Link to="/about" className="btn btn-secondary" style={{ marginTop: '20px' }}>Learn More</Link>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaUsers /></div>
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
              <img src="/hero-community.png" alt="Our community" />
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
            <p>Insights, devotionals, and news from the Chapel community</p>
          </div>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-card-img"><span>📖</span></div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span>By Jerusha Andeyek</span>
                  <span>Chapel Blog</span>
                </div>
                <h3><a href="#">Innocent, But NOT Wise!</a></h3>
                <p>A reflection on the importance of wisdom in our walk with God. Being innocent alone is not enough — we must also seek divine wisdom.</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card-img" style={{ background: 'linear-gradient(135deg, #d4a017, #f0c040)' }}><span>🙏</span></div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span>By Chapel Media</span>
                  <span>Devotional</span>
                </div>
                <h3><a href="#">Walking in the Light</a></h3>
                <p>Understanding what it means to live a life fully surrendered to Christ and walking in the light of His word daily.</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card-img" style={{ background: 'linear-gradient(135deg, #16213e, #0f3460)' }}><span>⛪</span></div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span>By Chapel Admin</span>
                  <span>Announcements</span>
                </div>
                <h3><a href="#">Sunday Service Highlights</a></h3>
                <p>A recap of the powerful messages and worship experiences from our recent Sunday services at the Chapel.</p>
              </div>
            </div>
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
