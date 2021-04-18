import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDelete, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const MangeServiceDetails = (services) => {
    const {name,price,description,imageURL,_id} = services.service;
    console.log(services);

    const deleteProduct = (id) =>{
        fetch(`http://localhost:5055/delete/${_id}`, {
            method: 'DELETE'
        })
        .then (res => res.json())
        .then (result =>{
            console.log('deleted');
        })
     }
    return (
        
        <div className="col-md-4 text-center mt-5">

            <img style={{height:'50px'}} src={imageURL} alt=""/>
            <h5 className="mt-5" style={{fontSize: '16px'}}>{name}</h5>
            <p className=" mt-4" style={{fontSize: '12px'}} className="text-secondary">{description}</p>
            <h3>{price}</h3>
            <button className="btn btn-brand text-white"style={{cursor: 'pointer'}} onClick={()=>deleteProduct(_id)}><FontAwesomeIcon icon={faTrashAlt} /></button>

        </div>
    );
};

export default MangeServiceDetails;