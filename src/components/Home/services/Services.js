import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../services/service.css";
import Frame4572 from "../../Images/Frame4572.png";
import Frame4573 from "../../Images/Group76.png";
import Frame45731 from "../../Images/Group75.png";
import Group68 from "../../Images/Group68.png";

function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="services">
      <div className="services-head">
        <header className="head">Our Services</header>
      </div>

      <div className="service-col ">
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="service-col1 services-col-1"
        >
          <div className="im im1 ṣervices-im1 services-im">
            <img src={Frame4573} alt="" />
          </div>

          <div className="service-col2 services-col-col services-col-col1 ">
            <div className="details1 ">
              <h3>Unparalleled International Shopping Experience</h3>
              <p>
                Understanding the limits placed on your international shopping
                experience, We decided to go a step further, bringing your
                favorite international vendors closer to you. Go through our
                powerful AI-assisted shopping features on our app, You are just
                one decision away from a seamless experience.
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="service-col1 service-col2 "
        >
          <div className="service-col2 services-col-col services-col-col2 ">
            <div className="details2">
              <h3>Take charge with our virtual card</h3>
              <p>
                Pay utility bills directly from your wallet, Recharge Airtime,
                Pay your DStv subscription packages, Pay your IKEDC bill
                directly and so much more easily, all you have to do is locate
                your biller and make your payment. Also, we encourage you with
                rewards for consistently using our platform for bill payment.
              </p>
            </div>
          </div>

          <div className="im im2 ṣervices-im2 service-im">
            <img src={Frame45731} alt="" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="service-col1 service-col2 service-col3 service-col3-details"
        >
          <div className="im im3 ṣervices-im3 service-im">
            <img src={Group68} alt="" />
          </div>

          <div className="service-col2 services-col-col services-col-col3">
            <div className="details2">
              <h3>Relax let us handle your logistics</h3>
              <p>
                With us shopping does not end there, We take care of your
                package(s) and we make sure it gets to your doorstep. We have
                envisioned your shopping experience and we aim to remove the
                obstacles that is “delivery” giving you a better, seamless,
                hassle-free experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
