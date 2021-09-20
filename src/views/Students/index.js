import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import Modal from 'react-modal';
import axios from "axios";
import './style.css'


const Students = () => {

    const [students, setStudents] = useState([])
    const [showModal, setShowModal] = useState(false);
    const {register, handleSubmit, formState:{errors}, reset} = useForm()


    const closeModal = () => {
        setShowModal(false)
    }

    const sendData = (data) => {
        axios.post('https://613b6b32110e000017a455f9.mockapi.io/api/students' ,data)
            .then(({data:student}) => {
                setStudents([...students, student])
                setShowModal(false)
                reset()
            })
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
            .then(({data}) => setStudents(data))
    }, [])

    return (
        <div className="container">
            <table className="table my-4">
                <thead>
                <tr>
                    <th>№</th>
                    <th scope="col">Имя:</th>
                    <th scope="col">Номер телефона:</th>
                    <th scope="col">Сумма контракта:</th>
                    <th scope="col">Оплатил:</th>
                    <th scope="col">Ноутбук:</th>
                    <th scope="col">Группа:</th>
                    <th scope="col">Статус:</th>
                    <th scope="col">Комментарий:</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((el, idx) =>
                        <tr>
                            <td>{idx + 1}</td>
                            <td>{el.name}</td>
                            <td>{el.phone}</td>
                            <td>{el.sum} $</td>
                            <td>{el.paid}</td>
                            <td>{el.notebook}</td>
                            <td>{el.group}</td>
                            <td className='status'>{el.status}</td>
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
                            <label htmlFor='name'><b>Имя</b></label>
                            <input className={"w-100 border border-dark"} type="text" id="name" {...register("name" , {required: true})}/>
                            {errors.name && <div className="error-color">Обязательное поле ⚠</div>}
                        </div>
                        <div>
                            <label htmlFor='phone'><b>Телефон</b></label>
                            <input className={"w-100 border border-dark"} type="text" id="phone" {...register("phone", {required: true})}/>
                            {errors.phone && <div className="error-color">Обязательное поле ⚠</div>}
                        </div>
                        <div>
                            <label htmlFor='sum'><b>Сумма контракта</b></label>
                            <input className={"w-100 border border-dark"} type="text" id="sum" {...register("sum", {required: true})}/>
                            {errors.sum && <div className="error-color">Обязательное поле ⚠</div>}
                        </div>
                        <div>
                            <label htmlFor='paid'><b>Оплатил</b></label>
                            <input className={"w-100 border border-dark"} type="text" id="paid" {...register("paid", {required: true})}/>
                            {errors.paid && <div className="error-color">Обязательное поле ⚠</div>}
                        </div>
                    </div>
                    <label htmlFor="notebook" className="mt-3"><b>Ноутбук</b></label>
                    <input type="text" className="notebook w-100 border border-dark" id="notebook" {...register("notebook", {required: true})}/>
                    {errors.notebook && <div className="error-color">Обязательное поле ⚠</div>}
                    <div>
                        <label htmlFor="group"><b>Выбирите группу</b></label>
                        <select {...register('group', {required: true})} className="form-select border border-dark" aria-label="Default select example" >
                            <option selected>Выберите группу</option>
                            <option value="1">Утренный</option>
                            <option value="2">Вечерный</option>
                        </select>
                        {/*{errors.group && <div className="error-color">Обязательное поле !</div>}*/}
                        <label htmlFor='status'><b>Выбирите статус</b></label>
                        <select {...register('status', {required: true})} className="form-select border border-dark" aria-label="Default select example">
                            <option selected>Выберите статус</option>
                            <option value="actions" >actions</option>
                        </select>
                        {/*{errors.status && <div className="error-color">Обязательное поле !</div>}*/}
                    </div>
                    <div className="form-floating">
                        <textarea {...register('comment', {required:true})} className="form-control mt-3 border border-dark" id="floatingTextarea"/>
                        <label htmlFor="floatingTextarea"><b>Комментарий...</b></label>
                    </div>
                    <button className="d-block ms-auto btn btn-secondary mt-3">Добавить</button>
                </form>
            </Modal>
        </div>
    );
};

export default Students;