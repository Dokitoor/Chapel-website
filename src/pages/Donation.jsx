import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';
import '../styles/Pages.css';

const Donation = () => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', amount: '', reason: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your generous donation! God bless you.');
    setForm({ firstName: '', lastName: '', email: '', phone: '', amount: '', reason: '' });
  };

  return (
    <>
      <Breadcrumb title="Make a Donation" current="Donation" />

      <section className="donation-section">
        <div className="container">
          <div className="donation-grid">
            <div className="donation-info">
              <h2>Support the Ministry</h2>
              <p>
                Your generous donations help us continue our mission of bringing the university community
                to know Jesus Christ personally. Every gift, no matter the size, makes a difference in
                building God's kingdom on campus.
              </p>
              <div className="donation-verse">
                <p>"Each of you should give what you have decided in your heart to give, not reluctantly or under
                  compulsion, for God loves a cheerful giver."</p>
                <cite>— 2 Corinthians 9:7</cite>
              </div>
            </div>

            <div className="donation-form-card">
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaHeart style={{ color: 'var(--crimson)' }} /> Give Today
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="d-firstName">First Name *</label>
                    <input type="text" id="d-firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="d-lastName">Last Name *</label>
                    <input type="text" id="d-lastName" name="lastName" value={form.lastName} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="d-email">Email *</label>
                  <input type="email" id="d-email" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="d-phone">Phone</label>
                  <input type="tel" id="d-phone" name="phone" value={form.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="d-amount">Amount (₦) *</label>
                  <input type="number" id="d-amount" name="amount" value={form.amount} onChange={handleChange} placeholder="Enter amount" required />
                </div>
                <div className="form-group">
                  <label htmlFor="d-reason">Reason for Payment</label>
                  <select id="d-reason" name="reason" value={form.reason} onChange={handleChange}>
                    <option value="">Select a reason</option>
                    <option value="Tithe">Tithe</option>
                    <option value="Offering">Offering</option>
                    <option value="Building Fund">Building Fund</option>
                    <option value="Missions">Missions</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Pay Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donation;
