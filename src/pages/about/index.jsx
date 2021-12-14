import React from "react";
import { NavBar, Presentation } from "components/index";
import "./styles.scss";

function About() {
  return (
    <div className="relative min-h-screen md:flex">
      <NavBar />
      <div className="relative min-h-screen">
        <Presentation />
      </div>
    </div>
  );
}

export default About;
