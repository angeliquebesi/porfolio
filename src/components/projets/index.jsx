import React from "react";
import projets from "../../api/projets";

function Projets() {
  return projets.map((site) => (
    <div>
      <h2> {site.title}</h2>
      <p>{site.description}</p>
      {site.technos.map((tech) => (
        <ul>
          <li>{tech}</li>
        </ul>
      ))}
      <button type="button" onClick={site.link}>
        {" "}
        Lien vers le site{" "}
      </button>
    </div>
  ));
}

export default Projets;
