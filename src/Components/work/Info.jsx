import React from "react";
import "./Info.css";
import projects from "./project";

const Info = () => {
  return (
    <div>
      <div
        id="work"
        className="info-secton"
      >
        <div className="info-container">
          <div className="left-container">
            <h1 className="info-title">My Works</h1>
            <div className="info-whatido">
              <img
                className="info-line"
                src="./img/line.png"
              />
              <h2 className="info-subtitle">What I do</h2>
            </div>
            <p className="info-desc">
              Welcome to my digital playground, where innovation meets
              functionality. Dive into a world where I transform ideas into
              seamless web experiences, one line of code at a time.
            </p>
            <a
              href="https://github.com/therealruvais"
              target="_blank"
            >
              <button className="info-button">See My Works</button>
            </a>
          </div>
          <div className="right-container">
            <div className="card-container">
              {projects.map((project, index) => (
                <div
                  className="card"
                  key={index}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <img
                        src={project.image}
                        alt={project.name}
                      />
                    </div>
                    <div className="card-back">
                      <h1 style={{ color: `#fff` }}>{project.name}</h1>
                      <h5>{project.desc}</h5>

                      <button>
                        <a href={project.link} target={project.target}>GO</a>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
