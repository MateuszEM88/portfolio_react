import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <img className="card-image" src={props.img} alt="123"></img>
        <div className="card-title-container">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
