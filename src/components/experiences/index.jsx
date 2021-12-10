import React from "react";
import { Chrono } from "react-chrono";
import data from "../../api/remove";
import legal from "../../assets/icons/legal.png";

function Experiences() {
  return (
    <div style={{ width: "100%", height: "95vh" }}>
      <Chrono items={data} mode="VERTICAL_ALTERNATING">
        <div className="chrono-icons">
          <img src={legal} alt="balnce de justice" />
        </div>
      </Chrono>
    </div>
  );
}

export default Experiences;
