import React from "react";
import "../nav/nav.css";
import Logo from "./Logo";
import Navigation from "./Navigation";
// import { useState } from "react";
// import { BiBook } from "react-icons/bi";
// import { FaUniversity } from "react-icons/fa";
// import { FcAbout } from "react-icons/fc";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const Nav = () => {
  // const [activeNav, setActiveNav] = useState("#");
  // const [showlinks, setShowLinks] = useState(false)
  // const handleShowlinks = () => {
  //   setShowLinks(!showlinks)
  // }
  return (
    <div>
      <nav className="show_nav">
      <Logo/>
      <Navigation/>
      </nav>
    </div>
  );
};

export default Nav;
