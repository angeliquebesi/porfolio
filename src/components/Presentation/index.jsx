import React from "react";
import hero from "api/hero";
import Header from "../header";
import "./style.scss";

function Presentation() {
  const contenuHero = hero.filter((her) => her.id === 2);

  return (
    <div className="min-h-screen">
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <Header key={contenuHero.id} hero={contenuHero} />
      </div>
    </div>
  );
}

export default Presentation;
