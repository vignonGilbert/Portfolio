import React, { useState } from "react";
import './Navbar.css';
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./assets/image/4913181.png" alt="logo" />

          <ul>
            <li>
              <Link to="home" smooth={true} duration={800} offset={-80} className="menu-item" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={800} offset={-80} className="menu-item" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={800} offset={-80} className="menu-item" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={800} offset={-80} className="menu-item" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={800} offset={-80} className="menu-item" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <a className="contact-btn" href="/cv.pdf" download="My resume">Hire Me</a>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-symbols-outlined" style={{ fontSize: "1.8rem" }}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
