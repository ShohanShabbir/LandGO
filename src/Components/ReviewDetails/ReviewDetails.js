import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewDetails = (reviews) => {

    const {name, description,email,imageURL} = reviews.review;
    console.log(reviews);
    return (
        <div className="col-md-4 text-center mt-5">
            <img src={imageURL} alt=""/>
            <h3 className="mt-5" style={{fontSize: '16px', textTransform:'uppercase'}}>{name}</h3>
            <h5 className="mt-3" style={{fontSize: '13px'}}>{email}</h5>

            <p className=" mt-4" style={{fontSize: '12px'}} className="text-secondary">{description}</p>
            <small><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></small>
            
            
        </div>
    );
};

export default ReviewDetails;