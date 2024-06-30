import React from "react";
import "./header.css";
import Subheading from "../../comps/Subheading/Subheading";
import images from "../images";

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="app__header app__wrapper section__padding">
        <div className="app__wrapper_info">
          <Subheading
            title="Chase the new Flavour"
            prefer={true}
            style={{ marginBottom: "1rem" }}
          />
          <h1 className="app__header_h1">Taste the Passion & Tradition</h1>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            odit qui sint commodi necessitatibus error. Deserunt quo obcaecati
            explicabo, placeat optio nostrum repudiandae velit aliquid ducimus!
            Nobis earum cumque hic.
          </p>
          <button type="button" className="custom__button">
            Explore Menu
          </button>
        </div>

        <div className="app__header-img">
          <img
            src={images.headermain}
            alt="mainpic"
            className="img__edit img-fluid float-end "
            style={{ width: "500px" }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
