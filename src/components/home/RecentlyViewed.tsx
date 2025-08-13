"use client";
import React, { useState, useRef, useEffect } from "react";

// Simulated react-slick Slider component
const Slider = ({
  children,
  ...settings
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(settings.slidesToShow || 1);
  const sliderRef = useRef<HTMLDivElement>(null);

  const totalSlides = React.Children.count(children);

  interface ResponsiveSettings {
    breakpoint: number;
    settings: {
      slidesToShow: number;
    };
  }

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (settings.responsive) {
        const breakpoint = settings.responsive.find(
          (bp: ResponsiveSettings) => window.innerWidth <= bp.breakpoint
        );
        if (breakpoint) {
          setSlidesToShow(breakpoint.settings.slidesToShow);
        } else {
          setSlidesToShow(settings.slidesToShow || 1);
        }
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, [settings]);

  const maxSlide = Math.max(0, totalSlides - slidesToShow);

  const goToSlide = (slide: number) => {
    if (settings.infinite) {
      setCurrentSlide(slide);
    } else {
      const newSlide = Math.max(0, Math.min(slide, maxSlide));
      setCurrentSlide(newSlide);
    }
    setTranslateX(0);
  };

  const handleStart = (clientX: number) => {
    if (!settings.swipeToSlide) return;
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || !settings.swipeToSlide) return;
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handleEnd = () => {
    if (!isDragging || !settings.swipeToSlide) return;
    setIsDragging(false);

    const threshold = 50;
    const slideChange = settings.slidesToScroll || 1;

    if (translateX > threshold && currentSlide > 0) {
      goToSlide(currentSlide - slideChange);
    } else if (translateX < -threshold && currentSlide < maxSlide) {
      goToSlide(currentSlide + slideChange);
    }

    setTranslateX(0);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) =>
    handleStart(e.clientX);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) =>
    handleMove(e.clientX);
  const handleMouseUp = () => handleEnd();

  // Touch events
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) =>
    handleStart(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
    handleMove(e.touches[0].clientX);
  const handleTouchEnd = () => handleEnd();

  const slideWidth = 100 / slidesToShow;
  const totalTranslateX =
    -currentSlide * slideWidth +
    (translateX / (sliderRef.current?.offsetWidth || 1)) * 100;

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={sliderRef}
        className={`flex transition-transform ${
          isDragging ? "duration-0" : `duration-${settings.speed || 500}`
        } ease-out`}
        style={{
          transform: `translateX(${totalTranslateX}%)`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="flex-none"
            style={{ width: `${slideWidth}%` }}
          >
            {child}
          </div>
        ))}
      </div>

      {settings.dots && maxSlide > 0 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? "bg-gray-800" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function RecentlyViewed() {
  const recentlyViewed = [
    {
      id: 1,
      name: "Elegant Silk Saree",
      image: "/best1.jpg",
      price: "₹2,999",
    },
    {
      id: 2,
      name: "Designer Lehenga",
      image: "/best3.jpg",
      price: "₹8,499",
    },
    {
      id: 3,
      name: "Cotton Kurta Set",
      image: "/best4.jpg",
      price: "₹1,899",
    },
    {
      id: 4,
      name: "Floral Co-ord Set",
      image: "/best2.jpg",
      price: "₹2,299",
    },
    {
      id: 5,
      name: "Bridal Sharara",
      image: "/best5.jpg",
      price: "₹12,999",
    },
    {
      id: 6,
      name: "Embroidered Anarkali",
      image: "/best1.jpg",
      price: "₹3,799",
    },
    {
      id: 7,
      name: "Party Wear Gown",
      image: "/best2.jpg",
      price: "₹4,599",
    },
    {
      id: 8,
      name: "Traditional Dupatta",
      image: "/best1.jpg",
      price: "₹899",
    },
  ];

  // React-slick settings
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    swipeToSlide: true,
    arrows: false, // No navigation buttons
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full py-20">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-xl sm:text-3xl font-light tracking-[0.3rem] sm:tracking-[0.4rem] text-secondary2  mb-10 font-crimson-pro">
            RECENTLY VIEWED
          </h1>
        </div>

      {/* Full width slider container */}
      <div className="w-full px-6">
        <Slider {...sliderSettings}>
          {recentlyViewed.map((item) => (
            <div key={item.id} className="px-3">
              <div className="text-center select-none">
                <div className="aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    draggable={false}
                  />
                </div>
                <h3 className="text-lg text-gray-800 mb-2 font-medium font-crimson-pro">
                  {item.name.toUpperCase()}
                </h3>
                <p className="text-lg text-gray-900 font-lato">{item.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
