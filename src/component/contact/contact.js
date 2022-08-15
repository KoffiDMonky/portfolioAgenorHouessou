import React from "react";
import "./contact.css";
import { motion } from "framer-motion";

function contact() {
  return (
    <div className="container">
      <h1>Me contacter</h1>
      <motion.div
        className="contact-informations"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="mail layout">
          <img
            className="bitmoji-layout"
            src="assets/images/bitmoji-mail.png"
            alt="bitmoji principal"
          />
          <span className="text-style">agenor.houessou@hotmail.fr</span>
        </div>
        <div className="tel layout">
          <img
            className="bitmoji-layout"
            src="assets/images/bitmoji-tel.png"
            alt="bitmoji principal"
          />
          <span className="text-style">06 58 85 93 73</span>
        </div>
      </motion.div>
      <motion.div
        className="contact-bitmoji"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <img
          className="bitmoji"
          src="assets/images/bitmoji-bye.png"
          alt="bitmoji contact"
        />
      </motion.div>
    </div>
  );
}

export default contact;
