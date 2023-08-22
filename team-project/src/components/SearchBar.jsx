import React, { useState, useEffect } from 'react';
import { fetchSearchResults } from '../UseFetch';
import SearchResult from './SearchResult';
import Popup from 'reactjs-popup';

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

  const handleDownload = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'image.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download error:', error);
    }
  };

  const renderDataOnClick = (e) => {
    setSearchQuery(input);
    setShowResults(true);
  }

  return (
    <div >
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for photos"
        />
        <button onClick={renderDataOnClick}>Search</button>
        <Popup
          
          modal
          nested
          open={showResults}
          onClose={() => setShowResults(false)}
        >
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <SearchResult
                images={images}
                handleDownload={handleDownload}
                onClose={close}
              />
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}

export default SearchBar;
