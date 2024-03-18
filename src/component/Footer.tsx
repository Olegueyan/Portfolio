import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";

function Footer()
{
    const [isAbsolute, setIsAbsolute] = useState(true);

    const navigate = useNavigate();

    useEffect(() =>
    {
        const intervalId = setInterval(() =>
        {
            const marker = document.getElementById("marker");
            const footer = document.getElementById("footer");
            const root = document.getElementById("root");
            if (!marker || !footer || !root) return;
            if (isAbsolute) setIsAbsolute(root.clientHeight + footer.clientHeight < marker.clientHeight);
            else setIsAbsolute(root.clientHeight < marker.clientHeight);
        }, 1);
        return () => clearInterval(intervalId);
    }, [isAbsolute]);

    return (
        <footer id="footer" style={{ position: isAbsolute ? "absolute" : "relative" }} className="Footer">
            <div className="Footer_email" onClick={() => navigate("/contact")}>
                <img className="Footer_email_icon" src="/src/assets/images/icon/e-mail.png" alt="Email" />
                <span className="Footer_email_button">
                    Envoyer un mail
                </span>
            </div>

            <div className="Footer_copyright">
                © 2024 - Gaëtan Rousselin
            </div>

            <div className="Footer_developped">
                <img className="Footer_developped_icon" src="/src/assets/images/lang/reactjs.png" alt="ReactJS" />
                <span className="Footer_developped_text">Developed in ReactJS</span>
            </div>
        </footer>
    )
}

export default Footer