import React, { useEffect } from "react";
import profilePic from "../asset/me.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="about-wraper" id="about">
      <div className="about-main container">
        <h2
          className="about-title"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          About me
        </h2>

        <div className="about-container row">
          <div
            className="about-img col"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="90"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img src={profilePic} alt="profilePic" />
          </div>

          <div className="about-data col">
            <h2
              className="about-subtitle"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="90"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Chandan Tiwari
            </h2>
            <p
              className="about-text"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              I came from a small city of Uttarakhand named Haldwani which is
              located near Nainital. Having over more than 8+ years of
              experience in coding and different programming languages and 2+
              years of experience in IT industry. A Big fan of JAVA.
              <br /> <br />
              Apart of having my professional life, I'm more into Music. Having
              more than 2+ years experience in professional Music production.
              Singing and music composition are my stress busters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
