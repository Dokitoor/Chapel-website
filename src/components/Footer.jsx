import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* About Column */}
            <div className="footer-col">
              <h3>About Our Chapel</h3>
              <p className="footer-about-text">
                To bring the members of the University Community to know Jesus Christ personally as Lord and Saviour,
                to grow to become like Him in faith, Love, Unity and Purity for effective kingdom Service.
              </p>
              <div className="footer-social-links">
                <a href="https://www.facebook.com/cgsfuam" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://twitter.com/CGSUAM" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="YouTube"><FaYoutube /></a>
              </div>
            </div>

            {/* Schedule Column */}
            <div className="footer-col">
              <h3>Service Times</h3>
              <ul className="footer-schedule">
                <li>
                  <span className="day">Monday</span>
                  <span className="time">5:00 – 6:00 PM</span>
                </li>
                <li>
                  <span className="day">Wednesday</span>
                  <span className="time">4:00 – 5:30 PM</span>
                </li>
                <li>
                  <span className="day">Friday</span>
                  <span className="time">Bible Teachers</span>
                </li>
                <li>
                  <span className="day">Saturday</span>
                  <span className="time">Choir Practice</span>
                </li>
                <li>
                  <span className="day">Sunday 1st</span>
                  <span className="time">7:00 – 9:00 AM</span>
                </li>
                <li>
                  <span className="day">Sunday School</span>
                  <span className="time">9:00 – 10:00 AM</span>
                </li>
                <li>
                  <span className="day">Sunday 2nd</span>
                  <span className="time">10:00 – 12:00 PM</span>
                </li>
              </ul>
              <p style={{ fontSize: '0.8rem', marginTop: '10px', color: 'var(--gold)' }}>
                Holy Communion — 2nd Sunday of every month
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h3>Quick Links</h3>
              <div className="footer-links-list">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/visitors">Visitor Registration</Link>
                <Link to="/donation">Make a Donation</Link>
                <Link to="/downloads">Downloads</Link>
              </div>
            </div>

            {/* Contact Column */}
            <div className="footer-col">
              <h3>Get In Touch</h3>
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><FaMapMarkerAlt /></div>
                <div>PMB 2373, Makurdi,<br />Benue State, Nigeria</div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><FaPhone /></div>
                <div>
                  <a href="tel:+23408035877411">+234 08035877411</a><br />
                  <a href="tel:+23409077711122">+234 09077711122</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><FaEnvelope /></div>
                <div><a href="mailto:info@cgsfuam.org">info@cgsfuam.org</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © 2011–{new Date().getFullYear()} <span>The Chapel Of The Good Shepherd</span> | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
