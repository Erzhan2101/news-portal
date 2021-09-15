import "./style.css"
import {Link} from "react-router-dom";


const Hero = () => {

    return (

        <div className="hero">
                <h1 className="hero-title">News portal V8</h1>
                <Link to='/sing-in'>
                    <button className="hero-btn">Зарегистироваться</button>
                </Link>
        </div>
    );
};

export default Hero;