import React, { useEffect } from "react";
import "./mainfoot.css"
import Logowhite from "../Images/Logowhite.png";
import {FaTwitter, FaInstagram, FaFacebookSquare, FaTwitch} from 'react-icons/fa'
import Aos from "aos";
import "aos/dist/aos.css";
function Mainfooter() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="main-foot">
      <div className="grid">
        <div  className="logo-section">
          <img src={Logowhite} alt="" />
        </div>
        <div  className="help-section">
          <span>
            <h3>How Can We Help you?</h3>
          </span>
          <div className="support-privacy">
            <a href="#"> support</a>
            <a href="#" className="priv">
              {" "}
              privacy
            </a>
          </div>
          <div className="social">
            <FaTwitter className="FaTwitter" />

            <FaInstagram className="FaInstagram" />
            <FaFacebookSquare className="FaFacebookSquare" />
            <FaTwitch className="FaTwitch" />
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div  className="copy">
        © 2022 Ahgio
      </div>
    </div>
  );
}

export default Mainfooter