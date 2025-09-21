import React, { useState } from "react";
import "./ProjectComp.css";

const ProjectComp = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Site vitrine for cleaning company",
      category: "web",
      img: "./assets/image/jo.png",
      link: "https://jovanek.com/",
    },
    {
      id: 2,
      title: "Avenir Soccer",
      category: "web",
      img: "./assets/image/av.png",
      link: "https://avenirsoccer.com/",
    },
    {
      id: 3,
      title: "Ecommerce Website",
      category: "web",
      img: "./assets/image/kool.png",
      link: "https://www.koolmarket.tg/",
    },
     {
      id: 4,
      title: "Location Voiture",
      category: "web",
      img: "./assets/image/voiture.png",
      link: "https://design-voiture.vercel.app/",
    },
    {
      id: 5,
      title: "Food Order App",
      category: "mobile",
      img: "./assets/image/Home.png",
      link: "https://github.com/vignonGilbert/Chef_api",
    },
     {
      id: 6,
      title: "Farm web design",
      category: "design",
      img: "./assets/image/fig.jpg",
      link: "https://www.figma.com/proto/PIQ0kmlefgrSpCyK2lToWT/Untitled?node-id=1-2&starting-point-node-id=1%3A2",
    },
    {
      id: 7,
      title: "Organic web design",
      category: "design",
      img: "./assets/image/figm.png",
      link: "https://www.figma.com/proto/Wv53w6wOMMJ4b7D9jZuYGj/Figma-basics?node-id=602-12&t=ghMqG1y0sJC9GuXf-1",
    },
  ];

  // Filter projects based on selected category
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="project-section">
      <div className="tete">
        <h1>
          My <span>Work</span>
        </h1>
        <p>
          Some of my recent projects showcasing my skills in web and mobile
          development.
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("web")}>Web</button>
        <button onClick={() => setFilter("mobile")}>Mobile</button>
        <button onClick={() => setFilter("design")}>Design</button>
        <button onClick={() => setFilter("video")}>Video Motion</button>
      </div>

      {/* PORTFOLIO LIST */}
      <div className="portfolio">
        {filteredProjects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project.img} alt={project.title} />
            </a>
            <div className="portfolio-card-infos">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                {project.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectComp;
