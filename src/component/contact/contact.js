import React from "react";
import "./contact.css";

function contact() {
  return (
    <div className="container">
      <h1>Me contacter</h1>
      <div className="contact-informations">
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
      </div>
      <div className="contact-bitmoji">
        <img
          className="bitmoji"
          src="assets/images/bitmoji-bye.png"
          alt="bitmoji contact"
        />
      </div>
    </div>
  );
}

export default contact;
