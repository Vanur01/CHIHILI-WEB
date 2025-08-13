import React from "react";
import { ShoppingCart } from "lucide-react";

const SavedForLater = () => {
  const savedItems = [
    {
      id: 1,
      title: "Saree (M)",
      price: "7,000/-",
      image: "/best1.jpg",
    },
    {
      id: 2,
      title: "Saree (Custom)",
      price: "7,000/-",
      image: "/best2.jpg",
    },
    {
      id: 3,
      title: "Saree (L)",
      price: "7,000/-",
      image: "/best3.jpg",
    },
    {
      id: 4,
      title: "Saree (XL)",
      price: "7,500/-",
      image: "/best1.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8 sm:mb-12 fade-in-up">
          <h1 className="text-xl sm:text-3xl font-light tracking-[0.3rem] sm:tracking-[0.4rem] text-secondary2  mb-10 font-crimson-pro">
          SAVED FOR LATER
        </h1>
      </div>

      {/* Mobile horizontal scroll container */}
      <div className="md:hidden">
        <div className="flex overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex space-x-4">
            {savedItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-64 bg-white border border-secondary1 overflow-hidden group relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-secondary">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="font-medium text-base sm:text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-800 text-sm sm:text-base">{item.price}</p>
                    </div>
                    <button 
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop grid layout */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
        {savedItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-secondary1 overflow-hidden group relative"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 bg-secondary">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-800">{item.price}</p>
                </div>
                <button 
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Add to cart"
                >
                  <ShoppingCart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedForLater;