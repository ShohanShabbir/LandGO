import React from 'react';
import garden from '../../images/About.jpg';
import './Statement.css';
import Bounce from 'react-reveal/Bounce';

const Statement = () => {
    return (
        <div>
            <div className="img mt-5 pt-3">
                <img style={{ height: '400px' }} className="w-100" src={garden} alt="" />
                <div className="text">
                  <Bounce top>  <h6>To ensure consistent quality for all our projects, we have developed a tried and true 10-step design process. Whether you’re looking for a large backyard restoration or a small and welcoming front walkway, our design process steps will ensure your satisfaction.</h6></Bounce>
                    <h5 >LanDGo Landscape</h5>
                </div>
            </div>

        </div>
    );
};

export default Statement;