import React from 'react';
import {Link, NavLink} from "react-router-dom";
import "./style.css"

const Header = () => {
    return (
        <header className="header">
            <Link to={'/'} className="logo">News portal V8</Link>
            <div>
                <ul className="nav-bar">
                    <NavLink exact to={'/'} className="list">Главная</NavLink>
                    <NavLink to={'/news-page'} className="list">Новости</NavLink>
                    <NavLink to={'/sing-in'} className="list">Войти</NavLink>
                    <NavLink to={'/register'} className="list">Зарегистироваться</NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header;