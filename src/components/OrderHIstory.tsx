"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronRight, Star } from "lucide-react";
import Link from "next/link";

const OrderHistory = () => {
  const [orders] = useState([
    {
      id: 1,
      status: "Order Confirmed",
      statusColor: "text-green-600",
      image: "/best1.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet amet orci semper et diam ut sagittis cras diam. Sed maecenas libero est dapibus penatibus imperdiet placerat sapien.",
      date: null,
      showReview: false,
      rating: 0,
    },
    {
      id: 2,
      status: "Order Shipped on Aug 17",
      statusColor: "text-blue-600",
      image: "/best5.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet amet orci semper et diam ut sagittis cras diam. Sed maecenas libero est dapibus penatibus imperdiet placerat sapien.",
      date: "Aug 17",
      showReview: false,
      rating: 0,
    },
    {
      id: 3,
      status: "Delivered on Aug 15",
      statusColor: "text-green-700",
      image: "/best3.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet amet orci semper et diam ut sagittis cras diam. Sed maecenas libero est dapibus penatibus imperdiet placerat sapien.",
      date: "Aug 15",
      showReview: true,
      rating: 4,
      reviewText: "Write a review",
    },
    {
      id: 4,
      status: "Delivered on Aug 15",
      statusColor: "text-green-700",
      image: "/best2.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet amet orci semper et diam ut sagittis cras diam. Sed maecenas libero est dapibus penatibus imperdiet placerat sapien.",
      date: "Aug 15",
      showReview: true,
      rating: 0,
      reviewText: "Rate this product now",
    },
    {
      id: 5,
      status: "Cancelled",
      statusColor: "text-red-600",
      image: "/best4.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet amet orci semper et diam ut sagittis cras diam. Sed maecenas libero est dapibus penatibus imperdiet placerat sapien.",
      date: null,
      showReview: false,
      rating: 0,
    },
  ]);

  const renderStars = (rating: number, isClickable = false) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            } ${isClickable ? "cursor-pointer hover:text-yellow-400" : ""}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-secondary1 min-h-screen py-8  font-lato px-4 md:px-24 md:py-12">
      {/* Header */}

              <div className="text-center mb-4">
          <h1 className="text-xl sm:text-3xl font-light tracking-[0.3rem] sm:tracking-[0.4rem] text-secondary2  mb-10 font-crimson-pro">
          ORDER HISTORY
          </h1>
        </div>

      {/* Orders List */}
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className=" rounded-lg p-6 ">
            <div className="flex items-start space-x-4">
              {/* Product Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-32 bg-gray-200 rounded-md overflow-hidden">
                  <img
                    src={order.image}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Order Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-lg font-medium ${order.statusColor}`}>
                    {order.status}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-3xl">
                  {order.description}
                </p>

                {/* Review Section */}
                {order.showReview && (
                  <div className="flex items-center space-x-3">
                    {renderStars(order.rating)}
                    <span className="text-sm text-gray-500">
                      {order.reviewText}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="group px-8 py-3 hover:bg-secondary1 text-gray-700 font-medium rounded-md transition-colors duration-200 border border-gray-700">
          Load More
          <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
        </button>
      </div>
    </div>
  );
};

export default OrderHistory;
