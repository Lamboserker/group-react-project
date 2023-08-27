import React, { useContext, useState, useEffect } from "react";
import Modal from "react-modal";
import "./ModalComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import SearchContext from "../Context/SearchContext";
import { fetchSearchResults } from "../UseFetch";

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
  const { searchResults, setSearchResults, searchText } =
    useContext(SearchContext);

  useEffect(() => {
    console.log("use effect here");
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
  }, []);

  console.log("Search results is rendering");
  return (
    <div>
      {searchResults.map((result) => (
        <div key={result.id}>
          <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Image Modal"
            className="ReactModal__Content" // Apply the modal content class
            overlayClassName="ReactModal__Overlay" // Apply the overlay class
          >
            <div className="image-container">
              <img
                src={result.urls.full}
                alt={result.alt_description}
                className="modal-image"
              />
            </div>
            <div className="button-top">
              <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
            </div>
            <div className="button-bottom">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="icon download-icon"
              />
            </div>
            <button onClick={onClose} className="close-button">
              Close
            </button>
          </Modal>
        </div>
      ))}
    </div>
  );
};
export default ImageModal;
