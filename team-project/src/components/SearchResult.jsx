import React, {useEffect, useState} from 'react'
import { fetchSearchResults } from '../UseFetch';

const SearchResult = () => {
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

  return (
    <div>
      
      <div className="image-list">
      {images.map(image => (
        <div key={image.id} className="image-item">
          <img src={image.urls.small} alt={image.alt_description} />
          <div>
            <button onClick={() => handleDownload(image.urls.full)}>Download</button>
          </div>
        </div>
      ))}
      <button className="close-button">Close</button>
    </div>
    </div>
  )
}

export default SearchResult
