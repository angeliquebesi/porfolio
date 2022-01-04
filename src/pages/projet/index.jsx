import React from "react";
import { CarouselItem } from "../../components/projets/index";
import { NavBar, Header, Projets } from "../../components/index";
import hero from "../../api/hero";
import "./styles.scss";

function Réalisation() {
  const contenuHero = hero.filter((her) => her.id === 3);
  return (
    <div className="relative min-h-screen md:flex">
      <NavBar />
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="min-h-screen">
          <Header key={contenuHero.id} hero={contenuHero} />
        </div>
        <div className="min-h-screen">
          <Projets>
            <CarouselItem>Item1</CarouselItem>
            <CarouselItem>Item2</CarouselItem>
            <CarouselItem>Item3</CarouselItem>
          </Projets>
        </div>
      </main>
    </div>
  );
}

export default Réalisation;
