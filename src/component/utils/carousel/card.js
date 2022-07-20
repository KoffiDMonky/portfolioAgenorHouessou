import React from "react";
import "./carousel.css";

function Card(props) {
  const logo = props.data.logo;
  const annee = props.data.annee;
  const titre = props.data.titre;
  const description = props.data.description;

  return (
    <div className="card">
      { logo ? <div className="image">
        <img src={logo} alt="" />
      </div> : ''}
      <div className="description">
        { annee ? <h3>{annee}</h3> : ''}
        { titre ? <h2>{titre}</h2> : ''}
        { description ? <p>{description} </p> : ''}
      </div>
    </div>
  );
}

export default Card;
