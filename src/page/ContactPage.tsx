import {Fragment} from "react";
import Navbar from "../component/Navbar.tsx";
import Footer from "../component/Footer.tsx";
import {useNavigate} from "react-router-dom";

export function ContactPage()
{
    const navigate = useNavigate();

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    };

    return (
        <Fragment>
            <Navbar />

            <main>
                <form className="Form" onSubmit={onSubmit}>
                    <div className="Form_composed Form_div">
                        <div className="Form_composed_subDiv">
                            <label className="Form_none">Firstname</label>
                            <input className="Form_control" type="text" name="firstname" placeholder="Prénom*" required/>
                        </div>
                        <div className="Form_composed_subDiv">
                            <label className="Form_none">Prénom:</label>
                            <input className="Form_control" type="text" name="lastname" placeholder="Nom*" required />
                        </div>
                    </div>
                    <div className="Form_div">
                        <label className="Form_none">Email:</label>
                        <input className="Form_control" type="email" name="email" placeholder="Mail*" required />
                    </div>
                    <div className="Form_div">
                        <label className="Form_none">Téléphone:</label>
                        <input className="Form_control" type="tel" name="phone" placeholder="Téléphone"/>
                    </div>
                    <div className="Form_div">
                        <label className="Form_none">Objet:</label>
                        <input className="Form_control" type="text" name="object" placeholder="Objet*" required />
                    </div>
                    <div className="Form_div">
                        <label className="Form_none">Message:</label>
                        <textarea className="Form_control Form_message" name="message" placeholder="Message*" required />
                    </div>
                    <div className="Form_composed Form_div">
                        <div className="Form_composed_subDiv">
                            <button className="Form_button -left" onClick={() => navigate("/")}>Retour à l'accueil</button>
                        </div>
                        <div className="Form_composed_subDiv">
                            <button className="Form_button -right" type="submit">Envoyer</button>
                        </div>
                    </div>
                </form>
            </main>

            <Footer />
        </Fragment>
    );
}