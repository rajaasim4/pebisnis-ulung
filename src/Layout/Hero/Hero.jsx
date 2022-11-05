import React from "react";
import { AiTwotoneStar } from "react-icons/all";
import Hero_img from "../../assets/Images/Hero_img.png";
import avatar from "../../assets/Images/hero_img_info_avatar.png";
import Hero_left_arrow from "../../assets/Images/Hero_left_arrow.svg";
import Hero_right_arrow from "../../assets/Images/Hero_right_arrow.svg";
import tick from "../../assets/Images/verify.svg";
import NavBar from "../../Components/NavBar/NavBar";

import "./Hero.css";
const Hero = () => {
  return (
    <header>
      <NavBar />
      <div className="Hero">
        <div className="Hero-left">
          <h3>
            <img src={tick} alt="" />
            &nbsp; &nbsp; Best Business Platform - World Record 2021
          </h3>
          <h1>
            Reach Your Business <br /> Goals in Record Time
          </h1>
          <p>
            Support small business and join the nationwide movement to encourage
            commercial support for the millions of minority owned businesses
            helping world economy.
          </p>
          <div className="btn">
            <button>Get Started</button>
          </div>
          {/* <img src={Hero_img_info} alt="" /> */}
        </div>
        <div className="Hero-right">
          <img src={Hero_img} alt="" />
          <img src={Hero_left_arrow} alt="" className="Hero-right-img1" />
          <img src={Hero_right_arrow} alt="" className="Hero-right-img2" />
          <div className="Hero-info">
            <div className="Hero-info-rating">
              <span>4.9</span>
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
            </div>
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
      <div className="right-triangle"></div>
      <div className="left-triangle"></div>
    </header>
  );
};

export default Hero;
