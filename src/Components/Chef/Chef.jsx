import React from "react";
import "./chef.css";
import images from "../images";
import Subheading from "../../comps/Subheading/Subheading";
import { ImQuotesLeft } from "react-icons/im";

const Chef = () => {
  return (
    <div className="overlay" id="chef">
      <div className="app__chef-container">
        <div className="app__chef-img">
          <img src={images.papa} alt="papa" className="papa" />
        </div>
        <div className="app__chef-content">
          <Subheading title="Chef 's Word" prefer={true} style={{}} />
          <p className="headtext__cormorant">What we Believe In!</p>
          <div className="chef-content">
            {/* <ImQuotesLeft
              style={{ fontSize: "30px", marginRight: "5px", color: "white" }}
            /> */}
            <p className="p__opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              mattis ipsum turpis elit elit scelerisque egestas mu auctor sit
              iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla
              scelerisque scelerisque congue ac consequat, aliquam molestie
              lectus eu. Congue iaculis integer curabitur semper sit nunc.
            </p>
          </div>
          <p className="p__opensans margin">Papa Louie</p>
          <p className="p__opensans margin">Executive Chef</p>
          <img src={images.sign3} alt="sign" className="sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
