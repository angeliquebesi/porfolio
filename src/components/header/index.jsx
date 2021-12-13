import React from "react";
import "./style.scss";

function Header(props) {
  const { hero } = props;
  return hero.map((acc) => (
    <header className="header">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{acc.titre}</span>
          <br />
          <span className="block text-indigo-600 xl:inline">
            {acc.soustitre}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {acc.pres}
        </p>
      </div>
    </header>
  ));
}

export default Header;
