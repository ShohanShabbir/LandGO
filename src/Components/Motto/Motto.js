import React from 'react';
import './Motto.css';
import Bounce from 'react-reveal/Bounce';

const Motto = () => {
    return (
        
            <div className="text-center mt-5 container pt-5">
              <Bounce top><h2 style={{ fontFamily: 'Damion', fontSize: '50px' }} className="my-5">We can create an environment that’s <br /> beyond your imagination</h2></Bounce>  
                <p>With our consultative approach, landscape design expertise and a good old-fashioned love for the work, you’ll have a landscape of special beauty – a beauty that reveals itself time after time. After more than 30 years, the satisfaction for us in seeing your ideal outdoor space come together never wanes.</p>
                <a className="mt-5 pt-5 motto">Our Philosophy</a>
            </div>
        
    );
};

export default Motto;