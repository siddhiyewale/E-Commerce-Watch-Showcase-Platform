import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & Tagline */}
        <div className="footer-section">
          <h2 className="footer-logo">⌛ Eternal Hour</h2>
          <p>Timeless watches crafted for elegance and precision.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/cart">View Cart</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@eternalhour.in</p>
          <p>Phone: +91-123456789</p>
          <p>Address: Eternal Hour HQ, Sunshine Tower, Mumbai</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Eternal Hour. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
