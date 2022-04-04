import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    const navigate = useNavigate()
    const handleReview = () => {
        navigate(`/reviews`)
    }
    return (
        <div>
           <div className='reviews-container'>
           {
                reviews.map(review => <Review review={review}></Review>)
            }
           </div>
        
            <button onClick={handleReview} className='see-btn'>See all reviews</button>
        </div>
    );
};

export default Reviews;