import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../Redux/api/productApi";
import { FaHeart } from "react-icons/fa";
import Category from "./category";


import { FaShoppingCart } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetAllProductsQuery();

  if (isLoading) return <div>Loading...</div>;

  const product = data?.data?.find((item) => item.id === id);

  if (!product) return <div>Product not found</div>;
  

  return (
    <div className="max-w-[1200px] mx-auto my-30 ">
      <div className="max-w-7xl mx-auto p-6 mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="border-2 border-gray-200 p-4 rounded-lg">
          <img
            src={product.images[0]}
            alt={product.productName}
            className="w-full h-96 object-center  rounded-md"
          />
          {/* Optional image indicators (dots) */}
          <div className="flex justify-center mt-2 space-x-2">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="w-2 h-2 bg-gray-300 rounded-full" />
            <span className="w-2 h-2 bg-gray-300 rounded-full" />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-5">
          <h1 className="text-4xl font-bold">{product.productName}</h1>

          <div className="flex items-center mt-2 space-x-2 text-[#FFB848] text-xl font-bold">
            <span>★★★★★</span>
            <span className="text-gray-600  text-sm">5.0 (1 review)</span>
          </div>

          <div className="text-3xl text-[#FF6A1A] font-bold mt-4">
            ${product.price}/kg
          </div>
          <div className="text-gray-500 ">{product.description}</div>

          <p className="text-gray-700 mt-4">{product.shortDescription}</p>
          <div className="mt-6 flex items-center gap-4">
            <label className="text-gray-800 font-medium">Quantity</label>
            <div className="flex items-center  rounded px-3 py-1">
              <button className="px-3 text-lg border-2 rounded-l-sm  border-gray-400  border-r-0  font-bold text-gray-600">
                -
              </button>
              <span className="px-4 border-2 border-gray-400 font-bold text-lg ">
                1
              </span>
              <button className="px-3 text-lg border-2  rounded-r-sm border-gray-400  border-l-0 font-bold text-gray-600">
                +
              </button>
            </div>
            <span className="text-gray-600   text-sm">/kg</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-2 rounded border flex items-center gap-4 hover:bg-[#FF6A1A] hover:text-white border-gray-300 text-gray-600 font-medium bg-gray-100">
              <FaHeart />
              Save as favorite
            </button>
            <button className="px-6 py-2 rounded bg-[#FF6A1A] flex hover:bg-white hover:border hover:border-[#FF6A1A] hover:text-[#FF6A1A] items-center gap-4 text-white font-semibold transition">
              <FaShoppingCart /> Add to cart
            </button>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="mt-10">
        <div className="flex gap-4">
          <button className="bg-green-700 text-white px-4 py-1 rounded">
            Description
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-1 rounded">
            Reviews (1)
          </button>
        </div>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg text-gray-800">
          <p className="text-gray-500 ">{product.description}</p>
        </div>
      </div>
      {/* category product */}
      <div className="my-20">
      <Category product={product} ></Category>
      </div>
    </div>
  );
};

export default ProductDetails;
