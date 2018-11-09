import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = (props)=> {
    let authKey = localStorage.getItem('86cd79943901');
    let linkTo = (authKey) ? '/admin' : '/';
    return (
        <nav className="navbar">
            <Link to= {linkTo}><div className="navbar-title">{props.title}</div></Link>
        </nav>
    );
};
