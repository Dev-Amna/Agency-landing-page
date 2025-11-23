import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeroSection.css";
import arrowIcon from "../../assets/images/icon-arrow-down.svg";

function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <div className="hero-section">
      <div className="heading">
        <h1 data-aos="fade-down">WE ARE CREATIVES</h1>
      </div>

      <img src={arrowIcon} alt="header image" />
    </div>
  );
}

export default HeroSection;
