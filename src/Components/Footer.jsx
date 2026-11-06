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
          {/* 
            This custom URL forces the browser to open Gmail directly 
            and start a new draft addressed to your team.
          */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=basamakita.officail@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            basamakita.officail@gmail.com
          </a>
        </div>
      </div>

      <p className="footer-copy">
        © 2026 BasaMatika. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;