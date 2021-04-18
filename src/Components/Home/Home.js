import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Motto from '../Motto/Motto';
import Project from '../Project/Project';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Statement from '../Statement/Statement';


const Home = () => {
    return (
        <div>
          <Header></Header>
          <Motto></Motto>
          <About></About>
          <Services></Services>
          <Project></Project>
          <Statement></Statement>
          <Blogs></Blogs>
          <Reviews></Reviews>
          <Contact></Contact>
          <Footer></Footer>  
        </div>
    );
};

export default Home;