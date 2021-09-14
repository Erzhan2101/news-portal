import React from 'react';
import {Link} from "react-router-dom";
import "./style.css"

const Header = () => {
    return (
        <header className="header header-container">
            <Link to={'/'} className="logo">News portal V8</Link>
            <div>
                <ul className="nav-bar">
                    <Link to={'/'} className="list">Главная</Link>
                    <Link to={'news-page/:id'} className="list">Новости</Link>
                    <Link to={'/sing-in'} className="list">Войти</Link>
                    <Link to={'/register'} className="list">Зарегистироваться</Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;