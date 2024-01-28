import React from "react";
import "./ContactComp.css"
import { useNavigate } from "react-router-dom";


const ContactComp =()=>{
    const navigate = useNavigate();
  
        
    return(
        <>
          <section className="header-image">

            <div className="me"> 
                <h2> Contact Me</h2>
                <p>Welcome to our contact page! We value your feedback, inquiries, and collaboration opportunities.</p>
                
            </div>


        </section>
        <section className="contact-content">
            <div className="contact-email">

                 <div className="email-card">
                    <img src="./assets/image/e-mail.png" alt=""/>
                    <p>agbekponouv@gmail.com</p>

                 </div>

                 <div className="email-card">
                 <img src="./assets/image/github_536452.png" alt=""/>
                    <p>vignonGilbert</p>
                 </div>

            </div>

            <div className="forms">

                <form >
                    <div className="name-container">
                        <input type="text" name="firstname" placeholder="first name"/>
                        <input type="text" name="lastname" placeholder="last name"/>
                    </div>
                    <input type="email" name="email" placeholder="Email"/>
                    <textarea type="text" name="message" placeholder="Message" rows={3}/>

                    <button onClick={()=>navigate("/")} className="contact-btn">Send Message</button>
                </form>

                

            </div>


        </section>
        </>
    )
}
export default ContactComp;