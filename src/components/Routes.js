import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const About = lazy(() => import('./About'));
const Movie = lazy(() => import('./Movie'));
const TodoList = lazy(() => import('./TodoList'));

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ About } />
                <Route path="/movie/:page" component={ Movie } />
                <Route path="/todoList" component={ TodoList } />
            </Switch>
        </Router>
    )
}

export default Routes;