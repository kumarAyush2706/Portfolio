import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer_container container">
        {/* Main Footer Content */}
        <div className="footer_content">
          {/* Brand Section */}
          <div className="footer_brand">
            <h2 className="footer_title">Ayush Kumar</h2>
            <p className="footer_subtitle">Mern Stack Developer</p>
            <p className="footer_description">
              Passionate about creating innovative web solutions and turning ideas into reality through code.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer_section">
            <h3 className="footer_section_title">Quick Links</h3>
            <ul className="footer_list">
              <li>
                <a href="#home" className="footer_link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="footer_link">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="footer_link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#services" className="footer_link">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="footer_link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#qualification" className="footer_link">
                  Qualifications
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer_section">
            <h3 className="footer_section_title">Services</h3>
            <ul className="footer_list">
              <li>
                <a href="#services" className="footer_link">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="footer_link">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="footer_link">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#services" className="footer_link">
                  Database Design
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer_section">
            <h3 className="footer_section_title">Get In Touch</h3>
            <div className="footer_contact">
              <div className="footer_contact_item">
                <i className="uil uil-envelope-alt"></i>
                <span>a.kumarayush2706@gmail.com</span>
              </div>
              <div className="footer_contact_item">
                <i className="uil uil-map-marker"></i>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="footer_social_section">
          <div className="footer_social">
            <a
              href="https://www.instagram.com/ayush.sharma__03/"
              className="footer_social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://facebook.com/"
              className="footer_social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://github.com/kumarAyush2706"
              className="footer_social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="uil uil-github-alt"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-kumar-851302246/"
              className="footer_social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer_bottom">
          <div className="footer_line"></div>
          <div className="footer_copyright">
            <span className="footer_copy">
              © {currentYear} Ayush Kumar. All rights reserved.
            </span>
            <div className="footer_legal">
              <a href="#" className="footer_legal_link">Privacy Policy</a>
              <span className="footer_legal_separator">•</span>
              <a href="#" className="footer_legal_link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
