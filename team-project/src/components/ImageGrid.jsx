import React, { useState, useContext, useEffect } from "react";
import ModalComponent from './ModalComponent';
import "./ImageGrid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import SearchContext from "../Context/SearchContext";
import { fetchSearchResults } from "../UseFetch";

const ImageGrid = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };
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
  }, [searchText, setSearchResults]);

  return (
    <>
      <section id="news-waterfall" className="grid">

        <div>
          {searchResults.map((result) => (
            <div key={result.id}>
              <div className="box">
                <div className="content">
                  <img
                    src={result.urls.small}
                    alt={result.alt_description}
                    onClick={openModal}
                  />
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
          ))}
        </div>
        <div>
          {searchResults.map((result) => (
            <div key={result.id}>
              <div className="box">
                <div className="content">
                  <img
                    src={result.urls.small}
                    alt={result.alt_description}
                    onClick={openModal}
                  />
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
          ))}
        </div>
        <div>
          {searchResults.map((result) => (
            <div key={result.id}>
              <div className="box">
                <div className="content">
                  <img
                    src={result.urls.small}
                    alt={result.alt_description}
                    onClick={openModal}
                  />
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
          ))}
        </div>
        <div>
          {searchResults.map((result) => (
            <div key={result.id}>
              <div className="box">
                <div className="content">
                  <img
                    src={result.urls.small}
                    alt={result.alt_description}
                    onClick={openModal}
                  />
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
          ))}
        </div>
        <div>
          {searchResults.map((result) => (
            <div key={result.id}>
              <div className="box">
                <div className="content">
                  <img
                    src={result.urls.small}
                    alt={result.alt_description}
                    onClick={openModal}
                  />
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
          ))}
        </div>
        <div>
          {searchResults.map((result) => (
            <div key={result.id}>
              <div className="box">
                <div className="content">
                  <img
                    src={result.urls.small}
                    alt={result.alt_description}
                    onClick={openModal}
                  />
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
          ))}
        </div>
        <div>
          {searchResults.map((result) => (
            <div key={result.id}>
              <div className="box">
                <div className="content">
                  <img
                    src={result.urls.small}
                    alt={result.alt_description}
                    onClick={openModal}
                  />
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
          ))}
        </div>
        <div>
          {searchResults.map((result) => (
            <div key={result.id}>
              <div className="box">
                <div className="content">
                  <img
                    src={result.urls.small}
                    alt={result.alt_description}
                    onClick={openModal}
                  />
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
          ))}
        </div>
        <div>
          {searchResults.map((result) => (
            <div key={result.id}>
              <div className="box">
                <div className="content">
                  <img
                    src={result.urls.small}
                    alt={result.alt_description}
                    onClick={openModal}
                  />
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
          ))}
        </div>
        <div>
          {searchResults.map((result) => (
            <div key={result.id}>
              <div className="box">
                <div className="content">
                  <img
                    src={result.urls.small}
                    alt={result.alt_description}
                    onClick={openModal}
                  />
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
          ))}
        </div>
        <div>
          {searchResults.map((result) => (
            <div key={result.id}>
              <div className="box">
                <div className="content">
                  <img
                    src={result.urls.small}
                    alt={result.alt_description}
                    onClick={openModal}
                  />
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
          ))}
        </div>
      </section>
      <div className="showMore">
        <button className="showMoreButton"> More Pictures </button>
      </div>
      <div>

      <ModalComponent
        isOpen={modalIsOpen}
        onClose={closeModal}
      />
    </div>

        <ModalComponent
          isOpen={modalIsOpen}
          imageSrc={selectedImage}
          onClose={closeModal}
  />
      

    </>
  );
};
export default ImageGrid;
