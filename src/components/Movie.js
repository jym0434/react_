import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../static/scss/Movie.scss'

const Movie = ({match}) => {
    let [page, setPage] = useState(parseInt(match.params.page));
    // let [totalCnt, setTotalCnt] = useState();
    let [movies, setMovies] = useState([]);
    let [url, setUrl] = useState('https://yts.mx/api/v2/list_movies.json?limit=20&order_by=asc&page=');

    const axiosInitMovieList = async () => {
        await axios
        .get(url + match.params.page)
        .then((res) => {
            setMovies( res.data.data.movies );
            setPage( page + 1 );
        })
    }
    useEffect(() => {
        axiosInitMovieList();
    }, [])


    const axiosMoreMovieList = async () => {
        await axios
            .get(url + page)
            .then((res) => {
                setMovies( movies.concat(res.data.data.movies) )
            })
    };

    const moveScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight) {
            setPage(page + 1);
            axiosMoreMovieList();
        }
    };

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