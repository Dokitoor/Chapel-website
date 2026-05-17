import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';
import '../styles/Pages.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <Breadcrumb title="Contact Us" current="Contact" />

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-card">
              <h2>Write to Us</h2>
              <p className="subtitle">We'd love to hear from you. Send us a message and we'll respond promptly.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input type="text" id="contact-name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input type="email" id="contact-email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Telephone</label>
                  <input type="tel" id="contact-phone" name="phone" value={form.phone} onChange={handleChange} placeholder="Enter your phone number" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Your Message</label>
                  <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} placeholder="Type your message here..." required />
                </div>
                <button type="submit" className="btn btn-primary">
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </div>

            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="icon"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Our Address</h4>
                  <p>PMB 2373, Makurdi,<br />Benue State, Nigeria</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="icon"><FaPhone /></div>
                <div>
                  <h4>Phone Numbers</h4>
                  <p>+234 08035877411<br />+234 09077711122</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="icon"><FaEnvelope /></div>
                <div>
                  <h4>Email Address</h4>
                  <p>info@cgsfuam.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
