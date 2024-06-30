import React from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [ToggleMenu, SetToggleMenu] = useState(false);

  return (
    <nav className="app__navbar" id="navbar">
      <div className="app__navbar__logo">
        {/* <img src={images.logo} alt="papa-logo"/> */}
        <h1 className="logo" style={{ color: "#D4AF37" }}>
          Papa's Pizzeria
        </h1>
      </div>
      <ul className="list-unstyled app__navbar-links">
        <li className="p__opensans">
          <a href="#home" className="text-decoration-none">
            Home
          </a>
        </li>
        <li className="p__opensans ">
          <a href="#aboutus" className="text-decoration-none">
            About Us
          </a>
        </li>
        <li className="p__opensans">
          <a href="#menu" className="text-decoration-none">
            Special Menu
          </a>
        </li>
        <li className="p__opensans">
          <a href="#gallery" className="text-decoration-none">
            Gallery
          </a>
        </li>
        <li className="p__opensans">
          <a href="#chef" className="text-decoration-none">
            Chef
          </a>
        </li>
        <li className="p__opensans">
          <a href="#findus" className="text-decoration-none">
            Find Us
          </a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#book" className="p__opensans">
          Book a Experience
        </a>
      </div>
      <div className="app__navbar-smscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => SetToggleMenu(true)}
          className="burger"
        />
        {ToggleMenu && (
          <>
            <div className="app__navbar-smscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => SetToggleMenu(false)}
              />
              <ul className="app__navbar-smscreen-links">
                <li className="p__opensans">
                  <a href="#home" onClick={() => SetToggleMenu(false)}>
                    Home
                  </a>
                </li>
                <li className="p__opensans">
                  <a href="#aboutus" onClick={() => SetToggleMenu(false)}>
                    About Us
                  </a>
                </li>
                <li className="p__opensans">
                  <a href="#menu" onClick={() => SetToggleMenu(false)}>
                    Special Menu
                  </a>
                </li>
                <li className="p__opensans">
                  <a href="#gallery" onClick={() => SetToggleMenu(false)}>
                    Gallery
                  </a>
                </li>
                <li className="p__opensans">
                  <a href="#chef" onClick={() => SetToggleMenu(false)}>
                    Chef
                  </a>
                </li>
                <li className=" p__opensans">
                  <a href="#findus" onClick={() => SetToggleMenu(false)}>
                    Find Us
                  </a>
                </li>
                <li className="p__opensans phone">
                  <a href="#book" onClick={() => SetToggleMenu(false)}>
                    Book Now
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
