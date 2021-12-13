import React from "react";
import { NavBar, Experiences, Presentation } from "components/index";
import "./styles.scss";

function About() {
  return (
    <div className="relative min-h-screen md:flex">
      <NavBar />
      <div className="relative min-h-screen">
        <Presentation />
        <Experiences />
      </div>
    </div>
  );
}

export default About;
