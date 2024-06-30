import React from "react";
import { GiPizzaCutter } from "react-icons/gi";

const Subheading = ({ title, prefer, style }) => {
  const p_cormorant = {
    fontFamily: "Cormorant Garamond, serif",
    color: "#DCCA87",
    fontSize: "1.5rem",
  };

  return (
    <div style={style}>
      <p className="p__cormorant" style={p_cormorant}>
        {title}
      </p>
      {prefer && (
        <GiPizzaCutter
          className="icon"
          style={{ color: "#DCCA87", fontSize: "40px", width: "60px" }}
        />
      )}
    </div>
  );
};

export default Subheading;
