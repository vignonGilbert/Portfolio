import React from "react";
import './Section1.css'
const Section1 =()=>{
    return(
        <section className="Section1-container">
            <div className="Section1-content">
                
                <h2>Building Digital Experiences That Inspire </h2>
                <p>Passionate Frontend Developer | Transforming  Ideas into 
                    Seamless and Visually Stunning web Solutions
                </p>

            </div>
            <div className="Section1-img">
                <div>
                    <div className="tech-icon">
                        <img src="./assets/image/electric_5935926.png" alt=""/>
                    </div>
                    <div className="image">
                    <img src="./assets/image/2428085.jpg" alt=""/>
                     </div>
                 </div>
                   
                <div>
                    <div className="tech-icon">
                        <img src="./assets/image/css-3_5968242.png"/>
                    </div>

                    <div className="tech-icon">
                        <img src="./assets/image/file_718127.png"/>
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/image/html-5_919827.png"/>
                    </div>
                  
                </div>

            </div>
        </section>
    );
}

export default Section1;