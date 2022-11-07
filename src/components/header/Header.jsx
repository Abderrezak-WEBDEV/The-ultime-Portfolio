import React from "react";

import Scroll from "./Scroll";
import "../header/Header.css";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5 className="text-light"> Hello , I'm</h5>
        <h1> Abderrezak Bouiche</h1>
        <h5 className="text-light">Développeur Fullstack</h5>
        <Scroll />
        <a href="#contact" className="scroll_down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
