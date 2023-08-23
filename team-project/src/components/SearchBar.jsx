import React, { useState, useEffect } from 'react';
import { fetchSearchResults } from '../UseFetch';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './LandingPage.css';
import SearchResult from './SearchResult';

function SearchBar() {
  const [input, setInput] = useState("");
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchQuery !== '') {
      fetchSearchResults(searchQuery)
        .then(response => {
          setImages(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [searchQuery]);

  

   const renderDataOnClick = (e) => {
    setSearchQuery(input);
    setShowResults(true);
  }

  return (
    
    <>
      <div className="hero-input">
            <input type="text" placeholder="Search for photos" value={input} onChange={(e) => setInput(e.target.value)} />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" onClick={renderDataOnClick}/>
          </div>
        
        <SearchResult />
       
    </>
    
  );
}

export default SearchBar;
