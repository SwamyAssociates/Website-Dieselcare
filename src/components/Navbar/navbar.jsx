import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const popupRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Close menu on outside click or ESC key
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target) && !event.target.classList.contains('menu-icon')) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  return (
    <header className="navbar" role="banner">
      <div className="navbar-logo" tabIndex="0">
        <h1> Diesel Care</h1>
      </div>

      <nav className="navbar-links" role="navigation" aria-label="Primary">
        <ul className="navbar-list">
          <li><a href="#home" tabIndex={menuOpen ? 0 : -1}>Home</a></li>
          <li><a href="#services" tabIndex={menuOpen ? 0 : -1}>Services</a></li>
          <li><a href="#about" tabIndex={menuOpen ? 0 : -1}>About Us</a></li>
          <li><a href="#contact" tabIndex={menuOpen ? 0 : -1}>Contact</a></li>
        </ul>
      </nav>

      <div className="navbar-buttons">
        <button className="btn-login" aria-label="Make an enquiry">Enquiry</button>
        <button className="btn-feedback" aria-label="Provide feedback">Feedback</button>
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
              <li><button className="btn-login" onClick={toggleMenu}>Enquiry</button></li>
              <li><button className="btn-feedback" onClick={toggleMenu}>Feedback</button></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
