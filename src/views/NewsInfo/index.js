import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const NewsInfo = () => {

    const [infoCar, setInfoCar] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://613b6b32110e000017a455f9.mockapi.io/api/news/${id}`)
            .then(({data}) => setInfoCar(data))
    }, [id])

    return (
        <>
            <div>
                <img src={infoCar.image} alt=""/>
                <div>
                    <h4>{infoCar.title}</h4>
                    <p>{infoCar.description}</p>
                    <p>{infoCar.date}</p>
                    <p>{infoCar.author}</p>
                </div>
            </div>
            <h3>Комментарии</h3>
            <h4>Олег <span>12.03.2021</span></h4>
            <p>Машина просто огонь</p>
            <input type="text" placeholder="Комментарий..."/>
            <button>Отправить</button>
        </>

    );
};

export default NewsInfo;