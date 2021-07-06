import "./Logo.css";
import logoImage from '../../../Assets/Images/Logo2.jpg';
// import logoImage2 from '../../../Assets/Images/Logo.webp';

function Logo(): JSX.Element {
    return (
        <div className="Logo">
            <img src={logoImage} />
            {/* <img src={logoImage2} /> */}
        </div>
    );
}

export default Logo;
