import React  from 'react';

import useReviews from '../../hooks/useReviews';
import AllReview from '../AllReview/AllReview';

import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div>
             <h2>রিভিউ এবং রেটিং - বেলা ফুরাবার আগে</h2>
           <div className='reviews-container'>
           {
               reviews.map(review => <AllReview review={review}></AllReview>)
            }
           </div>
            
            
        </div>
    );
};

export default Reviews;