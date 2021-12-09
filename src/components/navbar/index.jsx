import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../../assets/icons/linkedin.svg";
import GitHub from "../../assets/icons/GitHub.png";
import me from "../../assets/images/me.jpg";
import "./style.scss";

const NavBar = () => (
  <div className="navbar">
    <img src={me} alt="photoprofil" />
    <h3>Angélique Bésineaud</h3>
    <ul className="pictoreseau">
      <li>
        <a
          target="_blank"
          href="https://github.com/angeliquebesi"
          rel="noreferrer"
        >
          <img src={GitHub} alt="logo github et lien" className="logo" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ang%C3%A9liqueb%C3%A9sineaud/"
          rel="noreferrer"
        >
          <img src={linkedin} alt="logo linkedin et lien" className="logo" />
        </a>
      </li>
    </ul>
    <div className="menu">
      <Link to="/apropos">A propos</Link>
      <Link to="/projet">Mes réalisations</Link>
      <Link to="/Contact">Me contacter</Link>
    </div>
  </div>
);

export default NavBar;
