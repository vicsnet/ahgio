import React, { useEffect } from "react";
import "./mainfoot.css";
import Logowhite from "../Images/Logowhite.png";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
function Mainfooter() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="main-foot">
      <div className="grid">
        <div className="logo-section">
          <NavLink to={"/"}>
            <img src={Logowhite} alt="" />
          </NavLink>
        </div>
        <div className="help-section">
          <span>
            <h3>How Can We Help you?</h3>
          </span>
          <div className="support-privacy">
            <NavLink to="/support" onClick={() => window.scrollTo(0, 0)}>
              {" "}
              support
            </NavLink>

            <NavLink
              to="/privacy"
              className="priv"
              onClick={() => window.scrollTo(0, 0)}
            >
              {" "}
              privacy
            </NavLink>
            <NavLink to="/terms" onClick={() => window.scrollTo(0, 0)}>
              {" "}
              T & C
            </NavLink>
          </div>
          <div className="social">
            <FaTwitter className="FaTwitter" />

            <FaInstagram className="FaInstagram" />
            <FaFacebookSquare className="FaFacebookSquare" />
            <FaYoutube className="FaTwitch" />
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="copy">© 2022 Ahgio</div>
    </div>
  );
}

export default Mainfooter;
