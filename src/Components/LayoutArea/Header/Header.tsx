import Logo from "../Logo/Logo";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <h1>Cristiano Ronaldo The King</h1>
            <Logo />
            {/* <Search /> */}
        </div>
    );
}

export default Header;
