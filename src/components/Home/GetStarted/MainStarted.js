import React, { useEffect } from "react";
import "./get.css";
import Aos from "aos";
import "aos/dist/aos.css";

function MainStarted() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="main-start">
      <div className="start-head head-down">
        <h2 className="head-here">Here's How To Get Started...</h2>
      </div>
<<<<<<< HEAD
      <h2 className="head-here-me">Here's How To Get Started...</h2>
=======
>>>>>>> 369062561d98c1814cc43c3aaab90f6b369e451c
      <div className="getstarted">
        <div className="get-text">
          <div data-aos="fade-down" className="span-col span-col-1">
            <span>
              <h4>1</h4>
            </span>
            <div className="text-details">
              <h3>Download the App & Create your Account</h3>
              <p>
                You can download the Wallet app on the GooglePlay store and
                AppStore and create an account.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="span-col span-col-2">
            <div className="text-details text-details2">
              <h3>Complete your KYC Verification</h3>
              <p id="start-tem start-tem2">
                In order to get access to all our feautures, you will be
                required to complete your KYC verification.{" "}
              </p>
            </div>
            <span>
              <h4>2</h4>
            </span>
          </div>

          <div data-aos="fade-down" className="span-col span-col-3">
            <span>
              <h4>3</h4>
            </span>
            <div className="text-details text-details3">
              <h3>Fund your Wallet</h3>

              <p id="start-tem start-tem3">
                Fund your wallet, create a card , perform international
                transactions, pay bills, receive money, shop and perform other
                amazing transactions!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainStarted;
