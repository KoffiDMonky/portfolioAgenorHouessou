import React from "react";
import Card from "../utils/carousel/Card";
import Carousel from "../utils/carousel/Carousel";

function experience() {

  const experiences = [
    { logo: "assets/images/experiences/ojc.png", annee: "2022-2021", titre : "Développeur consultant", description : "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris cursus dignissim interdum Etiam in justo a purus tempus finibus. Donec. " },
    { logo: "assets/images/experiences/lpblavet.svg", annee: "2021-2019", titre : "Assistant d'éducation", description : "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris cursus dignissim interdum Etiam in justo a purus tempus finibus. Donec. " },
    { logo: "assets/images/experiences/tcpondi.svg", annee: "2019-2016", titre : "Entraineur de Tennis", description : "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris cursus dignissim interdum Etiam in justo a purus tempus finibus. Donec. " },

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
