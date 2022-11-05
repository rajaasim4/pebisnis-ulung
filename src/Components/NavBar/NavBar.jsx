import React, { useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/all";
import useClickOutsideDetector from "../../Hooks/useClickOutsideDetector";
import useMediaQuery from "../../Hooks/useMediaQuery";
import "./NavBar.css";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const hidenav = () => {
    setShow(!show);
  };
  const isBellow540 = useMediaQuery("(max-width:540px)");
  let menu = useRef("mainmenu");
  useClickOutsideDetector(menu, () => {
    setShow(false);
  });
  return (
    <>
      <nav>
        <div className="main-nav">
          <div className="nav-logo">
            <h2>
              PEBISNIS
              <span> ULUNG.</span>
            </h2>
          </div>
          <div
            className={
              show ? "main-nav-links-show main-nav-links" : "main-nav-links"
            }
            ref={menu}
          >
            <AiOutlineClose className="menu-close" onClick={hidenav} />
            <div className="nav-links">
              <ul>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Resources</a>
                </li>
                <li>
                  <a href="">Company</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="nav-btn">
              <button>Let's Talk</button>
            </div>
          </div>
          <div className="Hamburger" onClick={hidenav}>
            {show ? isBellow540 ? "" : <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
