import React from "react";
import { Link } from "react-router-dom";
import "./styles/tbc.css";
import Logo from "../images/PULSE.png";

const ToBeContinued = () => {
  return (
    <div className="bg-tbc">
      <div className="home">
        <p className="pnf">Go back to</p>
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="tbc-main-container">
        <div className="tbc-text-container">
          <p className="tbc-text-1">Come back later...</p>
          <p className="tbc-text">...to see the magic of the PIXPULSE team</p>
        </div>
      </div>
    </div>
  );
};

export default ToBeContinued;
