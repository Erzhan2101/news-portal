import React, {useEffect, useState} from 'react';
import axios from "axios";
import './style.css'

const Admin = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        axios("https://613b6b32110e000017a455f9.mockapi.io/api/callback")
            .then(({data}) => setUser(data))
    }, [])

    return (
        <>
            <div className="admin-safe container">
                <p><b>ID-пользавателя:</b></p>
                <p><b>Имя пользавателя:</b></p>
                <p><b>Телефонный номер пользавателя:</b></p>
                <p><b>Эл. почта пользавателя:</b></p>
            </div>
            <div className="key container">
                {
                    user.map(el =>
                        <div className='data'>
                            <p> {el.id}</p>
                            <p> {el.name}</p>
                            <p> {el.phone}</p>
                            <p> {el.email}</p>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Admin;