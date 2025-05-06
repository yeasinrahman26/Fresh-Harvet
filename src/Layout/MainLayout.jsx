import React from "react";


import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Home from "../Pages/home/Home";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[1200px]">
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <div className="max-w-[1440px] mx-auto">
        <Footer></Footer>
      </div>
    </div>
  );
  
};

export default MainLayout;
