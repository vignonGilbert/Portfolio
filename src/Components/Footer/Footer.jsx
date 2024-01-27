import React from "react";
import './Footer.css';

const Footer = ()=>{

     return(
        <footer >
         <div className="Footer-container">
         <div className="footer-reseau">
                     <div className="tech-icon2">
                        <img src="./assets/image/instagram.png"/>
                    </div>

                    <div className="tech-icon2">
                        <img src="./assets/image/linkedin.png"/>
                    </div>
                    <div className="tech-icon2">
                        <img src="./assets/image/youtube.png"/>
                    </div>
            </div>

            <div className="footer-right">
              <p>@ AGBEKKPONOU Komlan Vignon Gilbert Copyright</p>
            </div>

         </div>
            
        </footer>

     );
}
export default Footer;