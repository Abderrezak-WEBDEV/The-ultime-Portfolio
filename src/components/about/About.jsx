import React from "react";
import "../about/About.css";
import ME from "../../assets/Photo.jpg";
import { GiSkills } from "react-icons/gi";
import { FaSignLanguage } from "react-icons/fa";
import { SiSkillshare } from "react-icons/si";
const About = () => {
  return (
    <section id="about">
      <h5>Faisant connaissance !</h5>
      <h2>A propos de moi</h2>
      <div className="container about-container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" className="image" />
          </div>
          <div>
            <div classNme>
              <p>
                Mon aventure du developpement web est à son début, concevoir un
                site web en respectant un cahier de charge, charte graphique ,
                améliorer et apporter de nouvelles fonctionnalités d'un site web
                et application, je suis disponible pour tous nouveaux challange.
              </p>
              <a href="#contact" value="contact" className="btn btn-primary">
                Contactez-moi !
              </a>
            </div>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <GiSkills className="about_icon" />
              <h5>Compétences Techniques</h5>
              <h5>HTML5/CSS3 (Bootstrap)</h5>
              <div className="niveau">80%</div>
              <li>Javascript (Vuejs3, Reactjs, Angular)</li>
              <div className="niveau">50%</div>
              <li>Flutter/React Native</li>
              <div className="niveau">40%</div>
              <li>Wordpress,PHP8, SQL (laravel)</li>
              <div className="niveau">50%</div>
              <li>Caneva, Photoshop, Figma, Trello, UX/UI</li>
              <div className="niveau">70%</div>
              <li>Approche Agile 'Srum' </li>
              <div className="niveau">50%</div>
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
      </div>
    </section>
  );
};

export default About;
