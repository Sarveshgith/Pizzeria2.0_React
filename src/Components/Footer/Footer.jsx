import React from "react";
import "./footer.css";
import Subheading from "../../comps/Subheading/Subheading";
import images from "../images";
import { FaInstagram, FaTwitter, FaFacebookF, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer__content">
      <div className="footer__container">
        <img src={images.bg} alt="overlay" className="overlay" />
        <div className="footer__container__content">
          <div className="footer__top" style={{ marginTop: "2rem" }}>
            <Subheading
              title="NewsLetter"
              prefer={true}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
              className="heading"
            />
            <p className="headtext__cormorant" style={{ fontSize: "40px" }}>
              Subscribe to our Newsletter
            </p>
            <p className="p__opensans">And never miss latest Updates!</p>
            <div className="search__bar">
              <input type="email" placeholder="Email Address" />
              <button className="custom__button" style={{ marginTop: "2rem" }}>
                Subscribe
              </button>
            </div>
          </div>
          <div className="footer__bottom" style={{ marginTop: "4rem" }}>
            <div className="bottom__left" id="align">
              <p className="p__cormorant">Contact Us</p>
              <p className="p__opensans" id="margin">
                +33 700 555 701
              </p>
              <p className="p__opensans">+33 701 634 756</p>
            </div>
            <div className="bottom__center" id="align">
              <h1 className="logo" style={{ color: "#D4AF37" }}>
                Papa's Pizzeria
              </h1>
              <p style={{ color: "#ffffff" }}>
                "The best way to find yourself is to lose yourself in the
                service of others"
              </p>
              <div
                className="icons"
                style={{ color: "#ffffff", fontSize: "25px" }}
              >
                <a href="https://www.instagram.com/" className="insta">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com/" className="twitter">
                  <FaTwitter />
                </a>
                <a href="https://www.facebook.com/" className="facebook">
                  <FaFacebookF />
                </a>
              </div>
            </div>
            <div className="bottom__right" id="align">
              <p className="p__cormorant">Working Hours</p>
              <p className="p__opensans" id="margin">
                Monday - Friday
              </p>
              <p className="p__opensans">9:00 AM - 10:00 PM</p>
              <p className="p__opensans" id="margin">
                Saturday & Sunday
              </p>
              <p className="p__opensans">9:00 AM - 9:00 PM</p>
            </div>
          </div>
          <p style={{ color: "#ffffff" }}>Made with Passion ❤️</p>
        </div>
      </div>
      <div className="up">
        <a href="#navbar">
          <FaArrowUp style={{ color: "#ffffff", fontSize: "25px" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
