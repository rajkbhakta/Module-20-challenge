import React from "react";
import "./AboutMe.css";
import "./Contact.css"

function Contact() {
  return (
    <div className="about-me-containerr">
      <form className=" contact-container">
        <label>Name: <input type="text" /></label>

        <label>email: <input type="email" /></label>
        
        <label>Message: <textarea type="textarea" /></label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
