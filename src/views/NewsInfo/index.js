import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Spinner from "../../components/Spiner";
import './style.css'

const NewsInfo = () => {

    const [infoCar, setInfoCar] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://613b6b32110e000017a455f9.mockapi.io/api/news/${id}`)
            .then(({data}) =>{
                setInfoCar(data)
                setIsLoading(false)
            })

    }, [id])


    if (isLoading) {
        return <Spinner />
    }
    return (
        <div className="newsInfo container">
            <div className="newsInfoCart">
                <img src={infoCar.image} alt=""/>
                <div>
                    <h4>{infoCar.title}</h4>
                    <p className="description">{infoCar.description}</p>
                    <p>{infoCar.author}<span>{infoCar.date}</span></p>
                </div>
            </div>
            <h3 className="comment">Комментарии</h3>
            <h4>Олег <span>12.03.2021</span></h4>
            <p>Машина просто огонь</p>
            <input type="text" placeholder="Комментарий..."/>
            <button>Отправить</button>
        </div>

    );
};

export default NewsInfo;