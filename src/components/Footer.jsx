// Footer.jsx
import React from 'react';
import '../assets/css/footer.css';
import { FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Divya Sri. All rights reserved.</p>
        <div className="footer-icons">
          <a href="https://github.com/divyasrib06" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/divya-sri-bevara/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:divyasribevara@yahoo.com"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
