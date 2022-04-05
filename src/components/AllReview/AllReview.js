import React from 'react';

const AllReview = (props) => {
    const {name, reviews, rating,picture} = props.review
    return (
        <div className='review-info'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>{reviews}</p>
            <h4>Rating : {rating}</h4>
        </div>
    );
};

export default AllReview;