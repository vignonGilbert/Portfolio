import React from "react";
import '../About/About.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import AboutCop from "../../Components/About/AboutCop";


const About =()=>{
    return(
        <>
      <Navbar/>
     <div className="container-about">
        <AboutCop/>
        
        
     
         </div>
         <Footer/>
        
         
      
       
     </>
        
    );
};
export default About