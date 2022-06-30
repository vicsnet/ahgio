import React, { useEffect } from "react";
import "./sub.css";
import Frame82 from "../Images/Frame82.png";
import Frame71 from "../Images/Frame71.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Subfooter() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="whole-footer">
      
      <div className="main-main-subfooter">
        <div className="main-subFooter">
          <div className="sub">
            <div data-aos="fade-down" className="text">
              <h3>What are you waiting for?</h3>
            </div>
            <div data-aos="fade-down" className="more-text">
              <h3><b>Download the Wallet app & get started now! </b></h3>
            
            </div>

            <div className="store">
              <img src={Frame71} alt="" />
              <img src={Frame82} alt="" className=" store-img2" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Subfooter;
