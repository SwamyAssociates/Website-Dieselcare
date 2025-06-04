import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can integrate with your backend or email service
    console.log('Feedback Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Feedback Form</h2>
        {submitted ? (
          <p>Thank you for your feedback! We appreciate your input.</p>
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
              Rating:
              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
              >
                <option value="">Select a rating</option>
                <option value="1">1 - Very Dissatisfied</option>
                <option value="2">2 - Dissatisfied</option>
                <option value="3">3 - Neutral</option>
                <option value="4">4 - Satisfied</option>
                <option value="5">5 - Very Satisfied</option>
              </select>
            </label>
            <label>
              Comments:
              <textarea
                name="comments"
                value={formData.comments}
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

export default FeedbackForm;
