import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import AllReview from '../AllReview/AllReview';

const HandleReview = () => {
    const [reviews, setReviews] = useReviews()
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