import React from "react";
import "./HeroSection.css";
import arrowIcon from "../../assets/images/icon-arrow-down.svg";
function HeroSection() {
  return (
    <div className="hero-section">
      <div className="heading">
        <h1>WE ARE CREATIVES</h1>
      </div>
      <img src={arrowIcon} alt="header image" />
    </div>
  );
}

export default HeroSection;
