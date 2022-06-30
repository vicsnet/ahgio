import React from "react";
import "../review/review.css";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import Vector from "../../../Images/Vector.png";
import Group from "../../../Images/Group _12.png";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

function Review() {
  return (

    <div
      data-aos="fade-down"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="review"
    >

      <div className="test-details">
        <p>
          This is innovative, I have not come across any platform that
          integrates shopping and issuing virtual card on a mobile app. I am
          very impressed with the features and functionalities if I can give
          more than 5 stars I will
        </p>
        <div className="vect">
          <img src={Vector} alt="" className="vect-im" />
          <img src={Vector} alt="" />
          <img src={Vector} alt="" />
          <img src={Vector} alt="" />
          <img src={Vector} alt="" />
        </div>
        <div className="goog">
          <img src={Group} alt="" />
        </div>
      </div>
      <div className="button">
        <ArrowCircleLeftOutlinedIcon className="arrw" />

        <ArrowCircleRightOutlinedIcon className="arrw arrow1" />
      </div>
      <div></div>
    </div>
  );
}

export default Review;
