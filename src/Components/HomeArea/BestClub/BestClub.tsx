import { Component } from "react";
import "./BestClub.css";

interface ClubState {
    team: string;
}

class BestClub extends Component<{}, ClubState> {
    public constructor(state: ClubState) {
        super(state);
        this.state = ({ team: 'Manchester United' });
    }

    private showBestTeam = () => {
        this.setState({ team: 'Real Madrid' });
        alert(this.state.team);
    }

    public render(): JSX.Element {
        return (
            <div className="BestClub Box">
                <h2>Who is the best club in the world?</h2>
                <button onClick={this.showBestTeam}>Click me please!</button>&nbsp;
                <span>{this.state.team}</span>
            </div>
        );
    }
}

export default BestClub;
