import React from 'react';
import {Link} from "react-router-dom";
import "./style.css"

const Header = () => {
    return (
        <header className="header header-container">
            <Link className="logo">News portal V8</Link>
            <div>
                <ul className="nav-bar">
                    <Link className="list">Главная</Link>
                    <Link className="list">Новости</Link>
                    <Link className="list">Войти</Link>
                    <Link className="list">Зарегистироваться</Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;