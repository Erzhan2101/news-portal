import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";
import "./style.css"
import Spinner from "../../components/Spiner";
import BtnUp from "../../components/ScrolUp";

const NewsPage = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        axios.get("https://613b6b32110e000017a455f9.mockapi.io/api/news")
            .then(({data}) => {
                setNews(data)
                setIsLoading(false)
        })
    }, [])

    if(isLoading){
       return <Spinner />
    }
    return (
        <div className="page container">
            {
                news.map(el =>
                        <div className="newsPage" >
                            <img className="img-page" src={el.image} alt=""/>
                            <div>
                                <h3 className="newsPage-title">{el.title}</h3>
                                <Link to={`/news-info/${el.id}`}>
                                    <button className="newsPage-btn">Читать статью...</button>
                                </Link>
                            </div>
                        </div>
                )
            }
            <BtnUp/>
        </div>
    );
};

export default NewsPage;