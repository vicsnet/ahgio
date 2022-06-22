import React, { useState } from "react";
import Logo from "../../Images/Logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";
import "./nav.css";
function Navbar() {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");

  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    //toggle
    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <nav className="item">
        <ul className={active}>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Home
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Home
            </a>
          </li>
          <li className="nav_item">
            <button> servixea</button>
          </li>
        </ul>
        <div onclick={navToggle} className={toggleIcon}>
          <button onclick={navToggle} className="nav-btn nav-close-btn">
            <FaTimes />
          </button>
          {/* <button className="nav-btn">
            <FaBars />
          </button> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
