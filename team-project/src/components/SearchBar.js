import { useState, useEffect } from 'react';
import axios from 'axios';



const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (searchQuery !== '') {
      axios.get(`${apiUrl}/search/photos/?${apiKey}`, {
        params: {
          query: searchQuery,
          page: 1, // You can adjust this based on your needs
          per_page: 10, // You can adjust this based on your needs
          client_id: apiKey,
        },
      })
      .then(response => {
        setImages(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
    }
  }, [searchQuery]);
  const handleDownload = (url) => {
    // Implement the download logic here
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for photos"
        />
        <div className="image-list">
          {images.map(image => (
            <div key={image.id} className="image-item">
              <img src={image.urls.small} alt={image.alt_description} />
              <button onClick={() => handleDownload(image.urls.full)}>Download</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
