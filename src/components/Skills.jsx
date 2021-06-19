import React, { useEffect } from "react";
import skillFotu from "../asset/work3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faReact,
  faAngular,
  faJenkins,
  faAws,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="skills-wraper">
      <div className="container" id="skills">
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
              Skilled in Front end and Back end development
            </p>
            <div
              className="skills-box"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="skills-data">
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

              <div className="skills-data">
                <div className="skills-names">
                  <span className="skills-name">Spring Framework</span>
                </div>
                <div className="skills-bar skills-spring"></div>
                <div>
                  <FontAwesomeIcon
                    icon={faJava}
                    size="2x"
                    className="skill-icon"
                  />
                </div>
              </div>
              <div className="skills-data">
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
              <div className="skills-data">
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
              Skilled with efficiently using Databses for storage
            </p>
            <div
              className="skills-box"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="skills-data">
                <div className="skills-names">
                  <span className="skills-name">Oracle</span>
                </div>
                <div className="skills-bar skills-oracle"></div>
                <div>
                  <FontAwesomeIcon
                    icon={faJava}
                    size="2x"
                    className="skill-icon"
                  />
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <span className="skills-name">MySql</span>
                </div>
                <div className="skills-bar skills-sql"></div>
                <div>
                  <FontAwesomeIcon
                    icon={faJava}
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
              Skilled with efficiently using version control
            </p>
            <div
              className="skills-box"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="skills-data">
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
              <div className="skills-data">
                <div className="skills-names">
                  <span className="skills-name">RTC</span>
                </div>
                <div className="skills-bar skills-rtc"></div>
                <div>
                  <FontAwesomeIcon
                    icon={faJava}
                    size="2x"
                    className="skill-icon"
                  />
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
              Tools
            </h2>
            <p
              className="skills-text"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Experienced with Automation tools
            </p>
            <div
              className="skills-box"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="skills-data">
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
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <span className="skills-name">KANA.</span>
                </div>
                <div className="skills-bar skills-kana"></div>
                <div>
                  <FontAwesomeIcon
                    icon={faJava}
                    size="2x"
                    className="skill-icon"
                  />
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <span className="skills-name">Brickstreet Connect</span>
                </div>
                <div className="skills-bar skills-bsc"></div>
                <div>
                  <FontAwesomeIcon
                    icon={faJava}
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
              Having skill with virtual systems
            </p>
            <div
              className="skills-box"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="skills-data">
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
              Skills other than Technology stuff
            </p>
            <div
              className="skills-box"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="skills-data">
                <div className="skills-names">
                  <span className="skills-name">Music Composition</span>
                </div>
                <div className="skills-bar skills-music-c"></div>
                <div>
                  <FontAwesomeIcon
                    icon={faJava}
                    size="2x"
                    className="skill-icon"
                  />
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <span className="skills-name">Music Production</span>
                </div>
                <div className="skills-bar skills-music-p"></div>
                <div>
                  <FontAwesomeIcon
                    icon={faJava}
                    size="2x"
                    className="skill-icon"
                  />
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <span className="skills-name">Singing</span>
                </div>
                <div className="skills-bar skills-singing"></div>
                <div>
                  <FontAwesomeIcon
                    icon={faJava}
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
