import React from "react";
import "./../utils.css";
import Navbar from "./navbar";

function Header(props) {


  return (
    <div className="header">
      <div className="titre">
        <span className="text-color">Agénor H</span>OUESSOU
      </div>
      <Navbar/>
    </div>
  );
}

export default Header;
