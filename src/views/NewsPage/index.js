import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from "axios";
import "./style.css"

const NewsPage = () => {
    const [news, setNews] = useState([])
    const params = useParams()

    useEffect(() => {
        axios.get("https://613b6b32110e000017a455f9.mockapi.io/api/news")
            .then(({data}) => setNews(data))
    }, [])

    return (
        <div className="page container">
            {
                news.map(el =>
                        <Link className="box" to={`/news-info/${el.id}`}>
                            <img className="img-page" src={el.image} alt=""/>
                            <h3>{el.title}</h3>
                        </Link>
                )
            }
        </div>
    );
};

export default NewsPage;