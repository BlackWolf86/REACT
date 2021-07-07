import { Component } from "react";
import Goals from "../../HomeArea/Goals/Goals";
import "./AllTimeGoals.css";

class AllTimeGoals extends Component {

    public render(): JSX.Element {
        return (
            <div className="AllTimeGoals">
                <h2>Goals History</h2>
                <Goals team="Sporting CP B" goals={331} />
                <Goals team="Sporting CP" goals={331} />
                <Goals team="Manchester United" goals={331} />
                <Goals team="Real Madrid" goals={331} />
                <Goals team="Juventus" goals={331} />
            </div>
        );
    }
}

export default AllTimeGoals;
