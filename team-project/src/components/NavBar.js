import React, { useState } from "react";
import "./NavBar.css";
import PixPulseLogo from "../images/PULSE.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <section id="header">
        <div className="logo">
          <a href="#">
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
                <div className="column left-content">
                  <a href="/">Category 1</a>
                  <a href="/">Category 2</a>
                  <a href="/">Category 3</a>
                  <a href="/">Category 1</a>
                  <a href="/">Category 2</a>
                  <a href="/">Category 3</a>
                  <a href="/">Category 1</a>
                  <a href="/">Category 2</a>
                  <a href="/">Category 3</a>
                </div>
                <div className="column right-content">
                  <a href="/">Category 1</a>
                  <a href="/">Category 2</a>
                  <a href="/">Category 3</a>
                  <a href="/">Category 1</a>
                  <a href="/">Category 2</a>
                  <a href="/">Category 3</a>
                  <a href="/">Category 1</a>
                  <a href="/">Category 2</a>
                  <a href="/">Category 3</a>
                </div>
              </div>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>Blog</a>
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
    </>
  );
};

export default NavBar;
