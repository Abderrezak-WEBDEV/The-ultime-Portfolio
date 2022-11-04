import React from "react";
import "../experience/experience.css";
const Experience = () => {
  return (
    <section id="experience">
      <h5>Whats Skills I Have!</h5>
      <h2>Formations & Compétences </h2>

      <div className="abou_content">
        <article className="about_card">
          <h5>Formations</h5>
          <li>Le Bocal Academy Nice & Marseille</li>
          <li>02-2021|02-2022 Titre Développeur Web et Web Mobile (BAC+2)</li>
          <li>ISEM Université Nice Sophia Antipolis</li>
          <li>2013|2014 Master Economie internationale (BAC+5)</li>
          <li>Université Nice Sophia Antipolis</li>
          <li>2009|2010 Master Banque, Finance et Assurance (licence)</li>
        </article>
        <article className="about_card">
          <h5>Compétences Front-end </h5>
          <li>HTML5/CSS3 (Bootstrap)</li>
          <div className="niveau">80%</div>
          <li>Javascript (Vuejs3, Reactjs, Angular)</li>
          <div className="niveau">50%</div>
          <li>Flutter/React Native</li>
          <div className="niveau">50%</div>
        </article>
        <article className="about_card">
          <h5>Compétences Back-end</h5>
          <li>Wordpress,PHP8, SQL (laravel)</li>
          <div className="niveau">50%</div>
          <li>Caneva, Photoshop, Figma, Trello, UX/UI</li>
          <div className="niveau">70%</div>
          <li>Approche Agile 'Srum' </li>
          <div className="niveau">50%</div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
