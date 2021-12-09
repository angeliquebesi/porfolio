import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Page404, About, Projet, Contact } from "pages";

import "./App.scss";

const App = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="*" element={<Page404 />} />
    <Route exact path="/apropos" element={<About />} />
    <Route exact path="/projet" element={<Projet />} />
    <Route exact path="/contact" element={<Contact />} />
  </Routes>
);

export default App;
