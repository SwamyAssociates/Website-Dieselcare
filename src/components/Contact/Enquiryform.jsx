import React from 'react';
import './enquiryform.css';

const EnquiryForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Enquiry submitted! We will get back to you soon.');
    onClose();
  };

  return (
    <div className="enquiry-overlay" role="dialog" aria-modal="true">
      <div className="enquiry-popup">
        <button
          className="close-btn"
          aria-label="Close enquiry form"
          onClick={onClose}
        >
          ✕
        </button>
        <h2>Enquiry Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name*</label>
          <input id="name" type="text" name="name" required />

          <label htmlFor="email">Email*</label>
          <input id="email" type="email" name="email" required />

          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="tel" name="phone" />

          <label htmlFor="message">Message*</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
