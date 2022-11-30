import React from "react";
import { HiHome } from "react-icons/hi";
import { BiBook } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import "../nav/nav.css";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [showlinks, setShowLinks] = useState(false)
  const handleShowlinks = () => {
    setShowLinks(!showlinks)
  }
  return (
    <div>
      <nav className="show_nav">
        <div id="logo">
          <a href="header" target="blank" id="logo">
            <FaLaptopCode />
            AKEL
          </a>
        </div>
        <div className="main-nav">
          <a
            href="header"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
            target="blank"
          >
            <HiHome />
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
            target="blank"
          >
            <FcAbout />
          </a>
          <a
            href="#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
            target="blank"
          >
            <FaUniversity />
          </a>
          <a
            href="#projet"
            onClick={() => setActiveNav("#projet")}
            className={activeNav === "#projet" ? "active" : ""}
            target="blank"
          >
            <BiBook />
          </a>
          <button className="nav-burger" onClick={handleShowlinks}>
             <span  className="burger-bar"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
