import React, { useEffect, useState } from 'react';
import arrow from '../../images/right-arrow.png';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Reviews.css';
import Bounce from 'react-reveal/Bounce';


const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Bounce left>
            <section className="reviews">
                <div className="text-center mt-5 pt-3">
                    <h5 className=" mt-5" style={{ textTransform: 'uppercase' }}>Reviews</h5>
                    <h2 className=" mt-3" style={{ fontFamily: 'Damion', letterSpacing: '2px', fontSize: '35px' }}>What Our Customer Say's</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="review w-75 row">
                        {
                            reviews.map(review => <ReviewDetails review={review} key={review.name}></ReviewDetails>)

                        }

                    </div>

                </div>
                <button className="btn  mt-5">View More </button> < img className="ml-4" style={{ height: '20px', marginTop: '50px' }} src={arrow} />
            </section>
        </Bounce>
    );
};

export default Reviews;