import React from "react";
import "./Experience.css";
import Fu5639 from "./Fu5639";
import SB from "./SB";
import RCL from "./RCL";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

function Experience() {
  return (
    <div className="experience-section">
      <div className="exp-wrapper">
        <h2 className="exp-heading">My Experience</h2>
        <div className="exp-inner">
          <BrowserRouter>
            <div className="exp-btn-wrapper">
              <NavLink exact to="/" className="exp-btn-link">
                Fusupmakmee 5639
              </NavLink>
              <NavLink exact to="/SB" className="exp-btn-link">
                Super Bullish
              </NavLink>
              <NavLink exact to="/RCL" className="exp-btn-link">
                Regional Container Lines
              </NavLink>
            </div>
            <div className="exp-job-panel">
              <Routes>
                <Route index element={<Fu5639 />} />
                <Route path="SB" element={<SB />} />
                <Route path="RCL" element={<RCL />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default Experience;
