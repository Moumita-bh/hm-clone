import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Shop Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Shop</h4>
          <ul className="footer-links">
            <li><a href="#!">Ladies</a></li>
            <li><a href="#!">Men</a></li>
            <li><a href="#!">Baby</a></li>
            <li><a href="#!">Kids</a></li>
            <li><a href="#!">Home</a></li>
            <li><a href="#!">Magazine</a></li>
          </ul>
        </div>

        {/* Corporate Info Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Corporate Info</h4>
          <ul className="footer-links">
            <li><a href="#!">Career at H&M</a></li>
            <li><a href="#!">About H&M Group</a></li>
            <li><a href="#!">Sustainability H&M Group</a></li>
            <li><a href="#!">Press</a></li>
            <li><a href="#!">Investor relations</a></li>
            <li><a href="#!">Corporate governance</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="footer-section">
          <h4 className="footer-heading">Help</h4>
          <ul className="footer-links">
            <li><a href="#!">Customer Service</a></li>
            <li><a href="#!">My H&M</a></li>
            <li><a href="#!">Find a store</a></li>
            <li><a href="#!">Legal & privacy</a></li>
            <li><a href="#!">Contact</a></li>
            <li><a href="#!">Report a scam</a></li>
            <li><a href="#!">Cookie Notice</a></li>
            <li><a href="#!">Cookie Settings</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter-section">
          <p>
            Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!
          </p>
          <a href="#!" className="footer-read-more">Read more →</a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="footer-social">
        <ul className="social-icons">
          <li><a href="#!" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#!" aria-label="TikTok"><i className="fab fa-tiktok"></i></a></li>
          <li><a href="#!" aria-label="Spotify"><i className="fab fa-spotify"></i></a></li>
          <li><a href="#!" aria-label="YouTube"><i className="fab fa-youtube"></i></a></li>
          <li><a href="#!" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a></li>
          <li><a href="#!" aria-label="Facebook"><i className="fab fa-facebook"></i></a></li>
        </ul>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.</p>
        <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/db/e9/f5/dbe9f584-d8b7-3170-032b-412f6503ef3e/AppIcon-1x_U007emarketing-0-7-0-85-220-0.png/1200x600wa.png" alt="H&M Logo" className="footer-logo" />
        <p>INDIA | Rs.</p>
      </div>
    </footer>
  );
}

export default Footer;
