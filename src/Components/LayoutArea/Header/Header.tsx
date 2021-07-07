import Search from "../../HomeArea/Search/Search";
import Logo from "../Logo/Logo";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <h1>Cristiano Ronaldo The King</h1>
            <Logo />
        </div>
    );
}

export default Header;
