import React from "react";
import GithubLogo from "./logos/GithubLogo";
import MediumLogo from "./logos/MediumLogo";

function Footer() {
  const linkedIn = require("../assets/images/LI-In-Bug.png");
  return (
    <div className="flex justify-center items-center py-12">
      <div className="grid grid-cols-3 gap-6">
        <a
          href="https://github.com/austinzumbro"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo />
        </a>
        <a
          href="https://www.linkedin.com/in/austin-zumbro/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIn} className="w-7" alt="LinkedIn logo" />
        </a>
        <a
          href="https://medium.com/@azumbro"
          target="_blank"
          rel="noreferrer"
          className="self-center"
        >
          <MediumLogo />
        </a>
      </div>
    </div>
  );
}

export default Footer;
