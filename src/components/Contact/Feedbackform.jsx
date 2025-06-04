import React, { useState } from 'react';
import './feedbackform.css';

const FeedbackForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    quality: 0,
    pricing: 0,
    experience: 0,
    behavior: 0,
    comments: ''
  });

  const handleStarClick = (category, value) => {
    setFormData({ ...formData, [category]: value });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, comments: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    alert('Thank you for your feedback!');
    onClose(); // closes the popup
  };

  const renderStars = (category) => (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((val) => (
        <span
          key={val}
          className={formData[category] >= val ? 'star filled' : 'star'}
          onClick={() => handleStarClick(category, val)}
          role="button"
          aria-label={`Rate ${val} stars`}
        >
          ★
        </span>
      ))}
    </div>
  );

  return (
    <div className="feedback-overlay">
      <div className="feedback-container">
        <h2>We value your feedback</h2>
        <form onSubmit={handleSubmit}>
          <label>Quality of Service</label>
          {renderStars('quality')}

          <label>Pricing (Cost-effectiveness)</label>
          {renderStars('pricing')}

          <label>Customer Experience</label>
          {renderStars('experience')}

          <label>Staff Behavior</label>
          {renderStars('behavior')}

          <label>Additional Comments</label>
          <textarea
            value={formData.comments}
            onChange={handleChange}
            placeholder="Your comments here..."
            rows="4"
          />

          <div className="form-actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
