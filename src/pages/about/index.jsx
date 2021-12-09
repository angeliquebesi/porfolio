import React from "react";
import { NavBar } from "components/index";
import "./styles.scss";

function About() {
  return (
    <div className="relative min-h-screen md:flex">
      <NavBar />
      <div>A propos</div>
    </div>
  );
}

export default About;
