import React, { Suspense } from 'react';
import Header from './components/Header.js';
import Routes from './components/Routes.js'
import './static/scss/common.scss'

function App() {
    return (
        <div id="root">
            <Header/>
            <Suspense fallback={ <div className="lazy"> Loading ... </div> }>
                <Routes />
            </Suspense>
        </div>
    );
}

export default App;
