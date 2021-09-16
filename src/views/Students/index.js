import React, {useEffect, useState} from 'react';
import axios from "axios";

const Students = () => {

    const [student, setStudent] = useState([])

    useEffect(()=> {
        axios("https://613b6b32110e000017a455f9.mockapi.io/students")
            .then(({data}) => setStudent(data))
    }, [])

    return (
        <div className="container">
            <table className="table my-4">
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Номер телефона</th>
                    <th scope="col">Сумма контракта</th>
                    <th scope="col">Оплатил</th>
                    <th scope="col">Ноутбук</th>
                    <th scope="col">Группа</th>
                    <th scope="col">Комментарий</th>
                </tr>
                </thead>
                <tbody >
                {
                    student.map(el =>
                        <tr>
                            <td>{el.name}</td>
                            <td>{el.phone}</td>
                            <td>{el.sum}</td>
                            <td>{el.paid}</td>
                            <td>{el.notebook}</td>
                            <td>{el.group}</td>
                            <td>{el.comment}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <button type="button" className="btn btn-secondary d-block ms-auto mt-4">Добавить новый контакт</button>
        </div>
    );
};

export default Students;