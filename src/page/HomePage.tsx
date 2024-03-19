import {Fragment, useState} from "react";
import Navbar from "../component/Navbar.tsx";
import Menubar from "../component/partial/Menubar.tsx";
import Footer from "../component/Footer.tsx";
import Skills from "../component/content/Skills.tsx";
import Project from "../component/content/Project.tsx";
import Profile from "../component/content/Profile.tsx";
import Career from "../component/content/Career.tsx";
import Formations from "../component/content/Formations.tsx";

/* Assets imports */

import * as assets from "../assets/import.ts";

export function HomePage()
{
    const [activeView, setActiveView] = useState("profile");

    const MenuProps =
        [
            {
                value: "Profil",
                icon: assets.imgProfile,
                action: () => {setActiveView("profile")}
            },
            {
                value: "Projets",
                icon: assets.imgProject,
                action: () => {setActiveView("project")}
            },
            {
                value: "Formations",
                icon: assets.imgFormations,
                action: () => {setActiveView("formations")}
            },
            {
                value: "Compétences",
                icon: assets.imgSkills,
                action: () => {setActiveView("skills")}
            },
            {
                value: "Parcours",
                icon: assets.imgCareer,
                action: () => {setActiveView("career")}
            }
        ]

    return (
        <Fragment>
            <Navbar />

            <div className="mt-3 mt-2 mr-5 ml-5">
                <Menubar props={MenuProps} />

                { activeView === "profile" &&
                    <div className="animate">
                        <Profile />
                    </div>
                }

                { activeView === "project" &&
                    <div className="animate">
                        <Project />
                    </div>
                }

                { activeView === "formations" &&
                    <div className="animate">
                        <Formations />
                    </div>
                }

                { activeView === "skills" &&
                    <div className="animate">
                        <Skills />
                    </div>
                }

                { activeView === "career" &&
                    <div className="animate">
                        <Career />
                    </div>
                }
            </div>

            <Footer />
        </Fragment>
    );
}