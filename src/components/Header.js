import React from 'react';
import { Link } from 'react-router-dom'
import './../static/scss/Header.scss';

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/movie/1">Movie</Link></li>
                <li><Link to="/todoList">TodoList</Link></li>
            </ul>
        </div>
    )
}

export default Header;