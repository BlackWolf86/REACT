import { Component } from "react";
import "./AllClubs.css";
import RealMadridLogo from '../../../Assets/Images/RealMadridLogo.png';
import ManchesterUnitedLogo from '../../../Assets/Images/ManchesterLogo.png';
import SportingCPLogo from '../../../Assets/Images/SportingCPBLogo.png';
import JuventusLogo from '../../../Assets/Images/JuventusLogo.png';

class AllClubs extends Component {

    public render(): JSX.Element {
        return (
            <div className="AllClubs">
                <h2>Clubs</h2>
                <a href="https://en.wikipedia.org/wiki/Sporting_CP">
                    <img src={SportingCPLogo} />
                </a>
                <a href="https://en.wikipedia.org/wiki/Manchester_United_F.C.">
                    <img src={ManchesterUnitedLogo} />
                </a>
                <a href="https://en.wikipedia.org/wiki/Real_Madrid_CF">
                    <img src={RealMadridLogo} />
                </a>
                <a href="https://en.wikipedia.org/wiki/Juventus_F.C.">
                    <img src={JuventusLogo} />
                </a>
            </div>
        );
    }
}

export default AllClubs;
