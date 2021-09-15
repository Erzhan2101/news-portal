// import React, {useEffect, useState} from 'react';
import "./style.css"
// import axios from "axios";
// import Spinner from "../../components/Spiner";
// import NotFount from "../NotFount";
// import Carousel from 'react-bootstrap/Carousel'
import {Link} from "react-router-dom";


const Hero = () => {
    // const [hero, setHero] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    // const [notFound, setNotFound] = useState(false)
    //
    // useEffect(() => {
    //     axios("https://613b6b32110e000017a455f9.mockapi.io/api/news")
    //         .then(({data}) => setHero(data))
    //         .catch(() => setNotFound(true))
    //         .finally(() => setIsLoading(false))
    // }, [])
    //
    //
    // if (isLoading) {return <Spinner/>}
    // if (notFound) {return <NotFount/>}
    return (
        // <Carousel fade
        //           className="my-md-3"
        // >
        //     {
        //         hero.map(item =>
        //             <Carousel.Item>
        //                 <Link to={`/news-details/${item.id}`}>
        //                     <img
        //                         className="d-block"
        //                         src={item.image}
        //                         alt={item.title}
        //                         style={{height: "640px", objectFit: "cover"}}
        //                     />
        //                     <Carousel.Caption  style={
        //                         {
        //                             color: "#fff",
        //                             backgroundColor: "#808080b3"
        //                         }
        //                     }>
        //                         <h3>{item.title}</h3>
        //                     </Carousel.Caption>
        //                 </Link>
        //             </Carousel.Item>
        //         )
        //     }
        //
        //
        // </Carousel>

        // <Carousel fade>
        //     {
        //         hero.map(el =>
        //             <Carousel.Item>
        //                 <img className="d-block" alt="" src={el.image} style={{height: "640px", objectFit: "cover"}}/>
        //                 <Carousel.Caption  style={{color: "#fff", backgroundColor: "#808080b3"}}>
        //                     <h3>{el.title}</h3>
        //                 </Carousel.Caption>
        //             </Carousel.Item>
        //         )
        //     }
        // </Carousel>

        <div className="hero">
                <h1 className="hero-title">News portal V8</h1>
                <Link to='/sing-in'>
                    <button className="hero-btn">Зарегистироваться</button>
                </Link>
        </div>
    );
};

export default Hero;