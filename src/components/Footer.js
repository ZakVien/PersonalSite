import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Published Projects</h2>
            <a href="https://BaseCampUSA.org" target="_blank" rel="noreferrer">
              BaseCampUSA
            </a>
            <a
              href="https://zachsnacksecommerce.azurewebsites.net"
              target="_blank"
              rel="noreferrer"
            >
              Zach's Snacks
            </a>
            <a
              href="https://vienonen02611.pythonanywhere.com"
              target="_blank"
              rel="noreferrer"
            >
              Python Expense Tracking
            </a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Where's Zach?</h2>
            <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/in/zach-vienonen-31241b203"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
              LinkedIn
            </a>
            <a
              className="social-icon-link github"
              href="https://github.com/ZakVien"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
              GitHub
            </a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">Zach Vienonen © {year} </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
