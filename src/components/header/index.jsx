import React from "react";
import WhiteButton from "../whitebutton/index";
import BlueButton from "../bluebutton/index";
import "./style.scss";

function Header(props) {
  const { hero } = props;
  return hero.map((acc) => (
    <header className="header" key={acc.id}>
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{acc.titre}</span>
          <br />
          <span className="block text-indigo-600 xl:inline">
            {acc.soustitre}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-5xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {acc.pres}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          {acc.blue ? <BlueButton name={acc.blue} /> : ""}
          {acc.white ? <WhiteButton name={acc.white} /> : ""}
        </div>
      </div>
    </header>
  ));
}

export default Header;
