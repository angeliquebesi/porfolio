import React from "react";
import { NavBar } from "components/index";
import "./style.scss";

const Home = () => (
  <div className="relative min-h-screen md:flex">
    <NavBar />

    <main className="home">
      <h1>Angélique Bésineaud</h1>
      <h2> Je suis développeuse web et web mobile!</h2>
    </main>
  </div>
);

export default Home;
