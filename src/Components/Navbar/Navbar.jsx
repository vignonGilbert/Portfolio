import React, { useState } from "react";
import './Navbar.css';
import MobileNav from "./MobileNav/MobileNav";

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
                        <a className="menu-item" href="/">HOME</a>
                    </li>
                    <li>
                        <a className="menu-item" href="/about">ABOUT ME</a>
                    </li>
                    <li>
                        <a className="menu-item" href="/project">PROJECT X </a>
                    </li>
                    <li>
                        <a className="menu-item" href="/service">SERVICE</a>
                    </li>
                    <li>
                        <a className="menu-item">CONTACT ME</a>
                    </li>

                    <button className="contact-btn" onClick={()=>{}}> Hire Me </button>
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