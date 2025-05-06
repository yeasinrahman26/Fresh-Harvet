import React from 'react';
import img from '../../assets/Image.png'
 
const About = () => {
    return (
      <div
        name="about"
        id="about"
        className="flex flex-col md:flex-row items-center justify-between"
      >
        {/* img */}
        <div className="md:w-1/2">
          <img src={img} alt="" />
        </div>
        {/* about */}
        <div className="md:w-1/2 space-y-5 m-2">
          <h1 className="bg-[#d7e4c8] mb-5 font-semibold text-xl inline-block rounded text-[#749B3F]  px-2">
            About us
          </h1>
          <h1 className="font-bold max-w-[600px]  text-4xl md:text-6xl">
            About Fresh Harvest 
          </h1>
          <h1 className=" max-w-[600px]">
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </h1>
          <button className='btn rounded-sm px-8 text-orange-500 border-1 font-bold border-orange-500'>Read More</button>
        </div>
      </div>
    );
};

export default About;