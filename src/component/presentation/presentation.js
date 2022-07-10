import React from "react";
import "./presentation.css";

function Presentation() {
  return (
    <div className="presentation">
      <div className="presentation-legend">
        <div className="salutation">
          <img
            className="salutation-bitmoji"
            src="assets/images/bitmoji-salut.png"
            alt="bitmoji salut"
          />
          <div className="citation">
            <span className="salut">Salut, moi c'est</span>
            <span className="agenor">Agénor</span>
          </div>
        </div>
        <p className="title">Concepteur développeur d’applications</p>
      </div>
      <div className="presentation-bitmoji">
        <img
          className="bitmoji"
          src="assets/images/bitmoji-principal.png"
          alt="bitmoji principal"
        />
      </div>
      <div className="presentation-summary">
        <div className="summary-detail-one">
          <div className="item">
            <div className="item-cercle" />
            <span className="item-title">intégration</span>
          </div>
        </div>
        <div className="summary-detail-two">
          <div className="item-cercle" />
          <span className="item-title">développement</span>
        </div>
        <div className="summary-detail-tree">
          <div className="item">
            <div className="item-cercle" />
            <span className="item-title">design</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
