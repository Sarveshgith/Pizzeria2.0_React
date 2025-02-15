import React from "react";
import "./Menu.css";

const Menu = ({ title, price, tags }) => {
  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div className="menuitem-name">
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {title}
          </p>
        </div>
        <div className="menuitem-dash" />
        <div className="menuitem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      <div className="menuitem-sub">
        <p className="p__opensans" style={{ color: "#AAAAAA" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default Menu;
