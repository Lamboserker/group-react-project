import React from 'react';

const SearchResult = ({ images, handleDownload, onClose }) => {
  return (
    <div className="image-list">
      {images.map(image => (
        <div key={image.id} className="image-item">
          <img src={image.urls.small} alt={image.alt_description} />
          <div>
            <button onClick={() => handleDownload(image.urls.full)}>Download</button>
          </div>
        </div>
      ))}
      <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
}

export default SearchResult;
