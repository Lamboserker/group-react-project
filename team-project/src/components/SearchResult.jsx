import React, {useContext} from "react";
import SearchContext from "../Context/SearchContext";

function SearchResult() {
  const { searchResults } = useContext(SearchContext);
  return (
    <div >
      {/*<SearchBar />*/}
      {searchResults.map((result) => (
        <div key={result.id}>
          <img src={result.urls.small} alt={result.alt_description} />
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
