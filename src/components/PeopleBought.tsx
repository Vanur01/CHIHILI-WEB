"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "SAREE",
      price: "₹7,000/-",
      image: "/best1.jpg",
      alt: "Maroon Saree with Floral Print",
    },
    {
      id: 2,
      name: "KURTHA",
      price: "₹7,000/-",
      image: "/best2.jpg",
      alt: "White Striped Kurtha",
    },
    {
      id: 3,
      name: "SAREE",
      price: "₹7,000/-",
      image: "/best3.jpg",
      alt: "Black Printed Saree",
    },
    {
      id: 4,
      name: "KURTHA",
      price: "₹6,500/-",
      image: "/best4.jpg",
      alt: "Blue Embroidered Kurtha",
    },
    {
      id: 5,
      name: "KURTHA",
      price: "₹6,500/-",
      image: "/best4.jpg",
      alt: "Blue Embroidered Kurtha",
    },
  ];

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
      setCurrentIndex(0); // Reset to first slide when changing view
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxIndex ? prevIndex : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const getItemWidth = () => {
    return `${100 / itemsPerView}%`;
  };

  const getTransform = () => {
    return `translateX(-${currentIndex * (100 / itemsPerView)}%)`;
  };

  return (
    <div className="w-full bg-secondary1 py-8 md:py-24 px-4 md:px-16">
      <div className="">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-xl sm:text-3xl font-light tracking-[0.3rem] sm:tracking-[0.4rem] text-secondary2  mb-10 font-crimson-pro">
            PEOPLE ALSO BOUGHT
          </h1>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`hidden md:flex absolute left-2 lg:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full items-center justify-center transition-all duration-300 ${
              currentIndex === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-black bg-opacity-70 hover:bg-opacity-90 text-white hover:scale-110"
            }`}
          >
            <ArrowLeft size={20} className="lg:w-6 lg:h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`hidden md:flex absolute right-2 lg:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full items-center justify-center transition-all duration-300 ${
              currentIndex >= maxIndex
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-black bg-opacity-70 hover:bg-opacity-90 text-white hover:scale-110"
            }`}
          >
            <ArrowRight size={20} className="lg:w-6 lg:h-6" />
          </button>

          {/* Products Container */}
          <div
            className="overflow-hidden md:mx-8 lg:mx-16"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: getTransform(),
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 px-2 md:px-3"
                  style={{ width: getItemWidth() }}
                >
                  <div className="transition-all duration-300 overflow-hidden group">
                    {/* Product Image */}
                    <div className="aspect-[3/4] relative overflow-hidden bg-gray-100 rounded-lg md:rounded-none max-w-[280px] mx-auto">
                      <img
                        src={product.image}
                        alt={product.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 px-12"
                      />
                    </div>

                    {/* Product Info - Positioned to the left */}
                    <div className="p-2 md:p-4 text-left">
                      <h3 className="text-sm md:text-base font-medium tracking-wide md:tracking-wider text-gray-800 mb-1 font-lato">
                        {product.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 font-light">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile swipe hint */}
          <div className="md:hidden text-center mt-4">
            <p className="text-sm text-gray-500">← Swipe left or right →</p>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1 h-1 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-red-600 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
