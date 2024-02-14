import React from "react";
import ImageBlock from "./ImageBlock";
import TextBlock from "./TextBlock";

const image = "/imgs/ResponsiveDesignImg.png";
const imageId = "aboutImage";
const aboutMe =
  "As a web developer, I possess strong skills with tools such as HTML, CSS, Javascript, & React. I excell in creating & maintaining responsive websites with the aim of offering a smooth user experience. Through writing clean and optimized code my user interfaces are dynamic and engaging. I consider myself a true team player who thrives in collaborating with cross-functional teams to produce excellent results";

function About() {
  return (
    <div
      class="container row flex-lg-row align-items-center g-5 py-5 aboutSection"
      id="aboutSection"
    >
      <div class="col-10 col-sm-8 col-lg-4 mainContent">
        <ImageBlock id={imageId} src={image} />
      </div>
      <div class="col-lg-8 mainContent">
        <h2 class="display-7 fw-bold lh-1 mb-3">
          A Web Development Enthusiast
        </h2>

        <TextBlock mainText={aboutMe} />
      </div>
    </div>
  );
}

export default About;
