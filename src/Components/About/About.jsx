import React from "react";
import "./About.css";
import ProfileImg1 from "/public/Images/profile-img1.jpg";
import ProfileImg2 from "/public/Images/profile-img2.jpg";
import Resume from "/src/assets/Front End Resume 2023.pdf";

function About() {
  return (
    <div className="about-section">
      <div className="about-wrapper">
        <div className="about-container">
          <div className="about-content">
            <h1 className="about-heading">About Me!</h1>
            <p className="about-text">
              I'm a new junior front-end developer with open-minded. I'm
              passionate about web application development and eager to
              specialize in the field.Known for being a fast learner,
              detail-oriented, and a team player. I aspire toward a career that
              will allow me to craft beautiful software and engaging
              experiences. I love learning new and better ways to create
              seamless user experiences with clean and efficient code. I'm
              prepared to take on challenges and always looking for
              opportunities to work with those who are willing to share their
              knowledge.
            </p>
            <p className="about-text">
              When I'm not on the computer, I enjoy discovering a new song,
              running, and Aquarium fish farming.
            </p>
            <a href={Resume} target="_blank" className="resume-btn">
              Check out my resume
            </a>
          </div>
          <div className="about-profile-card">
            <div className="profile-img-wrapper">
              <img
                src={ProfileImg2}
                alt="Profile-Img2"
                className="profile-img2"
              />
              <img
                src={ProfileImg1}
                alt="Profile-Img1"
                className="profile-img1"
              />
              <div className="profile-img-outline"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
