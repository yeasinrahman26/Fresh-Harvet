import React from 'react';
import Home from '../Pages/home/Home';
import Product from '../Pages/product/Product';
import Blog from '../Pages/blog/Blog';
import Testimonial from "../Pages/testimonial/Testimonial"
import About from '../Pages/About/About'
import Offer from '../Pages/offer/Offer'

const HomeLayout = () => {
    return (
      <div>
        <div className="relative">
          <div className="max-w-[1440px] mx-auto">
            <Home></Home>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto">
          <Product></Product>
          <About></About>
        </div>
        <div className="max-w-[1440px] mx-auto">
            <Offer></Offer>
        </div>
        <div className="max-w-[1200px] mx-auto">
         <Testimonial></Testimonial>
         <Blog></Blog>
        </div>
      </div>
    );
};

export default HomeLayout;