import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaChurch, FaUsers, FaChevronLeft, FaChevronRight, FaBible, 
  FaPrayingHands, FaArrowRight, FaClock, FaCalendarAlt,
  FaPlay, FaPause, FaDownload, FaBookOpen, FaHeadphones, FaTimes, FaSearchPlus 
} from 'react-icons/fa';
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

const latestSermonsData = [
  {
    id: 1,
    title: 'Running To Win (Freshers Welcome)',
    speaker: 'The Chaplain',
    date: 'Feb 18, 2026',
    scripture: '1 Corinthians 9:24-27',
    duration: 2535, // in seconds (42:15)
    image: '/gallery-events.png',
    category: 'Orientation',
    slug: 'innocent-but-not-wise',
  },
  {
    id: 2,
    title: 'Ticket for the Journey',
    speaker: 'The Chaplain',
    date: 'July 1, 2020',
    scripture: 'Hebrews 9:27',
    duration: 2140, // in seconds (35:40)
    image: '/hero-worship.png',
    category: 'Salvation',
    slug: 'ticket-for-the-journey',
  },
  {
    id: 3,
    title: 'Arrival Without a Welcome',
    speaker: 'The Chaplain',
    date: 'July 1, 2020',
    scripture: 'Luke 16:19-31',
    duration: 2300, // in seconds (38:20)
    image: '/gallery-worship.png',
    category: 'Eternity',
    slug: 'arrival-without-a-welcome',
  }
];

