import React, { useEffect, useState } from 'react';
import plant from '../../images/plant.png';
import seed from '../../images/seed.png';
import lawn from '../../images/lawn.png';
import arrow from '../../images/right-arrow.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://damp-hollows-31189.herokuapp.com/services')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    const serviceData = [
        {
            title: 'Garden Design Service',
            img: plant,
            description: 'Design Your Valuable Garden With Us',
            price: '$230'

        },
        {
            title: 'Tree Plantation Service',
            img: seed,
            description: 'Design Your Valuable Garden With Us',
            price: '$330'

        },
        {
            title: 'Lawn Maintenance Service',
            img: lawn,
            description: 'Design Your Valuable Garden With Us',
            price: '$400'

        }
    ]
    return (
        <Bounce left>
            <section>
                <div className="text-center mt-5 pt-3">
                    <h5 className=" mt-5" style={{ textTransform: 'uppercase' }}>Our Services</h5>
                    <Bounce left> <h2 className=" mt-3" style={{ fontFamily: 'Damion', letterSpacing: '2px', fontSize: '35px' }}>Services We Provide</h2></Bounce>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="w-75 row">
                        {
                            services.map(service => <ServiceDetails service={service}></ServiceDetails>)

                        }

                    </div>

                </div>
                <Zoom><button className="btn  mt-5">View More </button></Zoom>
            </section>
        </Bounce>
    );
};

export default Services;