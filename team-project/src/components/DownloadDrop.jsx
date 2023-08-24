import React from "react";

function DownloadDrop({ handleDownload, image }) {
  return (
    <div>
      {/* download sizes */}
      <div>
        <button onClick={() => handleDownload(image.urls.full)}>Maximum</button>
        <button onClick={() => handleDownload(image.urls.regular)}>1080</button>
        <button onClick={() => handleDownload(image.urls.small)}>400</button>
      </div>
      {/* download thumb img */}
      <div>
        <img src={image.urls.thumb} alt={image.alt_description} />
      </div>
      {/* authernatic infos */}
      <div>
        <ul>
          <li>
            Photo by
            <a href="https://unsplash.com/@anniespratt?utm_source=your_app_name&utm_medium=referral">
              Annie Spratt
            </a>
            on
            <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">
              Unsplash
            </a>
          </li>
          <li>info</li>
          <li>info</li>
        </ul>
      </div>
    </div>
  );
}

export default DownloadDrop;
// {
//   images.map((image) => (
//     <div key={image.id} className="image-item">

//   ));
// }
