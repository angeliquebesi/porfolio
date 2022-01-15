import React from "react";
import { NavBar, Header, Projets } from "../../components/index";
import hero from "../../api/hero";
import "./styles.scss";

function Réalisation() {
  const contenuHero = hero.filter((her) => her.id === 3);
  return (
    <div className="relative min-h-screen md:flex">
      <NavBar />
      <div className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <Header key={contenuHero.id} hero={contenuHero} />
        <Projets />
      </div>
    </div>
  );
}

export default Réalisation;
