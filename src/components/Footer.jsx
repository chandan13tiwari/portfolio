import React from "react";

import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <div>
      <footer class="footer bg-dark">
        <p class="footer-title">
          It all started with, <em>print "Hello World!"</em>
        </p>
        <div class="footer-social">
          <SocialMedia />
        </div>
        <p>
          For any queries, write down to{" "}
          <span style={{ textDecoration: "underline" }}>
            chandan13tiwaris@gmail.com
          </span>
        </p>
        <p>Jai Hind! Vande Matram!</p>
      </footer>
    </div>
  );
}

export default Footer;
