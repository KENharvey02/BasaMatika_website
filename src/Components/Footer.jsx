import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} alt="BasaMatika logo" className="footer-logo" />
          <p>Practice basic Filipino reading and counting through simple games.</p>
        </div>

        <div className="footer-links">
          <h6>Quick Links</h6>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#download">Download</a>
        </div>

        <div className="footer-contact">
          <h6>Contact</h6>
          <a href="mailto:youremail@example.com">youremail@example.com</a>
        </div>
      </div>

      <p className="footer-copy">
        © 2026 BasaMatika. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;