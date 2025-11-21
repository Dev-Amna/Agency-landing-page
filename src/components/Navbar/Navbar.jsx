import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
function Navbar() {
  let [isMenu, setMenu] = useState(false);

  let toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <>
      <nav>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="menuIcon" onClick={toggleMenu}>
          <img src={hamburgerIcon} alt="" />
        </div>
        <ul className={isMenu ? "active" : ""}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li className="contact-btn">
            <a href="#" >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
