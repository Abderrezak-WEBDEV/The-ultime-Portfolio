import React from "react";
import "../nav/nav.css";
import  {useRef} from "react";
import Logo from "./Logo";
import { FaBars, FaTimes, FaUniversity, FaHome } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";

const Nav = () => {
 
  const navRef = useRef();
  const showNavbar = () => {
   navRef.current.classList.toggle("responsive_nav")
  }
  return ( 
      <nav ref={navRef}  className="show-nav">
        <Logo/>
        <ul className="nav-menu">
          <li><a href="/#"><FaHome/>Home</a></li>
          <li><a href="/#"><FcAbout/>About me</a></li>
          <li><a href="/#"><FaUniversity/>Exprerience</a></li>
          <li><a href="/#"><BiBook/>Contact</a></li>
          <button className="nav-btn  nav-clos-btn"  onClick={showNavbar}> <FaTimes/></button>
        </ul>
        <button  className="nav-btn "onClick={showNavbar}> <FaBars/></button>
      </nav> 
    
  );
};

export default Nav;
