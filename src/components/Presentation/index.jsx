import React from "react";
import WhiteButton from "../whitebutton";
import Header from "../header";
import BlueButton from "../bluebutton/index";

const hero = [
  {
    titre: "Portrait chinois",
    soustitre: "",
    pres: `Un portrait chinois est un jeu littéraire consistant à décrire sa personnalité et ses goûts à travers l'analogie "si j'étais... je serais..."`,
  },
];
function Presentation() {
  return (
    <div className="min-h-screen">
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <Header hero={hero} />
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <BlueButton name="En savoir plus" />
          <WhiteButton name="Mes expériences" />
        </div>
      </div>
    </div>
  );
}

export default Presentation;
