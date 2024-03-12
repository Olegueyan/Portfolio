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
            <div className="Navbar_profil">
                <img className="Navbar_profil_image" src="src/assets/images/profil.png" alt="Gaëtan Rousselin" />
                <span className="Navbar_profil_name">Gaëtan Rousselin</span>
            </div>
            <div className="Navbar_socialNetworks">
                <img className="Navbar_socialNetworks_linkedin Navbar_socialNetworks__socialIcon"
                     src="src/assets/icons/linkedin.png" alt="Linkedin" onClick={onLinkedinClick}/>
                <img className="Navbar_socialNetworks_discord Navbar_socialNetworks__socialIcon"
                     src="src/assets/icons/discord.png" alt="Discord" onClick={onDiscordClick}/>
                <img className="Navbar_socialNetworks_github Navbar_socialNetworks__socialIcon"
                     src="src/assets/icons/github.png" alt="Github" onClick={onGithubClick}/>
            </div>
        </div>
    )
}

export default Navbar