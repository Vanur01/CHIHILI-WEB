"use client";

import React, { useState } from "react";
import { Plus, Minus, Heart, Trash2, Info } from "lucide-react";
import { useRouter } from "next/navigation";

const ShoppingCart = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Saree",
      price: 9000.0,
      quantity: 1,
      image: "/best1.jpg",
      saved: false,
    },
    {
      id: 2,
      name: "Saree",
      price: 9000.0,
      quantity: 1,
      image: "/best1.jpg",
      saved: false,
    },
    {
      id: 3,
      name: "Saree",
      price: 9000.0,
      quantity: 1,
      image: "/best1.jpg",
      saved: false,
    },
  ]);

  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const toggleSaveForLater = (id: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, saved: !item.saved } : item
      )
    );
  };

  const applyCoupon = () => {
    console.log("Applying coupon:", couponCode);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingEstimate = 5.0;
  const taxEstimate = 8.32;
  const orderTotal = subtotal + shippingEstimate + taxEstimate;



    const handleCheckout = () => {
    router.push('/address'); // Navigate to address page
  };


  return (
    <div className="min-h-screen py-4 mt-20 sm:mt-40">
      <div className="max-w-[90rem] mx-auto px-2 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-xl sm:text-3xl font-light tracking-[0.3rem] sm:tracking-[0.4rem] text-secondary2  mb-10 font-crimson-pro">
            SHOPPING CART
          </h1>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Cart Items - Same layout but scaled down */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className="p-3 border-b border-secondary1 sm:border-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-3">
                    {/* Product Image - Smaller but same ratio */}
                    <div className="flex-shrink-0 w-24 h-30 sm:w-48 sm:h-60">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover bg-secondary"
                      />
                    </div>

                    {/* Product Details - Same layout but compact */}
                    <div className="flex-1">
                      {/* Name and Price Row */}
                      <div className="flex justify-between items-start mb-2 sm:mb-6">
                        <h3 className="text-sm sm:text-xl font-light font-lato">
                          {item.name}
                        </h3>
                        <p className="text-sm sm:text-xl font-bold font-lato">
                          ₹{item.price.toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity Controls and Action Buttons Row */}
                      <div className="flex items-center justify-between">
                        {/* Quantity Controls - Smaller but same layout */}
                        <div className="flex items-center overflow-hidden">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1 sm:p-3 hover:bg-gray-100 border border-zinc-200 rounded-l-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4 sm:w-4 sm:h-4" />
                          </button>
                          <span className="px-2 sm:px-6 py-1 sm:py-2 font-medium min-w-[1.5rem] sm:min-w-[3rem] border border-zinc-200 text-center bg-white font-lato text-xs sm:text-base">
                            {item.quantity.toString().padStart(2, "0")}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 sm:p-3 hover:bg-gray-100 border border-zinc-200 rounded-r-sm transition-colors"
                          >
                            <Plus className="w-4 h-4 sm:w-4 sm:h-4" />
                          </button>
                        </div>

                        {/* Action Buttons - Same layout but smaller */}
                        <div className="flex flex-col">
                          <button
                            onClick={() => toggleSaveForLater(item.id)}
                            className="flex text-xs sm:text-sm  justify-end items-center gap-1 sm:gap-2 py-1 sm:py-2 text-gray-600 hover:text-primary1 transition-colors font-lato cursor-pointer"
                          >
                            Save for Later
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="flex text-xs sm:text-sm  justify-end items-center gap-1 sm:gap-2 py-1 sm:py-2 text-primary1 hover:text-red-700 transition-colors font-lato cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price Summary - Same layout but scaled down */}
          <div className="lg:col-span-5 mt-4 lg:mt-0">
            <div className="bg-secondary p-3 top-8 border border-gray-100">
              <h2 className="text-md lg:text-xl items-center font-light tracking-[0.1rem] sm:tracking-[0.2rem] mb-3 sm:mb-6 text-start font-crimson-pro">
                PRICE DETAILS
              </h2>

              <div className="space-y-7 sm:space-y-4 mb-3 sm:mb-6">
                <div className="flex justify-between items-center py-1 sm:py-2 border-b border-secondary1">
                  <span className="text-sm sm:text-base text-gray-600 font-lato">Subtotal</span>
                  <span className="text-sm sm:text-base font-medium font-lato">
                    ₹{subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 sm:py-2 border-b border-secondary1">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-sm sm:text-base text-gray-600 font-lato">
                      Shipping estimate
                    </span>
                    <Info className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                  </div>
                  <span className="text-sm sm:text-base font-medium font-lato">
                    ₹{shippingEstimate.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 sm:py-2 border-b border-secondary1">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-sm sm:text-base text-gray-600 font-lato">
                      Tax estimate
                    </span>
                    <Info className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                  </div>
                  <span className="text-sm sm:text-base font-medium font-lato">
                    ₹{taxEstimate.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-lg font-medium font-lato">
                    Order total
                  </span>
                  <span className="text-sm sm:text-xl font-semibold font-lato">
                    ₹{orderTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Coupon Code - Same layout but smaller */}
              <div className="mb-3 sm:mb-6">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-2 sm:px-4 py-3 sm:py-3 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary1 focus:border-primary1 transition-all bg-white font-lato text-sm sm:text-base"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-3 sm:px-6 py-1 sm:py-3 bg-primary1 text-white hover:bg-primary1/90 transition-all duration-300 font-medium cursor-pointer font-lato text-xs sm:text-base"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout Button - Same but smaller */}
              <button onClick={handleCheckout} 
              
                className="w-full mt-6 bg-primary1 hover:bg-primary2 text-white font-medium py-3 px-6 transition-colors cursor-pointer">
                Check-out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;