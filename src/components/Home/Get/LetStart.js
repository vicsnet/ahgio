import React from "react";
import "./letStart.css";
import MobileDark2new from "../../Images/Mobile-dark2new.png";
import LineIndicator from "../../Images/Line Indicator2.png";
import MobileDark3 from "../../Images/Mobile-dark3 _1.png";
import MobileDark4 from "../../Images/Mobile-dark41.png";
import LineIndicatorcurve from "../../Images/Line Indicatorcurve.png";

function LetStart() {
  return (
    <div className="let-start-main">
      <div className="main-start-frame">
        <div className="let-head">
          <h2>Here's How To Get Started...</h2>
        </div>
        <div className="let-start-details">
          <div className="let-start-image">
            <img src={MobileDark2new} alt="" />
          </div>
          <div className="let-start-text">
            <div className="let-no">
              <p>1</p>
            </div>
            <div className="let-start-details-text">
              <h2>Download the App & Create your Account</h2>

              <p>
                You can download the Wallet app on the GooglePlay store and
                AppStore and create an account.
              </p>
            </div>
          </div>
        </div>

        <span>
          <img src={LineIndicator} alt="" />
        </span>

        <div className="let-start-details let-start-details2">
          <div className="let-start-text let-start-text2">
            <div className="let-start-details-text let-start-details-text2">
              <div className="let-start2-det">
                <h2>Complete your KYC Verification</h2>

                <p>
                  In order to get access to all our feautures, you will be
                  required to complete your KYC verification.
                </p>
              </div>
            </div>
            <div className="let-no let-no2">
              <p>2</p>
            </div>
          </div>
          <div className="let-start-image let-start-image2">
            <img src={MobileDark3} alt="" />
          </div>
        </div>
        
        <div className="line-span">
          <img src={LineIndicatorcurve} alt="" />
        </div>

        <div className="let-start-details let-start-details3">
          <div className="let-start-image let-start-image3">
            <img src={MobileDark4} alt="" />
          </div>
          <div className="let-start-text">
            <div className="let-no">
              <p>3</p>
            </div>
            <div className="let-start-details-text">
              <h2>Fund your Wallet</h2>

              <p>
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

export default LetStart;
