import React, { useState, useContext, useEffect } from "react";
import ModalComponent from "./ModalComponent";
import Image1 from "../images/grid-img/01.jpg";
import Image2 from "../images/grid-img/02.jpg";
import Image3 from "../images/grid-img/03.jpg";
import Image4 from "../images/grid-img/04.jpg";
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
        <div className="box">
          <div className="content">
            <img src={Image2} alt="2" />
            <div className="button-top">
              <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
            </div>
            <div className="button-bottom">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="icon download-icon"
              />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={Image3} alt="3" />
            <div className="button-top">
              <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
            </div>
            <div className="button-bottom">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="icon download-icon"
              />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={Image4} alt="4" />
            <div className="button-top">
              <a>
                <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
              </a>
            </div>
            <div className="button-bottom">
              <a>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="icon download-icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={Image3} alt="3" />
            <div className="button-top">
              <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
            </div>
            <div className="button-bottom">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="icon download-icon"
              />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={Image2} alt="2" />
            <div className="button-top">
              <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
            </div>
            <div className="button-bottom">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="icon download-icon"
              />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={Image1} alt="1" />
            <div className="button-top">
              <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
            </div>
            <div className="button-bottom">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="icon download-icon"
              />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={Image4} alt="4" />
            <div className="button-top">
              <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
            </div>
            <div className="button-bottom">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="icon download-icon"
              />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={Image1} alt="1" />
            <div className="button-top">
              <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
            </div>
            <div className="button-bottom">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="icon download-icon"
              />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={Image2} alt="2" />
            <div className="button-top">
              <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
            </div>
            <div className="button-bottom">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="icon download-icon"
              />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={Image2} alt="2" />
            <div className="button-top">
              <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
            </div>
            <div className="button-bottom">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="icon download-icon"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="showMore">
        <button className="showMoreButton"> More Pictures </button>
      </div>
      <div>
        <ModalComponent
          isOpen={modalIsOpen}
          imageSrc={selectedImage}
          onClose={closeModal}
  />
      </div>
    </>
  );
};
export default ImageGrid;
