import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer >
          <h4>Copyright © 2sam-Therapie</h4> 
          <ul className="social-links">
        <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
        <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
        <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
        <li><a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a></li>
      </ul>
    </footer>
  );
};

export default Footer;
