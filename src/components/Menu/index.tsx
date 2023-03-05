import React from "react";
import {Link} from 'react-router-dom';
import './style.css';
export const Menu = () => {
    return (
    <div>
        <nav className="menu">
            <ul className="ul">
                <li>
                    <Link to="/" state={'This is state from Home'}>Home</Link>
                </li>
                <li>
                    <Link to="/about" >About</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/posts/10">Post 10</Link>
                </li>
                <li>
                    <Link to="/redirect">Redirect</Link>
                </li>
            </ul>
        </nav>
    </div>
    );
}