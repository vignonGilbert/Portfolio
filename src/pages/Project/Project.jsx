import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ProjectComp from "../../Components/Project/ProjectComp";

const Project =()=>{
    return(
        <>
      <Navbar/>
     <div className="container-Project">
       
        <ProjectComp/>
        
     
         </div>
         <Footer/>
        
         
      
       
     </>
        
    )
}
export default Project