"use client";

import React, { useState } from "react";
import {
  Heart,
  ShoppingCart,
  ChevronDown,
  Search,
  Menu,
  ArrowLeft,
  Filter,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

const CategoryPage = () => {
  const router = useRouter();

  const [selectedColors, setSelectedColors] = useState([
    "Black",
    "Maroon",
    "Blue",
  ]);
  const [selectedDiscount, setSelectedDiscount] = useState("10% and above");
  const [sortBy, setSortBy] = useState("Popularity");
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [activeFilterTab, setActiveFilterTab] = useState("Categories");

  const products = [
    {
      id: 1,
      name: "Saree",
      image: "/best1.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-emerald-800",
    },
    {
      id: 2,
      name: "Saree",
      image: "/best2.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-red-900",
    },
    {
      id: 3,
      name: "Gown",
      image: "/best3.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-orange-200",
    },
    {
      id: 4,
      name: "Skirt",
      image: "/best4.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-gray-200",
    },
    {
      id: 1,
      name: "Saree",
      image: "/best1.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-emerald-800",
    },
    {
      id: 2,
      name: "Saree",
      image: "/best2.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-red-900",
    },
    {
      id: 3,
      name: "Gown",
      image: "/best3.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-orange-200",
    },
    {
      id: 4,
      name: "Skirt",
      image: "/best4.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-gray-200",
    },
    {
      id: 1,
      name: "Saree",
      image: "/best1.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-emerald-800",
    },
    {
      id: 2,
      name: "Saree",
      image: "/best2.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-red-900",
    },
    {
      id: 3,
      name: "Gown",
      image: "/best3.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-orange-200",
    },
    {
      id: 4,
      name: "Skirt",
      image: "/best4.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-gray-200",
    },
    {
      id: 1,
      name: "Saree",
      image: "/best1.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-emerald-800",
    },
    {
      id: 2,
      name: "Saree",
      image: "/best2.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-red-900",
    },
    {
      id: 3,
      name: "Gown",
      image: "/best3.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-orange-200",
    },
    {
      id: 4,
      name: "Skirt",
      image: "/best4.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-gray-200",
    },
    {
      id: 1,
      name: "Saree",
      image: "/best1.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-emerald-800",
    },
    {
      id: 2,
      name: "Saree",
      image: "/best2.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-red-900",
    },
    {
      id: 3,
      name: "Gown",
      image: "/best3.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-orange-200",
    },
    {
      id: 4,
      name: "Skirt",
      image: "/best4.jpg",
      price: 566,
      originalPrice: 699,
      discount: "19% OFF",
      description: "Lorem Ipsum drot thres loportes",
      bgColor: "bg-gray-200",
    },
  ];

  const categories = [
    { name: "Sarees", count: 9567, selected: true },
    { name: "Kurthi Set", count: 300 },
    { name: "Gown", count: 190 },
    { name: "Co-ord Sets", count: 942 },
    { name: "Fabric", count: 202 },
    { name: "Skirts", count: 202 },
  ];

  const colors = [
    { name: "White", count: 34, color: "#FFFFFF", border: true },
    { name: "Black", count: 29, color: "#000000", selected: true },
    { name: "Maroon", count: 17, color: "#800020", selected: true },
    { name: "Green", count: 19, color: "#22C55E" },
    { name: "Red", count: 45, color: "#EF4444" },
    { name: "Yellow", count: 18, color: "#EAB308" },
    { name: "Blue", count: 29, color: "#3B82F6", selected: true },
  ];

  const sortOptions = [
    { label: "Popularity", selected: true },
    { label: "Discount" },
    { label: "Price: Low to High" },
    { label: "Price: High to Low" },
    { label: "Customer Rating" },
  ];

  const handleColorChange = (colorName: string) => {
    if (selectedColors.includes(colorName)) {
      setSelectedColors(selectedColors.filter((color) => color !== colorName));
    } else {
      setSelectedColors([...selectedColors, colorName]);
    }
  };

  {
    /* Filter Modal Component */
  }
  const FilterModal = () => (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
        showFilters ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed inset-y-0 right-0 w-full bg-white flex flex-col transform transition-transform ${
          showFilters ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Filter Header */}
        {/* <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
        <button onClick={() => setShowFilters(false)}>
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h2 className="text-lg font-semibold text-gray-900">CHIHILI</h2>
        <div className="flex items-center space-x-3">
          <button>
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          <button>
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
          <button>
            <ShoppingCart className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div> */}

        {/* Filter Title Bar */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200">
          <h3 className="text-base font-semibold text-gray-900">FILTERS</h3>
          <button className="text-red-600 font-medium text-sm">
            CLEAR ALL
          </button>
        </div>

        {/* Main Content with scroll */}
        <div className="flex flex-1 overflow-hidden">
          {/* Filter Sidebar */}
          <div className="w-35 bg-secondary border-r border-gray-200">
            <div className="py-2">
              {["Categories", "Price", "Color", "Discount Range"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilterTab(tab)}
                  className={`w-full px-4 py-3 text-left text-sm ${
                    activeFilterTab === tab
                      ? "bg-white text-gray-900 border-r-2 border-secondary2 font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Content */}
          <div className="flex-1 bg-white overflow-y-auto p-4">
            {activeFilterTab === "Categories" && (
              <div className="space-y-4">
                {categories.map((category, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                      defaultChecked={category.selected}
                    />
                    <span className="ml-3 text-gray-700 text-sm">
                      {category.name}{" "}
                      <span className="text-gray-400">({category.count})</span>
                    </span>
                  </label>
                ))}
              </div>
            )}

            {activeFilterTab === "Price" && (
              <div>
                <div className="mb-4">
                  <input
                    type="range"
                    min="100"
                    max="50000"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(to right, #ec4899 0%, #ec4899 30%, #e5e7eb 30%, #e5e7eb 100%)",
                    }}
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>₹100</span>
                    <span>₹50,000+</span>
                  </div>
                </div>
              </div>
            )}

            {activeFilterTab === "Color" && (
              <div className="space-y-4">
                {colors.map((color, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                      checked={selectedColors.includes(color.name)}
                      onChange={() => handleColorChange(color.name)}
                    />
                    <div className="ml-3 flex items-center">
                      <div
                        className={`w-4 h-4 rounded-full mr-3 ${
                          color.border ? "border border-gray-300" : ""
                        }`}
                        style={{ backgroundColor: color.color }}
                      />
                      <span className="text-gray-700 text-sm">
                        {color.name}{" "}
                        <span className="text-gray-400">({color.count})</span>
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            )}

            {activeFilterTab === "Discount Range" && (
              <div className="space-y-4">
                {[
                  "10% and above",
                  "20% and above",
                  "30% and above",
                  "40% and above",
                  "50% and above",
                  "60% and above",
                  "70% and above",
                  "80% and above",
                  "90% and above",
                ].map((discount, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="radio"
                      name="discount"
                      className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500"
                      defaultChecked={index === 0}
                    />
                    <span className="ml-3 text-gray-700 text-sm">
                      {discount}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="border-t border-gray-200 p-1 flex space-x-3 sticky bottom-0 bg-white">
          <button
            onClick={() => setShowFilters(false)}
            className="flex-1 py-3 px-4 font-medium text-gray-700 text-xs sm:text-sm"
          >
            CLOSE
          </button>
          <span className="border-l border-zinc-300"></span>
          <button
            onClick={() => setShowFilters(false)}
            className="flex-1 py-3 px-4 text-primary1 rounded font-medium text-xs sm:text-sm"
          >
            APPLY
          </button>
        </div>
      </div>
    </div>
  );

  // Sort Modal Component
  const SortModal = () => (
    <div
      className={`fixed inset-0 bg-black/10 bg-opacity-50 z-50 transition-opacity ${
        showSort ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-lg transform transition-transform ${
          showSort ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="pt-4">
          <div className="mb-4 border-b border-secondary1 pb-3">
            <div className="flex items-center justify-between px-5">
              <h3 className="text-lg font-semibold ">SORT BY</h3>
              <button onClick={() => setShowSort(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="space-y-3 mb-5">
            {sortOptions.map((option, index) => (
              <label key={index} className="flex items-center py-2 px-5 mb-2">
                <input
                  type="radio"
                  name="sort"
                  className="w-5 h-5 text-pink-600 border-gray-300 focus:ring-pink-500"
                  defaultChecked={option.selected}
                  onChange={() => setSortBy(option.label)}
                />
                <span className="ml-3 text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Add this handler function
  const handleProductClick = (productId: number) => {
    router.push(`/product-details/${productId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Layout */}
      <div className="hidden lg:block mt-40">
        <div className="px-[3rem] mx-auto flex">
          {/* Desktop Sidebar */}
          <div className="w-64 bg-white border border-gray-200 p-4 h-[130vh] overflow-y-auto">
            {/* Breadcrumb */}
            <div className="bg-white py-3 mb-2">
              <div className="text-sm text-gray-600">
                <span className="hover:text-gray-900 cursor-pointer">Home</span>
                <span className="mx-2">/</span>
                <span className="hover:text-gray-900 cursor-pointer">
                  Clothing
                </span>
                <span className="mx-2">/</span>
                <span className="text-gray-900 font-medium">Sarees</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
              <h2 className="text-base font-semibold text-gray-900">FILTERS</h2>
              <button className="text-sm text-primary1 font-medium">
                CLEAR ALL
              </button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900 mb-4">
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                      defaultChecked={category.selected}
                    />
                    <label className="ml-3 text-sm text-gray-700">
                      {category.name}{" "}
                      <span className="text-gray-400">({category.count})</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Price</h3>
              <div className="px-1">
                <input
                  type="range"
                  min="100"
                  max="50000"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>₹100</span>
                  <span>₹50,000+</span>
                </div>
              </div>
            </div>

            {/* Color */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Color</h3>
              <div className="space-y-3">
                {colors.map((color, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                      defaultChecked={color.selected}
                    />
                    <div className="ml-3 flex items-center">
                      <div
                        className={`w-4 h-4 rounded-full mr-2 ${
                          color.border ? "border border-gray-300" : ""
                        }`}
                        style={{ backgroundColor: color.color }}
                      />
                      <span className="text-sm text-gray-700">
                        {color.name}{" "}
                        <span className="text-gray-400">({color.count})</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Discount Range */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900 mb-4">
                Discount Range
              </h3>
              <div className="space-y-3">
                {[
                  "10% and above",
                  "20% and above",
                  "30% and above",
                  "40% and above",
                  "50% and above",
                  "60% and above",
                  "70% and above",
                  "80% and above",
                  "90% and above",
                ].map((discount, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="radio"
                      name="discount"
                      className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500"
                      checked={selectedDiscount === discount}
                      onChange={() => setSelectedDiscount(discount)}
                    />
                    <label className="ml-3 text-sm text-gray-700">
                      {discount}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Main Content */}
          <div className="flex-1 p-4 border-t border-gray-200">
            <div className="flex justify-start items-center mb-6">
              <select className="appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8 text-sm">
                <option>Sort by: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer mb-8"
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className={`relative mb-3`}>
                    <div className="aspect-[3/4] flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="absolute top-3 right-3">
                      <Heart className="w-5 h-5 text-primary1" />
                    </button>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-900 text-sm">
                        {product.name}
                      </h3>
                      <button className="p-1">
                        <ShoppingCart className="w-4 h-4 text-primary1" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-gray-900">
                        Rs. {product.price}
                      </span>
                      <span className="text-gray-400 line-through">
                        Rs. {product.originalPrice}
                      </span>
                      <span className="text-orange-600 text-xs">
                        ({product.discount})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden">
        {/* Mobile Products Grid */}
        <div className="p-3">
          <div className="grid grid-cols-2 gap-4 mb-20">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white overflow-hidden border border-zinc-100"
                onClick={() => handleProductClick(product.id)}
              >
                <div
                  className={`relative bg-white aspect-[3/4] flex items-center justify-center p-2`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-5 right-5">
                    <Heart className="w-4 h-4 text-primary2" />
                  </button>
                </div>
                <div className="mx-2 mb-2 p-2 bg-secondary">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-gray-900 text-sm">
                      {product.name}
                    </h3>
                    <button className="p-1">
                      <ShoppingCart className="w-4 h-4 text-primary2" />
                    </button>
                  </div>
                  <p className="text-[10px] text-gray-500 mb-2">
                    {product.description}
                  </p>
                  <div className="text-[10px]">
                    <span className=" font-bold text-gray-900">
                      Rs. {product.price}
                    </span>
                    <span className="text-gray-400 line-through ml-2">
                      Rs. {product.originalPrice}
                    </span>
                    <span className="text-orange-600 text-xs ml-5">
                      ({product.discount})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Bottom Actions */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex space-x-3">
          <button
            onClick={() => setShowSort(true)}
            className="flex-1 text-xs flex items-center justify-center py-3 border border-gray-300 rounded font-medium text-gray-700"
          >
            <Filter className="w-3 h-3 mr-2" />
            SORT
          </button>
          <button
            onClick={() => setShowFilters(true)}
            className="flex-1 text-xs flex items-center justify-center py-3 border border-gray-300 rounded font-medium text-gray-700"
          >
            <Filter className="w-3 h-3 mr-2" />
            FILTER
          </button>
        </div>

        {/* Modals */}
        <FilterModal />
        <SortModal />
      </div>
    </div>
  );
};

export default CategoryPage;
