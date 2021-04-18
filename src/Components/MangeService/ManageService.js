import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MangeServiceDetails from '../ManageServiceDetails/MangeServiceDetails';

const ManageService = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://damp-hollows-31189.herokuapp.com/services')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section>
        <div className="text-center mt-5 pt-3">
            <h5 className=" mt-5" style={{ textTransform: 'uppercase', fontSize:'30px' }}>Services</h5>
            
        </div>
        <div className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    services.map(service => <MangeServiceDetails service={service}></MangeServiceDetails>)
                    
                }
            
            </div>
            
        </div>
          <Link to="/dashboard"><button style={{fontFamily:'Poppins'}} className="btn btn-brand text-white  mt-5"> Back To Dashboard </button></Link>
    </section>
    );
};

export default ManageService;