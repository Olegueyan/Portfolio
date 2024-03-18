import {Fragment} from "react";
import Navbar from "../../component/Navbar.tsx";
import Footer from "../../component/Footer.tsx";
import Slider from "../../component/partial/Slider.tsx";
import BubbleCard from "../../component/partial/BubbleCard.tsx";

export function MenagelecPage()
{
    const images = [
        "/src/assets/images/project/menagelec/slide_menagelec1.png",
        "/src/assets/images/project/menagelec/slide_menagelec2.png",
        "/src/assets/images/project/menagelec/slide_menagelec3.png",
        "/src/assets/images/project/menagelec/slide_menagelec4.png",
        "/src/assets/images/project/menagelec/slide_menagelec5.png",
    ]

    return (
        <Fragment>
            <Navbar />

            <button className="animate HomeButton" onClick={() => window.location.href = "/"}>
                <img className="HomeButton_icon" src="/src/assets/images/icon/home.png" alt="Home"/>
                Home
            </button>

            <main className="animate">
                <span className="Title -big -bold">Aperçu du projet</span>

                <Slider images={images} />

                <span className="Title -medium -bold">Description</span>

                <p className="Text -description p-5">
                    Menagelec est une application client lourd en C# réalisé avec WinForms.
                    Elle utilise une base de données MySQL pour gérer la vente de pièces détachées
                    d'électroménagers pour l'entreprise MENAGELEC. L'application permet
                    l'authentification des utilisateurs, l'affichage des commandes, la
                    gestion des paiements et des expéditions ainsi que la génération automatique
                    de listes de colisage au format PDF.
                </p>

                <span className="Title -medium -bold">Conception</span>

                <div className="Grid m-5">
                    <BubbleCard icon="/src/assets/images/lang/csharp.png" alt="C#" name="C#"/>
                    <BubbleCard icon="/src/assets/images/lib/winforms.png" alt="WinForms" name="WinForms"/>
                </div>

                <a href="/external/Menagelec.zip">Télécharger</a>
            </main>

            <Footer />
        </Fragment>
    );
}