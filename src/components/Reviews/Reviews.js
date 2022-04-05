import React  from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import AllReview from '../AllReview/AllReview';

import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    const navigate = useNavigate()
    const handleToHome = () => {
        navigate('/home')
    }
    return (
        <div>
             <h2>রিভিউ এবং রেটিং - বেলা ফুরাবার আগে</h2>
           <div className='reviews-container'>
           {
               reviews.map(review => <AllReview review={review}></AllReview>)
            }
           </div>
            <button onClick={handleToHome} className='see-btn'>go to home</button>
            
        </div>
    );
};

export default Reviews;