import React from "react";
import ImageBlock from "./ImageBlock";
import TextBlock from "./TextBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function Portfolio() {
  const image = [
    "/imgs/Screenshot (6).png",
    "/imgs/Jamazon.png",
    "/imgs/mytube1.png",
    "/imgs/newsAppImg.png",
  ];
  const imageId = "aboutImage";
  const aboutMe =
    "As a junior developer I possess strong skills with tools such as HTML, CSS, Javascript, & React. I excell in creating & maintaining responsive websites with the aim of offering a smooth user experience. Through writing clean and optimized code my user interfaces are dynamic and engaging. I count myself great team player who thrives in collaborating with cross-functional teams to produce excellent results";
  return (
    <div className="container projects">
      <h1>Projects</h1>
      <div
        class="row flex-lg-row align-items-center g-5 py-5 portfolioSection"
        id="portfolioSection"
      >
        <div class="col-lg-7 ">
          <h4>E-Commerce Site</h4>

          <div>
            <p class="lead">
              This is a basic e-commerce website built with Express, React,
              NodeJS and Bootstrap. This website features a modern and intuitive
              design, with easy-to-use navigation and a simple shopping
              experience that puts the focus on the products. Browse Items by
              Category(Products pulled from FakeProductsAPI). Add and delete
              items from the Shopping Cart. Stripe checkout(test) is enabled to
              complete your purchases
            </p>
            <a href="https://github.com/jkkariuki/ecommerce-app">
              <FontAwesomeIcon
                className="icons"
                icon={faGithubSquare}
                size="2x"
              />
            </a>
            <a href="https://jk-ecommerce-app.herokuapp.com/">
              <FontAwesomeIcon
                className="icons"
                icon={faLaptopCode}
                size="2x"
              />{" "}
            </a>
          </div>
        </div>
        <div class="col-10 col-sm-8 col-lg-5 portfolioImgDiv">
          <ImageBlock id="portfolioImg" src={image[1]} />
        </div>

        <hr />

        <div class="col-10 col-sm-8 col-lg-5 portfolioImgDiv">
          <ImageBlock id="portfolioImg" src={image[0]} />
        </div>
        <div class="col-lg-7">
          <h4>Recipe App</h4>

          <div>
            <p class="lead">
              This application was built with NodeJS, React and Material-UI.
              This app uses the Edamam API which allows users access to search
              over 2.3 million recipes across various parameters. Browse Recipes
              by name of dish(i.e. Lasagna, Chicken Curry) or by specific
              ingredients (i.e. onions, salt, pepper ). Users can enter
              multiple(comma seperated) ingredients in a single search. Users
              can save recipes as a "favorite" as well as delete favorites.
            </p>
            <a href="https://github.com/jkkariuki/recipe-app">
              <FontAwesomeIcon
                className="icons"
                icon={faGithubSquare}
                size="2x"
              />
            </a>
            <a href="https://jk-recipe-app-1096155fe241.herokuapp.com/">
              <FontAwesomeIcon
                className="icons"
                icon={faLaptopCode}
                size="2x"
              />{" "}
            </a>
          </div>
        </div>
        <hr />
        <div class="col-lg-7 ">
          <h4>Video Catalog App</h4>

          <div>
            <p class="lead">
              This app is basic catalog of some of my favorite youtube videos
              from this year. Users can filter videos by category. Built with
              NodeJS, React, and Bootstrap.
            </p>
            <a href="https://github.com/jkkariuki/mytube">
              <FontAwesomeIcon
                className="icons"
                icon={faGithubSquare}
                size="2x"
              />
            </a>
            <a href="https://jk-mytube-7b92d9d44b90.herokuapp.com/">
              <FontAwesomeIcon
                className="icons"
                icon={faLaptopCode}
                size="2x"
              />{" "}
            </a>
          </div>
        </div>
        <div class="col-10 col-sm-8 col-lg-5 portfolioImgDiv">
          <ImageBlock id="portfolioImg" src={image[2]} />
        </div>
        <hr />

        <div class="col-10 col-sm-8 col-lg-5 portfolioImgDiv">
          <ImageBlock id="portfolioImg" src={image[3]} />
        </div>
        <div class="col-lg-7">
          <h4>News App</h4>

          <div>
            <p class="lead">
              This is a simple news site with articles being sourced from
              NewsApi.org. The site also uses the Open Weather Api in conjuction
              with the Javascript API navigator.geolocation to get the user's
              local weather data. User must allow access to their location for
              the this feature to work. Coming Soon Search articles by keyword.
              Full Weather details and forecasts page
            </p>
            <a href="https://github.com/jkkariuki/News-App">
              <FontAwesomeIcon
                className="icons"
                icon={faGithubSquare}
                size="2x"
              />
            </a>
            <a href="https://jk-newsapp-c6afecd0057f.herokuapp.com">
              <FontAwesomeIcon
                className="icons"
                icon={faLaptopCode}
                size="2x"
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
