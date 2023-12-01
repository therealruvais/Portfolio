import React from "react";
import "./Who.css";

const Who = () => {
  const images = [
    "./tech/html.png",
    "./tech/css.png",
    "./tech/javascript.png",
    "./tech/reactjs.png",
    "./tech/nodejs.png",
    "./tech/mongodb.png",
    "./tech/tailwind.png",
    "./tech/git.png",
    "./tech/redux.png"
  ];

  return (
    <div
      id="about"
      className="who-section"
    >
      <div className="who-container">
        <div className="who-left">
          {images.map((image, index) => (
            <div
              className="circle-div"
              key={index}
            >
              <div className="circle">
                <img
                  src={image}
                  alt={`Tech ${index}`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="who-right">
          <h1 className="who-title">Think outside the square space</h1>
          <div className="who-whatido">
            <img
              className="who-line"
              src="./img/line.png"
            />
            <h2 className="who-subtitle">Who am I</h2>
          </div>
          <p className="who-desc">
            A creative designer and developer with a passion for the arts. And
            these are some Tech's I work with
          </p>
        </div>
      </div>
    </div>
  );
};

export default Who;
