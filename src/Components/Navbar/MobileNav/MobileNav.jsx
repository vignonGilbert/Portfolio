import React from "react";
import "./MobileNav.css";
import { Link } from 'react-router-dom';


const MobileNav = ({isOpen, toggleMenu})=>{
    return(
        <>
       <div
         className={`mobile-menu ${isOpen ? "active" : ""}`}
         onClick={toggleMenu}>

            <div className="mobile-menu-container">
                <img className="logo" src="./assets/image/e-mail.png" alt=""/>

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

                    <button className="contact-btn" onClick={()=>{}}> Hire Me </button>

                </ul>
            </div>

       </div>
    
    
    </>
    );
};
export default MobileNav;