import React from "react";
import Card from "../utils/carousel/Card";
import Carousel from "../utils/carousel/Carousel";

function experience() {

  const experiences = [
    { logo: "assets/images/experiences/decathlon.svg", annee: "2022-2021", titre : "Vendeur / Hôte d'accueil", description : "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris cursus dignissim interdum Etiam in justo a purus tempus finibus. Donec. " },
    { logo: "assets/images/experiences/decathlon.svg", annee: "2021-2020", titre : "Vendeur / Hôte d'accueil", description : "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris cursus dignissim interdum Etiam in justo a purus tempus finibus. Donec. " },
    { logo: "assets/images/experiences/decathlon.svg", annee: "2020-2019", titre : "Vendeur / Hôte d'accueil", description : "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris cursus dignissim interdum Etiam in justo a purus tempus finibus. Donec. " },

  ];

  return (
    <div className="container">
      <h1>Mes expériences</h1>
      <div className="experiences">
        <Carousel array = {experiences} />
      </div>
    </div>
  );
}

export default experience;
