import React from "react";
import Typed from "react-typed";
import SocialMedia from "./SocialMedia";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header-wraper" id="home">
      <div className="main-info">
        <h1>
          Hi, I'm <span className="myname">Chandan Tiwari</span>
        </h1>
        <Typed
          className="typed-text"
          strings={[
            "Tech Consultant",
            "Software Engineer",
            "Full Stack Developer",
            "AWS Certified Cloud Practitioner",
            "Senior Analyst",
            "Music Producer"
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />

        <Link to="contact" className="btn-main-offer">
          Let's collab!
        </Link>

        {/* <span>
          <button className="btn-main-offer">
            <span>Let's collab! </span>
          </button>
        </span> */}

        <div className="social-main-offer">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Header;
