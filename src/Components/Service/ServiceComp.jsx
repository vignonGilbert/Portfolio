import React from "react";
import "./ServiceComp.css";

const ServiceComp = () => {
  return (
    <section id="services" className="service-section">
      <div className="service-header">
        <h1 style={{ color: "#f9a826" ,fontSize:"2.5rem", textAlign:"center",marginBottom:"1.5rem"}}>
          My <span>Services</span>
        </h1>
        <p style={{ textAlign: "center" }}>
          I specialize in Web and Mobile Development with a passion for creating
          clean, efficient, and user-friendly digital solutions.
        </p>
      </div>

      <div className="service-cards">
        <div className="service-card">
          <h2>Web Development</h2>
          <p>
            Designing, building, and maintaining responsive websites and web
            applications. Includes frontend and backend development.
          </p>
        </div>

        <div className="service-card">
          <h2>Mobile Development</h2>
          <p>
            Creating applications for mobile devices like smartphones and tablets
            that are functional, smooth, and user-friendly.
          </p>
        </div>

        <div className="service-card">
          <h2>UI & UX Design</h2>
          <p>
            Crafting intuitive user interfaces and delightful experiences that
            make digital products enjoyable and easy to use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceComp;
