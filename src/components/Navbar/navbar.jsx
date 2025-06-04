import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import EnquiryForm from '../Contact/Enquiryform';
import FeedbackForm from '../Feedback/FeedbackForm';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const popupRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const handleEnquiryClick = () => {
    setShowEnquiry(true);
    setShowFeedback(false);
  };

  const handleFeedbackClick = () => {
    setShowFeedback(true);
    setShowEnquiry(false);
  };

  const closePopup = () => {
    setShowEnquiry(false);
    setShowFeedback(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        !event.target.classList.contains('menu-icon')
      ) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        closePopup();
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
      <header className="navbar" role="banner">
        <div className="navbar-logo" tabIndex="0">
          <h1>Diesel Care</h1>
        </div>

        <nav className="navbar-links" role="navigation" aria-label="Primary">
          <ul className="navbar-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="navbar-buttons">
          <button className="btn-login" onClick={handleEnquiryClick}>Enquiry</button>
          <button className="btn-feedback" onClick={handleFeedbackClick}>Feedback</button>
        </div>

        <button
          className="menu-icon"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          <span>{menuOpen ? '✕' : '☰'}</span>
        </button>

        {menuOpen && (
          <div className="popup-overlay" role="dialog" aria-modal="true" id="mobile-menu">
            <nav className="popup-menu" ref={popupRef}>
              <ul>
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                <li><button className="btn-login" onClick={handleEnquiryClick}>Enquiry</button></li>
                <li><button className="btn-feedback" onClick={handleFeedbackClick}>Feedback</button></li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {showEnquiry && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <EnquiryForm onClose={closePopup} />
          </div>
        </div>
      )}

      {showFeedback && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FeedbackForm onClose={closePopup} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