const galleryItems = [
  {
    id: 1,
    title: 'Cinematic Sunday Worship',
    category: 'Worship',
    image: '/gallery-worship.png',
    size: 'tall',
    desc: 'Students gathering in joint praise and deep adoration during the Sunday worship session.'
  },
  {
    id: 2,
    title: 'Midweek Interactive Bible Study',
    category: 'Bible Study',
    image: '/gallery-fellowship.png',
    size: 'wide',
    desc: 'Connecting with the Word of God in small discipleship groups, sharing insights and growth.'
  },
  {
    id: 3,
    title: 'Praise Team & Chapel Choir',
    category: 'Choir',
    image: '/gallery-choir.png',
    size: 'normal',
    desc: 'Ministering in psalms, hymns, and spiritual songs with voices lifted to the Heavens.'
  },
  {
    id: 4,
    title: 'Freshman Orientation Seminar',
    category: 'Events',
    image: '/gallery-events.png',
    size: 'normal',
    desc: 'Welcoming the new session of students under the topic "Running To Win".'
  },
  {
    id: 5,
    title: 'Lively Campus Fellowship',
    category: 'Events',
    image: '/hero-community.png',
    size: 'wide',
    desc: 'A vibrant outdoor student assembly celebrating fellowship, community, and joy.'
  },
  {
    id: 6,
    title: 'Deep Congregational Worship',
    category: 'Worship',
    image: '/hero-worship.png',
    size: 'normal',
    desc: 'Our hearts aligned in absolute surrender, seeking the presence of the Shepherd.'
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  
  // Interactive Audio Player State
  const [playingSermon, setPlayingSermon] = useState(null);
  const [progress, setProgress] = useState({});

  // Gallery Filter & Lightbox State
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

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

  // Audio player ticking simulation logic
  useEffect(() => {
    let interval;
    if (playingSermon !== null) {
      interval = setInterval(() => {
        setProgress(prev => {
          const currentProgress = prev[playingSermon] || 0;
          const targetSermon = latestSermonsData.find(s => s.id === playingSermon);
          const maxSeconds = targetSermon ? targetSermon.duration : 1800;
          if (currentProgress >= maxSeconds) {
            setPlayingSermon(null);
            return { ...prev, [playingSermon]: 0 };
          }
          return { ...prev, [playingSermon]: currentProgress + 1 };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [playingSermon]);

  const formatTime = (secs) => {
    if (!secs) return '0:00';
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handlePlayPause = (id) => {
    if (playingSermon === id) {
      setPlayingSermon(null);
    } else {
      setPlayingSermon(id);
    }
  };

  const handleProgressClick = (id, e, duration) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickPercentage = clickX / width;
    const targetSeconds = Math.floor(clickPercentage * duration);
    setProgress(prev => ({ ...prev, [id]: targetSeconds }));
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  // Gallery items filter logic
  const filteredGalleryItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  // Lightbox Navigation
  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev - 1 + filteredGalleryItems.length) % filteredGalleryItems.length);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev + 1) % filteredGalleryItems.length);
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

      {/* ===== DEDICATED LATEST SERMONS SECTION ===== */}
      <section className="modern-audio-sermons">
        <div className="container">
          <div className="section-title reveal">
            <span className="sub-title">HEAR THE WORD</span>
            <h2>Latest Sermons</h2>
            <p>Listen to sound biblical teachings, Sunday sermons, and fellowship charges.</p>
          </div>

          <div className="sermon-audio-grid">
            {latestSermonsData.map((sermon) => {
              const currentSecs = progress[sermon.id] || 0;
              const percent = (currentSecs / sermon.duration) * 100;
              const isPlaying = playingSermon === sermon.id;
              
              return (
                <div className="sermon-audio-card reveal" key={sermon.id}>
                  <div className="sermon-audio-header">
                    <img src={sermon.image} alt={sermon.title} />
                    <div className="sermon-audio-header-overlay" />
                    <span className="sermon-audio-tag">{sermon.category}</span>
                    <div className="sermon-speaker-floating">
                      <div className="speaker-avatar-circle">✝</div>
                      <span>By {sermon.speaker}</span>
                    </div>
                  </div>

                  <div className="sermon-audio-body">
                    <div className="sermon-audio-meta">
                      <span><FaCalendarAlt /> {sermon.date}</span>
                      <span>•</span>
                      <span><FaHeadphones /> {sermon.duration ? formatTime(sermon.duration) : 'Audio'}</span>
                    </div>
                    <h3>{sermon.title}</h3>
                    <p className="sermon-scripture-ref">Scripture: {sermon.scripture}</p>

                    {/* Integrated Interactive Audio Player */}
                    <div className="sermon-player-controls-wrap">
                      <div className="sermon-player-controls">
                        <button 
                          className={`player-btn-play ${isPlaying ? 'playing' : ''}`}
                          onClick={() => handlePlayPause(sermon.id)}
                          aria-label={isPlaying ? 'Pause' : 'Play'}
                        >
                          {isPlaying ? <FaPause /> : <FaPlay />}
                        </button>
                        
                        {/* Audio Waves Visualizer */}
                        <div className="audio-visualizer-wave">
                          <span className={`audio-wave-bar ${isPlaying ? 'animating' : ''}`} />
                          <span className={`audio-wave-bar ${isPlaying ? 'animating' : ''}`} />
                          <span className={`audio-wave-bar ${isPlaying ? 'animating' : ''}`} />
                          <span className={`audio-wave-bar ${isPlaying ? 'animating' : ''}`} />
                        </div>
                      </div>

                      <div className="player-times-display">
                        <span>{formatTime(currentSecs)}</span>
                        <span>{formatTime(sermon.duration)}</span>
                      </div>

                      <div 
                        className="player-progress-bar-bg"
                        onClick={(e) => handleProgressClick(sermon.id, e, sermon.duration)}
                      >
                        <div 
                          className={`player-progress-bar-fill ${isPlaying ? 'active' : ''}`}
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>

                    <div className="sermon-audio-actions">
                      <Link to={`/blog/${sermon.slug}`} className="btn-sermon-action">
                        <FaBookOpen /> Read Transcript
                      </Link>
                      <button 
                        className="btn-sermon-action-main"
                        onClick={() => alert(`Downloading sermon audio: "${sermon.title}"...`)}
                      >
                        <FaDownload /> Download
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HIGH-END FILTERABLE OUR GALLERY SECTION ===== */}
      <section className="modern-bento-gallery">
        <div className="container">
          <div className="section-title reveal">
            <span className="sub-title">PICTURES & FELLOWSHIP</span>
            <h2>Our Gallery</h2>
            <p>Capturing joyful moments of discipleship, communal prayers, and campus events.</p>
          </div>

          {/* Filter tabs */}
          <div className="gallery-filter-tabs reveal">
            {['All', 'Worship', 'Bible Study', 'Choir', 'Events'].map(tab => (
              <button
                key={tab}
                className={`gallery-filter-btn ${activeFilter === tab ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(tab);
                  setLightboxIndex(null); // Reset lightbox to prevent indexing mismatch
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Bento-style gallery grid */}
          <div className="gallery-grid-bento">
            {filteredGalleryItems.map((item, idx) => (
              <div 
                className={`gallery-item-bento ${item.size} reveal-scale`} 
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
              >
                <img src={item.image} alt={item.title} />
                <div className="gallery-item-overlay">
                  <div className="gallery-zoom-icon">
                    <FaSearchPlus />
                  </div>
                  <div className="gallery-item-info-text">
                    <span className="gallery-item-tag">{item.category}</span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FROM THE CHAPEL BLOG (Devotionals) ===== */}
      <section className="modern-sermons">
        <div className="container">
          <div className="section-title reveal">
            <span className="sub-title">SPIRITUAL INSIGHTS</span>
            <h2>From the Chapel Blog</h2>
            <p>Dive deep into spiritual devotionals and transformative articles.</p>
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
                  Read Article <FaArrowRight />
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

      {/* ===== GALLERY LIGHTBOX MODAL Overlay ===== */}
      {lightboxIndex !== null && filteredGalleryItems[lightboxIndex] && (
        <div className="gallery-lightbox-overlay" onClick={() => setLightboxIndex(null)}>
          <button className="lightbox-close-btn" onClick={() => setLightboxIndex(null)}>
            <FaTimes />
          </button>
          
          <button className="lightbox-nav-btn prev" onClick={(e) => { e.stopPropagation(); handlePrevLightbox(); }}>
            <FaChevronLeft />
          </button>
          
          <button className="lightbox-nav-btn next" onClick={(e) => { e.stopPropagation(); handleNextLightbox(); }}>
            <FaChevronRight />
          </button>
          
          <div className="lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-container">
              <img 
                src={filteredGalleryItems[lightboxIndex].image} 
                alt={filteredGalleryItems[lightboxIndex].title} 
              />
            </div>
            
            <div className="lightbox-caption-card">
              <span>{filteredGalleryItems[lightboxIndex].category}</span>
              <h3>{filteredGalleryItems[lightboxIndex].title}</h3>
              <p>{filteredGalleryItems[lightboxIndex].desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
