import React from "react";
import { NavBar, Header } from "components/index";
import hero from "api/hero";
import "./style.scss";

function Home() {
  const contenuHero = hero.filter((her) => her.id === 1);
  return (
    <div className="relative min-h-screen md:flex">
      <NavBar />
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <Header key={contenuHero.id} hero={contenuHero} />
      </main>
    </div>
  );
}

export default Home;
