import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { pcprojet1 } from "../../assets/images/index";
import projets from "../../api/projets";
import "./style.scss";

function Projets() {
  return (
    <div className="w-full max-w-screen-lg">
      <Carousel showThumbs={false} infiniteLoop>
        {projets.map((proj) => (
          <div
            className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300"
            key={proj.id}
            style={{ height: "80vh" }}
          >
            <h4 className="text-indigo-600 text-4xl font-bold leading-none">
              {" "}
              {proj.title}{" "}
            </h4>
            <p className="mt-2 pt-6 text-gray-400 leading-none">
              {proj.description}{" "}
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6" />
            <div className="flex justify-around mt-6 mb-2 text-gray-500">
              <div>
                {proj.technos.map((tech) => (
                  <div>
                    <ul>
                      <li key={tech}>{tech}</li>
                    </ul>
                  </div>
                ))}
                <a
                  target="_blank"
                  href={proj.link}
                  rel="noreferrer"
                  className="capitalize underline inline-block pt-3"
                >
                  {" "}
                  Lien vers le site{" "}
                </a>
              </div>
              <div>
                {proj.screen.map((photo) => (
                  <img
                    key={photo}
                    src={photo}
                    alt="screenshot"
                    className="h-60 px-5"
                  />
                ))}
                {/* <img src={pcprojet1} alt="screenshot" className="h-60 px-5" /> */}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Projets;
