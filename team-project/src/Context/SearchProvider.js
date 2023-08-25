import { useState } from "react";
import  SearchContext from "./SearchContext";
const SearchProvider = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  //const [categoryResults, setCategoryResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults, searchText, setSearchText,}}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
