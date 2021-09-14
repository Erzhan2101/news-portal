import React from 'react';
import "./style.css"

const Register = () => {
    return (
        <div className="register">
            <div className="regis-box">
                <h4 className="regis-title">Регистратция на V8</h4>
                <input type="email" placeholder="Эл. почта"/>
                <input className="regis-password" type="password" placeholder="Придумайте пароль"/>
                <input type="password" placeholder="Повторите пароль"/>
                <button>зарегистрироваться</button>
            </div>
        </div>
    );
};

export default Register;