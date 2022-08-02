import React from "react";
import Carousel from "../utils/carousel/Carousel";

function passions() {
  const passions = [
    {
      logo: "assets/images/passions/tennisrg.png",
      titre: "Tennis",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris cursus dignissim interdum Etiam in justo a purus tempus finibus. Donec. ",
    },
    {
      logo: "assets/images/passions/starwars.jpg",
      titre: "Art digital",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris cursus dignissim interdum Etiam in justo a purus tempus finibus. Donec. ",
    },
    {
      logo: "assets/images/passions/photographie.jpg",
      titre: "Photographie",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris cursus dignissim interdum Etiam in justo a purus tempus finibus. Donec. ",
    },
  ];
  return (
    <div className="container">
      <h1>Mes passions</h1>
      <div className="passions">
        <Carousel array={passions} />
      </div>
    </div>
  );
}

export default passions;
