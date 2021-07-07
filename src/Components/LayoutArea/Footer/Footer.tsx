import Clock from "../../HomeArea/Clock/Clock";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <p>All rights reserved to&nbsp;<a href="http://www.johnbryce.co.il/">John Bryce Training LTD</a>&copy;</p>
            <Clock />
        </div>
    );
}

export default Footer;
