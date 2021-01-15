// import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Infinite = (page, url) => {
    console.log(page, url);
    console.log(url + page);

    async function axiosData(page, url){
        await axios
        .get(url + page)
        .then(( res ) => {
            console.log( res );
            // setMovies( res.data.data.movies );
        })
    }
    axiosData();
}

export default Infinite;