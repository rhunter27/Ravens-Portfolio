import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
  };

  return (
    <div className="contact-page">
      <div className="creative-header">
        <div className="creative-title">RAVEN HUNTER</div>
        <div className="creative-subtitle">Sales Professional & Coding Specialist</div>
      </div>

      <div className="contact-container">
        <div className="graphic-elements">
          <div className="graphic-box creative-box">
            <span>Sales.</span>
          </div>
          <div className="graphic-box number-box">
            <span>13</span>
          </div>
          <div className="graphic-box title-box">
            <span>TECH</span>
            <span>SALES</span>
          </div>
          <div className="graphic-box number-box">
            <span>6</span>
          </div>
        </div>

        <div className="contact-content">
          <div className="welcome-section">
            <h2>WELCOME</h2>
            <h3>TO MY PORTFOLIO</h3>
            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> ravenhunter207@gmail.com</p>
              <p><i className="fas fa-phone"></i> 757-951-5781</p>
              <p>
                <i className="fab fa-github"></i> 
                <a href="https://github.com/rhunter27" target="_blank" rel="noopener noreferrer">
                  github.com/rhunter27
                </a>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <h2 className="form-title">CONTACT ME</h2>
            
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;