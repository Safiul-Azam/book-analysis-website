import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>this is a header section</h2>
            <Link to='/home'>Home</Link>
            <Link to='/reviews'>Reviews</Link>
            <Link to='/dashboard'>DashBoard</Link>
        </div>
    );
};

export default Header;