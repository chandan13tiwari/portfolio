import React from "react";
import Typed from "react-typed";
import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>
          Hi, I'm <span className="myname">Chandan Tiwari</span>
        </h1>
        <Typed
          className="typed-text"
          strings={[
            "Senior Software Engineer",
            "Full Stack Developer",
            "AWS Certified Solution Architect",
            "Senior Analyst",
            "Music Composer",
            "Music Production",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />

        <a href="#" className="btn-main-offer">
          Let's collab!
        </a>

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
