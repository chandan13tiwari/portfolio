import React, { useEffect } from "react";
import project1 from "../asset/work1.jpg";
import project2 from "../asset/work2.jpg";
import project3 from "../asset/work3.jpg";
import project4 from "../asset/work4.jpg";
import project5 from "../asset/work5.jpg";
import project6 from "../asset/work6.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="project-wraper">
      <div className="container" id="project">
        <h2
          className="project-title"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          My Work
        </h2>

        <div className="project-container">
          <div className="project-row row">
            <div
              className="project-img col-3"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={project1} alt="" />

              <div className="project-link">
                <a href="#" className="project-link-name">
                  Machine Learning Intermediate Module with KANA.
                </a>
              </div>
            </div>
            <div
              className="project-img col-3"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={project2} alt="" />

              <div className="project-link">
                <a href="#" className="project-link-name">
                  Digital KYC for HSBC France
                </a>
              </div>
            </div>
            <div
              className="project-img col-3"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={project3} alt="" />

              <div className="project-link">
                <a href="#" className="project-link-name">
                  Common Standard Report - Digital for HSBC France
                </a>
              </div>
            </div>
          </div>
          <div className="project-row row">
            <div
              className="project-img col-3"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={project4} alt="" />

              <div className="project-link">
                <a href="#" className="project-link-name">
                  GEHU Online
                </a>
              </div>
            </div>
            <div
              className="project-img col-3"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={project5} alt="" />

              <div className="project-link">
                <a href="#" className="project-link-name">
                  Bank Digital Wallet
                </a>
              </div>
            </div>
            <div
              className="project-img col-3"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={project6} alt="" />

              <div className="project-link">
                <a href="#" className="project-link-name">
                  Capg e-Commerce Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;