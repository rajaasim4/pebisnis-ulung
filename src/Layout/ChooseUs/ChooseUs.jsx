import React from "react";
import { AiFillCheckCircle } from "react-icons/all";
import Choose_img from "../../assets/Images/ChooseUs_img.png";
import "./ChooseUs.css";
const ChooseUs = () => {
  return (
    <section className="Chooseus">
      <div className="Chooseus-main">
        <div className="Chooseus-left">
          <img src={Choose_img} alt="" />
        </div>
        <div className="Chooseus-right">
          <span>Why Choose Us</span>
          <h2>Take on any Challenge of the Digital World</h2>
          <ul>
            <li>
              <AiFillCheckCircle />
              <span>Corporate Financial Advisory</span>
            </li>
            <li>
              <AiFillCheckCircle />
              <span>Corporate Financial Advisory</span>
            </li>
            <li>
              <AiFillCheckCircle />
              <span>Corporate Financial Advisory</span>
            </li>
          </ul>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
