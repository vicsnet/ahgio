import React from "react";
import "./support.css";
import Navmenu from "../Header/Navmenu";
import Footer from "../Footer/Footer";

function Support() {
  return (
    <div className="main-support">
      <div className="head-back">
        <Navmenu />
        <h2>Privacy Policy</h2>
        <div className="ell"></div>
      </div>
      <div className="support-details">
        <div className="support-sub-details sp">
          <h3>
            1<span>Lorem ipsum dolor sit amet</span>
          </h3>
          <p>
            Onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam. Onsectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam. Onsectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        <div className="support-sub-details ">
          <h3>
            2<span>Lorem ipsum dolor sit amet</span>
          </h3>
          <p>
            Onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam. Onsectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam. Onsectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </p>
        </div>
        <div className="support-sub-details">
          <h3>
            3<span>Lorem ipsum dolor sit amet</span>
          </h3>
          <p>
            Onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam. Onsectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam. Onsectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Support;
