import React from 'react';
import plant from '../../images/plant.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './ServiceDetails.css';
import HeadShake from 'react-reveal/HeadShake';
import Zoom from 'react-reveal/Zoom';



const ServiceDetails = (services) => {
    const {name,price,description,imageURl} = services.service;
    console.log(services);
    
   const handleProduct= () =>{

    const cardData = {
        name: services.service.name,
        price: services.service.price,
        imageURL: services.service.imageURL
        
    };
        const eventData ={ ...cardData}
        const url = `https://damp-hollows-31189.herokuapp.com/addOrder`;
        console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(eventData)
        })
        .then (res => console.log('server', res))
    }
    return (
        <div className="col-md-4 text-center mt-5">
            <HeadShake>
            <div className="inner"><img style={{height:'50px'}} src={services.service.imageURL} alt=""/></div>
            </HeadShake>
            <h5 className="mt-5" style={{fontSize: '16px'}}>{name}</h5>
            <p className=" mt-4" style={{fontSize: '12px'}} className="text-secondary">{description}</p>
            <h3>{price}</h3>
            <Zoom><button className="btn btn-brand text-white"style={{cursor: 'pointer'}} onClick={handleProduct}><FontAwesomeIcon icon={faCartPlus} /></button></Zoom>
        </div>
    );
};

export default ServiceDetails;