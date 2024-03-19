import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

/* Assets imports */

import * as assets from "../../assets/import.ts";

function Profile()
{
  const navigate = useNavigate();

  return (
    <Fragment>
      <span className="Title -big -bold m-3">Projets réalisés</span>

      <div className="Project mt-3 mb-3 mr-5 ml-5">

        {/* Menagelec - Project */}
        <div className="Project_card">
          <div className="Project_card_header">
            <img className="Project_card_header_image"
                 src={assets.imgMenagelec} alt="Menagelec"/>
            <div className="Project_card_header_head">
              <span className="Project_card_header_head_title">Menagelec</span>
              <span className="Project_card_header_head_specs">WinForms - C#</span>
            </div>
          </div>

          <div className="Project_card_body">
            <span className="Project_card_body_description">
              Menagelec est une application client lourd en C# réalisé avec WinForms.
              Elle utilise une base de données MySQL pour gérer la vente de pièces détachées
              d'électroménagers pour l'entreprise MENAGELEC. L'application permet
              l'authentification des utilisateurs, l'affichage des commandes, la
              gestion des paiements et des expéditionsainsi que la génération automatique
              delistes de colisage au format PDF.
            </span>
          </div>

          <div className="Project_card_footer">
            <a href="/external/Menagelec.zip">
              <img className="Project_card_footer_button" src={assets.imgDownload} alt="Download"/>
            </a>
            <img className="Project_card_footer_button" src={assets.imgLoup} alt="Loup"
                 onClick={() => navigate("/menagelec")}
            />
          </div>
        </div>
        {/* END */}

        {/* Monstroclasse - Project */}
        <div className="Project_card">
          <div className="Project_card_header">
            <img className="Project_card_header_image"
                 src={assets.imgMonstroclasse} alt="Telem"/>
            <div className="Project_card_header_head">
              <span className="Project_card_header_head_title">Monstroclasse</span>
              <span className="Project_card_header_head_specs">JavaFX - Java</span>
            </div>
          </div>

          <div className="Project_card_body">
            <span className="Project_card_body_description">
              Monstroclasse est un portail de sous application comportement un
              systéme de gestion d'élève. Il inclut la sous application Ecrilu
              qui permet de faire apprendre les élèves à lire et ecrire.
            </span>
          </div>

          <div className="Project_card_footer">
            <a href="/external/monstroclasse-release-1.0.zip">
              <img className="Project_card_footer_button" src={assets.imgDownload} alt="Download"/>
            </a>
            <img className="Project_card_footer_button" src={assets.imgLoup} alt="Loup"/>
          </div>
        </div>
        {/* END */}

        {/* Telem - Project */}
        <div className="Project_card">
          <div className="Project_card_header">
            <img className="Project_card_header_image"
                 src={assets.imgTelem} alt="Telem"/>
            <div className="Project_card_header_head">
              <span className="Project_card_header_head_title">Telem</span>
              <span className="Project_card_header_head_specs">Symfony - PHP</span>
            </div>
          </div>

          <div className="Project_card_body">
            <span className="Project_card_body_description">
              Telem est un site web comprenant un système de gestion de produits en ligne. Il dispose d'une
              base de données exhaustive référençant tous les produits disponibles sur la plateforme, avec des formulaires
              de création, suppression et modification pour les administrer. Avec un moteur de recherche intégré,
              l'accès aux produits désirés est simplifié pour les utilisateurs.
            </span>
          </div>

          <div className="Project_card_footer">
            <img className="Project_card_footer_button -disabled" src={assets.imgDownload} alt="Download"/>
            <img className="Project_card_footer_button" src={assets.imgLoup} alt="Loup"/>
          </div>
        </div>
        {/* END */}

      </div>
    </Fragment>
  )
}

export default Profile