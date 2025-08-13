"use client";
import React, { useState } from "react";
import { Heart, Plus, Minus, Star, Truck, Award } from "lucide-react";
import RecentReviews from "./RecentReview";
import SizeChartModal from "./SizeChartModal";
import { useRouter } from "next/navigation";

const ProductDetails = () => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("grey");
  const [selectedSize, setSelectedSize] = useState("L");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

  const images = [
    "/best1.jpg",
    "/best1.jpg",
    "/best1.jpg",
    "/best1.jpg",
    "/best1.jpg",
    "/best1.jpg",
  ];

  const colors = [
    { name: "black", color: "bg-black" },
    { name: "grey", color: "bg-gray-400" },
  ];

  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleBuyNow = () => {
    router.push("/cart-details");
  };

  return (
    <div className="min-h-screen bg-secondary py-8 pt-16 font-lato">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-white overflow-hidden shadow-lg">
              <img
                src={images[selectedImage]}
                alt="Grey Dress"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 px-16"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-6 gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden shadow-sm border-2 transition-all duration-200 ${
                    selectedImage === index
                      ? "border-blue-500 scale-105"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Grey Dress
                </h1>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <Star className="w-5 h-5 text-gray-300" />
                  </div>
                  <span className="text-gray-600">4.0</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm underline">
                    See all 512 reviews
                  </button>
                </div>
              </div>
              <button onClick={toggleWishlist}>
                <Heart
                  className={`w-8 h-8 cursor-pointer bg-white p-1 border border-zinc-200 ${
                    isWishlisted
                      ? "fill-primary1 text-primary1"
                      : "text-gray-400"
                  }`}
                />
              </button>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-gray-900">₹3500.00</div>

            {/* Color Selection */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Color</h3>
              </div>
              <div className="flex space-x-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-lg ${
                      color.color
                    } border-2 transition-all duration-200 ${
                      selectedColor === color.name
                        ? "border-blue-500 scale-110 shadow-lg"
                        : "border-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Size</h3>
                <button
                  onClick={() => setIsSizeChartOpen(true)}
                  className="text-blue-600 hover:text-blue-700 text-sm underline"
                >
                  See sizing chart
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 rounded-lg border transition-all duration-200 text-sm font-medium ${
                      selectedSize === size
                        ? "bg-primary1 text-white border-primary1"
                        : "bg-white text-gray-900 border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="mt-2 text-sm text-gray-600">
                📏 Fit: Bust - 38in | Waist - 32in | Hip - 42in
              </div>
            </div>

            {/* Shipping Info */}
            <div className=" rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Truck className="w-5 h-5 text-gray-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-gray-900">Standard Shipping</p>
                  <p className="text-gray-600">
                    The estimated shipping date for this product is by 14th of
                    October. Please note that this is the shipping date and not
                    the delivery date.
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Size Login */}
            <button className="w-full py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Login to get Custom Size
            </button>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={decreaseQuantity}
                    className="p-3 hover:bg-gray-100 transition-colors rounded-l-lg"
                  >
                    <Minus className="w-4 h-4 text-gray-600" />
                  </button>
                  <span className="px-6 py-3 text-lg font-medium text-gray-900 border-x border-gray-300">
                    {quantity.toString().padStart(2, "0")}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="p-3 hover:bg-gray-100 transition-colors rounded-r-lg"
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="py-4 border-2 border-gray-300 text-gray-900 rounded-lg hover:border-gray-400 transition-colors font-medium">
                  Add to Cart 🛒
                </button>
                <button
                  onClick={handleBuyNow}
                  className="py-4 bg-primary1 text-white rounded-lg hover:opacity-90 transition-colors font-medium"
                >
                  Buy Now →
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col justify-center items-center gap-4 font-crimson-pro w-full">
              <div className="bg-secondary1 rounded-lg p-4 text-center w-full">
                <Truck className="w-8 h-8 text-primary2 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  INTERNATIONAL DELIVERY
                </h4>
                <p className="text-primary2 text-sm">
                  Get your order in 2 days
                </p>
              </div>
              <div className="bg-secondary1 rounded-lg p-4 text-center w-full">
                <Award className="w-8 h-8 text-primary2 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  PREMIUM MATERIAL
                </h4>
                <p className="text-primary2 text-sm">Premium Material</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Basic tee is an honest new take on a classic. The tee uses
                super soft, pre-shrunk cotton for true comfort and a dependable
                fit. They are hand cut and sewn locally, with a special dye
                technique that gives each tee it's own look.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Looking to stock your closet? The Basic tee also comes in a
                3-pack or 5-pack at a bundle discount.
              </p>
            </div>

            {/* Fabric & Care */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Fabric & Care
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Only the best materials</li>
                <li>• Ethically and locally made</li>
                <li>• Pre-washed and pre-shrunk</li>
                <li>• Machine wash cold with similar colors</li>
              </ul>
            </div>
            <RecentReviews />
          </div>
        </div>
      </div>
      {isSizeChartOpen && (
        <SizeChartModal onClose={() => setIsSizeChartOpen(false)} />
      )}
    </div>
  );
};

export default ProductDetails;
