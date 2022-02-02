import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
  return (
    <div className="social-container">
      <a
        href="https://www.youtube.com/channel/UCxyt1YhqRwyNajqyEbk4lMQ"
        className="youtube social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/chandan.tiwari.3114935/"
        className="facebook social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://twitter.com/Chandan13tiwari"
        className="twitter social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/chandan13tiwari/"
        className="instagram social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

      <a
        href="https://www.linkedin.com/in/chandan-tiwari-uk/"
        className="linkedin social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://github.com/chandan13tiwari"
        className="github social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
}

export default SocialMedia;
