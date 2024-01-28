import React from "react";
import './Contact.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ContactComp from "../../Components/ContactComp/ContactComp";

const Contact =()=>{
    return(
        <>
           <Navbar/>
          <div className="container-contact">
     
           <ContactComp/>
     
         </div>
         <Footer/>
        </>
    )
}
export default Contact