import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">GenZed</h1>
            <nav className="nav-links">
                <NavLink to="/" className="nav-link" activeClassName="active" end>Home</NavLink>
                <NavLink to="/blog" className="nav-link" activeClassName="active">Blog</NavLink>
                <NavLink to="/hackathons" className="nav-link" activeClassName="active">Hackathons</NavLink>
                <NavLink to="/community" className="nav-link" activeClassName="active">Community</NavLink>
            </nav>
        </header>
    );
};

export default Header;
