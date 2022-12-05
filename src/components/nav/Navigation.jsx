import React from "react";
import { MenuData } from "./MenuData";
import "../nav/nav.css";
const Navigation = () => {
  return (
    <ul className="nav-menu">
    {MenuData.map((item, index) => {
      return (
        <li key={index}>
          <a href={item.url} className={item.cName}>
            <i className={item.icon}></i>
            {item.title}
          </a>
        </li>
      );
    })}
  </ul>
    
  );
};

export default Navigation;
