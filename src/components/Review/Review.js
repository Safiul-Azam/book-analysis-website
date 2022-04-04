import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const {name, reviews, rating} = review
    return (
        <div className='review-info'>
            <h2>{name}</h2>
            <p>{reviews}</p>
            <h4>rating :{rating}</h4>
        </div>
    );
};

export default Review;