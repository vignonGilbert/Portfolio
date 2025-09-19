import React from "react";
import "./ProjectComp.css";

const ProjectComp = () => {
  return (
    <section id="projects" className="project-section">
      <div className="tete">
        <h1>
          My <span>Work</span>
        </h1>
        <p>Some of my recent projects showcasing my skills in web and mobile development.</p>
      </div>

      <div className="portfolio">
        <div className="portfolio-card">
          <a href="https://jovanek.com/" target="_blank" rel="noopener noreferrer">
            <img src="./assets/image/jo.png" alt="Ecommerce Website" />
          </a>
          <div className="portfolio-card-infos">
            <a href="https://jovanek.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>Site vitrine for cleaning company</a>
          </div>
        </div>

        <div className="portfolio-card">
          <a href="https://avenirsoccer.com/" target="_blank" rel="noopener noreferrer">
            <img src="./assets/image/av.png" alt="Project 2" />
          </a>
          <div className="portfolio-card-infos">
            <a href="https://avenirsoccer.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>Avenir Soccer</a>
          </div>
        </div>

        <div className="portfolio-card">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="./assets/image/kool.png" alt="Real Estate" />
          </a>
          <div className="portfolio-card-infos">
            <a href="https://www.koolmarket.tg/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>Ecommerce Website</a>
          </div>
        </div>

        <div className="portfolio-card">
          <a href="https://github.com/vignonGilbert/Chef_api" target="_blank" rel="noopener noreferrer">
            <img src="./assets/image/Home.png" alt="Food Order App" />
          </a>
          <div className="portfolio-card-infos">
            <a href="https://github.com/vignonGilbert/Chef_api" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>Food Order App</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectComp;
