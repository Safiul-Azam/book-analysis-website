import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const {name, reviews, rating,picture} = review
    return (
        <div className='review-info'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>{reviews}</p>
            <h4>Rating : {rating}</h4>
        </div>
    );
};

export default Review;