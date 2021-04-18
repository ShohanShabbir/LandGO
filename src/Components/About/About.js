import React from 'react';
import about from '../../images/About.jpg';
import plant from '../../images/plant.png';
import seed from '../../images/seed.png';
import grass from '../../images/grass.png';
import lawn from '../../images/lawn.png';
import './About.css';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

const About = () => {
    return (
        <section className="container mt-5 pt-3">
           <div className="row">
               <Bounce left><div className="col-md-6 mt-5">
                <img style={{height: '650px'}} className="img-fluid" src={about} alt=""/>
               </div></Bounce>
               <Bounce right>
               <div  className="col-md-6 about">
                    <h2>Transforming your <br/> outdoor space</h2>
                    <h6>Everything your landscape company should be</h6>
                    <div className="row mt-5 pt-3">
                        <div className="col-md-6">
                            <img src={plant} alt=""/>
                            <h4>LandGo  Design Service</h4>
                        </div>
                        <div className="col-md-6">
                            <img src={seed} alt=""/>
                            <h4>Shrub, Tree and Flower Planting Services</h4>
                        </div>
                        
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <img src={grass} alt=""/>
                            <h4>LandGo  Installation and Maintenance</h4>
                        </div>
                        <div className="col-md-6">
                            <img src={lawn} alt=""/>
                            <h4>Lawn Mowing and Maintenance</h4>
                        </div>
                        
                    </div>
               </div>
               </Bounce>
            </div> 

        </section>
    );
};

export default About;