import React from "react";
import './LandingPage.css';
import Image1 from "../images/grid-img/01.jpg";
import Image2 from "../images/grid-img/02.jpg";
import Image3 from "../images/grid-img/03.jpg";
import Image4 from "../images/grid-img/04.jpg";
import Image5 from "../images/grid-img/05.jpg";
import Image6 from "../images/grid-img/06.jpg";
import Image7 from "../images/grid-img/07.jpg";
import Image8 from "../images/grid-img/08.jpg";
import Image9 from "../images/grid-img/09.jpg";
import Image10 from "../images/grid-img/10.jpg";
import Image11 from "../images/grid-img/11.jpg";
import Image12 from "../images/grid-img/12.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  return (
    <>
      <section className="hero">
        <div className="all-hero">
          <div className="hero-content">
            <p>Free high resolution images</p>
            <h1>
              Download astonishing images & photos for you or your business
            </h1>
          </div>
          <div className="hero-input">
            <input type="text" placeholder="Search for free photos" />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </div>

          <div className="popular">
            <p>Popular categories: </p>
            <ul className="pop-categories">
              <li>
                <a href="/">Nature</a>
              </li>
              <li>
                <a href="/">Wallpaper</a>
              </li>
              <li>
                <a href="/">Cities</a>
              </li>
              <li>
                <a href="/">Architecture</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="news-waterfall" className="grid">
      <div className="box">
        <div className="content">
          <img src={Image1} alt="Image 1" />
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src={Image2} alt="Image 2" />
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src={Image3} alt="Image 3" />
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src={Image4} alt="Image 1" />
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src={Image5} alt="Image 1" />
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src={Image6} alt="Image 1" />
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src={Image7} alt="Image 1" />
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src={Image8} alt="Image 1" />
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src={Image9} alt="Image 1" />
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src={Image10} alt="Image 1" />
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src={Image11} alt="Image 1" />
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src={Image12} alt="Image 1" />
        </div>
      </div>
    </section>
    </>
  );
};

export default LandingPage;
