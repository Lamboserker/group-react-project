import { useState } from "react";
import  SearchContext from "./SearchContext";
const SearchProvider = (props) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
