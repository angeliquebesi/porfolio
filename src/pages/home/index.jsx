import React from "react";
import { Link } from "react-router-dom";
import { NavBar, Header, BlueButton, WhiteButton } from "components/index";
import "./style.scss";

const hero = [
  {
    titre: "Angélique BÉSINEAUD",
    soustitre: "développeuse web",
    pres: "Bienvenue sur mon premier portfolio.",
  },
];
const Home = () => (
  <div className="relative min-h-screen md:flex">
    <NavBar />
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <Header key={hero.titre} hero={hero} />
      <div>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <Link to="/projet">
            <BlueButton name="Mes réalisations" />
          </Link>
          <Link to="/apropos">
            <WhiteButton name="Me connaître" />
          </Link>
        </div>
      </div>
    </main>
  </div>
);

export default Home;
