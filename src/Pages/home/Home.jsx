import React from "react";
import "../Style/Style.css";
import download from "../../assets/Download App_.png";
import fresh from "../../assets/Special Offer .jpg";
import clip from "../../assets/Clip path group.png";

const Home = () => {
  return (
    <div
      name="home" id="home"
      className="max-w-full min-h-screen  bg-cover bg-center responsive-hero "
    >
      <div className="flex max-w-[1200px] mx-auto">
        <div className="md:w-1/2 m-2 space-y-5 mt-20 md:mt-32">
          <h1 className="bg-[#d7e4c8] mb-5 font-semibold text-xl inline-block rounded text-[#749B3F]  px-2">
            Welcome to Fresh Harvest
          </h1>
          <h1 className="font-bold max-w-[600px]  text-4xl md:text-6xl">
            Fresh Fruits and Vegetables
          </h1>
          <h1 className="font-medium max-w-[600px]">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables
          </h1>
          <button className="btn btn-primary rounded-xl text-white border-0 px-10 bg-[#FF6A1A]">
            Shop Now
          </button>
          <div>
            <div className="md:relative  md:h-[200px] ">
              <img
                className=" hidden md:block md:absolute  left-35"
                src={clip}
                alt=" "
              />
              <img
                className="w-52 md:w-80  md:absolute left-50 top-16"
                src={fresh}
                alt=""
              />
            </div>
          </div>
          <img className='' src={download} alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
