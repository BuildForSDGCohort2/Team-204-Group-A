import React from "react";
import Image from "../../assets/zero.png";

const Zero = (props) => {
  return (
    <div className="zero">
      <div className="zero__img">
        <img src={Image} alt="Hero" />
      </div>
      <div>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Zero;
