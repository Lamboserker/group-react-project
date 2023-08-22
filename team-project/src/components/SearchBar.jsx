import React, { useState, useEffect } from 'react';
import {fetchSearchResults} from '../UseFetch'

function SearchBar() {
  const [input, setInput] = useState("");
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);

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

      // Create a temporary link element to trigger the download
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'image.jpg'; // Set the desired file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the Blob URL
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download error:', error);
    }
  };

  const renderDataOnClick= (e) => {

    setSearchQuery(input);
    console.log(input);
  }

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for photos"
        />
        <button onClick={renderDataOnClick}>Search</button>
        <div className="image-list">
          {images.map(image => (
            <div key={image.id} className="image-item">
              <img src={image.urls.small} alt={image.alt_description} />
              
              {/*Dropdown Menu for downloading the files*/}
              <div>
                
              <button onClick={() => handleDownload(image.urls.full)}>Download</button>
              
              </div>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;





