import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBuilding,
  faSchool,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";
import timelineElements from "../resources/timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import dot from "../asset/dot.jpg";

function Experience() {
  return (
    <div className="timeline-wraper">
      <div className="timeline-main">
        <h1 className="timeline-title">My Experience</h1>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                className="vert-timeline-elmnt"
                iconStyle={{
                  background:
                    "linear-gradient(to bottom, #ff6347 0%, #f9ab00 100%)",
                  color: "#fff",
                }}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description"> {element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
