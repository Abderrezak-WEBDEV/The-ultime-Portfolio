
 import { BiBook } from "react-icons/bi";
 import { FaUniversity } from "react-icons/fa";
 import { FcAbout } from "react-icons/fc";
export const MenuData = [
    {
      title: "Home",
      url: "header.jsx",
      cName: "nav-links",
      icon: "fa-solid fa-house-user"
    },
    {
      title: "About",
      url: "About.jsx",
      cName: "nav-links",
      icon: { BiBook }
    },
    {
      title: "Projets",
      url: "Experience.jsx",
      cName: "nav-links",
      icon: { FaUniversity }
    },
    {
      title: "Contact",
      url: "Contact.jsx",
      cName: "nav-links",
      icon: { FcAbout },
    },
    {
      title: "Se connecter",
      url: "",
      cName: "nav-links-mobile",
    },
  ];
  