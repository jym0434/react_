import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header.js';
import About from './components/About.js';
import Movie from './components/Movie.js';
import './static/scss/common.scss'

function App() {
    return (
        <div>
            <Header />
            <Route path="/" exact component={ About } />
            <Route path="/movie" component={ Movie } />
        </div>
    );
}

export default App;
