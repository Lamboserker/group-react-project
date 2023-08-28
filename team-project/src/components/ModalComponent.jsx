import React, { useContext, useState, useEffect } from "react";
import Modal from "react-modal";
import "./ModalComponent.css";
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
import { fetchSearchResults } from "../UseFetch";


const ImageModal = ({ isOpen, onClose }) => {
  const { searchResults, setSearchResults, searchText } =
    useContext(SearchContext);

  useEffect(() => {
    console.log("use effect here");
    if (searchText) {
      try {
        fetchSearchResults(searchText)
          .then((response) => {
            setSearchResults(response.results);
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error(error);
      }
    }
  }, [searchText, setSearchResults]);

  console.log("Search results is rendering");
  return (
    <div>
      {searchResults.map((result) => (
        <div key={result.id}>
          <Modal
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
                  <button id="btn-download-pop">Free Download</button>
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
                    <li>High definition images</li>
                    <li>Nature</li>
                    <li>Architecture and design</li>
                    <li>Wallpaper</li>
                    <li>Movies</li>
                    <li>Street Photography</li>
                    <li>Most liked pictures</li>
                    <li>Flowers</li>
                    <li>3D wallpaper</li>
                    <li>Texture and pattern</li>
                    <li>Experimental</li>
                    <li>Animals</li>
                  </ul>
                </div>
              </div>
              <div className="related-pop">
                <h3>Related images</h3>
              </div>
              <div id="news-waterfall" className="grid">
                <div className="box">
                  <div className="content">
                    <img src="/" alt=" 1" />
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
                <div className="box">
                  <div className="content">
                    <img src="/" alt=" 2" />
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
                <div className="box">
                  <div className="content">
                    <img src="/" alt=" 3" />
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
                <div className="box">
                  <div className="content">
                    <img src="/"alt=" 4" />
                    <div className="button-top">
                      <a>
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="icon heart-icon"
                        />
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
                    <img src="/" alt=" 3" />
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
                <div className="box">
                  <div className="content">
                    <img src="/" alt=" 2" />
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
                <div className="box">
                  <div className="content">
                    <img src="/" alt=" 1" />
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
                <div className="box">
                  <div className="content">
                    <img src="/" alt=" 4" />
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
                <div className="box">
                  <div className="content">
                    <img src="/" alt=" 1" />
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
                <div className="box">
                  <div className="content">
                    <img src="/" alt="2" />
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
                <div className="box">
                  <div className="content">
                    <img src="/" alt=" 2" />
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
              <div className="showMore">
                <button className="showMoreButton"> More Pictures </button>
              </div>
              <button onClick={onClose} className="close-button">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </Modal>
        </div>
      ))}
    </div>
  );
};
export default ImageModal;

//   return (
//     <div>
//     {searchResults.map((result) => (
//       <div key={result.id}>
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel="Image Modal"
//       className="ReactModal__Content"
//       overlayClassName="ReactModal__Overlay"
//     >
//       <div className="modal-container">
//         <div className="navbar-pop">
//           <a href="/">
//             <div className="artist-info">
//               <div className="img-artist">
//                  <img
//                 src={result.urls.regular}
//                 alt={result.alt_description}
//                 className="modal-image"
//               />
//               </div>
//               <div className="des-artist">
//                 <p>Alejandro Keegan</p>
//               </div>
//             </div>
//           </a>
//           <div className="buttons-pop">
//             <button className="heart-pop">
//               <FontAwesomeIcon icon={faHeart} className="heart-icon-pop" />
//             </button>
//             <button id="btn-download-pop">Free Download</button>
//           </div>
//         </div>
//         <div className="image-container">
//           <img src={Image1} alt="Clicked Image" className="modal-image" />
//         </div>
//         <div className="additional-content">
//           <div className="column-pop">
//             <FontAwesomeIcon icon={faLocationDot} className="des-icon" />
//             <p>Paris, France.</p>
//           </div>
//           <div className="column-pop">
//             <FontAwesomeIcon icon={faCalendar} className="des-icon" />
//             <p>An hour ago.</p>
//           </div>
//           <div className="column-pop">
//             <FontAwesomeIcon icon={faShield} className="des-icon" />
//             <p>Save to download.</p>
//           </div>
//           <div className="categories-pop">
//             <ul>
//               <li>High definition images</li>
//               <li>Nature</li>
//               <li>Architecture and design</li>
//               <li>Wallpaper</li>
//               <li>Movies</li>
//               <li>Street Photography</li>
//               <li>Most liked pictures</li>
//               <li>Flowers</li>
//               <li>3D wallpaper</li>
//               <li>Texture and pattern</li>
//               <li>Experimental</li>
//               <li>Animals</li>
//             </ul>
//           </div>
//         </div>
//         <div className="related-pop">
//           <h3>Related images</h3>
//         </div>
//         <div id="news-waterfall" className="grid">
//           <div className="box">
//             <div className="content">
//               <img src={Image1} alt="Image 1" />
//               <div className="button-top">
//                 <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
//               </div>
//               <div className="button-bottom">
//                 <FontAwesomeIcon
//                   icon={faArrowDown}
//                   className="icon download-icon"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="box">
//             <div className="content">
//               <img src={Image2} alt="Image 2" />
//               <div className="button-top">
//                 <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
//               </div>
//               <div className="button-bottom">
//                 <FontAwesomeIcon
//                   icon={faArrowDown}
//                   className="icon download-icon"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="box">
//             <div className="content">
//               <img src={Image3} alt="Image 3" />
//               <div className="button-top">
//                 <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
//               </div>
//               <div className="button-bottom">
//                 <FontAwesomeIcon
//                   icon={faArrowDown}
//                   className="icon download-icon"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="box">
//             <div className="content">
//               <img src={Image4} alt="Image 4" />
//               <div className="button-top">
//                 <a>
//                   <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
//                 </a>
//               </div>
//               <div className="button-bottom">
//                 <a>
//                   <FontAwesomeIcon
//                     icon={faArrowDown}
//                     className="icon download-icon"
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="box">
//             <div className="content">
//               <img src={Image3} alt="Image 3" />
//               <div className="button-top">
//                 <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
//               </div>
//               <div className="button-bottom">
//                 <FontAwesomeIcon
//                   icon={faArrowDown}
//                   className="icon download-icon"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="box">
//             <div className="content">
//               <img src={Image2} alt="Image 2" />
//               <div className="button-top">
//                 <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
//               </div>
//               <div className="button-bottom">
//                 <FontAwesomeIcon
//                   icon={faArrowDown}
//                   className="icon download-icon"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="box">
//             <div className="content">
//               <img src={Image1} alt="Image 1" />
//               <div className="button-top">
//                 <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
//               </div>
//               <div className="button-bottom">
//                 <FontAwesomeIcon
//                   icon={faArrowDown}
//                   className="icon download-icon"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="box">
//             <div className="content">
//               <img src={Image4} alt="Image 4" />
//               <div className="button-top">
//                 <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
//               </div>
//               <div className="button-bottom">
//                 <FontAwesomeIcon
//                   icon={faArrowDown}
//                   className="icon download-icon"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="box">
//             <div className="content">
//               <img src={Image1} alt="Image 1" />
//               <div className="button-top">
//                 <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
//               </div>
//               <div className="button-bottom">
//                 <FontAwesomeIcon
//                   icon={faArrowDown}
//                   className="icon download-icon"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="box">
//             <div className="content">
//               <img src={Image2} alt="Image 2" />
//               <div className="button-top">
//                 <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
//               </div>
//               <div className="button-bottom">
//                 <FontAwesomeIcon
//                   icon={faArrowDown}
//                   className="icon download-icon"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="box">
//             <div className="content">
//               <img src={Image2} alt="Image 2" />
//               <div className="button-top">
//                 <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
//               </div>
//               <div className="button-bottom">
//                 <FontAwesomeIcon
//                   icon={faArrowDown}
//                   className="icon download-icon"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="showMore">
//           <button className="showMoreButton"> More Pictures </button>
//         </div>
//         <button onClick={onClose} className="close-button">
//           <FontAwesomeIcon icon={faXmark} />
//         </button>
//       </div>

//     </Modal>
//   );
// };
// export default ImageModal;
