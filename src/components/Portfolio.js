import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-container">
       <div class="work" id="work-section">
      <div class="about-heading">
        <p>work</p>
      </div>
      <div class="about-paragraph">
        <div class="images-container">
          <div>
           <img src={require("./surf-report.jpg")} class="big-image" />
            <div class="box">
              <p>Surf Report</p>
              <p class="subtitle">Mern stack</p>
            </div>
          </div>
          <div class="small-image">
           <img src={require("./led-wall.jpg")} />
            <div class="box">
              <p>LED Wall</p>
              <p class="subtitle">Node/IoT</p>
            </div>
          </div>
          <div class="small-image">
           <img src={require("./calculator.jpg")} />
            <div class="box">
              <p>Calculator</p>
              <p class="subtitle">React/JavaScript/CSS</p>
            </div>
          </div>
          <div class="small-image">
           <img src={require("./pastel-puzzles.jpg")} />
            <div class="box">
              <p>Puzzles</p>
              <p class="subtitle">MERN Stack</p>
            </div>
          </div>
          <div class="small-image">
           <img src={require("./run-buddy.jpg")} />
            <div class="box">
              <p>Run Buddy</p>
              <p class="subtitle">HTML/CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-me" id="contact">
      <div class="about-heading">
        <p>Contact <br />Me</p>
      </div>
      <div class="about-paragraph">
        <ul class="contact-links">
          <li class="contact-item"><a href="#">555.555.555</a></li>
          <li class="contact-item"><a href="#">rajkbhakta@gmail.com</a></li>
          <li class="contact-item"><a href="https://github.com/rajkbhakta?tab=repositories">GitHub</a></li>
          
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Portfolio;
