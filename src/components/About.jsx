import React, { useEffect } from "react";
import profilePic from "../asset/perfil.png";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="about-wraper">
      <div className="container" id="about">
        <h2 className="about-title">About me</h2>

        <div className="about-container row">
          <div className="about-img col">
            <img src={profilePic} alt="profilePic" />
          </div>

          <div className="about-data col">
            <h2 className="about-subtitle">Chandan Tiwari</h2>
            <p className="about-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat
              ut voluptates soluta, aut earum nemo recusandae cumque
              perferendis! Recusandae alias accusamus atque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
