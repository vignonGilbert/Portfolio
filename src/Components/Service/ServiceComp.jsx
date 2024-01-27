import React from "react";
import "./ServiceComp.css"
const ServiceComp =()=>{
    return(
        <>
           <section className="header-image">

<div className="me"> 
    <h2>SERVICe</h2>
    <p>Loreti enim, consequatur doloremque distinctio!</p>
    
</div>


</section>
<section class="service">
        <div className="tete">
          <h1> My <span>service</span></h1>
          <p> Lorem ipsum dolor, sit amet consectetur  adipisicing elit. Commodi, nisi. 
            sit amet consectetur adipisicing elit. Commodi, nisi.</p>
         
        </div>
        <div className="contentcarte">
          <div className="carte">
            <img src="./assets/image/icone-de-codage.png" alt=""/>
            <h2> Web Developpement</h2>
            <p> Lorem ipsum dolor, sit amet 
              consectetur adipisicing elit. 
              Nulla repellat expedita nostrum veritatis vero modi
               
            </p>
          </div>
          <div className="carte">
            <img src="./assets/image/icone-de-codage.png" alt=""/>
            <h2> Web Developpement</h2>
            <p> Lorem ipsum dolor, sit amet 
              consectetur adipisicing elit. 
              Nulla repellat expedita nostrum veritatis vero modi
               
            </p>
          </div>
          <div class="carte">
            <img src="./assets/image/icone-de-codage.png" alt=""/>
            <h2> Web Developpement</h2>
            <p> Lorem ipsum dolor, sit amet 
              consectetur adipisicing elit. 
              Nulla repellat expedita nostrum veritatis vero modi
              
            </p>
          </div>

          
        </div>

      </section>

        </>
    )
}
export default ServiceComp