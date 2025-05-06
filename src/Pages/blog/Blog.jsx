import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from '../../assets/image 2@2x.png'
import img2 from '../../assets/image 3.png'
import img3 from '../../assets/image 4.png'

const Blog = () => {
  return (
    <div name="blog" id="blog" className=" my-30 m-2">
      <div className="text-center space-y-7 ">
        <h1 className="bg-[#d7e4c8] mb-5 font-semibold text-xl  inline-block rounded text-[#749B3F]  px-2">
          Our Blog
        </h1>
        <h1 className="font-bold  text-4xl md:text-6xl">Fresh Harvest Blog</h1>
        <h1 className=" ">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things{" "}
          <br />
          related to fresh produce, healthy eating, and culinary inspiration.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5">
        {/* card 1 */}
        <div className="card bg-base-100 ">
          <figure>
            <img src={img1} alt="img" />
          </figure>
          <div className="">
            <p className="text-[#4A4A52]">May 23, 2024</p>
            <h2 className="card-title">
              Exploring Seasonal Delights: A Guide to What's Fresh Right Now
            </h2>
            <div className="card-actions justify-start">
              <button className="btn btn-link p-0 text-xl text-[#FF6A1A]">
                Read More
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="card bg-base-100 ">
          <figure>
            <img src={img2} alt="img" />
          </figure>
          <div className="">
            <p className="text-[#4A4A52]">May 23, 2024</p>
            <h2 className="card-title">
              Mastering Salad Creations: Tips and Tricks for Building Delicious
              and Nutritious Salads"
            </h2>
            <div className="card-actions justify-start">
              <button className="btn btn-link p-0 text-xl text-[#FF6A1A]">
                Read More
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="card bg-base-100 ">
          <figure>
            <img src={img3} alt="img" />
          </figure>
          <div className="">
            <p className="text-[#4A4A52]">May 23, 2024</p>
            <h2 className="card-title">
              The Art of Meal Prepping: How to Save Time and Eat Healthy
              Throughout the Week
            </h2>
            <div className="card-actions justify-start">
              <button className="btn btn-link p-0 text-xl text-[#FF6A1A]">
                Read More
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
