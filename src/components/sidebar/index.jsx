import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import me from "../../assets/images/me.jpg";
import "./style.scss";

function Sidebar() {
  return (
    <div className="sideBar md:visible text-indigo-600 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out border-dashed border-2 border-light-blue-500 border-opacity-35">
      <div className="border-dashed border-b-1 border-light-blue-500 border-opacity-35">
        <div className="flex flex-col items-center">
          {/* Image et prénom */}
          <Link to="/">
            <img
              src={me}
              alt="photoprofil"
              className="h-21 w-21 rounded-full object-cover mt-4"
            />
          </Link>
          <h3 className="text-center text-4xl text-indigo-600 mt-0 transition duration-500 ease-in-out">
            Angélique Bésineaud
          </h3>
        </div>
        <ul className="flex flex-row justify-center gap-8 my-5">
          <li className="font-semibold text-gray-700 dark:text-gray-400">
            {/* Lien externe */}
            <a
              target="_blank"
              href="https://github.com/angeliquebesi"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </li>
          <li className="font-semibold text-gray-700 dark:text-gray-400">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ang%C3%A9liqueb%C3%A9sineaud/"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>
      {/* Menu de navigation */}
      <div>
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
          <Link to="/mesrealisations">Mes réalisations</Link>
        </li>
        <li
          className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
"
        >
          <Link to="/Contact">Me contacter</Link>
        </li>
      </div>
    </div>
  );
}

export default Sidebar;
