// HeroSection.jsx
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
    <section className="hero-section">
      <header className="heading">
        <h1 data-aos="fade-down">WE ARE CREATIVES</h1>
      </header>
      <img src={arrowIcon} alt="Scroll down indicator arrow" />
    </section>
  );
}

export default HeroSection;
