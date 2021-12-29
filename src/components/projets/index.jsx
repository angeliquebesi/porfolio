import React, { useState } from "react";
// import projets from "../../api/projets";
import "./style.scss";

export const CarouselItem = ({ children, width }) => (
  <div className="carousel-item" style={{ width }}>
    {children}
  </div>
);

function Projets({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    let nIndex = newIndex;
    if (nIndex < 0) {
      nIndex = 0;
    } else if (nIndex >= React.Children.count(children)) {
      nIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(nIndex);
  };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { width: "100%" })
        )}
      </div>
      <div className="indicators">
        <button type="button" onClick={() => updateIndex(activeIndex - 1)}>
          Prec
        </button>
        {React.Children.map(children, (child, index) => (
          <button
            type="button"
            className={`${index === activeIndex ? "active" : ""}`}
            onClick={() => {
              updateIndex(index);
            }}
          >
            {index + 1}
          </button>
        ))}
        <button type="button" onClick={() => updateIndex(activeIndex + 1)}>
          Suivant
        </button>
      </div>
    </div>
  );
}

export default Projets;

// return projets.map((site) => (
//   <div>
//     <h2> {site.title}</h2>
//     <p>{site.description}</p>
//     {site.technos.map((tech) => (
//       <ul>
//         <li>{tech}</li>
//       </ul>
//     ))}
//     <button type="button"> Lien vers le site </button>
//   </div>
// ));
