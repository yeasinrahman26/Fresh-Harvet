import img from '../../assets/Image (1).png'

const Testimonial = () => {
  return (
    <div className="space-y-7 text-center ">
      <div>
        <h1 className="bg-[#d7e4c8] mb-5 font-semibold text-xl  inline-block rounded text-[#749B3F]  px-2">
          Testimonial
        </h1>
        <h1 className="font-bold  text-4xl md:text-6xl">
          What Our Customers Say
        </h1>
        <h1 className=" ">
          Don't just take our word for it—here's what some of our customers have
          to <br /> say about their experience with Fresh Harvest
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className=" md:w-1/3">
          <img src={img} alt="" />
        </div>
        <div className="  bg-[#F4F6F6] m-4 shadow-xl text-xl  rounded-2xl md:w-2/3 p-10">
          <h1 className="text-start">
            "I absolutely love Fresh Harvest! The quality of their produce is
            outstanding. It's always fresh, flavorful, and delicious. The
            convenience of ordering online and having it delivered to my
            doorstep saves me so much time. Fresh Harvest has become my go-to
            for all my fruit and vegetable needs.
          </h1>
          <h1 className="text-start">
            <span className="font-extrabold">Jane Doe -</span> Professional chef
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-9xl pb-5 text-[#D9D9D9]">
          <span className="text-[#749B3F]">.</span>..
        </h1>
      </div>
    </div>
  );
};

export default Testimonial;
