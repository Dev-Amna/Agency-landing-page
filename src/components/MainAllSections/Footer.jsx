import React from "react";
import "./MainSection.css";
import facebookIcon from "../../assets/images/icon-facebook.svg";
import instagramIcon from "../../assets/images/icon-instagram.svg";
import pinterestIcon from "../../assets/images/icon-pinterest.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";

function Footer() {
  return (
    <section className="footer">
      <h1>Sunnyside</h1>
      <div className="link">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
      </div>
      <div className="social-links">
        <img src={facebookIcon} alt="Facebook" />
        <img src={instagramIcon} alt="Instagram" />
        <img src={pinterestIcon} alt="Pinterest" />
        <img src={twitterIcon} alt="Twitter" />
      </div>
    </section>
  );
}

export default Footer;
