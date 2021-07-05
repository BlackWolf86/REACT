import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import "./Layout.css";

export function Layout(): JSX.Element {
    return (
        <section>
            <header>
                <Header />
            </header>
            <main>
                <Main />
            </main>
            <aside>
                <Menu />
            </aside>
            <footer>
                <Footer />
            </footer>
        </section >

    );
}