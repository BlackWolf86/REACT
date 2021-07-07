import BestClub from "../BestClub/BestClub";
import Clock from "../Clock/Clock";
import Search from "../Search/Search";
import TheBest from "../TheBest/TheBest";
import Total from "../Total/Total";
import Workout from "../Workout/Workout";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
            <div className="Ronaldo"><img src="https://media.giphy.com/media/r1IMdmkhUcpzy/giphy.gif" /></div>
            <Total />
            <Workout />
            <TheBest />
            <Clock />
            <BestClub />
            <Search />
            {/* <MUI /> */}
        </div>
    );
}

export default Main;
