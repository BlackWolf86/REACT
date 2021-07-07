import { NavLink } from "react-router-dom";
import Search from "../../HomeArea/Search/Search";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/clubs">Clubs</NavLink>
            <NavLink to="/goals">Goals</NavLink>
            <NavLink to="/titles">Titles</NavLink>
            <NavLink to="/sale">Sale</NavLink>
            <NavLink to="/contactus">Contact Us</NavLink>
        </div>
    );
}

export default Menu;
