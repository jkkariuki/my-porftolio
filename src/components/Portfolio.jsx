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
    "/imgs/weatherAppImg.png",
    "/imgs/watchShopImg.png",
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
            <a href="https://ecommerce-rb26.onrender.com/">
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
          <ImageBlock id="portfolioImg" src={image[4]} />
        </div>
        <div class="col-lg-7">
          <h4>Weather App</h4>

          <div>
            <p class="lead">
              This application was developed using React.js. This app uses the
              weatherapi.com API which provides access to free weather and geo
              data via a JSON/XML restful API. Users can access real-time
              wheater anywhere in the world.
            </p>
            <a href="https://github.com/jkkariuki/weather-app">
              <FontAwesomeIcon
                className="icons"
                icon={faGithubSquare}
                size="2x"
              />
            </a>
            <a href="https://weather-app-7z6i.onrender.com">
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
          <h4>E-Commerce App</h4>

          <div>
            <p class="lead">
              Fully funtional MERN stack e-commerce website with payment
              integration via Stipe Checkout to complete test orders. This
              application uses MongoDB for data storage and JSON Web Token for
              user authentication.
            </p>
            <a href="https://github.com/jkkariuki/watch-shop-react">
              <FontAwesomeIcon
                className="icons"
                icon={faGithubSquare}
                size="2x"
              />
            </a>
            <a href="https://watch-shop-react2.onrender.com/">
              <FontAwesomeIcon
                className="icons"
                icon={faLaptopCode}
                size="2x"
              />{" "}
            </a>
          </div>
        </div>
        <div class="col-10 col-sm-8 col-lg-5 portfolioImgDiv">
          <ImageBlock id="portfolioImg" src={image[5]} />
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
            <a href="https://weather-app-7z6i.onrender.com">
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
