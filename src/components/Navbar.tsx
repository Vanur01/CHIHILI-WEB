"use client";
import React, { useState } from "react";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../../public/Logo.svg";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    "GOWN",
    "FABRIC",
    "CO-ORD SETS",
    "SAREE",
    "KURTI SET",
    "SKIRT",
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="w-full bg-secondary fixed top-0 z-50 font-crimson-pro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button */}

          {/* Logo */}
          <Link href={"/"} className="flex-shrink-0">
            <Image
              src={logo}
              alt="Chihili Logo"
              className="h-8 sm:h-10 w-auto"
              height={40}
              width={120}
              priority
            />
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-sm"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Mobile Search Toggle */}
            <button
              onClick={toggleSearch}
              className="lg:hidden p-2 text-gray-600 hover:text-pink-600 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Action Icons */}
            <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <Link href="/cart-details" className="hidden sm:block">
              <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </Link>
            <Link href="/profile" className="hidden sm:block">
              <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
                <User className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </Link>

            {/* Talk to Designers Button - Hidden on mobile, shown on tablet+ */}
            <button className="hidden sm:block bg-red-900 text-white px-3 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium tracking-wider hover:bg-red-800 transition-colors whitespace-nowrap">
              TALK TO DESIGNERS
            </button>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-600 hover:text-pink-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div
          className={`lg:hidden border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
            isSearchOpen ? "max-h-20 py-3 border-t" : "max-h-0 py-0"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-sm"
              autoFocus={isSearchOpen}
            />
          </div>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden sm:block border-t border-gray-200 bg-[#FAF8F0]">
          <div className="flex justify-center items-center space-x-8 xl:space-x-12 py-4">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-pink-600 font-medium text-sm tracking-wider transition-colors whitespace-nowrap"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="bg-secondary1 text-gray-700 px-4 py-2 font-medium text-sm tracking-wider hover:bg-[#E8DFC5] transition-colors whitespace-nowrap rounded"
            >
              DESIGN YOURSELF
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`sm:hidden border-t border-gray-200 bg-[#FAF8F0] overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`py-4 space-y-3 transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-y-0" : "-translate-y-4"
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block px-4 py-2 text-gray-700 hover:text-pink-600 hover:bg-gray-50 font-medium text-sm tracking-wider transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="block mx-4 mt-4 bg-[#F0EAD2] text-gray-700 px-4 py-3 font-medium text-sm tracking-wider hover:bg-[#E8DFC5] transition-colors text-center rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              DESIGN YOURSELF
            </a>
            {/* Mobile Talk to Designers Button */}
            <a
              href="#"
              className="block mx-4 mt-2 bg-primary1 text-white px-4 py-3 font-medium text-sm tracking-wider hover:bg-red-800 transition-colors text-center rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              TALK TO DESIGNERS
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
