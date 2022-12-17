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
              Hey there! I'm from Uttarakhand (India), also known as "Land of the Gods". I've more than 3 years of professional experience in IT sector and developing Softwares for different multi national clients. <em>A Big fan of JAVA!</em> 
              <br /> <br />
              With my professional career, I'm also passionate about Music. I always enjoy staying at home and producing some good music! I'm not much of an outdoor person. I love rainy days where I can wrap myself in a blanket and binge-watch series without feeling guilty! I speak Hindi, English and obviously JAVA ;-P.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
