import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <div className='logo'>
            <h2><span className='color'>আমার </span>বই ঘর</h2>
            </div>
            <nav className='menu-bar'>
            <Link to='/home'>Home</Link>
            <Link to='/reviews'>Reviews</Link>
            <Link to='/dashboard'>DashBoard</Link>
            <Link to='/questionAndAnswer'>Question  Answer</Link>
            </nav>
        </div>
    );
};

export default Header;