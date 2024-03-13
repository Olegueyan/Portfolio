import {Route, Routes} from "react-router-dom";
import {HomePage} from "./page/HomePage.tsx";
import {Fragment} from "react";
import {ContactPage} from "./page/ContactPage.tsx";

function App()
{
    return (
        <Fragment>
            <section id="marker" style={{ position: "absolute", visibility: "hidden" }}></section>
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/contact" Component={ContactPage} />
            </Routes>
        </Fragment>
    )
}

export default App