import React from "react";
import "./ProjectComp.css"

const ProjectComp =()=>{
    return(
        <>
            <section className="header-image">

                <div className="me"> 
                    <h2> PROJECT</h2>
                    <p>My futur project and new </p>
                    
                </div>


          </section>
          <div className="tete">
          <h1> My <span>WORK</span></h1>
          <p> 
            sit amet consectetur adipisicing elit. Commodi, nisi.</p>
          </div>
        <section className="portfolio">
         
        
            <div className="portfolio-card">
    <a href="#"><img src="./assets/image/p1.jpg" alt=""/></a>
    <div className="portfolio-card-infos">
      <h3>ECOMMERCE WEBSITE</h3>
    </div>
  </div>
  <div className="portfolio-card">
    <a href="#"><img src="./assets/image/p3.jpg" alt=""/></a>
    <div className="portfolio-card-infos">
      <h3>SEE PROJECT</h3>
    </div>
  </div>
  <div className="portfolio-card">
    <a href="#"><img src="./assets/image/p2.jpg" alt=""/></a>
    <div className="portfolio-card-infos">
      <h3>REAL EASTE </h3>
    </div>
  </div>
  <div className="portfolio-card">
    <a href="#"><img src="./assets/image/p1.jpg" alt=""/></a>
    <div className="portfolio-card-infos">
      <h3>RESTAURATION FOOD ORDER</h3>
     

    </div>
  </div>
  
  
        </section>
        </>
    );
};
export default ProjectComp