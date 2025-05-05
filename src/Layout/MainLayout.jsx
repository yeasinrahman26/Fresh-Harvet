import React from 'react';

import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Home from '../Pages/home/Home';
import Product from '../Pages/product/Product'

const MainLayout = () => {
    return (
      <div>
        <div className="sticky top-0 z-50  ">
          <Navbar></Navbar>
        </div>
        <div className="max-w-[1440px] mx-auto">
        <Home></Home>
        </div>
        <div className="max-w-[1200px] mx-auto">
        <Product></Product>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;