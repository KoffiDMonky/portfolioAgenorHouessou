import React from "react";
import Carousel from "../utils/carousel/Carousel";
import { motion } from "framer-motion";

function experience() {
  const experiences = [
    {
      logo: "assets/images/experiences/ojc.png",
      annee: "2022-2021",
      titre: "Développeur consultant",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris cursus dignissim interdum Etiam in justo a purus tempus finibus. Donec. ",
    },
    {
      logo: "assets/images/experiences/lpblavet.svg",
      annee: "2021-2019",
      titre: "Assistant d'éducation",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris cursus dignissim interdum Etiam in justo a purus tempus finibus. Donec. ",
    },
    {
      logo: "assets/images/experiences/tcpondi.svg",
      annee: "2019-2016",
      titre: "Entraineur de Tennis",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Mauris cursus dignissim interdum Etiam in justo a purus tempus finibus. Donec. ",
    },
  ];

  return (
    <div className="container">
      <h1>Mes expériences</h1>
      <motion.div
        className="experiences"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Carousel array={experiences} />
      </motion.div>
    </div>
  );
}

export default experience;
