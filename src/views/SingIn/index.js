import React from 'react';
import './style.css'

const SingIn = () => {
    return (
        <div className="SingIn">
            <div className="box-sing">
                <h4 className="sing-title">Войти в порталь</h4>
                <input className="email" type="text" placeholder="Эл. почта"/>
                <input className="password" type="password" placeholder="Пароль"/>
                <button className="btn-sing">Войти</button>
                <div className="system">
                    <p className="system-info">Оставаться в системе <input className="checkbox" type="checkbox"/></p>
                    <p className="system-help">Нужна помощь ?</p>
                </div>
            </div>
        </div>
    );
};

export default SingIn;