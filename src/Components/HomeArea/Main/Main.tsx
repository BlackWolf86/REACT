import BestClub from "../BestClub/BestClub";
import Clubs from "../Clubs/Clubs";
import Goals from "../Goals/Goals";
import MUI from "../MUI/MUI";
import Sales from "../Sales/Sales";
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
            <Clubs />
            <h2>Goals History</h2>
            <Goals team="Sporting CP B" goals={331} />
            <Goals team="Sporting CP" goals={331} />
            <Goals team="Manchester United" goals={331} />
            <Goals team="Real Madrid" goals={331} />
            <Goals team="Juventus" goals={331} />

            <h2>Now on Sale!</h2>
            <Sales percent={10} />
            <TheBest />
            <BestClub />
            {/* <MUI /> */}
        </div>
    );
}

export default Main;
