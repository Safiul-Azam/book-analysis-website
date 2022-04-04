import React from 'react';

const AllReview = (props) => {
    const {name, reviews, rating} = props.review
    return (
        <div>
            <div className='review-info'>
            <h2>{name}</h2>
            <p>{reviews}</p>
            <h4>rating :{rating}</h4>
        </div>
        </div>
    );
};

export default AllReview;