import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import EnquiryForm from '../Forms/Enquiryform';
import FeedbackForm from '../Forms/Feedbackform';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const popupRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setShowEnquiry(false);
        setShowFeedback(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="navbar-logo">
          <h1>Diesel Care</h1>
        </div>

        <nav className="navbar-links">
          <ul className="navbar-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="navbar-buttons">
          <button className="btn-login" onClick={() => setShowEnquiry(true)}>Enquiry</button>
          <button className="btn-feedback" onClick={() => setShowFeedback(true)}>Feedback</button>
        </div>

        <button className="menu-icon" onClick={toggleMenu}>
          <span>{menuOpen ? '✕' : '☰'}</span>
        </button>

        {menuOpen && (
          <div className="popup-overlay" ref={popupRef}>
            <nav className="popup-menu">
              <ul>
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                <li><button onClick={() => { setShowEnquiry(true); toggleMenu(); }}>Enquiry</button></li>
                <li><button onClick={() => { setShowFeedback(true); toggleMenu(); }}>Feedback</button></li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {showEnquiry && <EnquiryForm onClose={() => setShowEnquiry(false)} />}
      {showFeedback && <FeedbackForm onClose={() => setShowFeedback(false)} />}
    </>
  );
};

export default Navbar;
