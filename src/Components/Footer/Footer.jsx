import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Ayush</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              skills
            </a>
          </li>
          <li>
            <a href="#services" className="footer_link">
              Services
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer_link">
              Qualifications
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://www.instagram.com/ayush.sharma__03/"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://facebook.com/"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://github.com/kumarAyush2706"
            className="footer_social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://twitter.com/"
            className="footer_social-link"
            target="_blank"
          >
            <i className="uil uil-twitter"></i>
          </a>
        </div>
        <span className="footer_copy">&#169; Archer_code. All rigths reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
