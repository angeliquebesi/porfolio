import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "components/sidebar/index";

import "./style.scss";

const NavBar = () => {
  const handleSidebar = () => {
    document.querySelector(".sideBar").classList.toggle("-translate-x-full");
  };

  return (
    <>
      <div className="flex flex-row justify-between md:hidden border-dashed border-b-1 border-light-blue-500 border-opacity-35">
        {/* * Menu Mobile */}
        <Link to="/">
          <div className="flex flex-row justify-between ">
            <h3 className="block p-4 text-indigo-600 font-bold">Angélique </h3>
          </div>
        </Link>
        {/* Button Menu Mobile */}
        <button type="button" className="p-4" onClick={handleSidebar}>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Sidebar */}
      <Sidebar />
    </>
  );
};

export default NavBar;
