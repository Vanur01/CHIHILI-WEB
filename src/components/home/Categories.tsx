"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function FashionCategories() {
  const router = useRouter();
  const categories = [
    {
      id: 1,
      title: "SAREES",
      image: "/best1.jpg",
      slug: "sarees"
    },
    {
      id: 2,
      title: "WEDDING COLLECTION",
      image: "/best2.jpg",
      slug: "wedding-collection"
    },
    {
      id: 3,
      title: "LEHENGA SETS",
      image: "/best3.jpg",
      slug: "lehenga-sets"
    },
    {
      id: 4,
      title: "KURTA SETS",
      image: "/best4.jpg",
      slug: "kurta-sets"
    },
    {
      id: 5,
      title: "CO-ORD SETS",
      image: "/best5.jpg",
      slug: "coord-sets"
    }
  ];

  const handleCategoryClick = () => {
    router.push(`/categoryPage`);
  };

  return (
    <div className="w-full mx-auto px-4 md:px-20 py-16 md:py-32">
      {/* Mobile View (Horizontal Scroll) */}
      <div className="md:hidden overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex gap-4 w-max">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="text-center cursor-pointer group w-50 flex-shrink-0"
              onClick={() => handleCategoryClick()}
            >
              <div className="aspect-[3/4] mb-3 group-hover:opacity-90 transition-opacity">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xs tracking-[0.15em] text-gray-800 group-hover:text-gray-600 transition-colors">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View (Grid) */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-6 font-crimson-pro">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="text-center cursor-pointer group"
            onClick={() => handleCategoryClick()}
          >
            <div className="aspect-[4/6] mb-4 group-hover:opacity-90 transition-opacity">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-sm tracking-[0.2em] text-gray-800 group-hover:text-gray-600 transition-colors">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}