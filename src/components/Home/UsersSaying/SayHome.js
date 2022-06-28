import React, { useEffect } from "react";
import Review from "./review/Review";
import "../UsersSaying/sayhome.css";
import Group3 from "../../Images/Group3.png";
import Group11 from "../../Images/Group11.png";
import Aos from "aos";
import "aos/dist/aos.css";

function SayHome() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="say-main">
<<<<<<< HEAD
      <div className="say-main-col">
        <div className="say-col-text">
          <h3>What Users are Saying About Wallet</h3>
        </div>
        <div className="say-col">
          <div className="say-col1">
            <div
              data-aos="fade-down "
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="say-col1-1"
            >
              <h3>What Users are Saying About Wallet</h3>
=======
      <div className="say-col-text">
        <h3>What Users are Saying About Wallet</h3>
      </div>
      <div className="say-col">
        <div className="say-col1">
          <div data-aos="fade-down" className="say-col1-1">
            <h3>What Users are Saying About Wallet</h3>
          </div>
          <div data-aos="fade-down" className="say-col1-2">
            <div className="im1">
              <h3>5.0</h3>
              <img src={Group3} alt="" />
>>>>>>> 369062561d98c1814cc43c3aaab90f6b369e451c
            </div>
            <div
              data-aos="fade-down "
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="say-col1-2"
            >
              <div className="im1 saymain-col-im">
                <h3>5.0</h3>
                <img src={Group3} alt="" />
              </div>
              <div className="im1 imm1 saymain-col-im say-col-im">
                <h3>5.0</h3>
                <img src={Group11} alt="" />
              </div>
            </div>
          </div>

          <div className="say-col2 ">
            <Review />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SayHome;
