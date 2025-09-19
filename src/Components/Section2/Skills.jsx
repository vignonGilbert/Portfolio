import React, { useState } from "react";
import './Skills.css'
import {SKILLS} from "../../data/data";
import SkillCard from "./SkillCard/SkillCard";
import SkillInfoCard from "./SkillinfoCard/skillInfoCard";
import {motion}from "framer-motion";


const Skills =()=>{

  const [selectedSkill,setSelectedSkill]=useState(SKILLS[0]);

  const handleSelectSkill = (data)=>{
  setSelectedSkill(data);
  }
    return(
      <section className="skills-container">
        <motion.h5
          initial={{y:100,opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{
             delay:1,
             x:{type:"spring",stiffness:60},
             opacity:{duration:1},
             ease:"easeIn",
             duration:1,}}
        > Technical Proficiency </motion.h5>

        <div className="skills-content">

        <motion.div
          initial={{y:-100,opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{
             delay:0.4,
             x:{type:"spring",stiffness:60},
             opacity:{duration:1},
             ease:"easeIn",
             duration:1,}}
         className="skills">
            {SKILLS.map((item)=>(
              <SkillCard 
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={()=>{
                handleSelectSkill(item);
              }}
              />
            )
                

            )}
            
        </motion.div>



        <motion.div
         initial={{y:-100,opacity:0}}
         whileInView={{y:0, opacity:1}}
         transition={{
            delay:0.4,
            x:{type:"spring",stiffness:60},
            opacity:{duration:1},
            ease:"easeIn",
            duration:1,}} className="skills-info"> 
        <SkillInfoCard
        heading={selectedSkill.title}
        skills={selectedSkill.skills}/>
        
        </motion.div>


        </div>
      </section>
    )
       
    
}
export default Skills
