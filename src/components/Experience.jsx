import React, { useEffect } from "react";

import timelineElements from "../resources/timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ey from "../asset/ey-logo.png";
import aws from "../asset/aws-logo.png";
import capg from "../asset/capg-logo.png";
import gehu from "../asset/gehu-logo.png";
import kv from "../asset/kv-logo.png";

function Experience() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="timeline-wraper" id="experience">
      <div className="timeline-main">
        <h1
          className="timeline-title"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          My Experience
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
          key={1}
            date="Nov 2022 - Dec 2022"
            dateClassName="date"
            className="vert-timeline-elmnt"
            iconStyle={{
              background:
                "linear-gradient(to bottom, #fff 0%, #f9ab00 100%)",
              color: "#fff",
            }}
            icon={<img src={aws} style={{display:"block", marginLeft:"auto", marginRight:"auto", marginTop:"40%", width:"55%"}} />}
          >
            <h3 className="vertical-timeline-element-title">
            AWS Cloud Practitioner Certification
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
            Amazon Web Services
            </h5>
            <p id="description"> AWS certified Cloud Practitioner.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <VerticalTimeline>
          <VerticalTimelineElement
          key={2}
            date="Dec 2021 - present"
            dateClassName="date"
            className="vert-timeline-elmnt"
            iconStyle={{
              background:
                "linear-gradient(to bottom, #fff 0%, #f9ab00 100%)",
              color: "#fff",
            }}
            icon={<img src={ey} style={{display:"block", marginLeft:"auto", marginRight:"auto", marginTop:"20%", width:"55%"}} />}
          >
            <h3 className="vertical-timeline-element-title">
            Tech Consultant
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
            EY, Gurgaon
            </h5>
            <p id="description"> Currently working in EY (one of the Big4) as Senior Tech Consultant. Working as Engineer III in American Express projects. <br /> <br /> <em>Client: American Express</em></p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <VerticalTimeline>
          <VerticalTimelineElement
          key={3}
            date="Aug 2021 - Oct 2021"
            dateClassName="date"
            className="vert-timeline-elmnt"
            iconStyle={{
              background:
                "linear-gradient(to bottom, #fff 0%, #f9ab00 100%)",
              color: "#fff",
            }}
            icon={<img src={aws} style={{display:"block", marginLeft:"auto", marginRight:"auto", marginTop:"40%", width:"55%"}} />}
          >
            <h3 className="vertical-timeline-element-title">
            AWS Certification training for Solution Architect - Associate
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
            Amazon Web Services
            </h5>
            <p id="description"> Basic understanding on AWS Solution architecture ans system design.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <VerticalTimeline>
          <VerticalTimelineElement
          key={4}
            date="Jul 2020 - Nov 2021"
            dateClassName="date"
            className="vert-timeline-elmnt"
            iconStyle={{
              background:
                "linear-gradient(to bottom, #fff 0%, #f9ab00 100%)",
              color: "#fff",
            }}
            icon={<img src={capg} style={{display:"block", marginLeft:"auto", marginRight:"auto", marginTop:"23%", width:"55%"}} />}
          >
            <h3 className="vertical-timeline-element-title">
            Senior Analyst/Software Engineer
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
            Capgemini India, Pune
            </h5>
            <p id="description"> Worked as a Senior Analyst/Software Engineer for a Multi National firm. Worked on HSBC UK and HSBC France projects as Development Engineer. <br /> <br /> <em>Client: HSBC</em></p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <VerticalTimeline>
          <VerticalTimelineElement
          key={5}
            date="Jun 2019 - Jul 2020"
            dateClassName="date"
            className="vert-timeline-elmnt"
            iconStyle={{
              background:
                "linear-gradient(to bottom, #fff 0%, #f9ab00 100%)",
              color: "#fff",
            }}
            icon={<img src={capg} style={{display:"block", marginLeft:"auto", marginRight:"auto", marginTop:"23%", width:"55%"}} />}
          >
            <h3 className="vertical-timeline-element-title">
            Analyst
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
            Capgemini India,Pune
            </h5>
            <p id="description"> My first job as Analyst after college placements in a Multi National firm. From here I stepped in to IT industry. <br /> <br /> <em>Client: HSBC</em></p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <VerticalTimeline>
          <VerticalTimelineElement
          key={6}
            date="Aug 2015 - May 2019"
            dateClassName="date"
            className="vert-timeline-elmnt"
            iconStyle={{
              background:
                "linear-gradient(to bottom, #fff 0%, #f9ab00 100%)",
              color: "#fff",
            }}
            icon={<img src={gehu} style={{display:"block", marginLeft:"auto", marginRight:"auto", marginTop:"23%", width:"55%"}} />}
          >
            <h3 className="vertical-timeline-element-title">
            Graduation (B. Tech - CSE)
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
            Graphic Era Hill University, Bhimtal
            </h5>
            <p id="description"> Completed Graduation in B. Tech - Computer Science & Engineering with 8.5 GPA.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <VerticalTimeline>
          <VerticalTimelineElement
          key={7}
            date="Mar 2013 - Mar 2015"
            dateClassName="date"
            className="vert-timeline-elmnt"
            iconStyle={{
              background:
                "linear-gradient(to bottom, #fff 0%, #f9ab00 100%)",
              color: "#fff",
            }}
            icon={<img src={kv} style={{display:"block", marginLeft:"auto", marginRight:"auto", marginTop:"23%", width:"55%"}} />}
          >
            <h3 className="vertical-timeline-element-title">
            School - 10th & 12th
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
            Kendriya Vidhyalaya, Dehradun
            </h5>
            <p id="description"> Passed High School and Senior Secondary with 7.5 GPA.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
