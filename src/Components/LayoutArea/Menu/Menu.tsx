import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/clubs">Clubs</NavLink>
            <NavLink to="/goals">Goals</NavLink>
            <NavLink to="/titles">titles</NavLink>
        </div>
    );
}

export default Menu;
