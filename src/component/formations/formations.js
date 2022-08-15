import React from "react";
import Carousel from "../utils/carousel/Carousel";
import { motion } from "framer-motion";

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
      <motion.div
        className="formations"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Carousel array={formations} />
      </motion.div>
    </div>
  );
}

export default formations;
