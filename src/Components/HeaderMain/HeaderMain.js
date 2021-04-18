import React from 'react';
import garden from '../../images/garden.jpg';
import garden1 from '../../images/garden1.jpg';
import garden2 from '../../images/garden2.jpg';
import './HeaderMain.css';
import Pulse from 'react-reveal/Pulse';


const HeaderMain = () => {
    return (
        <section className=" main">
          <Pulse><h1 style={{ textAlign: 'left', marginLeft: '150px' }} className="text-brand mt-5">Landscapes For Living</h1></Pulse>
            <p style={{ textAlign: 'left', marginLeft: '150px' }}>From planting a tree to create a patio we can help </p>
            <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade mt-5" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style={{height:'400px'}} src={garden} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img style={{height:'400px'}} src={garden1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img style={{height:'400px'}} src={garden2} class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;