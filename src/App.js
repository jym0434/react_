import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header.js';
import './static/scss/common.scss'

const About = lazy(() => import('./components/About'));
const Movie = lazy(() => import('./components/Movie'));

function App() {
    return (
        <div>
            <Header />
            <Suspense fallback={ <div class="lazy"> Loading ... </div> }>
                <Route path="/" exact component={ About } />
                <Route path="/movie" component={ Movie } />
            </Suspense>
        </div>
    );
}

export default App;
