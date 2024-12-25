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
        ></i>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li
           className="anchor-link" href="#Home">
           <a href=""> Home </a>
        
        </li>
        <li
         className="anchor-link" href="#About">
           <a href="">About</a> 
        
        </li>
        <li
         className="anchor-link" href="#Services">
           <a href="">Services</a> 
        
        </li>
        <li
         className="anchor-link" href="#Projects">
            <a href=""> Projects</a>
          
        </li>
        <li
         className="anchor-link" href="#Contact">
          <a href="">Contact</a>  
        
        </li>
        <li
         className="anchor-link" href="#Footer">
          <a href="">Footer</a>  
        
        </li>
      </ul>

      <div className="social-icons">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://wa.me/1234567890"
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
