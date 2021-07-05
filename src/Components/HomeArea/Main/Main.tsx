import Total from "../Total/Total";
import Workout from "../Workout/Workout";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
            <img src="https://media.giphy.com/media/r1IMdmkhUcpzy/giphy.gif" />
            <Total/>
            <Workout/>
        </div>
    );
}

export default Main;
