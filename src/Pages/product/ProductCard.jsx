import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    
    return (
      <Link to={`product/${product.id}`}>
        <div className=" p-4  rounded-2xl shadow-2xl text-center">
          <div className="h-2/3">
            <img
              src={product.images[0]}
              alt={product.productName}
              className="w-full h-48 bg-fill bg-base-300 rounded-md"
            />
          </div>
          <div className="h-1/3">
            <h3 className="font-semibold text-lg ">{product.productName}</h3>
            <span className="block  text-gray-400 ">${product.price}</span>
            <button className="btn btn-block hover:bg-orange-500 hover:text-white">
              Add To Cart
            </button>
          </div>
        </div>
      </Link>
    );
};

export default ProductCard;
// className = "w-full h-48 object-cover rounded-md";
