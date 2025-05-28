import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Company Info */}
        <div>
          <h3 className="footer-title">
            <span style={{ color: '#28A030' }}>C</span>UBA
            <span style={{ color: '#28A030' }}> N</span>O
            <span style={{ color: '#28A030' }}>W</span>
          </h3>
          <p className="footer-desc">
            The Ultimate Ivy-League Summer Camp & Resilience Training Hub in the Heart of Cuba.
          </p>
          <p className="footer-small">
            Transforming ambitious students into globally-aware leaders since 2020.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4 className="footer-section-title">Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/plans">Plans & Pricing</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-links">
          <h4 className="footer-section-title">Resources</h4>
          <ul>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/book-consultation">Book Consultation</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="footer-section-title">Contact Us</h4>
          <div>
            <p className="footer-desc">admissions@cubanowexperience.com</p>
            <p className="footer-desc">adersh@cubanowexperience.com</p>
            <p className="footer-desc">📞 +861 73280 89948</p>
            <p className="footer-desc">🏢 123 Education Plaza<br />Miami, FL 33101</p>
            <p className="footer-desc">🕒 Mon-Fri 9AM-6PM EST</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-8" style={{ borderTop: '1px solid #444', marginTop: '2rem' }}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="footer-small mb-4 md:mb-0">
            © 2025 CUBA NOW. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="footer-small">Privacy Policy</a>
            <a href="#" className="footer-small">Terms of Service</a>
            <a href="#" className="footer-small">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;