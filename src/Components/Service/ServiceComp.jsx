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
          <p>  I specialize in providing Web,Mobile Developpement. 
            With a passion , 
            I offer the following services to help your goals</p>
         
        </div>
        <div className="contentcarte">
          <div className="carte">
            <img src="./assets/image/icone-de-codage.png" alt=""/>
            <h2> Web Developpement</h2>
            <p> Web development involves the design, creation,
               and maintenance of websites and web applications.
               and backend development, handling server-sids
               
            </p>
          </div>
          <div className="carte">
            <img src="./assets/image/icone-de-codage.png" alt=""/>
            <h2> Mobile Developpement</h2>
            <p> Mobile development involves designing and
               creating applications for mobile devices such as smartphones and tablets. 
               
            </p>
          </div>
          <div class="carte">
            <img src="./assets/image/icone-de-codage.png" alt=""/>
            <h2> UI & UX</h2>
            <p> LUI (User Interface) and UX (User Experience) 
              are crucial aspects of designing digital products,
               emphasizing the interaction and overall satisfaction of users.
              
            </p>
          </div>

          
        </div>

      </section>

        </>
    )
}
export default ServiceComp