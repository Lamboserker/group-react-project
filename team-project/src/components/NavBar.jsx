import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";
import PixPulseLogo from "../images/PULSE.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
              <a className="dropbtn" onClick={toggleDropdown}>
                Categories
                <span className={`arrow ${dropdownOpen ? "up" : "down"}`}>
                  <FontAwesomeIcon icon={faAngleDown} className="arrowDown" />
                </span>
              </a>
              <div className="dropdown-content">
                <ul className="column left-content">
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      Category 1
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      Category 2
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      Category 3
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      Category 1
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      Category 2
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      Category 3
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      Category 1
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      Category 2
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      Category 3
                    </a>
                  </li>
                </ul>
                <ul className="column right-content">
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      Category 1
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      Category 2
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      Category 3
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      Category 1
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      Category 2
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      Category 3
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      Category 1
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      Category 2
                    </a>
                  </li>
                  <li>
                    <a href="/" rel="noopener noreferrer">
                      Category 3
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
    </>
  );
};

export default NavBar;
