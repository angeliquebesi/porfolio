import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../../assets/icons/linkedin.svg";
import GitHub from "../../assets/icons/GitHub.png";
import me from "../../assets/images/me.jpg";
import "./style.scss";

const NavBar = () => (
  <>
    {/* * Menu Mobile */}
    <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
      <h3 className="block p-4 text-white font-bold">Angélique </h3>
    </div>
    {/* Button Menu Mobile */}
    <button
      type="button"
      className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
    >
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

    {/* Sidebar */}
    <div
      className="w-56 bg-white dark:bg-gray-800 select-none overflow-y-auto
  transition duration-500 ease-in-out border-dashed border-2 border-light-blue-500 border-opacity-35"
    >
      <div className="border-dashed border-b-2 border-light-blue-500 border-opacity-35">
        <div className="flex flex-col items-center">
          <Link to="/">
            <img
              src={me}
              alt="photoprofil"
              className="h-21 w-21 rounded-full object-cover mt-4"
            />
          </Link>
          <h3
            className="text-center text-4xl font-light text-pink-600 dark:text-pink-400 mt-0
				transition duration-500 ease-in-out"
          >
            Angélique Bésineaud
          </h3>
        </div>
        <ul className="flex flex-row justify-center gap-8 my-5">
          <li
            className="font-semibold text-gray-700 dark:text-gray-400
				"
          >
            <a
              target="_blank"
              href="https://github.com/angeliquebesi"
              rel="noreferrer"
            >
              <img src={GitHub} alt="logo github et lien" className="logo" />
            </a>
          </li>
          <li
            className="font-semibold text-gray-700 dark:text-gray-400
				"
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ang%C3%A9liqueb%C3%A9sineaud/"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="logo linkedin et lien"
                className="logo"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="menu">
        <li
          className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
				"
        >
          <Link to="/apropos">A propos</Link>
        </li>
        <li
          className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
				"
        >
          <Link to="/projet">Mes réalisations</Link>
        </li>
        <li
          className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
				"
        >
          <Link to="/Contact">Me contacter</Link>
        </li>
      </div>
    </div>
  </>
);

export default NavBar;
