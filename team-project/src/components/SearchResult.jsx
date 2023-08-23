import React from 'react';
import DownloadDrop from './DownloadDrop';

const SearchResult = ({ images, handleDownload, onClose }) => {
  return (
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
    </div>
  );
}

export default SearchResult;
