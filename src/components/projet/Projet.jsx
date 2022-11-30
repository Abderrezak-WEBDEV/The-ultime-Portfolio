import React from "react";
import "../projet/projet.css";
import { BsGithub } from "react-icons/bs";
import Im from "../../assets/Photo.jpg";
/*=======swiper=========*/
// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Projet = () => {
  return (
    <section id="projet">
      <h5>Revue de site Web </h5>
      <h2>projets Web & Experiences professionnelles</h2>
      <Swiper
        className="container projets-container"
        modules={[Navigation, Pagination]}
        navigation
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="projet_item">
          <div className="avatar">
            <Slide />
            <h3 className="ent-name">The Ultime Portfolio (Octobre 2022)</h3>
            <small className="ent_review">
              Ce site est mon portfolio, Codé en HTML , CSS et Reactjs.une revue
              mes experiences dans le web et d'antre. Premiere experience avec
              Reactjs un formulaire de contac.
            </small>
            <a
              href="https://github.com/Abderrezak-WEBDEV?tab=overview&from=2022-03-01&to=2022-03-31"
              target="blank"
              className="btn"
            >
              <BsGithub />
              click-ici
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="projet_item">
          <div className="avatar">
            <Slide />
            <h3 className="ent-name">stage (2mois) (Juillet- Aout 2022)</h3>
            <small className="ent_review">
              Réalisation d'un plugin WordPress qui permet de télécharger un
              fichier en xlsx réaliser en PHP8 , HTML. Création site
              d'E-commerce avec WordPress.
            </small>
            <a
              href="https://github.com/Abderrezak-WEBDEV?tab=overview&from=2022-03-01&to=2022-03-31"
              target="blank"
              className="btn"
            >
              <BsGithub /> click-ici
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="projet_item">
          <div className="avatar">
            <img src={Im} alt="" className="projet_img" />
            <h3 className="ent-name">Trello-like (Mai 2022)</h3>
            <small className="ent_review">
              Site de gestion projet (clone Trello) Codé en HTML , CSS et
              Laravel 8 (MVC) User story : partage des taches en trois listes,
              formulaire de connexion et d’inscription. Stockage des données
              user sur BDD PHP MyAdmin Site de vente Auto
            </small>
            <a
              href="https://github.com/Abderrezak-WEBDEV?tab=overview&from=2022-03-01&to=2022-03-31"
              target="blank"
              className="btn"
            >
              <BsGithub /> click-ici
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="projet_item">
          <div className="avatar">
            <img src={Im} alt="" className="projet_img" />
            <h3 className="ent-name">Car Enchere (Avril 2022)</h3>
            <small className="ent_review">
              Codé en HTML, CSS et PHP 8. User story : formulaire connexion ,
              inscription , poster une annonce , date début et fin des enchères
              et prix de réserve. Stockage des données users et annonces dans
              une BDD.
            </small>
            <a
              href="https://github.com/Abderrezak-WEBDEV?tab=overview&from=2022-03-01&to=2022-03-31"
              target="blank"
              className="btn"
            >
              <BsGithub /> click-ici
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="projet_item">
          <div className="avatar">
            <img src={Im} alt="" className="projet_img" />
            <h3 className="ent-name">Site Réseau Social (Mars 2022)</h3>
            <small className="ent_review">
              Réseau d’échange entre développeurs web Codé en HTML , CSS , VueJS
              et VueCLI User story : formulaire d’inscription et connexion ,
              ajouter de postes ( likes et commentaires) Utilisation des API.
            </small>
            <a
              href="https://github.com/Abderrezak-WEBDEV?tab=overview&from=2022-03-01&to=2022-03-31"
              target="blank"
              className="btn"
            >
              <BsGithub /> click-ici
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="projet_item">
          <div className="avatar">
            <img src={Im} alt="avatar 1" className="projet_img" />
            <h3 className="ent-name">Directeur Adjoint (2015-fin 2021)</h3>
            <small className="ent_review">
              Gestion des flux financiers ,Gestion des stocks, Gestion du
              personnel (management des équipes), Analyse des indicateurs
              qualitatifs et quantitatifs, Gestion des plaintes clients.
            </small>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Projet;
