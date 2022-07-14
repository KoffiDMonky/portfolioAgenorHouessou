import React from "react";
import { Link } from "react-router-dom";
import "./../utils.css";

function navbar() {
  return (
    <ul className="navbar">
      <li>
        <Link className="navbar-item active" to="/">
          <span className="cercle enable"></span>
          <span>Présentation</span>
        </Link>
      </li>
      <li>
        <Link className="navbar-item" to="/competences">
          <span className="cercle"></span>
          <span>Compétences</span>
        </Link>
      </li>
      <li>
        <Link className="navbar-item" to="/experiences">
          <span className="cercle"></span>
          <span>Expériences</span>
        </Link>
      </li>
      <li>
        <Link className="navbar-item" to="/formations">
          <span className="cercle"></span>
          <span>Formations</span>
        </Link>
      </li>
      <li>
        <Link className="navbar-item" to="/passions">
          <span className="cercle"></span>
          <span>Passions</span>
        </Link>
      </li>
      <li>
        <Link className="navbar-item" to="/portfolio">
          <span className="cercle"></span>
          <span>Portfolio</span>
        </Link>
      </li>
      <li>
        <Link className="navbar-item" to="/contact">
          <span className="cercle"></span>
          <span>Contact</span>
        </Link>
      </li>
    </ul>
  );
}

export default navbar;
