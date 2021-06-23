import React, { useEffect } from "react";
import spring from "../asset/spring2.png";
import oracle from "../asset/oracle.png";
import rtc from "../asset/rtc.jpg";
import sql from "../asset/sql.png";
import kana from "../asset/kana.jpeg";
import bsc from "../asset/bsc.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faReact,
  faAngular,
  faJenkins,
  faAws,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faMusic, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="skills-wraper" id="skills">
      <div className="skills-main container">
        <h2
          className="skills-title"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Professional Skills
        </h2>

        <div className="skills row">
          <div className="skill-main-box col-3">
            <h2
              className="skills-subtitle"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Languages
            </h2>
            <p
              className="skills-text"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Having more than 8+ yrs of experience on some Frontend & Backend
              languages like
            </p>
            <div className="skills-box">
              <div
                className="skills-data"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="skills-names">
                  <span className="skills-name">JAVA</span>
                </div>
                <div className="skills-bar skills-java"></div>
                <div>
                  <FontAwesomeIcon
                    icon={faJava}
                    size="2x"
                    className="skill-icon"
                  />
                </div>
              </div>

              <div
                className="skills-data"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="skills-names">
                  <span className="skills-name">Spring Framework</span>
                </div>
                <div className="skills-bar skills-spring"></div>
                <div className="spring-img">
                  <img src={spring} className="skill-icon" width="35px" />
                </div>
              </div>
              <div
                className="skills-data"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="skills-names">
                  <span className="skills-name">ReactJS</span>
                </div>
                <div className="skills-bar skills-react"></div>
                <div>
                  <FontAwesomeIcon
                    icon={faReact}
                    size="2x"
                    className="skill-icon"
                  />
                </div>
              </div>
              <div
                className="skills-data"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="skills-names">
                  <span className="skills-name">Angular JS</span>
                </div>
                <div className="skills-bar skills-angular"></div>
                <div>
                  <FontAwesomeIcon
                    icon={faAngular}
                    size="2x"
                    className="skill-icon"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="skill-main-box col-3">
            <h2
              className="skills-subtitle"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Databases
            </h2>
            <p
              className="skills-text"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Perfectly knows how to play with the data like creating, reading,
              updating and deleting data using
            </p>
            <div className="skills-box">
              <div
                className="skills-data"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="skills-names">
                  <span className="skills-name">Oracle</span>
                </div>
                <div className="skills-bar skills-oracle"></div>
                <div>
                  <img src={oracle} className="skill-icon" width="35px" />
                </div>
              </div>
              <div
                className="skills-data"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="skills-names">
                  <span className="skills-name">MySql</span>
                </div>
                <div className="skills-bar skills-sql"></div>
                <div>
                  <img src={sql} className="skill-icon" width="35px" />
                </div>
              </div>
            </div>
          </div>

          <div className="skill-main-box col-3">
            <h2
              className="skills-subtitle"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Source Control
            </h2>
            <p
              className="skills-text"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Having knowledge on how to collab with others and keep track of
              our projects using
            </p>
            <div className="skills-box">
              <div
                className="skills-data"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="skills-names">
                  <span className="skills-name">GitHub</span>
                </div>
                <div className="skills-bar skills-github"></div>
                <div>
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    className="skill-icon"
                  />
                </div>
              </div>
              <div
                className="skills-data"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="skills-names">
                  <span className="skills-name">RTC</span>
                </div>
                <div className="skills-bar skills-rtc"></div>
                <div>
                  <img src={rtc} className="skill-icon" width="35px" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills row">
          <div className="skill-main-box col-3">
            <h2
              className="skills-subtitle"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              CRM Softwares
            </h2>
            <p
              className="skills-text"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Having experience on some Customer Relationship Management
              Services like
            </p>
            <div className="skills-box">
              {/* <div
                className="skills-data"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="skills-names">
                  <span className="skills-name">Jenkins</span>
                </div>
                <div className="skills-bar skills-jenkins"></div>
                <div>
                  <FontAwesomeIcon
                    icon={faJenkins}
                    size="2x"
                    className="skill-icon"
                  />
                </div>
              </div> */}
              <div
                className="skills-data"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="skills-names">
                  <span className="skills-name">KANA.</span>
                </div>
                <div className="skills-bar skills-kana"></div>
                <div>
                  <img src={kana} className="skill-icon" width="35px" />
                </div>
              </div>
              <div
                className="skills-data"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="skills-names">
                  <span className="skills-name">Brickstreet Connect</span>
                </div>
                <div className="skills-bar skills-bsc"></div>
                <div>
                  <img src={bsc} className="skill-icon" width="35px" />
                </div>
              </div>
            </div>
          </div>

          <div className="skill-main-box col-3">
            <h2
              className="skills-subtitle"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Cloud
            </h2>
            <p
              className="skills-text"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Skilled with the web services of world's most comprehensive and
              broadly adopted cloud platform
            </p>
            <div className="skills-box">
              <div
                className="skills-data"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="skills-names">
                  <span className="skills-name">AWS</span>
                </div>
                <div className="skills-bar skills-aws"></div>
                <div>
                  <FontAwesomeIcon
                    icon={faAws}
                    size="2x"
                    className="skill-icon"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="skill-main-box col-3">
            <h2
              className="skills-subtitle"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Extra
            </h2>
            <p
              className="skills-text"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Some of my stuff that I used to do in my free time other than
              developing Softwares
            </p>
            <div className="skills-box">
              <div
                className="skills-data"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="skills-names">
                  <span className="skills-name">Music Composition</span>
                </div>
                <div className="skills-bar skills-music-c"></div>
                <div>
                  <FontAwesomeIcon
                    icon={faMusic}
                    size="2x"
                    className="skill-icon"
                  />
                </div>
              </div>
              <div
                className="skills-data"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="skills-names">
                  <span className="skills-name">Music Production</span>
                </div>
                <div className="skills-bar skills-music-p"></div>
                <div>
                  <FontAwesomeIcon
                    icon={faMusic}
                    size="2x"
                    className="skill-icon"
                  />
                </div>
              </div>
              <div
                className="skills-data"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="skills-names">
                  <span className="skills-name">Singing</span>
                </div>
                <div className="skills-bar skills-singing"></div>
                <div>
                  <FontAwesomeIcon
                    icon={faMicrophone}
                    size="2x"
                    className="skill-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
