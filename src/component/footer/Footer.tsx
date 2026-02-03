import React from 'react'
import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h3>MVA Constructions</h3>
          <p className="description">
            Building quality infrastructure with trust, innovation, and
            excellence.
          </p>
          <p className="copyright">
            © {currentYear} · All rights reserved by MVA Constructions
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>Contact Us</h4>
          <p>📧 mvaconstructioninfratech@gmail.com</p>
          <p>📞 +91 9123497478</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer