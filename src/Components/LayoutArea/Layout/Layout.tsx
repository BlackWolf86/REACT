import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./Layout.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "../Routing/Routing";
import BackgroundImage from "../BackgroundImage/BackgroundImage";

export function Layout(): JSX.Element {
    return (
        <BrowserRouter>
            <section>
                <header>
                    <Header />
                </header>
                <aside>
                    <Menu />
                </aside>
                <main>
                    {/* <Main /> */}
                    <Routing />
                </main>
                <footer>
                    <Footer />
                </footer>
            </section >
        </BrowserRouter>
    );
}