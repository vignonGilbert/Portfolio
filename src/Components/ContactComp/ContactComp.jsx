import React, { useRef } from "react";
import emailjs from "emailjs-com";
import './ContactComp.css';

const ContactComp = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_h5fx1e9",   // Replace with your EmailJS Service ID
      "template_73drs66",  // Replace with your EmailJS Template ID
      form.current,
      "y1wfYdZ8pMqxl42bY"    // Replace with your EmailJS Public Key
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        e.target.reset(); // Clear form fields
      },
      (error) => {
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for projects, opportunities, or a chat.</p>
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-card">
            <h3>Email</h3>
            <p>agbekponouv@gmail.com</p>
          </div>
          <div className="info-card">
            <a href="https://github.com/vignonGilbert" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: "white" }}>
              <h3>GitHub</h3>
              <p>vignonGilbert</p>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="name-container">
              <input type="text" name="firstname" placeholder="First Name" required />
              <input type="text" name="lastname" placeholder="Last Name" required />
            </div>
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows={4} required />
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComp;
