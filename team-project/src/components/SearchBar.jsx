import React, { useState, useEffect, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { fetchSearchResults } from "../UseFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./LandingPage.css";
import SearchResult from "./SearchResult";
import SearchContext  from "../Context/SearchContext";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { setSearchResults,searchText,setSearchText } = useContext(SearchContext);

  const navigate = useNavigate()

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
  }, [searchQuery, setSearchResults]);

  const renderDataOnClick = (e) => {
  navigate('/searchresult')
  };

  return (
    <>
      <div className="hero-input">
        <input
          type="text"
          placeholder="Search for photos"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button style={{border: "none"}}>
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
