import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";

function Footer()
{
    const navigate = useNavigate();

    const [isAbsolute, setIsAbsolute] = useState(false);

    useEffect(() =>
    {
        const observer = new MutationObserver(() =>
        {
            const marker = document.getElementById("marker");
            const footer = document.getElementById("footer");
            const root = document.getElementById("root");
            if (!marker || !footer || !root) return;
            const bodyHeight = document.body.clientHeight;
            if (isAbsolute) setIsAbsolute(root.clientHeight > bodyHeight - footer.clientHeight);
            else setIsAbsolute(root.clientHeight < marker.clientHeight);
        });
        observer.observe(document.body, { attributes: true, childList: true, subtree: true });
        const root = document.getElementById("root");
        if (root) setIsAbsolute(document.body.clientHeight > root.clientHeight);
        return () => observer.disconnect();
    }, [isAbsolute]);

    return (
        <footer id="footer" style={{ position: isAbsolute ? "absolute" : "relative" }} className="Footer">
            <div className="Footer_email">
                <img className="Footer_email_icon" src="src/assets/icons/e-mail.png" alt="Email" />
                <span className="Footer_email_button" onClick={() => navigate("/contact")}>
                    Envoyer un mail
                </span>
            </div>

            <div className="Footer_copyright">
                © 2024 - Gaëtan Rousselin
            </div>

            <div className="Footer_developped">
                <img className="Footer_developped_icon" src="src/assets/icons/reactjs.png" alt="ReactJS" />
                <span className="Footer_developped_text">Developed in ReactJS</span>
            </div>
        </footer>
    )
}

export default Footer