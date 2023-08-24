import React from "react";
import Modal from "react-modal";
import "./ModalComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import Image1 from "../images/grid-img/01.jpg";
import Image2 from "../images/grid-img/02.jpg";
import Image3 from "../images/grid-img/03.jpg";
import Image4 from "../images/grid-img/04.jpg";

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="ReactModal__Content" // Apply the modal content class
      overlayClassName="ReactModal__Overlay" // Apply the overlay class
    >
      <div className="image-container">
        <img src={Image1} alt="Clicked Image" className="modal-image" />
      </div>
      <div className="button-top">
        <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
      </div>
      <div className="button-bottom">
        <FontAwesomeIcon icon={faArrowDown} className="icon download-icon" />
      </div>
      <button onClick={onClose} className="close-button">
        Close
      </button>
    </Modal>
  );
};

export default ImageModal;
