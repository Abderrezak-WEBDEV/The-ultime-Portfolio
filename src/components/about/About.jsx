import React from "react";
import "../about/About.css";
import ME from "../../assets/Photo.jpg";
import { FaSignLanguage } from "react-icons/fa";
import { SiSkillshare } from "react-icons/si";
const About = () => {
  return (
    <section id="about">
      <h5>Faisant connaissance !</h5>
      <h2>A propos de moi</h2>
      <div className="container about-container">
        <div className="about_me">
          <div className="about_descrp">
            <p>
              Mon aventure du développement web est à son début. Concevoir,
              améliorer et apporter de nouvelles user story d'un site web en
              respectant un cahier de charge, charte graphique. Je suis
              disponible pour tous nouveaux challange.
            </p>
            <a href="#contact" value="contact" className="btn btn-primary">
              Contactez-moi !
            </a>
          </div>
        </div>
        <div className="about_content">
          <article className="about_card">
            <div className="about_me-image">
              <img src={ME} alt="" className="image" />
            </div>
          </article>
          <article className="about_card">
            <FaSignLanguage className="about_icon" />
            <h5>Langues</h5>
            <li>Berbere 'Maternelle' </li>
            <li>Français 'Courant'</li>
            <li>Arabe'Courant' </li>
            <li>Anglais 'Travail' </li>
          </article>
          <article className="about_card">
            <SiSkillshare className="about_icon" />
            <h5>Soft Stkills</h5>
            <li> Exigent et travailleur</li>
            <li>Rigoureux</li>
            <li>Autonomie et Initiative</li>
            <li>Capacité d’écoute</li>
            <li>Force d’adaptation</li>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
