import React, { useContext, useEffect } from "react";
import SearchContext from "../Context/SearchContext";
import { fetchSearchResults } from "../UseFetch";

function SearchResult() {
  const { searchResults, setSearchResults, searchText } =
    useContext(SearchContext);
 

  useEffect(() => {
    console.log("use effect here");
    if (searchText) {
      fetchSearchResults(searchText)
        .then((response) => {
          setSearchResults(response.results);
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  console.log("Search results is rendering");
  return (
    <div>
      
    <div>
      {searchResults.map((result) => (
        <div key={result.id}>
          <img src={result.urls.small} alt={result.alt_description} />
        </div>
      ))}
    </div>
    </div>
  );
}

export default SearchResult;
