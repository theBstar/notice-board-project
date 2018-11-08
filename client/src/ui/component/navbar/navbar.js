import React from 'react';
import './navbar.css';

export const Navbar = (props)=> {
    return (
        <nav className="navbar">
            <div className="navbar-title">{props.title}</div>
        </nav>
    );
};
