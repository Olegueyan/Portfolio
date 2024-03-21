import { useNavigate } from "react-router-dom";

/* Assets imports */

import * as assets from "../../assets/import.ts";

function Profile()
{
  const navigate = useNavigate();

  return (
    <div className="Container -mb-3 -mt-3">
      <span className="Title -big -bold">
        Projets réalisés
      </span>

      <div className="Grid -x1C">

        {/* Menagelec - Project */}
        <div className="RowCard">
          <div className="RowCard_header">
            <img className="RowCard_header_image"
                 src={assets.imgMenagelec} alt="Menagelec"/>
            <div className="RowCard_header_head">
              <span className="RowCard_header_head_title">Menagelec</span>
              <span className="RowCard_header_head_specs">WinForms - C#</span>
            </div>
          </div>

          <div className="RowCard_body">
          <span className="RowCard_body_description">
            Menagelec est une application client lourd en C# réalisé avec WinForms.
            Elle utilise une base de données MySQL pour gérer la vente de pièces détachées
            d'électroménagers pour l'entreprise MENAGELEC. L'application permet
            l'authentification des utilisateurs, l'affichage des commandes, la
            gestion des paiements et des expéditionsainsi que la génération automatique
            delistes de colisage au format PDF.
          </span>
          </div>

          <div className="RowCard_footer">
            <a href="/external/Menagelec.zip">
              <img className="RowCard_footer_button" src={assets.imgDownload} alt="Download"/>
            </a>
            <img className="RowCard_footer_button" src={assets.imgLoup} alt="Loup"
                 onClick={() => navigate("/menagelec")}
            />
          </div>
        </div>
        {/* END */}

        {/* Monstroclasse - Project */}
        <div className="RowCard">
          <div className="RowCard_header">
            <img className="RowCard_header_image"
                 src={assets.imgMonstroclasse} alt="Telem"/>
            <div className="RowCard_header_head">
              <span className="RowCard_header_head_title">Monstroclasse</span>
              <span className="RowCard_header_head_specs">JavaFX - Java</span>
            </div>
          </div>

          <div className="RowCard_body">
          <span className="RowCard_body_description">
            Monstroclasse est un portail de sous application comportement un
            systéme de gestion d'élève. Il inclut la sous application Ecrilu
            qui permet de faire apprendre les élèves à lire et ecrire.
          </span>
          </div>

          <div className="RowCard_footer">
            <a href="/external/monstroclasse-release-1.0.zip">
              <img className="RowCard_footer_button" src={assets.imgDownload} alt="Download"/>
            </a>
            <img className="RowCard_footer_button" src={assets.imgLoup} alt="Loup"/>
          </div>
        </div>
        {/* END */}

        {/* Telem - Project */}
        <div className="RowCard">
          <div className="RowCard_header">
            <img className="RowCard_header_image"
                 src={assets.imgTelem} alt="Telem"/>
            <div className="RowCard_header_head">
              <span className="RowCard_header_head_title">Telem</span>
              <span className="RowCard_header_head_specs">Symfony - PHP</span>
            </div>
          </div>

          <div className="RowCard_body">
          <span className="RowCard_body_description">
            Telem est un site web comprenant un système de gestion de produits en ligne. Il dispose d'une
            base de données exhaustive référençant tous les produits disponibles sur la plateforme, avec des formulaires
            de création, suppression et modification pour les administrer. Avec un moteur de recherche intégré,
            l'accès aux produits désirés est simplifié pour les utilisateurs.
          </span>
          </div>

          <div className="RowCard_footer">
            <img className="RowCard_footer_button -disabled" src={assets.imgDownload} alt="Download"/>
            <img className="RowCard_footer_button" src={assets.imgLoup} alt="Loup"/>
          </div>
        </div>
        {/* END */}

      </div>
    </div>
  )
}

export default Profile