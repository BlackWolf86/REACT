import BestClub from "../BestClub/BestClub";
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
            <BestClub />
            {/* <MUI /> */}
        </div>
    );
}

export default Main;
