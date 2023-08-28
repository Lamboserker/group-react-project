import React from "react";
import "./LandingPage.css";
import ImageGrid from "./ImageGrid";
import SearchBar from "./SearchBar";

// const categoryHeroImages = {
//   Nature: "url_to_nature_hero_image",
//   Wallpaper: "url_to_wallpaper_hero_image",
//   Cities: "url_to_cities_hero_image",
//   Architecture: "url_to_architecture_hero_image",
// };


const LandingPage = (/*category*/) => {
  // const heroImage = categoryHeroImages[category] || "default_hero_image_url";
  return (
    <>
      <section className="hero" /*style={{ backgroundImage: `url(${heroImage})` }}*/>
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
