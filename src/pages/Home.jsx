import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaChurch, FaUsers, FaChevronLeft, FaChevronRight, FaBible, FaPrayingHands, FaArrowRight, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { blogPosts } from '../data/blogPosts';
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

  // Splitting blog posts for modern editorial showcase
  const featuredPost = blogPosts[0];
  const sidePosts = blogPosts.slice(1, 3);

  return (
    <>
      {/* ===== CINEMATIC SPLIT HERO SECTION ===== */}
      <section className="modern-hero">
        <div className="hero-glow-orb animate-pulse" />
        <div className="container modern-hero-inner">
          
          {/* Left Column: Bold Typography & CTAs */}
          <div className="hero-text-side reveal-left">
            <span className="hero-eyebrow">
              <span className="pulsing-dot" /> ESTABLISHED 1990 — UNIVERSITY FELLOWSHIP
            </span>
            <h1 className="hero-main-title">
              Chapel of the <br />
              <span className="gradient-text">Good Shepherd</span>
            </h1>
            <p className="hero-description">
              A vibrant campus Christian community steadfast in our commitment to the Gospel, active discipleship, and warm fellowship at the University of Agriculture, Makurdi.
            </p>
            
            {/* Quick Stats Banner */}
            <div className="hero-stats-row">
              <div className="stat-pill">
                <strong>Sunday Service</strong>
                <span>8:30 AM</span>
              </div>
              <div className="stat-pill">
                <strong>Bible Study</strong>
                <span>Wednesday 5:00 PM</span>
              </div>
            </div>

            <div className="hero-ctas">
              <Link to="/visitors" className="btn btn-primary">
                Plan Your Visit <FaArrowRight />
              </Link>
              <Link to="/about" className="btn btn-outline">
                Our Journey
              </Link>
            </div>
          </div>

          {/* Right Column: Rotating Image Canvas with Floating Glass Card */}
          <div className="hero-canvas-side reveal-right">
            <div className="canvas-frame">
              {slides.map((slide, index) => (
                <div 
                  key={index} 
                  className={`canvas-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img src={slide.image} alt={slide.title} />
                  <div className="canvas-slide-overlay" />
                  <div className="canvas-slide-caption">
                    <h3>{slide.title}</h3>
                    <p>{slide.subtitle}</p>
                  </div>
                </div>
              ))}
              
              <div className="canvas-arrows">
                <button className="canvas-arrow" onClick={prevSlide}><FaChevronLeft /></button>
                <button className="canvas-arrow" onClick={nextSlide}><FaChevronRight /></button>
              </div>

              <div className="canvas-indicators">
                {slides.map((_, index) => (
                  <span 
                    key={index} 
                    className={`indicator-bar ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>

            {/* Floating Glassmorphic Pill */}
            <div className="floating-glass-badge">
              <div className="badge-icon"><FaPrayingHands /></div>
              <div>
                <h4>"Feed My Sheep"</h4>
                <p>John 21:17</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== WELCOME ORIENTATION BANNER ===== */}
      <section className="event-banner-modern">
        <div className="container">
          <div className="event-banner-card reveal">
            <div className="event-card-content">
              <span className="event-tag">UPCOMING SESSION</span>
              <h3>Fresh Students Welcome & Orientation</h3>
              <p>Theme: "Running To Win" — Seminars, worship ministration, drama, and academic discipleship guidance.</p>
            </div>
            <Link to="/visitors" className="btn btn-gold">
              Register Now <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE BENTO GRID ===== */}
      <section className="bento-quick-info">
        <div className="container">
          <div className="section-title reveal">
            <span className="sub-title">CORE INTERACTION</span>
            <h2>Welcome to CGS Community</h2>
            <p>Explore our church community hubs, discipleship groups, and weekly fellowship modules.</p>
          </div>
          
          <div className="bento-grid">
            
            {/* Card 1: Main Welcome (Col Span 2) */}
            <div className="bento-card bento-welcome reveal-scale delay-1">
              <div className="bento-card-bg" style={{ backgroundImage: "linear-gradient(to right, rgba(30, 27, 75, 0.95) 40%, rgba(30, 27, 75, 0.2)), url('/hero-community.png')" }} />
              <div className="bento-card-content">
                <span className="card-badge">GET STARTED</span>
                <h3>I'm New Here</h3>
                <p>Are you a freshman or first-time worshipper? We would love to meet you and help you get connected with our fellowships, academic seminars, and spiritual mentors.</p>
                <Link to="/visitors" className="btn btn-secondary-modern">Visit Us <FaArrowRight /></Link>
              </div>
            </div>

            {/* Card 2: Scripture Pill (Col Span 1) */}
            <div className="bento-card bento-doctrine reveal-scale delay-2">
              <div className="bento-card-content">
                <div className="bento-icon"><FaBible /></div>
                <h3>About Our Church</h3>
                <p>Rooted in scripture, steadfast in doctrine, and devoted to equipping believers for purposeful Kingdom impact.</p>
                <Link to="/about" className="bento-link">Learn More <FaArrowRight /></Link>
              </div>
            </div>

            {/* Card 3: Membership (Col Span 1) */}
            <div className="bento-card bento-members reveal-scale delay-3">
              <div className="bento-card-content">
                <div className="bento-icon"><FaUsers /></div>
                <h3>Chapel Members</h3>
                <p>Active fellowship thrives through service, cell groups, and worship teams. Discover your place in our family.</p>
                <Link to="/about" className="bento-link">Join Us <FaArrowRight /></Link>
              </div>
            </div>

            {/* Card 4: Services Bento (Col Span 2) */}
            <div className="bento-card bento-services reveal-scale delay-4">
              <div className="bento-card-content">
                <span className="card-badge-gold">FELLOWSHIP HOURS</span>
                <h3>Our Weekly Gatherings</h3>
                <div className="services-bento-grid">
                  <div className="service-bento-item">
                    <h4>Sunday School</h4>
                    <p>8:30 AM — 9:30 AM</p>
                  </div>
                  <div className="service-bento-item">
                    <h4>Sunday Worship Service</h4>
                    <p>9:30 AM — 11:30 AM</p>
                  </div>
                  <div className="service-bento-item">
                    <h4>Midweek Bible Study</h4>
                    <p>Wednesday 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== IMMERSIVE TYPOGRAPHIC MISSION ===== */}
      <section className="modern-mission">
        <div className="mission-backdrop-word">SHEPHERD</div>
        <div className="container">
          <div className="mission-split-grid">
            <div className="mission-text-side reveal-left">
              <span className="mission-eyebrow"><FaPrayingHands /> OUR MISSION</span>
              <h2 className="mission-title">Purpose Built For Eternal Impact</h2>
              <p className="mission-statement">
                "To bring the members of the University Community to know Jesus Christ personally as Lord and Saviour, and to grow to become like Him in faith, love, unity, and purity for effective Kingdom service."
              </p>
              <div className="mission-divider" />
              <Link to="/about" className="btn btn-primary">Our Core Values</Link>
            </div>
            
            <div className="mission-visual-side reveal-right">
              <div className="visual-wrapper">
                <img src="/hero-bible-study.png" alt="Bible Study" />
                <div className="glow-border" />
                <div className="floating-verse-box">
                  <p>"Go therefore and make disciples of all the nations..."</p>
                  <span>— Matthew 28:19</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED EDITORIAL SERMONS ===== */}
      <section className="modern-sermons">
        <div className="container">
          <div className="section-title reveal">
            <span className="sub-title">SPIRITUAL BREAD</span>
            <h2>Latest From Our Blog</h2>
            <p>Dive deep into spiritual devotionals and transformative Sunday messages.</p>
          </div>

          <div className="sermons-editorial-grid">
            
            {/* Left Hand Featured Big Sermon */}
            <div className="featured-sermon-card reveal-left">
              <div className="featured-sermon-img">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <span className="featured-tag">{featuredPost.category}</span>
              </div>
              <div className="featured-sermon-body">
                <div className="sermon-meta">
                  <span>By {featuredPost.author}</span>
                  <span>•</span>
                  <span><FaClock /> {featuredPost.date}</span>
                </div>
                <h3><Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link></h3>
                <p>{featuredPost.excerpt}</p>
                <Link to={`/blog/${featuredPost.slug}`} className="btn btn-secondary-modern">
                  Read Sermon <FaArrowRight />
                </Link>
              </div>
            </div>

            {/* Right Hand Minimal List of Other Sermons */}
            <div className="sermon-aside-list reveal-right">
              <h3>More Insights</h3>
              
              <div className="aside-cards-stack">
                {sidePosts.map((post) => (
                  <div className="sermon-aside-item" key={post.id}>
                    <div className="aside-img-thmb">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="aside-info">
                      <span className="aside-category">{post.category}</span>
                      <h4><Link to={`/blog/${post.slug}`}>{post.title}</Link></h4>
                      <div className="aside-meta">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>By {post.author}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="sermon-explore-box">
                <Link to="/blog" className="explore-all-link">
                  Explore Full Library <FaArrowRight />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== MODERN NEWSLETTER SECTION ===== */}
      <section className="modern-newsletter">
        <div className="container">
          <div className="newsletter-card-wrapper reveal-scale">
            <div className="newsletter-glow" />
            <div className="newsletter-main-content">
              <h2>Stay Anchored in Word</h2>
              <p>Subscribe to our weekly devotionals, prayer bulletins, and orientation alerts.</p>
              <form className="newsletter-form-modern" onSubmit={handleNewsletter}>
                <input
                  type="email"
                  placeholder="Enter your academic or personal email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-gold-sub">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
