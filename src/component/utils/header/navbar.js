import React from "react";
import { NavLink  } from "react-router-dom";
import "./../utils.css";

function navbar() {

  

  return (
    <ul className="navbar">
      <li>
        <NavLink  className="navbar-item" to="/">
          {/* <span className="cercle"></span> */}
          <span>Présentation</span>
        </NavLink >
      </li>
      <li>
        <NavLink  className="navbar-item" to="/competences">
          {/* <span className="cercle"></span> */}
          <span>Compétences</span>
        </NavLink >
      </li>
      <li>
        <NavLink  className="navbar-item" to="/experiences">
          {/* <span className="cercle"></span> */}
          <span>Expériences</span>
        </NavLink >
      </li>
      <li>
        <NavLink  className="navbar-item" to="/formations">
          {/* <span className="cercle"></span> */}
          <span>Formations</span>
        </NavLink >
      </li>
      <li>
        <NavLink  className="navbar-item" to="/passions">
          {/* <span className="cercle"></span> */}
          <span>Passions</span>
        </NavLink >
      </li>
      <li>
        <NavLink  className="navbar-item" to="/portfolio">
          {/* <span className="cercle"></span> */}
          <span>Portfolio</span>
        </NavLink >
      </li>
      <li>
        <NavLink  className="navbar-item" to="/contact">
          {/* <span className="cercle"></span> */}
          <span>Contact</span>
        </NavLink >
      </li>
    </ul>
  );
}

export default navbar;
