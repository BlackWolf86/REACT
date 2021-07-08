import "./BackgroundImage.css";
import background from '../../../Assets/Images/Football.jpeg';

function BackgroundImage(): JSX.Element {
    return (
        <div className="BackgroundImage">
            <div style={{ backgroundImage: `url(${background})` }}>
                Cristiano Ronaldo the king!
            </div>
        </div>
    );
}

export default BackgroundImage;
