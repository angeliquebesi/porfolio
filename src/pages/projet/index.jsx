import React from "react";
import { NavBar } from "components/index";
import "./styles.scss";

function Projet() {
  return (
    <div className="relative min-h-screen md:flex">
      <NavBar />
      <div>Projets</div>
    </div>
  );
}

export default Projet;
