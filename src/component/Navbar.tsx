import { useNavigate } from "react-router-dom";

/* Assets imports */

import * as assets from "../assets/import.ts";

function Navbar()
{
    const navigate = useNavigate();

    const redirection = (url: string) =>
    {
        const confirmation = window.confirm("Êtes-vous sûr de vouloir ouvrir ce lien ?");
        if (confirmation) window.open(url, '_blank');
    }

    return (
        <div className="Navbar">
            <div className="Navbar_main">
                <div className="Navbar_main_profil">
                    <img className="Navbar_main_profil_image" src={assets.imgProfileHead}
                         alt="Gaëtan Rousselin" onClick={() => navigate("/")}/>
                    <span className="Navbar_main_profil_name">Gaëtan Rousselin</span>
                </div>
                <div className="Navbar_main_socialNetworks">
                    <img className="Navbar_main_socialNetworks_linkedin Navbar_main_socialNetworks__socialIcon"
                         src={assets.imgLinkedinMedia} alt="Linkedin"
                         onClick={() => redirection("https://www.linkedin.com/in/ga%C3%ABtan-rousselin-a3326a290/")}/>
                    <img className="Navbar_main_socialNetworks_discord Navbar_main_socialNetworks__socialIcon"
                         src={assets.imgDiscordMedia} alt="Discord"
                         onClick={() => redirection("https://www.discordapp.com/users/617408708393304085")}/>
                    <img className="Navbar_main_socialNetworks_github Navbar_main_socialNetworks__socialIcon"
                         src={assets.imgGithubMedia} alt="Github"
                         onClick={() => redirection("https://github.com/Olegueyan")}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar