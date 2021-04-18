import React from 'react';
import garden from '../../images/garden.jpg';
import garden1 from '../../images/garden1.jpg';
import garden2 from '../../images/garden2.jpg';
import arrow from '../../images/right-arrow.png';
import './Project.css';
import Zoom from 'react-reveal/Zoom';

const Project = () => {
    return (
        <section className="container  project">
            <div className="row">
                <Zoom top cascade>
                    <div className="col-md-5 project-text">
                        <h2 style={{ fontFamily: 'Damion', fontSize: '35px' }}>Take a look at the <br /> projects we are proud of</h2>
                        <p className="text-secondary mt-5">From how we design to the way we build, our consistently high standards for quality and attention to detail is what sets us apart. Just ask some of our clients!</p>
                        <button className="btn">View More <img className="ml-4" style={{ height: '20px' }} src={arrow} alt="" /></button>
                    </div>
                </Zoom>
                <div className="col-md-7">
                    <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade " data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={garden} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={garden1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={garden2} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Project;