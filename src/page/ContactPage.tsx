import { Fragment, useEffect, useState } from "react";
import Navbar from "../component/Navbar.tsx";
import Footer from "../component/Footer.tsx";
import {useNavigate} from "react-router-dom";
import Alert from "../component/partial/Alert.tsx";

export function ContactPage()
{
    const [alertVisible, setAlertVisible] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    };

    const handleAlertClose = () => {
        setAlertVisible(false);
    };

    return (
        <Fragment>
            <Navbar />

            <main>

                {alertVisible && (
                  <div id="alert" className="animate mt-2 mb-2 mr-5 ml-5 p-2">
                      <Alert type="yellow"
                             message="Le formulaire de contact est en cours de développement"
                             onClose={handleAlertClose} />
                  </div>
                )}

                <form className="Form animate" onSubmit={onSubmit}>
                    <div className="Form_composed Form_div">
                        <div className="Form_composed_subDiv">
                            <label className="Form_label">Prénom*</label>
                            <span className="Form_bar"></span>
                            <input className="Form_control" type="text" name="firstname" placeholder="Prénom" required/>
                        </div>
                        <div className="Form_composed_subDiv">
                            <label className="Form_label">Nom*</label>
                            <span className="Form_bar"></span>
                            <input className="Form_control" type="text" name="lastname" placeholder="Nom" required />
                        </div>
                    </div>
                    <div className="Form_div">
                        <label className="Form_label">Mail*</label>
                        <span className="Form_bar"></span>
                        <input className="Form_control" type="email" name="email" placeholder="Mail" required />
                    </div>
                    <div className="Form_div">
                        <label className="Form_label">Téléphone*</label>
                        <span className="Form_bar"></span>
                        <input className="Form_control" type="tel" name="phone" placeholder="Téléphone"/>
                    </div>
                    <div className="Form_div">
                        <label className="Form_label">Objet*</label>
                        <span className="Form_bar"></span>
                        <input className="Form_control" type="text" name="object" placeholder="Objet" required />
                    </div>
                    <div className="Form_div">
                        <label className="Form_label">Message*</label>
                        <span className="Form_bar"></span>
                        <textarea className="Form_control Form_message" name="message" placeholder="Message" required />
                    </div>
                    <div className="Form_composed Form_div">
                        <div className="Form_composed_subDiv">
                            <button className="Form_button -left" onClick={() => navigate("/")}>Retour à l'accueil</button>
                        </div>
                        <div className="Form_composed_subDiv">
                            <button disabled={true} className="Form_button -right" type="submit">Envoyer</button>
                        </div>
                    </div>
                </form>
            </main>

            <Footer />
        </Fragment>
    );
}