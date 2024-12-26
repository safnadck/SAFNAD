import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        SA<span>F</span>NAD
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <i
          className={`fa-solid fa-bars-staggered ${isMenuOpen ? "hidden" : ""}`}
        ></i>
        <i
          className={`fa-solid fa-xmark ${isMenuOpen ? "visible" : "hidden"}`}
          onClick={toggleMenu}
        ></i>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li className="anchor-link">
          <a href="#Home">Home</a>
        </li>
        <li className="anchor-link">
          <a href="#About">About</a>
        </li>
        <li className="anchor-link">
          <a href="#Services">Services</a>
        </li>
        <li className="anchor-link">
          <a href="#Projects">Projects</a>
        </li>
        <li className="anchor-link">
          <a href="#Contact">Contact</a>
        </li>
        <li className="anchor-link">
          <a href="#Footer">Footer</a>
        </li>
      </ul>

      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/muhammed-safnad-ck-697317341/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/safnadck"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://wa.me/8086547891"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
