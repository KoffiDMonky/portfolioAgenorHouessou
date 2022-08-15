import React from "react";
import Carousel from "../utils/carousel/Carousel";
import { motion } from "framer-motion";


function portfolio() {

  const portfolio = [
    {
      logo: "assets/images/portfolio/Logo_Altizy.png",
      titre: "Alt'izY",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris cursus dignissim interdum Etiam in justo a purus tempus finibus. Donec. ",
      texte: "En savoir plus",
      url: "https://altizy-proto.herokuapp.com/"
    },
    {
      logo: "assets/images/portfolio/iCoffee.png",
      titre: "Icoffee",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris cursus dignissim interdum Etiam in justo a purus tempus finibus. Donec. ",
        texte: "Précommander",
        url: "https://agenorhouessou-cv.com/portfolio/landing-page/index.html"
    },
    {
      logo: "assets/images/portfolio/pokedex.png",
      titre: "Pokédex",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris cursus dignissim interdum Etiam in justo a purus tempus finibus. Donec. ",
      texte: "Pokémon, GO !",
      url: "https://agenorhouessou-cv.com/portfolio/Pokedex/index.html"
    },
  ];
  return (
    <div className="container">
      <h1>Mon portfolio</h1>
      <motion.div className="portfolio"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01]
          }}
      >
        <Carousel array={portfolio} />
      </motion.div>
    </div>
  );
}

export default portfolio;
