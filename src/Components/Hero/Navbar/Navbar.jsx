import React from 'react';
import './Navbar.css'; 
import { BsMoonFill, BsLightbulb } from "react-icons/bs";


  const darkMode = () => {
    const darkTheme = document.querySelector(".app-container");
    if (darkTheme.classList.contains("dark-theme")) {
      darkTheme.classList.remove("dark-theme");
    } else {
      darkTheme.classList.add("dark-theme");
    }
};



const Navbar = () => {
  return (
    <div className="navbar-section">
      <div className="navbar-container">
        <div className="navbar-links">
          <a href="#home">
          <h2> Portfolio</h2>
          </a>
          <ul className="navbar-list">
            <li className="navbar-list-item">
              <a href="#home">Home</a>
            </li>
            <li className="navbar-list-item">
              <a href="#about">About</a>
            </li>
            <li className="navbar-list-item">
              <a href="#work">Works</a>
            </li>
            <li className="navbar-list-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-icons">
          <h1>
            <BsMoonFill onClick={darkMode} />
          </h1>
          <button className="navbar-button">
            <a href="/resume.pdf" >Resume</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
