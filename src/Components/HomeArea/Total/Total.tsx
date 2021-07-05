import "./Total.css";

function Total(): JSX.Element {
    const numOfGoals = 801;
    return (
        <div className="Total Box">
            <h2>Goals</h2>
            <p>Cristiano scored {numOfGoals} goals so far</p>
        </div>
    );
}

export default Total;
