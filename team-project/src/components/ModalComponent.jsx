import React, {useEffect, useContext} from "react";
import Modal from "react-modal";
import "./styles/ModalComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faXmark,
  faLocationDot,
  faCalendar,
  faShield,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import SearchContext from "../Context/SearchContext";
import { fetchSearchResults } from "../api/UseFetch";

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  const { searchResults, setSearchResults, searchText } =
    useContext(SearchContext);
    const result = imageSrc;
    console.log("test",result.urls);


  const handleDownload = async (url, imageName) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = imageName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download error:", error);
    }
  };


  useEffect(() => {
    // Handle search text-based fetching
    if (searchText) {
      fetchSearchResults(searchText)
        .then((response) => {
          setSearchResults(response.results);
          console.log(response);
         
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchText, setSearchResults]);

  


  return (
    <div>
      <div>
        {result && (
          <Modal
            key={result.id}
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Image Modal"
            className="ReactModal__Content"
            overlayClassName="ReactModal__Overlay"
          >
            <div className="modal-container">
              <div className="navbar-pop">
                <a href="/">
                  <div className="artist-info">
                    <div className="img-artist">
                      <img src={result.user.profile_image.small} alt="/" />
                    </div>
                    <div className="des-artist">
                      <p>{result.user.name}</p>
                    </div>
                  </div>
                </a>
                <div className="buttons-pop">
                  <button className="heart-pop">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="heart-icon-pop"
                    />
                  </button>

                  <button
                    className="btn-download-pop"
                    onClick={() =>
                      handleDownload(
                        result.urls.full,
                        result.alt_description + ".jpg"
                      )
                    }

                  >
                    Free download
                  </button>
                </div>
              </div>
              <div className="image-container">
                <img
                  src={result.urls.regular}
                  alt={result.alt_description}
                  className="modal-image"
                />
              </div>
              <div className="additional-content">
                <div className="column-pop">
                  <FontAwesomeIcon icon={faLocationDot} className="des-icon" />
                  <p>{result.user.location}</p>
                </div>
                <div className="column-pop">
                  <FontAwesomeIcon icon={faCalendar} className="des-icon" />
                  <p>{result.created_at}</p>
                </div>
                <div className="column-pop">
                  <FontAwesomeIcon icon={faShield} className="des-icon" />
                  <p>Save to download.</p>
                </div>
                <div className="categories-pop">
                  <ul>
                    {result.tags.map((tag, index) => (
                      <li key={index}>{tag.title}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="related-pop">
                <h3>Related images</h3>
              </div>
              <div id="news-waterfall" className="grid">
                <div className="box">
                 <div className="content">
                    
                     <img src={result.user.links.photos} alt="test" />
                    
                    

                    <div className="button-top">
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="icon heart-icon"
                      />
                    </div>
                    <div className="button-bottom">
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        className="icon download-icon"
                      />
                    </div>
                  </div>
                </div>

              </div>

              <button onClick={onClose} className="close-button">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};
export default ImageModal;
