import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import "./style.css"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const Submit = (e) => {
        e.preventDefault()
        console.log("boom!")
    }

    const handleChang = (e) => {
        setUser({...user, [e.target.id]: e.target.value})
    }

    return (
        <header className="header">
            <Link to={'/'} className="logo">News portal V8</Link>
            <div>
                <ul className="nav-bar">
                    <NavLink exact to={'/'} className="list">Главная</NavLink>
                    <NavLink to={'/news-page'} className="list">Новости</NavLink>
                    <NavLink to={'/sing-in'} className="list">Войти</NavLink>
                    <NavLink to={'/register'} className="list">Зарегистироваться</NavLink>
                    <button className="callback" onClick={() => setIsOpen(true)}>Обратный связь</button>
                </ul>
            </div>
            {
                isOpen
                &&
                <div className="modal-window">
                    <div className="modal-content">
                        <h3>Обратный связь</h3>
                        <form onSubmit={Submit}>
                            <div className="form-group">
                                <label htmlFor="name">Ваше имя:</label>
                                <input onChange={handleChang}
                                       className="form-input" id="name" type="text" placeholder="Пример: Олег" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Номер телефона:</label>
                                <input onChange={handleChang}
                                       className="form-input" id="phone" type="text" placeholder="Пример: +996555555555"
                                       required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Эл. почта:</label>
                                <input onChange={handleChang}
                                       className="form-input" id="email" type="email"
                                       placeholder="Пример: oleg@gmail.com" required/>
                            </div>
                            <button className="send-btn">Отправить</button>
                        </form>
                        <button className="close-modal" onClick={() => setIsOpen(false)}>×</button>
                    </div>
                </div>
            }
        </header>
    );
};

export default Header;