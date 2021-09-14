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
                <img className="newsInfo-img" src={infoCar.image} alt=""/>
                <div>
                    <h2 className="newsInfo-title">{infoCar.title}</h2>
                    <p className="description">{infoCar.description}</p>
                    <p className="newsInfo-author">Автор: {infoCar.author}<span>{infoCar.date}</span></p>
                </div>
            </div>
            <h3 className="comment">Комментарии</h3>
            <h4 className="newsInfo-comment">Гость: Олег - <span>"Машина просто огонь &#128293;&#128293;&#128293;"  </span> <span>  12.03.2021</span> </h4>
            <textarea className="input-comment" rows={7} cols={163} placeholder="Комментарий..."/>
            <button className="newsInfoBtn">Отправить</button>
        </div>

    );
};

export default NewsInfo;