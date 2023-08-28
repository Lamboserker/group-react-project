import React, { useState, useEffect, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import PixPulseLogo from "../images/PULSE.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import { fetchCategories } from "../UseFetch";
import SearchContext from "../Context/SearchContext";
import CategoryResult from "./CategoryResult";

const NavBar = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { searchResults,setSearchResults} = useContext(SearchContext);
  const [searchQuery, setSearchQuery] = useState("");
  
  const navigate = useNavigate()

  useEffect(() => {
    if (searchQuery !== "") {
      fetchCategories(searchQuery)
        .then((response) => {
          setSearchResults(response.results);
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchQuery, setSearchResults]);

  const renderDataOnClick = (e) => {
  navigate('/categoryresult')
  };

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
                  <li><a href="/" rel="noopener noreferrer">Category 1</a></li>
                  <li><a href="/" rel="noopener noreferrer">Category 2</a></li>
                  <li><a href="/" rel="noopener noreferrer">Category 3</a></li>
                  <li><a href="/" rel="noopener noreferrer">Category 1</a></li>
                  <li><a href="/" rel="noopener noreferrer">Category 2</a></li>
                  <li><a href="/" rel="noopener noreferrer">Category 3</a></li>
                  <li><a href="/" rel="noopener noreferrer">Category 1</a></li>
                  <li><a href="/" rel="noopener noreferrer">Category 2</a></li>
                  <li><a href="/" rel="noopener noreferrer">Category 3</a></li>
                </ul>
                <ul className="column right-content">
                  <li><a href="/" rel="noopener noreferrer">Category 1</a></li>
                  <li><a href="/" rel="noopener noreferrer">Category 2</a></li>
                  <li><a href="/" rel="noopener noreferrer">Category 3</a></li>
                  <li><a href="/" rel="noopener noreferrer">Category 1</a></li>
                  <li><a href="/" rel="noopener noreferrer">Category 2</a></li>
                  <li><a href="/" rel="noopener noreferrer">Category 3</a></li>
                  <li><a href="/" rel="noopener noreferrer">Category 1</a></li>
                  <li><a href="/" rel="noopener noreferrer">Category 2</a></li>
                  <li><a href="/" rel="noopener noreferrer">Category 3</a></li>
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
      <CategoryResult/>
    </>
  );
};

export default NavBar;
