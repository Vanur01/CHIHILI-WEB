"use client";
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NewCollectionGrid() {
    const router = useRouter();
  
  const fashionItems = [
    {
      id: 1,
      image: '/best1.jpg',
      alt: 'Burgundy saree with traditional border',
      featured: true
    },
    {
      id: 2,
      image: '/best2.jpg',
      alt: 'Floral print dress detail'
    },
    {
      id: 3,
      image: '/best3.jpg',
      alt: 'Printed tunic with belt'
    },
    {
      id: 4,
      image: '/best4.jpg',
      alt: 'Black printed saree'
    },
    {
      id: 5,
      image: '/best5.jpg',
      alt: 'Maroon saree with embellishments'
    },
    {
      id: 6,
      image: '/best1.jpg',
      alt: 'Geometric print coordinates'
    },
    {
      id: 7,
      image: '/best2.jpg',
      alt: 'Blue striped dress'
    },
    {
      id: 8,
      image: '/best3.jpg',
      alt: 'Orange floral print dress'
    }
  ];

  const handleItemClick = (item: { id: number; name: string; image: string; price: string; alt: string }) => {
    console.log('Item clicked:', item);
    // Add your navigation/modal logic here
  };

  const handleViewCollection = () => {
    console.log('View collection clicked');
    router.push(`/categoryPage`);
  };

  return (
    <div className="min-h-screen bg-secondary1 p-4 sm:p-6 lg:p-8 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-xl sm:text-3xl font-light tracking-[0.3rem] sm:tracking-[0.4rem] text-secondary2  mb-10 font-crimson-pro">
            NEW COLLECTION
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          {/* Top Section: Featured + 4 small items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6">
            {/* Large featured item - 50% width */}
            <div className="group cursor-pointer">
              <div className="relative h-60 sm:h-72 md:h-80 lg:h-[28rem] overflow-hidden rounded-lg shadow-md sm:shadow-lg bg-white">
                <img
                  src={fashionItems[0].image}
                  alt={fashionItems[0].alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Right side - 4 small items in 2x2 grid - 50% width */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {[1, 2, 3, 4].map((index) => (
                <div key={fashionItems[index].id} className="group cursor-pointer">
                  <div className="relative h-32 sm:h-36 md:h-40 lg:h-[13rem] overflow-hidden rounded-lg shadow-md sm:shadow-lg bg-white">
                    <img
                      src={fashionItems[index].image}
                      alt={fashionItems[index].alt}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section: 3 images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {[5, 6, 7].map((index) => (
              <div 
                key={fashionItems[index].id} 
                className={`group cursor-pointer ${index === 7 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden rounded-lg shadow-md sm:shadow-lg bg-white">
                  <img
                    src={fashionItems[index].image}
                    alt={fashionItems[index].alt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Collection Button */}
        <div className="text-center">
          <button 
            onClick={handleViewCollection}
            className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 border border-gray-800 sm:border-2 text-gray-800 font-medium tracking-wider hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer text-sm sm:text-base"
          >
            <span>View Collection</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}