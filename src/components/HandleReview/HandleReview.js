import React from 'react';
import { useNavigate } from 'react-router-dom';

const HandleReview = () => {
    const navigate = useNavigate()
    const handleReview = () => {
        navigate(`/reviews`)
    }
    return (
        <div>
            <button onClick={handleReview} className='see-btn'>See all reviews</button>
        </div>
    );
};

export default HandleReview;