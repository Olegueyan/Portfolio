import {Route, Routes} from "react-router-dom";
import {HomePage} from "./page/HomePage.tsx";
import {Fragment} from "react";
import {ContactPage} from "./page/ContactPage.tsx";
import { MenagelecPage } from "./page/project/MenagelecPage.tsx";

function App()
{
    return (
        <Fragment>
            <section id="marker" style={{ position: "absolute", visibility: "hidden" }}></section>
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/contact" Component={ContactPage} />
                <Route path="/menagelec" Component={MenagelecPage} />
            </Routes>
        </Fragment>
    )
}

export default App