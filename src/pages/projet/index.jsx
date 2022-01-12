import React from "react";
// import projets from "../../api/projets";
import { Carousel } from "react-responsive-carousel";
// import projets from "../../api/projets";
import { NavBar, Header } from "../../components/index";
import hero from "../../api/hero";
import "./styles.scss";

function Réalisation() {
  const contenuHero = hero.filter((her) => her.id === 3);
  return (
    <div className="relative min-h-screen md:flex">
      <NavBar />
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="min-h-screen">
          <Header key={contenuHero.id} hero={contenuHero} />
        </div>
        <div className="min-h-screen">
          <Carousel showThumbs={false} infiniteLoop>
            <div style={{ height: "10em", color: "black" }}> ESSAI </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Réalisation;
