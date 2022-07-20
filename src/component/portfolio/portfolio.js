import React from "react";
import Carousel from "../utils/carousel/Carousel";

function portfolio() {

  const portfolio = [
    {
      logo: "assets/images/portfolio/Logo_Altizy.png",
      titre: "Alt'izY",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris cursus dignissim interdum Etiam in justo a purus tempus finibus. Donec. ",
    },
    {
      logo: "assets/images/portfolio/iCoffee.png",
      titre: "Icoffee",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris cursus dignissim interdum Etiam in justo a purus tempus finibus. Donec. ",
    },
    {
      logo: "assets/images/portfolio/pokedex.jpg",
      titre: "Pokédex",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris cursus dignissim interdum Etiam in justo a purus tempus finibus. Donec. ",
    },
  ];
  return (
    <div className="container">
      <h1>Mon portfolio</h1>
      <div className="passions">
        <Carousel array={portfolio} />
      </div>
    </div>
  );
}

export default portfolio;
