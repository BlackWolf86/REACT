import "./TheBest.css";

function TheBest(): JSX.Element {
    function showTheBest() {
        alert('CR7 The King');
    }
    return (
        <div className="TheBest Box">
            <h2>Who is the best player in the world?</h2>
            <button onClick={showTheBest}>Click me please!</button>
        </div>
    );
}

export default TheBest;
