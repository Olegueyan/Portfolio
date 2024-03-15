function Navbar()
{
    const onLinkedinClick = () =>
    {
        window.location.href = "https://www.linkedin.com/in/ga%C3%ABtan-rousselin-a3326a290/";
    }

    const onDiscordClick = () =>
    {
        window.location.href = "https://www.discordapp.com/users/617408708393304085"
    }

    const onGithubClick = () =>
    {
        window.location.href = "https://github.com/Olegueyan"
    }

    return (
        <div className="Navbar">
            <div className="Navbar_main">
                <div className="Navbar_main_profil">
                    <img className="Navbar_main_profil_image" src="src/assets/images/profile.png" alt="Gaëtan Rousselin" />
                    <span className="Navbar_main_profil_name">Gaëtan Rousselin</span>
                </div>
                <div className="Navbar_main_socialNetworks">
                    <img className="Navbar_main_socialNetworks_linkedin Navbar_main_socialNetworks__socialIcon"
                         src="src/assets/icons/linkedin.png" alt="Linkedin" onClick={onLinkedinClick}/>
                    <img className="Navbar_main_socialNetworks_discord Navbar_main_socialNetworks__socialIcon"
                         src="src/assets/icons/discord.png" alt="Discord" onClick={onDiscordClick}/>
                    <img className="Navbar_main_socialNetworks_github Navbar_main_socialNetworks__socialIcon"
                         src="src/assets/icons/github.png" alt="Github" onClick={onGithubClick}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar