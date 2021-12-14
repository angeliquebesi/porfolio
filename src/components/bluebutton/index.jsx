import React from "react";
import { Link } from "react-router-dom";

function BlueButton(props) {
  const { name } = props;
  return (
    <div className="rounded-md shadow">
      <Link to={name.link}>
        <button
          type="button"
          href="#"
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        >
          {name.texte}
        </button>
      </Link>
    </div>
  );
}

export default BlueButton;
