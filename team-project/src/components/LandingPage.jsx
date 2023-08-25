import React from "react";
import "./LandingPage.css";
import ImageGrid from "./ImageGrid";
import SearchBar from "./SearchBar";


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
          <SearchBar />

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
      <ImageGrid />
    </>
  );
};

export default LandingPage;
