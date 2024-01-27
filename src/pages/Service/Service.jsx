import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ServiceComp from "../../Components/Service/ServiceComp";

const Service =()=>{
    return(
            <>
             <Navbar/>
        <div className="container-Project">
       
        <ServiceComp/>
        
     
         </div>
         <Footer/>
            </>
    )
}
export default Service