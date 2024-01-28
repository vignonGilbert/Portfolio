import React, { useState } from "react";
import './Navbar.css';
import MobileNav from "./MobileNav/MobileNav";
import { Link } from 'react-router-dom';



const Navbar =() =>{
    const [openMenu, setOpenMenu]=useState(false);
    const toggleMenu=() => {
        setOpenMenu(!openMenu);
    };
    return(
        <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
        <nav className="nav-wrapper">
            <div className="nav-content">

               <img className="logo" src="./assets/image/4913181.jpg" alt=""/>

           
                <ul>
                    <li>
                    <Link to="/" className="menu-item">Home</Link>  
                    </li>
                    <li>
                    <Link to="/about" className="menu-item"> About</Link>  
                    </li>
                    <li>
                     <Link to="/project" className="menu-item">PROJECT X </Link>
                    </li>
                    <li>
                    <Link to="/service" className="menu-item">SERVICE</Link>
                    </li>
                    <li>
                    <Link to="/contact" className="menu-item">CONTACT ME</Link>
                    </li>

                    <a className="contact-btn" href="doc.pdf" download="icon.pdf"> Hire Me </a>
                </ul>
                <button className="menu-btn" onClick={toggleMenu}>
            <span className={"material-symbols-outlined"}  style={{ fontSize: "1.8rem" }}> {openMenu ? "close":"menu"} </span>
            
        </button>
           </div>
          
           

        </nav>
        
        </>
    )
}
export default Navbar;