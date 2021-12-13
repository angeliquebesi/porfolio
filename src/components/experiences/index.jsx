import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import experiences from "../../api/experiences";
import school from "../../api/school";

function Experiences() {
  return (
    <div>
      <VerticalTimeline lineColor="black">
        {experiences.map((exp) => (
          <VerticalTimelineElement
            key={exp.id}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(230, 230, 255)",
              color: "rgb(45, 94, 133)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={exp.période}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {exp.entreprise}
            </h4>
            <p>{exp.description}</p>
            <p>{exp.description1}</p>
            <p>{exp.description2}</p>
            <p>{exp.description3}</p>
          </VerticalTimelineElement>
        ))}
        {school.map((forma) => (
          <VerticalTimelineElement
            key={forma.id}
            className="vertical-timeline-element--school"
            contentStyle={{
              background: "rgb(230, 230, 255)",
              color: "rgb(168, 30, 77)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={forma.période}
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">{forma.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {forma.etablissement}
            </h4>
            <p>{forma.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experiences;
