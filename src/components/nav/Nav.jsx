import React from "react";
import { HiHome } from "react-icons/hi";
import { BiBook } from "react-icons/bi";
import { MdContactMail } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import "../nav/nav.css";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div>
      <nav>
        <div id="logo">
          <a href="#home" target="blank" id="logo">
            <FaLaptopCode />
            AKEL
          </a>
        </div>
        <div className="main-nav">
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
            target="blank"
          >
            <HiHome />
          </a>
          <a
            href="#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
            target="blank"
          >
            <BiBook />
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
            target="blank"
          >
            <MdContactMail />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
