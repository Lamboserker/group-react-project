
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

    <div className="image-list">
      {images.map(image => (
        <div key={image.id} className="image-item">
          <img src={image.urls.small} alt={image.alt_description} />
          <p>{image.alt_description}</p>
          <div>
            <button>Download</button>
            <DownloadDrop handleDownload={handleDownload} image={image}/>
          </div>
        </div>
      ))}
      <button className="close-button" onClick={onClose}>Close</button>
    <div>
      <img src='https://picsum.photos/id/1/500/333' alt=''></img>

    </div>
  );
}

export default SearchResult;
