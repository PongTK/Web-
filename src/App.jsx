import "./App.css";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";
import GithubIcon from "/public/Images/github-icon.png";
import LinkedInIcon from "/public/Images/linkedin-icon.png";
import ResumeIcon from "/public/Images/resume-icon.png";
import Resume from "/src/assets/Front-End resume 2023.pdf";

function App() {
  return (
    <>
      <div className="contact-section">
        <ul className="contact-list">
          <li className="contact-item">
            <a href="https://github.com/PongTK" target="_blank">
              <img src={GithubIcon} alt="github-icon" id="github-icon" />
            </a>
          </li>
          <li className="contact-item">
            <a href="https://www.linkedin.com/in/tunyatorn-k/" target="_blank">
              <img src={LinkedInIcon} alt="linkedin-icon" id="linkedin-icon" />
            </a>
          </li>
          <li className="contact-item">
            <a href={Resume} target="_blank">
              <img src={ResumeIcon} alt="resume-icon" id="resume-icon" />
            </a>
          </li>
        </ul>
      </div>
      <Intro />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Footer />
    </>
  );
}

export default App;
