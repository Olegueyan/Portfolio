import {Fragment, useState} from "react";
import Navbar from "../component/Navbar.tsx";
import Menubar from "../component/partial/Menubar.tsx";
import Footer from "../component/Footer.tsx";

export function HomePage()
{
    const [/*activeView*/, setActiveView] = useState("profil");

    const MenuProps =
        [
            {
                value: "Profil",
                icon: "/profile.png",
                action: () => {setActiveView("profile")}
            },
            {
                value: "Projets",
                icon: "/project.png",
                action: () => {setActiveView("project")}
            },
            {
                value: "Formations",
                icon: "/formations.png",
                action: () => {setActiveView("formations")}
            },
            {
                value: "Compétences",
                icon: "/skills.png",
                action: () => {setActiveView("skills")}
            },
            {
                value: "Parcours",
                icon: "/career.png",
                action: () => {setActiveView("career")}
            }
        ]

    return (
        <Fragment>
            <Navbar />

            <div className="mt-3 mt-2 mr-5 ml-5">
                <Menubar props={MenuProps} />
            </div>

            <Footer />
        </Fragment>
    );
}