import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <div className='logo'>
            <h2><span className='color'>আমার </span>বই ঘর</h2>
            </div>
            <nav className='menu-bar'>
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/reviews'>Reviews</CustomLink>
            <CustomLink to='/dashboard'>DashBoard</CustomLink>
            <CustomLink to='/questionAndAnswer'>Question  Answer</CustomLink>
            </nav>
        </div>
    );
};

export default Header;