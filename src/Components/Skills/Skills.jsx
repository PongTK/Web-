import React from "react";
import "./Skills.css";
import HTMLLogo from "/public/Images/HTML5-logo.png";
import CSSLogo from "/public/Images/CSS3-logo.png";
import JavaScriptLogo from "/public/Images/javascript-logo.png";
import ReactLogo from "/public/Images/React-icon.png";
import ViteLogo from "/public/Images/Vitejs-logo.png";
import TailwindLogo from "/public/Images/Tailwind-CSS-Logo.png";
import GitLogo from "/public/Images/Git-icon.png";
import GithubLogo from "/public/Images/github-logo.png";
import FigmaLogo from "/public/Images/Figma-logo.png";
import MySQLLogo from "/public/Images/mysql-logo.png";
import NodejsLogo from "/public/Images/nodejs-logo.png";
import DockerLogo from "/public/Images/docker-logo.png";

function Skills() {
  return (
    <div className="skills-section">
      <div className="skills-wrapper">
        <h1 className="skill-heading">Skills</h1>
        <p className="skill-text">
          I'm always eager to learn more in this fast paced industry.
        </p>
        <p className="skill-text">Some technologies I've worked with:</p>
        <div className="skill-container">
          <span className="skill-content">
            <img src={HTMLLogo} alt="HTMLLogo" className="HTMLLogo" />
          </span>
          <span className="skill-content">
            <img src={CSSLogo} alt="CSSLogo" className="CSSLogo" />
          </span>
          <span className="skill-content">
            <img
              src={JavaScriptLogo}
              alt="JavaScriptLogo"
              className="JavaScriptLogo"
            />
          </span>
          <span className="skill-content">
            <img src={ReactLogo} alt="ReactLogo" className="ReactLogo" />
          </span>
          <span className="skill-content">
            <img src={ViteLogo} alt="ViteLogo" className="ViteLogo" />
          </span>
          <span className="skill-content">
            <img
              src={TailwindLogo}
              alt="TailwindLogo"
              className="TailwindLogo"
            />
          </span>
          <span className="skill-content">
            <img src={MySQLLogo} alt="MySQLLogo" className="MySQLLogo" />
          </span>
          <span className="skill-content">
            <img src={NodejsLogo} alt="NodejsLogo" className="NodejsLogo" />
          </span>
          <span className="skill-content">
            <img src={DockerLogo} alt="DockerLogo" className="DockerLogo" />
          </span>
          <span className="skill-content">
            <img src={GitLogo} alt="GitLogo" className="GitLogo" />
          </span>
          <span className="skill-content">
            <img src={GithubLogo} alt="GithubLogo" className="GithubLogo" />
          </span>
          <span className="skill-content">
            <img src={FigmaLogo} alt="FigmaLogo" className="FigmaLogo" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
