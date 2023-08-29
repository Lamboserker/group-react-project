import React, { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import PixPulseLogo from "../images/PULSE.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./styles/NavBar.css";
import { fetchSearchResults } from "../api/UseFetch";
import ImageGrid from "./ImageGrid";
import SearchContext from "../Context/SearchContext";



const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
   const { setSearchResults } = useContext(SearchContext);
   const [showImageGrid, setShowImageGrid] = useState(false); // State for ImageGrid visibility

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCategoryClick = async (category) => {
    // Trigger the fetchNature function and handle the data
    try {
      const natureData = await fetchSearchResults(category);

      // Handle the natureData as needed
      console.log(natureData);
      setSearchResults(natureData.results)
      setShowImageGrid(true);
    } catch (error) {
      console.error("Error fetching nature data:", error);
    }
  };

  return (
    <>
      <section id="header">
        <div className="logo">
          <a href="/">
            <img src={PixPulseLogo} className="logo-img" alt="company logo" />
          </a>
        </div>

        <div>
          <ul id="navbar">
            <li className={`dropdown ${dropdownOpen ? "clicked" : ""}`}>
              <a
                className="dropbtn"
                rel="noopener noreferrer"
                onClick={toggleDropdown}
              >
                Categories
                <span className={`arrow ${dropdownOpen ? "up" : "down"}`}>
                  <FontAwesomeIcon icon={faAngleDown} className="arrowDown" />
                </span>
              </a>
              <div className="dropdown-content">
                <ul className="column left-content">
                  <li>
                    <a onClick={()=>handleCategoryClick("nature")} rel="noopener noreferrer">
                      Nature
                    </a>
                  </li>
                  <li>
                    <a onClick={()=>handleCategoryClick("cars")} rel="noopener noreferrer">
                      Cars
                    </a>
                  </li>
                </ul>
                <ul className="column right-content">
                <li>
                    <a onClick={()=>handleCategoryClick("space")} rel="noopener noreferrer">
                      Space
                    </a>
                  </li>
                  <li>
                    <a onClick={()=>handleCategoryClick("animals")} rel="noopener noreferrer">
                      Animals
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li className="left-border">
              <button className="upload-button">Upload a picture!</button>
            </li>
            <li>
              <button className="login-button">Login</button>
            </li>
          </ul>
        </div>
      </section>

      <Outlet />
       {/* Conditionally render ImageGrid based on showImageGrid state */}
       {showImageGrid && <ImageGrid handleCategoryClick={handleCategoryClick} />}
    </>
    
  );
};

export default NavBar;

