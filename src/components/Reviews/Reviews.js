import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h2>review: {reviews.length}</h2>
            {
                reviews.map(review => <Review review={review}></Review>)
            }

        </div>
    );
};

export default Reviews;