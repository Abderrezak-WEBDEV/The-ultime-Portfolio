import React from "react";
import "../footer/footer.css";
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <p>&copy;{new Date().getFullYear()} Tous droits reservés|Privé</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
