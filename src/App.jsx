import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Page404, About, Projet, Contact, Experiences } from "pages";
import "./App.scss";

const App = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/apropos/mesexperiences" element={<Experiences />} />
    {/* <Route exact path="/aprops/portraitchinois" element={< />} /> */}
    <Route exact path="/apropos" element={<About />} />
    <Route exact path="/mesrealisations" element={<Projet />} />
    <Route exact path="/contact" element={<Contact />} />
    <Route exact path="*" element={<Page404 />} />
  </Routes>
);

export default App;
