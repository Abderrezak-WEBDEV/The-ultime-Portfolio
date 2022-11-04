import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import "../header/Header.css";
const Scroll = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="blank">
        <BsGithub />
      </a>
      <a href="https://facebook.com" target="blank">
        <FaFacebookSquare />
      </a>
    </div>
    // pour utiliser les icons react sur ton projet il faut appeller la commande "npm installez les icônes de réaction --save "
    // et faire un import avec les noms de l'icone
  );
};

export default Scroll;
