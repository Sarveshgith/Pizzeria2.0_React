import React from "react";
import "./findus.css";
import images from "../images";
import Subheading from "../../comps/Subheading/Subheading";

const Findus = () => {
  return (
    <div id="findus">
      <div className="findus-content">
        <img src={images.bg} alt="overlay" className="overlay" />
        <div className="findus-container">
          <div className="findus-content">
            <div className="findus-content-left">
              <Subheading title="Contact Us" prefer={true} style={{}} />
              <p className="headtext__cormorant">Find Us</p>
              <p
                className="p__opensans"
                style={{ color: "rgb(170, 170, 170)" }}
              >
                40 rue Reine Elisabeth, MErignac, Aquitaine, France - 33700
              </p>
              <p className="p__cormorant" style={{ color: "#dcca87" }}>
                Opening Hours
              </p>
              <p className="p__opensans" style={{ marginBottom: "0.5rem" }}>
                Monday - Friday: 9:00 am - 10:00 pm
              </p>
              <p className="p__opensans">
                Saturday & Sunday: 9:00 am - 9:00 pm
              </p>
              <button type="button" className="custom__button">
                Visit Us
              </button>
            </div>
          </div>
          <div className="findus-img">
            <img src={images.final} alt="findus" className="findus-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Findus;
