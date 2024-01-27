import React from "react";
import "./MobileNav.css";

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
                        <a className="menu-item" href="https://guileless-marigold-6c0ebc.netlify.app/">Home</a>
                    </li>
                    <li>
                        <a className="menu-item" href="https://guileless-marigold-6c0ebc.netlify.app/about">Skills</a>
                    </li>
                    <li>
                        <a className="menu-item">work experience</a>
                    </li>
                    <li>
                        <a className="menu-item">Contact Me</a>
                    </li>

                    <button className="contact-btn" onClick={()=>{}}> Hire Me </button>

                </ul>
            </div>

       </div>
    
    
    </>
    );
};
export default MobileNav;