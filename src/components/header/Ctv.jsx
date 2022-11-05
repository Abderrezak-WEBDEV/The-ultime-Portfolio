import React from "react";
import cv from "../../assets/CV_Akel.pdf";
import "../header/Header.css";
const Ctv = () => {
  return (
    <div className="ctv">
      <a href={cv} download value="cv" id="cv-btn" className="btn">
        Download CV
      </a>
      <a
        href="#contact"
        value="contact"
        id="cv-btn"
        className="btn btn-primary"
      >
        Contactez-moi!
      </a>
    </div>
  );
};

export default Ctv;
