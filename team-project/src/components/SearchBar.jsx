import React, { useState, useEffect, useContext } from "react";
import { fetchSearchResults } from "../api/UseFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./styles/LandingPage.css";
import SearchContext from "../Context/SearchContext";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState(false);
  const { setSearchResults, setSearchText } = useContext(SearchContext);

  useEffect(() => {
    if (searchQuery !== "" && search === true) {
      fetchSearchResults(searchQuery)
        .then((response) => {
          setSearchResults(response.results);
          console.log(response);
          setSearch(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchQuery, setSearchResults, search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(searchQuery); // Set the search query to trigger the useEffect
    setSearch(true);
  };

  return (
    <>
      <div className="hero-input">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for photos"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button style={{ border: "none" }} type="submit">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="search-icon"
            ></FontAwesomeIcon>
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
