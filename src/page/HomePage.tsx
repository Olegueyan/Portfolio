import {Fragment, useState} from "react";
import Navbar from "../component/Navbar.tsx";
import Menubar from "../component/partial/Menubar.tsx";
import Footer from "../component/Footer.tsx";
import Skills from "../component/content/Skills.tsx";
import Project from "../component/content/Project.tsx";
import Profile from "../component/content/Profile.tsx";
import Career from "../component/content/Career.tsx";

export function HomePage()
{
    const [activeView, setActiveView] = useState("profile");

    const MenuProps =
        [
            {
                value: "Profil",
                icon: "/src/assets/images/icon/profile.png",
                action: () => {setActiveView("profile")}
            },
            {
                value: "Projets",
                icon: "/src/assets/images/icon/project.png",
                action: () => {setActiveView("project")}
            },
            {
                value: "Formations",
                icon: "/src/assets/images/icon/formations.png",
                action: () => {setActiveView("formations")}
            },
            {
                value: "Compétences",
                icon: "/src/assets/images/icon/skills.png",
                action: () => {setActiveView("skills")}
            },
            {
              value: "Parcours",
              icon: "/src/assets/images/icon/career.png",
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