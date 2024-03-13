import { useNavigate } from 'react-router-dom';

function Footer()
{
    const navigate = useNavigate();

    return (
        <div className="Footer">
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
        </div>
    )
}

export default Footer