import React from "react";
import Carousel from "../utils/carousel/Carousel";

function formations() {
  const formations = [
    {
      logo: "assets/images/formations/mydigitalschool.svg",
      annee: "2022-2021",
      titre: "Bachelor concepteur développeur d'application",
    },
    {
      logo: "assets/images/formations/ubs.png",
      annee: "2021-2019",
      titre: "Master métier de l’éducation, l’enseignement et la formation",
    },
    {
      logo: "assets/images/formations/ur2.svg",
      annee: "2019-2016",
      titre: "Licence sciences technique des activités physiques et sportives",
    },
  ];
  return (
    <div className="container">
      <h1>Ma formation</h1>
      <div className="formations">
        <Carousel array={formations} />
      </div>
    </div>
  );
}

export default formations;
