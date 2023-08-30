import React, { useState, useContext, useEffect } from "react";
import ModalComponent from "./ModalComponent";
import "./styles/ImageGrid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import SearchContext from "../Context/SearchContext";
import { fetchSearchResults } from "../api/UseFetch";

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
                    onClick={() => openModal(result)}
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
                      onClick={() =>
                        handleDownload(
                          result.urls.full,
                          result.alt_description + ".jpg"
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <div className="showMore">
        <button className="showMoreButton"> More Pictures </button>
      </div> */}

      <ModalComponent
        isOpen={modalIsOpen}
        imageSrc={selectedImage}
        onClose={closeModal}
        openModal={openModal}
      />
    </>
  );
};
export default ImageGrid;
