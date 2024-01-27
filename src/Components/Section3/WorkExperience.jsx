import React, { useRef } from "react";
import './WorkExperience.css'
import { Experiences } from "../../data/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";


const WorkExperience = ()=>{
    const sliderRef = useRef();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 768, // Adjust breakpoint as needed
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
      };
    return(
        <section className="experience-container">

            <h5>Work Experience</h5>

            <div className="experience-content">
            <Slider ref={sliderRef}{...settings}>
             {Experiences.map((item)=>(

            
                <ExperienceCard key={item.title} details={item}/>
                
             ))}
             </Slider>

            </div>
        </section>
    )
}
export default WorkExperience