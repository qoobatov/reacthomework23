import React from "react";
import "./Card.css";


function Card(props) {
  return (
    <>
      <div className="cards-block">
        <div className="t-shirts-block">
          <img className="t-shirts" src={props.image} alt={props.image} />
        </div>
        <div className="description-block">
          <p className="title">{props.title}</p>
          <p className="description">{props.description}</p>
          <p className="cost">{props.cost}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
