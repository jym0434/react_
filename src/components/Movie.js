import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Infinite from './Infinite';
import './../static/scss/Movie.scss'

const Movie = () => {
    let [page, setPage] = useState(1);
    let [movies, setMovies] = useState([]);
    let [url, setUrl] = useState('https://yts.mx/api/v2/list_movies.json?limit=20&order_by=asc&page=');

    // 영화 리스트 불러오는 axios
    useEffect(() =>{
		async function axiosData(page){
            await axios
            .get(url)
            .then(( res ) => {
                setMovies( res.data.data.movies );
            })
        }
        setPage(page + 1);
        axiosData();
    },[]);

    const moveScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight) {
            setPage(page + 1);
            console.log(page);
            setUrl('https://yts.mx/api/v2/list_movies.json?limit=20&order_by=asc&page=' + page);
            Infinite(page, url);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', moveScroll);
        return () => {
            window.removeEventListener('scroll', moveScroll);
        }
    })

    return (
        <div className="movie_wrap">
            {
                movies.length !== 0 ?
                movies.map((value, index) => {
                    return (
                        <div key={ index }>
                            <p className="title">{ value.title }</p>
                            <div className="imageBg"></div>
                            <img src={ value.medium_cover_image } alt="" />
                        </div>
                    )
                }) : <div></div>
            }
        </div>
    );
}

export default Movie;