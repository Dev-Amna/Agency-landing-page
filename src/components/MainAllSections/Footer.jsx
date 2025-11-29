// Footer.jsx
import React from "react";
import "./MainSection.css";
import facebookIcon from "../../assets/images/icon-facebook.svg";
import instagramIcon from "../../assets/images/icon-instagram.svg";
import pinterestIcon from "../../assets/images/icon-pinterest.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";

function FooterSection() {
  return (
    <footer>
      <section className="footer">
        <h2>Sunnyside</h2>

        <div className="link">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
        </div>

        <section className="social-links">
          <img src={facebookIcon} alt="Facebook icon" />
          <img src={instagramIcon} alt="Instagram icon" />
          <img src={pinterestIcon} alt="Pinterest icon" />
          <img src={twitterIcon} alt="Twitter icon" />
        </section>
      </section>
    </footer>
  );
}

export default FooterSection;
