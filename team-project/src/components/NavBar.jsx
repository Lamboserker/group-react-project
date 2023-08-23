import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
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
          <a href="/">
            <img src={PixPulseLogo} className="logo-img" alt="company logo" />
          </a>
        </div>

        <div>
          <ul id="navbar">
            <li className={`dropdown ${dropdownOpen ? "clicked" : ""}`}>
              <a className="dropbtn" onClick={toggleDropdown}  >
                Categories
                <span className={`arrow ${dropdownOpen ? "up" : "down"}`}>
                  <FontAwesomeIcon icon={faAngleDown} className="arrowDown" />
                </span>
              </a>
              <div className="dropdown-content">
                <div className="column left-content">
                  <a href="/" rel="noopener noreferrer">Category 1</a>
                  <a href="/" rel="noopener noreferrer">Category 2</a>
                  <a href="/" rel="noopener noreferrer">Category 3</a>
                  <a href="/" rel="noopener noreferrer">Category 1</a>
                  <a href="/" rel="noopener noreferrer">Category 2</a>
                  <a href="/" rel="noopener noreferrer">Category 3</a>
                  <a href="/" rel="noopener noreferrer">Category 1</a>
                  <a href="/" rel="noopener noreferrer">Category 2</a>
                  <a href="/" rel="noopener noreferrer">Category 3</a>
                </div>
                <div className="column right-content">
                  <a href="/" rel="noopener noreferrer">Category 1</a>
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
