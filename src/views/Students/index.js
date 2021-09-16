import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import Modal from 'react-modal';
import axios from "axios";
import './style.css'


const Students = () => {

    const [student, setStudent] = useState([])
    const [showModal, setShowModal] = useState(false);
    const {register, handleSubmit} = useForm()


    const closeModal = () => {
        setShowModal(false)
    }

    const sendData = (data) => {
        alert(JSON.stringify(data))
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    useEffect(() => {
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
                <tbody>
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
            <button type="button" className="btn btn-secondary d-block ms-auto mt-4"
                    onClick={() => setShowModal(true)}>Добавить новый контакт
            </button>
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <form onSubmit={handleSubmit(sendData)}>
                    <h3>Заполните бланк</h3>
                    <div className="info-user">
                        <div>
                            <label htmlFor='name'>Имя</label>
                            <input className={"w-100 border border-dark"} type="text" id="name" {...register("name")}/>
                        </div>
                        <div>
                            <label htmlFor='phone'>Телефон</label>
                            <input className={"w-100 border border-dark"} type="text" id="phone" {...register("phone")}/>
                        </div>
                        <div>
                            <label htmlFor='sum'>Сумма контракта</label>
                            <input className={"w-100 border border-dark"} type="text" id="sum" {...register("sum")}/>
                        </div>
                        <div>
                            <label htmlFor='paid'>Оплатил</label>
                            <input className={"w-100 border border-dark"} type="text" id="paid" {...register("paid")}/>
                        </div>
                    </div>
                    <label htmlFor="notebook" className="mt-3">Ноутбук</label>
                    <input type="text" className="notebook w-100 border border-dark" id="notebook" {...register("notebook")}/>
                    <div>
                        <p className="mt-3">Выбирите группу</p>
                        <select className="form-select border border-dark" aria-label="Default select example" >
                            <option value="1">Перевый</option>
                            <option value="2">Второй</option>
                            <option value="3">Третий</option>
                        </select>
                            <p className="mt-3">Выбирите статус</p>
                        <select className="form-select border border-dark" aria-label="Default select example">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="form-floating">
                        <p className="mt-3">Введите комментарий</p>
                        <textarea className="form-control mt-3 border border-dark" id="floatingTextarea"/>
                    </div>
                    <button className="d-block ms-auto btn btn-secondary mt-3">Добавить</button>
                </form>
            </Modal>
        </div>
    );
};

export default Students;