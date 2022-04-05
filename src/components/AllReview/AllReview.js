import React from 'react';

const AllReview = (props) => {
    const {name, reviews, rating} = props.review
    return (
        <div className='review-info'>
            <h2>{name}</h2>
            <p>{reviews}</p>
            <h4>rating :{rating}</h4>
        </div>
    );
};

export default AllReview;