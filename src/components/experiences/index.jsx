import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import BalanceRoundedIcon from "@mui/icons-material/BalanceRounded";
import data from "../../api/data";

function Experiences() {
  return (
    <div>
      <VerticalTimeline>
        {data.map((exp) => (
          <VerticalTimelineElement
            key={exp.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "blue" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={exp.période}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BalanceRoundedIcon />}
          >
            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {exp.entreprise}
            </h4>
            <p>{exp.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experiences;
