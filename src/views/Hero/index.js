import React from 'react';
import "./style.css"
import {Link} from "react-router-dom";

const Hero = () => {


    return (
        <main>
            <div className="hero container">
                <h1 className="hero-title">News portal V8</h1>
                <Link to='/sing-in'>
                    <button className="hero-btn">Зарегистироваться</button>
                </Link>
            </div>
        </main>
    );
};

export default Hero;