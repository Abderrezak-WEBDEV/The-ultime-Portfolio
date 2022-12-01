import React from "react";
import { NavLink } from "react-router-dom";
// le Navlink remplace Href A sur d'autres langages
const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/home"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Acceuil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A propos</li>
        </NavLink>
        <NavLink
          to="/projets"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Mes Projets</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
