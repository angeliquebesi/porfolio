import React from "react";
import { Carousel } from "react-responsive-carousel";
import projets from "../../api/projets";

function Projets() {
  return (
    <div className="w-full max-w-lg">
      <Carousel showThumbs={false} infiniteLoop>
        {projets.map((proj) => (
          <div style={{ height: "10em", color: "black" }}>
            <h4> {proj.title} </h4>
            <p>{proj.description} </p>

            {proj.technos.map((tech) => (
              <li>{tech}</li>
            ))}

            <p src={proj.link}> Lien vers le site </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Projets;
