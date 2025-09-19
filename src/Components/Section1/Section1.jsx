import React from "react";
import './Section1.css'

import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import {motion}from "framer-motion";

const Section1 =()=>{
   
    return(
        <>
           <section className="Section1-container">
            <div className="Section1-content">
             <div className="animation">
             <ReactTyped
                strings={[
                    "I' m Komlan, FULL STACK DEVELOPER With experience in  creation numrique",
                    "CREATING MODERN, RESPONSIVE, AND BEAUTIFUL WEB AND MOBILE EXPERIENCES",
                ]}
                typeSpeed={90}
                backSpeed={50}
                loop
                >
     
             </ReactTyped>
             </div>
              
             
               <motion.p
                initial={{x:100,opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{
                   delay:1,
                   x:{type:"spring",stiffness:60},
                   opacity:{duration:1},
                   ease:"easeIn",
                   duration:1,
                }}
               
               >
              Full-stack developer with a License in Software Engineering from Togo, a Diploma in Software Engineering from Centennial College, and a Certificate in Digital Creation from UQAT, Canada. Fluent in French and English, passionate about building modern, responsive web and mobile experiences, and looking for opportunities to grow my career while continuing to learn 

               </motion.p>
                
              
                <div className="btn">
                <a href="/doc.pdf" download className="contact-btn">
                Hire Me
                </a>              
                  <a href="#contact" className="contact-btn" smooth={true} duration={500} offset={-70}>Let's Talk</a>
               

                </div>
                

            </div>
            <div className="Section1-img">
                <div>
                    <div className="tech-icon">
                        <motion.img
                        initial={{x:100,opacity:0}}
                        whileInView={{x:0, opacity:1}}
                         src="./assets/image/electric_5935926.png" alt=""/>
                    </div>
                    <div className="image">
                    <motion.img
                     initial={{x:100,opacity:0}}
                     animate={{x:0, opacity:1}}
                     transition={{
                        delay:0.2,
                        x:{type:"spring",stiffness:60},
                        opacity:{duration:1},
                        ease:"easeIn",
                        duration:1,
                     }}
                     src="./assets/image/2428085.jpg" alt=""/>
                     </div>
                </div>
                   
                <motion.div
                 initial={{y:-100,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{
                    delay:0.4,
                    x:{type:"spring",stiffness:60},
                    opacity:{duration:1},
                    ease:"easeIn",
                    duration:1,}}>
                    <div className="tech-icon">
                        <img
                       
                        src="./assets/image/css-3_5968242.png"/>
                    </div>

                    <div className="tech-icon">
                        <img src="./assets/image/file_718127.png"/>
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/image/html-5_919827.png"/>
                    </div>
                  
                </motion.div>

            </div>
        </section>
        </>
    );
}

export default Section1;