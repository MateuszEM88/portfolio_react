import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import hamburger from "../navbar/square.png";
import { useRef } from "react";
import DarkMode from "../darkMode/DarkMode";

function Navbar() {
  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("toggle");
  };
  return (
    <div className="navigation-container">
      <h1 className="logo">
        <a href="#">logo</a>
      </h1>
      <DarkMode />
      <div className="hamburger-logo">
        <h1 className="logo2">logo</h1>
        <img
          className="hamburger-icon"
          onClick={showNav}
          src={hamburger}
          alt="menu icon"
        />
      </div>
      <nav ref={navRef}>
        <li className="navigation-item">
          <Link
            className="link"
            to="home"
            onClick={showNav}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="navigation-item">
          <Link
            className="link"
            to="portfolio"
            onClick={showNav}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li className="navigation-item">
          <Link
            className="link"
            to="about"
            onClick={showNav}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="navigation-item">
          <Link
            className="link"
            to="skills"
            onClick={showNav}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="navigation-item">
          <Link
            className="link"
            to="contact"
            onClick={showNav}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </nav>
    </div>
  );
}

export default Navbar;
