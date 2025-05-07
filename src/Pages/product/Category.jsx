import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../Redux/api/productApi";

import CategoryCard from "./CategoryCard";

const Category = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetAllProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  const products = data?.data || [];
  const currentProduct = products.find((item) => item.id === id);

  if (!currentProduct) return <p>Product not found</p>;

  // Filter related products by same categoryId, excluding the current product
  const relatedProducts = products.filter(
    (item) => item.categoryId === currentProduct.categoryId && item.id !== id
  );

  return (
    <div className="text-center space-y-5">
      <h1 className="bg-[#d7e4c8] mb-5 font-semibold text-xl inline-block rounded text-[#749B3F] px-2">
        Our Products
      </h1>
      <h1 className="font-bold text-4xl md:text-4xl">Related products</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {relatedProducts.map((product) => (
          <CategoryCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
