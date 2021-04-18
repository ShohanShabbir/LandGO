import React from 'react';
import wilson from '../../images/Ellipse 1.png';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css';
import Bounce from 'react-reveal/Bounce';

const Blogs = () => {
    const blogData = [
        {
            title: '15 Backyard Landscape Design Ideas for Maximum Privacy',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Wilson Robert',
            authorImg: wilson,
            date: '23 April 2019'
        },
        {
            title: 'Planting for Pollinators: Butterflies and Bees Abound',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Sinthia Smith',
            authorImg: wilson,
            date: '23 April 2019'
        },
        {
            title: '5 Ways Organic Lawn Care Makes You a Better Homeowner',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Johnathon Will',
            authorImg: wilson,
            date: '23 April 2019'
        },
    ]
    return (
      <Bounce right>  <section className="blogs mt-5 pt-3">
            <div className="container">
                <div className="section-header">
                    <h5 style={{textAlign:'left', marginTop:'100px'}} className="text-brand text-uppercase  ">Our Blogs</h5>
                    <h2 style={{textAlign:'left', fontFamily:'Damion', fontSize:'35px'}}>From Our Blog News</h2>
                </div>
                <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title} ></BlogPost>)
                    }
                </div>
            </div>

        </section>
        </Bounce>
    );
};

export default Blogs;