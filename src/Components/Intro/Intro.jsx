import React from "react";
import "./Intro.css";
import GifArrow from "/public/Images/arrow-giphy.gif";

function Intro() {
  return (
    <div className="intro-section">
      <div className="intro-wrapper">
        <div className="intro-content">
          <h1 className="heading">Tunyatorn Kaewmool</h1>
          <h4 className="sub-heading">PongTK</h4>
          <p className="sub-text">Front-End Software Developer</p>
          <img className="arrow-giphy" src={GifArrow} alt="arrow-giphy" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
