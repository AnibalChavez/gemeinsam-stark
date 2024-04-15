import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../Img/zyro-image-removebg-preview.png"

const Navbar = () => {
  return (
    <nav className="border-nav">
      <div className="navbar">
      <Link to="/">
      <img src={Logo} alt="Logo" />
      </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mein-person">Mein Person</Link>
        </li>
        <li>
          <Link to="/mein-team">Mein Team</Link>
        </li>
        <li>
          <Link to="/angebote">Angebote</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
