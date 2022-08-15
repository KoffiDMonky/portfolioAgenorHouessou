import React from "react";
import Carousel from "../utils/carousel/Carousel";
import { motion } from "framer-motion";


function passions() {
  const passions = [
    {
      logo: "assets/images/passions/tennisrg.png",
      titre: "Tennis",
      description:
        "Fort de mes 25 ans de pratique, le tennis n'a plus de secret pour moi: compétiteur, capitaine d'équipe, entraîneur, bénévole, arbitre, juge-arbitre... en bref un tennisman investi !",
    },
    {
      logo: "assets/images/passions/starwars.jpg",
      titre: "Art digital",
      description:
        "Porte ouverte vers ma créativité et mon côté décalé, photoshop est mon principal allié. Vous pouvez notamment retrouver mon dernier projet en cours #IshrinkPeople sur instagram @Koffi.psd.",
    },
    {
      logo: "assets/images/passions/photographie.jpg",
      titre: "Photographie",
      description:
        "Autre moyen d'expression de ma créativité depuis 5 ans, dont 1 an en tant que pro, la photographie est mon pretexte n°1 pour barouder . Mon portfolio est disponible sur agenorhouessou.com.",
    },
  ];
  return (
    <div className="container">
      <h1>Mes passions</h1>
      <motion.div className="passions"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01]
          }}
      >
        <Carousel array={passions} />
      </motion.div>
    </div>
  );
}

export default passions;
