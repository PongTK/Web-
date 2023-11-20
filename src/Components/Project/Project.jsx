import React from "react";
import "./Project.css";

function Project() {
  return (
    <div className="project-section">
      <div className="project-wrapper">
        <div className="project-content">
          <h1 className="project-heading">Projects</h1>
          <p className="project-text">What I've done (click to visit) :</p>
          <div className="project-items-container">
            <a
              href="https://fx-replay-clone.vercel.app/"
              target="_blank"
              className="project-item-link"
            >
              <figure className="project-item" id="item1">
                <figcaption>
                  <div className="item-info">
                    <h3>FX Replay</h3>
                    <span>
                      Mirroring the design and functionalities <br /> of the
                      official Fx Replay site.
                    </span>
                  </div>
                </figcaption>
              </figure>
            </a>
            <a
              href="https://aunty-dow-random-food.vercel.app/"
              target="_blank"
              className="project-item-link"
            >
              <figure className="project-item" id="item2">
                <figcaption>
                  <div className="item-info">
                    <h3>Random Food</h3>
                    <span>
                      Randomizer food menu,
                      <br />
                      offering a diverse dining experience
                    </span>
                  </div>
                </figcaption>
              </figure>
            </a>
            <a
              href="https://pokedex-api-henna.vercel.app/"
              target="_blank"
              className="project-item-link"
            >
              <figure className="project-item" id="item3">
                <figcaption>
                  <div className="item-info">
                    <h3>Pokedex-API</h3>
                    <span>
                      Web app to fetch Pokemon data via API, <br /> allowing
                      users to choose favorite Pokemon.
                    </span>
                  </div>
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
