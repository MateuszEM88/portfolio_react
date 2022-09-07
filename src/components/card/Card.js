import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="cardBody">
        <img className="cardIMG" src={props.img} alt="123"></img>
        <div className="cardTitle">
          <h2 className="cTitle">{props.title}</h2>
          <p className="cDescription">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
