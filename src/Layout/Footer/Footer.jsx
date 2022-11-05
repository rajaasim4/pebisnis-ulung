import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/all";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <h3>
          PEBISNIS
          <span> ULUNG.</span>
        </h3>
        <p>
          &copy; {new Date().getFullYear()}
          &nbsp;Pebinis Ulung .All rights are reserved.
        </p>
        <div className="footer-links">
          <a href="">Privacy Policy</a>
          <a href="">Terms</a>
          <a href="">Get In Touch</a>
        </div>
        <a href="" className="footer-social">
          <FaFacebook />
        </a>
        <a href="" className="footer-social">
          <FaInstagram />
        </a>
        <a href="" className="footer-social">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
