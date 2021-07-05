import "./Clubs.css";

function Clubs(): JSX.Element {
    const teams = [{ "id": 1, "name": 'Sporting CP B' },
    { "id": 2, "name": 'Sporting CP' },
    { "id": 3, "name": 'Manchester United' },
    { "id": 4, "name": 'Real Madrid' },
    { "id": 5, "name": 'Juventus' }];
    return (
        <div className="Clubs Box">
            <h2>Clubs</h2>
            {teams.map(team => <span key="team.id">&nbsp;{team.name}&nbsp;|</span>)}
        </div>
    );
}

export default Clubs;
