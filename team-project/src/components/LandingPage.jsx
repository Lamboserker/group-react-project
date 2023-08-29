import React, { useState } from "react";
import "./styles/LandingPage.css";
import ImageGrid from "./ImageGrid";
import SearchBar from "./SearchBar";

const LandingPage = () => {
  const [showImageGrid, setShowImageGrid] = useState(false); // State for ImageGrid visibility

  const handleCategoryClick = () => {
    setShowImageGrid(true);
  };

  return (
    <>
      <section
        className="hero" /*style={{ backgroundImage: `url(${heroImage})` }}*/
      >
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
      <ImageGrid handleCategoryClick={handleCategoryClick} />
    </>
  );
};

export default LandingPage;
