import React from "react";
import Scroll from "./Scroll";
import "../header/Header.css";
import  Meteo from "../Api/Meteo"
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
        <Meteo />
      </div>
    </header>
  );
};

export default Header;
