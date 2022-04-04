import React from 'react';
import useReviews from '../../hooks/useReviews';
import HandleReview from '../HandleReview/HandleReview';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div>
            <div className='book-container'>
            <div className='book-info'>
                <h2 className='book-title'>বেলা ফুরাবার আগে…</h2>
                <p>নিজেকে আবিষ্কারের একটি আয়না। যে ভুল আর ভ্রান্তির মোহে, অন্ধকারের যে অলিগলিতে আমাদের এতোদিনকার পদচারণা, তার বিপরীতে জীবনের নতুন অধ্যায়ে নিজের নাম লিখিয়ে নিতে একটি সহায়ক গ্রন্থ এই বই, ইন শা আল্লাহ।</p>
            </div>
            <div className='book-img'>
            <img src="bela.png" alt="" />
            </div>
            </div>
            <h2>রিভিউ এবং রেটিং - বেলা ফুরাবার আগে</h2>
           <div className='reviews-container'>
           {
               reviews.slice(0,3).map(review => <Review review={review}></Review>)
            }
           </div>
           <HandleReview></HandleReview>
        </div>
    );
};

export default Home;