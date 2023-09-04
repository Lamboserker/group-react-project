import React, { useState, useContext } from "react";
import "./styles/LandingPage.css";
import ImageGrid from "./ImageGrid";
import SearchBar from "./SearchBar";
import SearchContext from "../Context/SearchContext";
import { fetchSearchResults } from "../api/UseFetch";
const LandingPage = () => {
  const [showImageGrid, setShowImageGrid] = useState(false); // State for ImageGrid visibility
  const { setSearchResults } = useContext(SearchContext);



  
  const handleCategoryClick = async (category) => {
    // Trigger the fetchNature function and handle the data
    try {
      const natureData = await fetchSearchResults(category);
      // Handle the natureData as needed
      console.log(natureData);
      setSearchResults(natureData.results);
      setShowImageGrid(true);
    } catch (error) {
      console.error("Error fetching nature data:", error);
    }
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
                <button
                  style={{
                    background: "none",
                    color: "white",
                    border: "none",
                    fontSize: "16px",
                    marginRight: "0.4rem",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={() => handleCategoryClick("nature")}
                  rel="noopener noreferrer"
                >
                  Nature
                </button>
              </li>
              <li>
                <button
                  style={{
                    background: "none",
                    color: "white",
                    border: "none",
                    fontSize: "16px",
                    marginRight: "0.4rem",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={() => handleCategoryClick("wallpapers")}
                  rel="noopener noreferrer"
                >
                  Wallpapers
                </button>
              </li>
              <li>
                <button
                  style={{
                    background: "none",
                    color: "white",
                    border: "none",
                    fontSize: "16px",
                    marginRight: "0.4rem",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={() => handleCategoryClick("cities")}
                  rel="noopener noreferrer"
                >
                  Cities
                </button>
              </li>
              <li>
                <button
                  style={{
                    background: "none",
                    color: "white",
                    border: "none",
                    fontSize: "16px",
                    marginRight: "0.4rem",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={() => handleCategoryClick("Architecture")}
                  rel="noopener noreferrer"
                >
                  Architecture
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {showImageGrid ? (
        <ImageGrid handleCategoryClick={handleCategoryClick} />
      ) : (
        <p>Loading random images...</p>
      )}
    </>
  );
};
export default LandingPage;
