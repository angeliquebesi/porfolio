import React from "react";
import { NavBar, Experiences } from "components/index";
import "./styles.scss";

function About() {
  return (
    <div className="relative min-h-screen md:flex">
      <NavBar />
      <Experiences />
    </div>
  );
}

export default About;
