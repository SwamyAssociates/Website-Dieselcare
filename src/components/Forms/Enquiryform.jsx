import React, { useState } from 'react';
import './EnquiryForm.css';

const EnquiryForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can integrate with your backend or email service
    console.log('Enquiry Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Enquiry Form</h2>
        {submitted ? (
          <p>Thank you for your enquiry! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EnquiryForm;
