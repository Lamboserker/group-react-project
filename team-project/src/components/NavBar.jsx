import React, { useState, useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import PixPulseLogo from "../images/PULSE.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAngleDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons"; // Import the Hamburger icon
import "./styles/NavBar.css";
import { fetchSearchResults } from "../api/UseFetch";
import ImageGrid from "./ImageGrid";
import SearchContext from "../Context/SearchContext";
import AuthDetails from "./AuthDetails";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../firebase";
 
const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { setSearchResults } = useContext(SearchContext);
  const [showImageGrid, setShowImageGrid] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false); // State for mobile menu
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Der Benutzer ist angemeldet.
        setIsLoggedIn(true);
      } else {
        // Der Benutzer ist nicht angemeldet.
        setIsLoggedIn(false);
      }
    });
  
    // Rückgabefunktion, um das Abhören bei der Demontage der Komponente zu stoppen.
    return () => unsubscribe();
  }, []);
  

  return (
    <>
      <section id="header">
        <div className="logo">
          <a href="/">
            <img src={PixPulseLogo} className="logo-img" alt="company logo" />
          </a>
        </div>

        {/* Hamburger Menu Button for Mobile and Tablet */}
        <button
          className={`mobile-menu-button ${showMobileMenu ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          {showMobileMenu ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>

        {/* Regular Desktop Menu */}
        <div
          className={`desktop-menu ${
            showMobileMenu ? "hide-desktop-menu" : ""
          }`}
        >
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
                    <a
                      onClick={() => handleCategoryClick("nature")}
                      rel="noopener noreferrer"
                    >
                      Nature
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => handleCategoryClick("cars")}
                      rel="noopener noreferrer"
                    >
                      Cars
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => handleCategoryClick("countries")}
                      rel="noopener noreferrer"
                    >
                      Countries
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => handleCategoryClick("landscape")}
                      rel="noopener noreferrer"
                    >
                      Landscape
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => handleCategoryClick("comic")}
                      rel="noopener noreferrer"
                    >
                      Comic
                    </a>
                  </li>
                </ul>
                <ul className="column right-content">
                  <li>
                    <a
                      onClick={() => handleCategoryClick("space")}
                      rel="noopener noreferrer"
                    >
                      Space
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => handleCategoryClick("events")}
                      rel="noopener noreferrer"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => handleCategoryClick("winter")}
                      rel="noopener noreferrer"
                    >
                      Winter
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => handleCategoryClick("animals")}
                      rel="noopener noreferrer"
                    >
                      Animals
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => handleCategoryClick("arts")}
                      rel="noopener noreferrer"
                    >
                      Arts
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/myProfile">View profile</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li className="left-border">
              <button className="upload-button">Upload a picture!</button>
            </li>
            <li>
              <AuthDetails />
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
        <div className={`mobile-menu ${showMobileMenu ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/myProfile">View profile</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/register">Login</Link>
            </li>
            <li>
              <AuthDetails />
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
