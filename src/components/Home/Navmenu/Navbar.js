import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Navmenu/nav.css";
import Logo from "../../Images/Logo.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={Logo} alt="" />

      <nav>
        <a href="#">Home</a>
        <a href="#">my work</a>
        <a href="#">blog</a>
        <a href="#">About me</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
