import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import projets from "../../api/projets";

function Projets() {
  return (
    <div className="w-full max-w-screen-lg">
      <Carousel showThumbs={false} infiniteLoop>
        {projets.map((proj) => (
          <div
            className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300"
            key={proj.id}
            style={{ height: "70vh" }}
          >
            <h4 className="text-indigo-600 text-4xl font-bold leading-none">
              {" "}
              {proj.title}{" "}
            </h4>
            <p className="mt-2 pt-6 text-gray-400 leading-none">
              {proj.description}{" "}
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
            <div className="flex justify-around mt-4 mb-4 text-gray-500">
              <div>
                <h5 className="text-xl text-gray-700 "> Les technos </h5>
                {proj.technos.map((tech) => (
                  <div>
                    <li key={tech}>{tech}</li>
                  </div>
                ))}
              </div>
              <div>
                <h5 className="text-xl text-gray-700"> Mes contributions </h5>
                {proj.tâches.map((tache) => (
                  <div>
                    <li key={tache}> {tache}</li>
                  </div>
                ))}
              </div>
            </div>
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
        ))}
      </Carousel>
    </div>
  );
}

export default Projets;
