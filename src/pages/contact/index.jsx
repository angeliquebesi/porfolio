import React from "react";
import { NavBar } from "components/index";
import "./styles.scss";

function Contact() {
  return (
    <div className="relative min-h-screen md:flex">
      <NavBar />
      <div>Me contacter</div>
    </div>
  );
}

export default Contact;
