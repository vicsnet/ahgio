import React from "react";
import Navmenu from "../Header/Navmenu";
import { FaSearch } from "react-icons/fa";
import Ellipse from "../Images/Ellipse9.png";
import "./privacy.css";
import Footer from "../Footer/Footer";

function Privacy() {
  return (
    <div className="priv-main">
      <div className="priv-head">
        <Navmenu />
        <div className="all-privacy">
          <div className="privacy-head">
            <h3>Support</h3>
          </div>
          <div className="ell"></div>
          <br />
          <div className="privacy-search">
            <div className="search">
              <span>
                <FaSearch />
              </span>
              <input type="text" placeholder="Search Questions" />
            </div>
          </div>
        </div>

        {/* <div className="ellipse">
          <img src={Ellipse} alt="" />
       
        </div> */}
      </div>
      <div className="sub-priv">
        <div className="faq">
          <h3>
            Frequently Asked Questions <span>(FAQ’S)</span>
          </h3>
        </div>

        <div className="main-text-priv main-text">
          <div className="text-priv">
            <div className="head-priv head-priv1">
              <span>Q</span>
              <p id="piv-me">Lorem ipsum dolor sit amet</p>
            </div>

            <div className="head-priv head-details">
              <span>A</span>
              <p id="pap">
                onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
          </div>

          <div className="text-priv">
            <div className="head-priv head-priv1">
              <span>Q</span>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="head-priv head-details">
              <span>A</span>
              <p>
                onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
          </div>
          <div className="text-priv">
            <div className="head-priv head-priv1">
              <span>Q</span>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="head-priv head-details">
              <span>A</span>
              <p>
                onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
          </div>
          <div className="text-priv">
            <div className="head-priv head-priv1">
              <span>Q</span>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="head-priv head-details">
              <span>A</span>
              <p>
                onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
