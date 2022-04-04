import React from 'react';

const Review = ({review}) => {
    const {name, reviews, rating} = review
    return (
        <div>
            <h2>{name}</h2>
            <h2>{reviews}</h2>
            <h2>rating :{rating}</h2>
        </div>
    );
};

export default Review;