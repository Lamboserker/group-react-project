import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/PageNotFound.css";
import Logo from "../images/PULSE.png";
const PageNotFound = () => {
  const flashlightRef = useRef(null);

  const handleMouseMove = (event) => {
    const flashlight = flashlightRef.current;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    flashlight.style.left = `${mouseX}px`;
    flashlight.style.top = `${mouseY}px`;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="bg">
      <div className="flashlight-cursor" ref={flashlightRef}>
        <div className="cursor"></div>
      </div>
      <div className="home">
        <p className="pnf">Go back to</p>
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="main-container">
        <p className="number">404</p>
        <p className="pnf"> PAGE NOT FOUND</p>
      </div>
    </div>
  );
};

export default PageNotFound;
