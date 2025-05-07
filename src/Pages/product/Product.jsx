import React, { useState } from "react";
import {
  useGetCategoriesQuery,
  useGetAllProductsQuery,
} from "../../Redux/api/productApi";
import ProductCard from "./ProductCard";

const ProductTabs = ({ categories, selectedId, onSelectCategory }) => (
  <div className="flex gap-4 justify-center my-8 flex-wrap">
    <button
      onClick={() => onSelectCategory("All")}
      className={`px-5 py-2 rounded border font-medium transition-all duration-200 ${
        selectedId === "All"
          ? "bg-[#749B3F] text-white"
          : "bg-gray-100 text-gray-800 hover:bg-green-100"
      }`}
    >
      All
    </button>
    {categories.map((cat) => (
      <button
        key={cat.id}
        onClick={() => onSelectCategory(cat.id)}
        className={`px-5 py-2 rounded border font-medium transition-all duration-200 ${
          selectedId === cat.id
            ? "bg-[#749B3F] text-white"
            : "bg-gray-100 text-gray-800 hover:bg-green-100"
        }`}
      >
        {cat.categoryName}
      </button>
    ))}
  </div>
);

const Product = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState("All");

  // Fetch categories
  const { data: categoriesResponse, isLoading: loadingCategories } =
    useGetCategoriesQuery();

  // Fetch all products
  const { data: allProductsResponse, isLoading: loadingAll } =
    useGetAllProductsQuery();

  const categories = categoriesResponse?.data || [];
  const allProducts = allProductsResponse?.data || [];

  const isLoading = loadingCategories || loadingAll;

  // Filter products by category if a category is selected
  const productsToDisplay =
    selectedCategoryId === "All"
      ? allProducts
      : allProducts.filter(
          (product) => product.categoryId === selectedCategoryId
        );

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div id="shop" name="shop" className="min-h-screen mt-10">
      <div className="text-center space-y-7">
        <h1 className="bg-[#d7e4c8] mb-5 font-semibold text-xl inline-block rounded text-[#749B3F] px-2">
          Our Products
        </h1>
        <h1 className="font-bold text-4xl md:text-6xl">Our Fresh Products</h1>
        <p>
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
      </div>

      {/* Category Buttons */}
      <ProductTabs
        categories={categories}
        selectedId={selectedCategoryId}
        onSelectCategory={setSelectedCategoryId}
      />

      {/* Products Display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {productsToDisplay.length > 0 ? (
          productsToDisplay.map((product) => (<ProductCard key={product.id} product={product}></ProductCard>
            
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
