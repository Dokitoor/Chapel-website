import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="navbar-top">
        <div className="container navbar-top-inner">
          <div className="navbar-top-info">
            <span><FaPhone /> +234 08035877411</span>
            <span><FaEnvelope /> info@cgsfuam.org</span>
          </div>
          <div className="navbar-top-social">
            <a href="https://www.facebook.com/cgsfuam" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com/CGSUAM" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="navbar-main">
        <div className="container navbar-main-inner">
          <Link to="/" className="navbar-brand">
            <img src="/logo.png" alt="CGS Logo" className="navbar-logo" />
            <div className="navbar-brand-text">
              <h1>Chapel of the Good Shepherd</h1>
              <p>Feed My Sheep — Jn 21:17</p>
            </div>
          </Link>

          <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
            <div className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
            </div>
            <div className="nav-item">
              <Link to="/about" className={`nav-link ${isActive('/about')}`}>About Us <FaChevronDown size={10} /></Link>
              <div className="nav-dropdown">
                <Link to="/about">About Our Chapel</Link>
                <Link to="/visitors">New Here?</Link>
              </div>
            </div>
            <div className="nav-item">
              <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
            </div>
            <div className="nav-item">
              <Link to="/blog" className={`nav-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`}>Blog</Link>
            </div>
            <div className="nav-item">
              <Link to="/visitors" className={`nav-link ${isActive('/visitors')}`}>Visitors</Link>
            </div>
            <div className="nav-item">
              <Link to="/downloads" className={`nav-link ${isActive('/downloads')}`}>Downloads</Link>
            </div>

            {/* Mobile Actions */}
            <div className="navbar-actions navbar-actions-mobile">
              <Link to="/donation" className="nav-btn nav-btn-donate">Donate</Link>
            </div>
          </div>

          <div className="navbar-actions navbar-actions-desktop">
            <Link to="/donation" className="nav-btn nav-btn-donate">Donate</Link>
          </div>

          <button
            className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
