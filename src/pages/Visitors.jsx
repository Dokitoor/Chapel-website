import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import '../styles/Pages.css';

const Visitors = () => {
  const [form, setForm] = useState({
    firstName: '', surname: '', phone: '', email: '', sex: '',
    address: '', occupation: '', state: '', lga: '', nationality: '',
    hearAbout: '', prayerRequest: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for registering! We look forward to welcoming you.');
    setForm({
      firstName: '', surname: '', phone: '', email: '', sex: '',
      address: '', occupation: '', state: '', lga: '', nationality: '',
      hearAbout: '', prayerRequest: ''
    });
  };

  return (
    <>
      <Breadcrumb title="Visitor Registration" current="Visitors" />

      <section className="visitors-section">
        <div className="container">
          <div className="visitors-form-card">
            <h2>Welcome, Visitor!</h2>
            <p className="subtitle">We're so glad you're here. Please fill out this form so we can connect with you.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="v-firstName">First Name *</label>
                  <input type="text" id="v-firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="v-surname">Surname *</label>
                  <input type="text" id="v-surname" name="surname" value={form.surname} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="v-phone">Phone Number *</label>
                  <input type="tel" id="v-phone" name="phone" value={form.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="v-email">Email</label>
                  <input type="email" id="v-email" name="email" value={form.email} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="v-sex">Sex</label>
                  <select id="v-sex" name="sex" value={form.sex} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="v-occupation">Occupation</label>
                  <input type="text" id="v-occupation" name="occupation" value={form.occupation} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="v-address">Home Address</label>
                <input type="text" id="v-address" name="address" value={form.address} onChange={handleChange} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="v-state">State of Origin</label>
                  <input type="text" id="v-state" name="state" value={form.state} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="v-lga">LGA</label>
                  <input type="text" id="v-lga" name="lga" value={form.lga} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="v-nationality">Nationality</label>
                  <input type="text" id="v-nationality" name="nationality" value={form.nationality} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="v-hearAbout">How did you hear about us?</label>
                  <select id="v-hearAbout" name="hearAbout" value={form.hearAbout} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Friend">Through a Friend</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Campus">Campus Event</option>
                    <option value="Website">Website</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="v-prayer">Your Prayer Request</label>
                <textarea id="v-prayer" name="prayerRequest" value={form.prayerRequest} onChange={handleChange} placeholder="Share your prayer request with us..." />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Visitors;
