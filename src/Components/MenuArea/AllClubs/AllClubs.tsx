import { Component } from "react";
import "./AllClubs.css";

class AllClubs extends Component {

    public render(): JSX.Element {
    const teams = [{ "id": 1, "name": 'Sporting CP B' },
    { "id": 2, "name": 'Sporting CP' },
    { "id": 3, "name": 'Manchester United' },
    { "id": 4, "name": 'Real Madrid' },
    { "id": 5, "name": 'Juventus' }];
        return (
            <div className="AllClubs">
				<h2>Clubs</h2>
                {teams.map((team,idx) => <span key="team.id">{(idx ? ' || ' : '')}{team.name}</span>)}
            </div>
        );
    }
}

export default AllClubs;
