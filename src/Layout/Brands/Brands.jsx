import React from "react";
import microsoft from "../../assets/Images/microsoft.png";
import prudential from "../../assets/Images/prudential.png";
import slack from "../../assets/Images/slack.png";
import zoover from "../../assets/Images/zoover.png";
import "./Brands.css";
const Brands = () => {
  return (
    <>
      <section className="Brands">
        <div className="Brands-main">
          <img src={slack} alt="" />
          <img src={prudential} alt="" />
          <img src={microsoft} alt="" />
          <img src={zoover} alt="" />
        </div>
      </section>
    </>
  );
};

export default Brands;
