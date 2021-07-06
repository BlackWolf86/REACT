import "./TheBest.css";

function TheBest(): JSX.Element {
    function showTheBest() {
        alert('CR7 The King');
    }
    return (
        <div className="TheBest Box">
            <h2>Events</h2>
            <button onClick={showTheBest}>Click me please!</button>
        </div>
    );
}

export default TheBest;
