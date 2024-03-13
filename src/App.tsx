import {Route, Routes} from "react-router-dom";
import {HomePage} from "./page/HomePage.tsx";
import {Fragment} from "react";
import {ContactPage} from "./page/ContactPage.tsx";

function App()
{
    return (
        <Fragment>
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/contact" Component={ContactPage} />
            </Routes>
        </Fragment>
    )
}

export default App