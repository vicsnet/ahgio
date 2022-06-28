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
import { Link } from "react-router-dom";
function Mainfooter() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="main-foot">
      <div className="grid">
        <div className="logo-section">
          <Link to={"/"}>
            <img src={Logowhite} alt="" />
          </Link>
        </div>
        <div className="help-section">
          <span>
            <h3>How Can We Help you?</h3>
          </span>
          <div className="support-privacy">
            <Link to="/support"> support</Link>

            <Link to="/privacy" className="priv">
              {" "}
              privacy
            </Link>
            <Link to="/privacy" className="priv">
              {" "}
              T & C
            </Link>
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
