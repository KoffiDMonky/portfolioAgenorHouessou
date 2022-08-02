import React from "react";
import Button from "../Button";
import "./carousel.css";

function Card(props) {
  const logo = props.data.logo;
  const annee = props.data.annee;
  const titre = props.data.titre;
  const description = props.data.description;
  const texte = props.data.texte;

  return (
    <div className="card">
      { logo ? <div className="image">
        <img src={logo} alt="" />
      </div> : ''}
      <div className="description">
        { annee ? <h3>{annee}</h3> : ''}
        { titre ? <h2>{titre}</h2> : ''}
        { description ? <p>{description} </p> : ''}
        { texte ? <Button texte={texte}/> : ''}
      </div>
    </div>
  );
}

export default Card;
