import React from "react";
import "./home.css";
import picture from "./picture.jpg";

function Home() {
  return (
    <div className="home">
      <img className="pic" src={picture} alt="" />
      <div className="description">
        <h1>Mateusz Marek</h1>
        <h3>front-end developer</h3>
        <p>in progress </p>
        <button className="downCV">download CV</button>
      </div>
    </div>
  );
}

export default Home;
