import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageBlock from "./ImageBlock";
import TextBlock from "./TextBlock";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const image = "/imgs/Headshot.jpg";

const leadText =
  "I'm James Kariuki. Thanks for visiting my page! I'm a passionate Frontend Developer based in the New York/New Jersey area.";
function Landing() {
  return (
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 landingMain">
      <div class="col-10 col-sm-8 col-lg-6 mainContent">
        <ImageBlock src={image} />
      </div>
      <div class="col-lg-6 mainContent">
        <h1 class="display-5 fw-bold lh-1 mb-3">Front-End React Developer</h1>
        <TextBlock mainText={leadText} />
        <div>
          <FontAwesomeIcon className="icons" icon={faHtml5} size="4x" />
          <FontAwesomeIcon className="icons" icon={faCss3Alt} size="4x" />
          <FontAwesomeIcon className="icons" icon={faJsSquare} size="4x" />
          <FontAwesomeIcon className="icons" icon={faReact} size="4x" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
