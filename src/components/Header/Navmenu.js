import React, { useState } from "react";
import "./Navmenu.css";
// import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../Images/Logowhite.png";
import { FaBars, FaTimes, FaArrowLeft } from "react-icons/fa";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Navmenu() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>
          {" "}
          <img src={Logo} alt="" />
        </Link>
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/support">Support</Link>
        </li>

        <li className="nav-item">
          <Link to="/privacy">Privacy</Link>
        </li>

        <li className="nav-item ">
          <button className="nav-button">
            <a href="/">Get the App</a>
          </button>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <div className="ham-close">
            <div id="close-menu">
              <ArrowBackRoundedIcon
                size={22}
                style={{ color: "rgba(154, 153, 153, 1)" }}
              />
            </div>
            <div id="close-menu2">
              <CloseRoundedIcon size={22} />
            </div>

           
          </div>
        ) : (
         
          <FaBars size={32} style={{ color: "#FFFFFF" }} className="bars" />
        )}
      </div>
    </div>
  );
}

export default Navmenu;
