import React from "react";
import "./MobileNav.css";
import { Link } from "react-scroll";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
      <div className="mobile-menu-container" onClick={toggleMenu}>
        <img className="logo" src="./assets/image/e-mail.png" alt="logo" />

        <ul>
          <li>
            <Link
              to="home"
              className="menu-item"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className="menu-item"
              smooth={true}
              duration={500}
              offset={-70}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              className="menu-item"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="services"
              className="menu-item"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="menu-item"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Contact
            </Link>
          </li>

          <a
            className="contact-btn"
            href="./assets/image/doc.pdf"
            download="MyResume.pdf"
          >
            Hire Me
          </a>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
