import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { fetchSearchResults } from "../UseFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./LandingPage.css";
import SearchResult from "./SearchResult";
import SearchContext  from "../Context/SearchContext";

function SearchBar() {
  const [input, setInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const { setSearchResults } = useContext(SearchContext);

  useEffect(() => {
    if (searchQuery !== "") {
      fetchSearchResults(searchQuery)
        .then((response) => {
          setSearchResults(response.results);
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchQuery]);

  const renderDataOnClick = (e) => {
    setSearchQuery(input);
    setShowResults(true);
  };

  return (
    <>
      <div className="hero-input">
        <input
          type="text"
          placeholder="Search for photos"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="search-icon"
            onClick={renderDataOnClick}
          ></FontAwesomeIcon>
        </button>
      </div>

      <SearchResult />
    </>
  );
}

export default SearchBar;
