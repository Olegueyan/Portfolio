import {Fragment} from "react";
import Navbar from "../../component/Navbar.tsx";
import Footer from "../../component/Footer.tsx";
import Slider from "../../component/partial/Slider.tsx";
import BubbleCard from "../../component/partial/BubbleCard.tsx";

/* Assets imports */

import * as assets from "../../assets/import.ts";

export function MenagelecPage()
{
    const images = [
        assets.imgMenagelecSlideOne,
        assets.imgMenagelecSlideTwo,
        assets.imgMenagelecSlideThree,
        assets.imgMenagelecSlideFour,
        assets.imgMenagelecSlideFive,
    ]

    return (
        <Fragment>
            <Navbar />

            <button className="animate HomeButton" onClick={() => window.location.href = "/"}>
                <img className="HomeButton_icon" src={assets.imgHome} alt="Home"/>
                Home
            </button>

            <main className="animate">
                <span className="Title -big -bold m-3">Aperçu du projet</span>

                <Slider images={images} />

                <span className="Title -medium -bold m-2">Description</span>

                <p className="Text -description p-5">
                    Menagelec est une application client lourd en C# réalisé avec WinForms.
                    Elle utilise une base de données MySQL pour gérer la vente de pièces détachées
                    d'électroménagers pour l'entreprise MENAGELEC. L'application permet
                    l'authentification des utilisateurs, l'affichage des commandes, la
                    gestion des paiements et des expéditions ainsi que la génération automatique
                    de listes de colisage au format PDF.
                </p>

                <span className="Title -medium -bold m-2">Conception</span>

                <div className="Grid m-5">
                    <BubbleCard icon={assets.imgCSharp} name="C#"/>
                    <BubbleCard icon={assets.imgWinForms} name="WinForms"/>
                </div>

                <a href="/external/Menagelec.zip">Télécharger</a>
            </main>

            <Footer />
        </Fragment>
    );
}