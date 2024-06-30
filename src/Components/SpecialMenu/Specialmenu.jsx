import React from "react";
import images from "../images";
import data from "../data";
import "./specialmenu.css";
import Menu from "../../comps/MenuItem/Menu";
import Subheading from "../../comps/Subheading/Subheading";

const Specialmenu = () => {
  return (
    <div className="app__specialmenu" id="menu">
      <div className="app__specialmenu-container">
        <Subheading
          title="Menu that fits Your Preferences"
          prefer={false}
          style={{ marginBottom: "0rem", fontSize: "10px" }}
        />
        <h1 className="headtext__cormorant" style={{ fontSize: "50px" }}>
          Today's Special
        </h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="menu_1">
          {/* <p>Pizza Varieties</p> */}
          <div className="menu1__content">
            {data.pizza.map((slice, index) => (
              <Menu
                key={slice.title + index}
                title={slice.title}
                price={slice.price}
                tags={slice.tags}
              />
            ))}
          </div>
        </div>
        <div className="menu_2">
          <img src={images.oliveall} alt="bottle" />
        </div>
        <div className="menu_3">
          {/* <p>Appetizers</p> */}
          <div className="menu3__content">
            {data.appetizers.map((slice, index) => (
              <Menu
                key={slice.title + index}
                title={slice.title}
                price={slice.price}
                tags={slice.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }} className="btn-bottom">
        <button type="button" className="custom__button enlarge">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Specialmenu;
