import React from "react";
import "./aboutus.css";
import { PiLetterCircleP } from "react-icons/pi";
import images from "../images";

const Aboutus = () => {
  return (
    <div id="aboutus">
      <div className="aboutus__wrapper">
        <img src={images.bg} alt="bg" className="overlay" />
        <PiLetterCircleP className="icon" />
        <div className="aboutus__content">
          <div className="aboutus__content1">
            <h1 className="headtext__cormorant">About Us</h1>
            <p className="p__opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
            <button type="button" className="custom__button">
              Know More
            </button>
          </div>
          <div className="aboutus__content2">
            <img src={images.cutter} alt="knife" />
          </div>
          <div className="aboutus__content3">
            <h1 className="headtext__cormorant">Our History</h1>
            <p className="p__opensans">
              Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
              Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
              odio nec aliquet.
            </p>
            <button type="button" className="custom__button">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
