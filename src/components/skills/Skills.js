import React from "react";
import "./skills.css";
import html from "../skills/ico/html.png";
import css from "../skills/ico/css.png";
import sass from "../skills/ico/sass.png";
import javascript from "../skills/ico/js.png";
import react from "../skills/ico/react.png";
import sql from "../skills/ico/sql.png";
import python from "../skills/ico/python.png";
import wordpress from "../skills/ico/wordpress.png";

function Skills() {
  return (
    <div className="skills">
      <div className="skill-header">
        <h1>Skills and techologies</h1>
        <p>i'm using</p>
      </div>
      <div className="skill-container">
        <div className="skill html">
          <img src={html} alt="html icon" className="skill-icon" />
          <h2>HTML</h2>
        </div>
        <div className="skill">
          <img src={css} alt="css icon" className="skill-icon" />
          <h2>CSS</h2>
        </div>
        <div className="skill">
          <img src={sass} alt="sass icon" className="skill-icon" />
          <h2>SASS</h2>
        </div>
        <div className="skill">
          <img src={javascript} alt="javascript icon" className="skill-icon" />
          <h2>JAVASCRIPT</h2>
        </div>
        <div className="skill">
          <img src={react} alt="react icon" className="skill-icon" />
          <h2>REACT</h2>
        </div>
        <div className="skill">
          <img src={sql} alt="sql icon" className="skill-icon" />
          <h2>SQL</h2>
        </div>
        <div className="skill">
          <img src={wordpress} alt="wordpress icon" className="skill-icon" />
          <h2>WORDPRESS</h2>
        </div>
        <div className="skill">
          <img src={python} alt="python icon" className="skill-icon" />
          <h2>PYTHON</h2>
        </div>
      </div>
    </div>
  );
}

export default Skills;
