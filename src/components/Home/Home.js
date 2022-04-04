import React from 'react';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='book-container'>
            <div className='book-info'>
                <h2>বেলা ফুরাবার আগে…</h2>
                <p>নিজেকে আবিষ্কারের একটি আয়না। যে ভুল আর ভ্রান্তির মোহে, অন্ধকারের যে অলিগলিতে আমাদের এতোদিনকার পদচারণা, তার বিপরীতে জীবনের নতুন অধ্যায়ে নিজের নাম লিখিয়ে নিতে একটি সহায়ক গ্রন্থ এই বই, ইন শা আল্লাহ।</p>
            </div>
            <div className='book-img'>
            <img src="bela.png" alt="" />
            </div>
            </div>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;