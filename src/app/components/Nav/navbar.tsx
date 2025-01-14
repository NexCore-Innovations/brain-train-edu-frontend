"use client";

import React, { useState } from "react";
import SunIcon from "../icons/sunicon";
import MoonIcon from "../icons/moonicon";
import Link from "next/link";

interface NavProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavProps> = ({
  isDarkMode,
  toggleTheme,
}) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

//   const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (

<nav
  className={`${
    isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
  } shadow-lg p-4 flex justify-between items-center transition-all duration-300`}
>
  {/* Logo Section */}
  <div className="flex items-center ml-8">
    <Link href={"/"} className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 200"
        width="120"
        height="60"
        className="transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="1" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="1" />
          </linearGradient>
        </defs>
        <rect width="300" height="200" fill="url(#gradient)" rx="20" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          fill="#fff"
          fontSize="24"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="bold"
          dy=".35em"
        >
          BrainTrain
        </text>
      </svg>
    </Link>
  </div>

  {/* Navigation Links */}
  <div className="hidden lg:flex items-center gap-6">
    {/* <ul className="flex gap-6 text-lg font-medium">
      {["Home", "About", "Contact Us", "Cubic", "Vedic Math"].map((item) => (
        <li key={item}>
          <Link
            href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
            className={`${
              isDarkMode
                ? "text-white hover:text-gray-300"
                : "text-gray-800 hover:text-gray-500"
            } transition-all duration-300`}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul> */}


    {/* Theme Toggle */}
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-transform duration-300 hover:scale-110"
    >
      {isDarkMode ? (
        <SunIcon className="text-yellow-400" />
      ) : (
        <MoonIcon className="text-gray-600" />
      )}
    </button>
  </div>

  {/* Mobile Menu Toggle */}
  <button
    onClick={toggleMenu}
    className="lg:hidden text-xl focus:outline-none"
  >
    {menuOpen ? "✖" : "☰"}
  </button>

  {/* Sidebar for Mobile */}
  {menuOpen && (
    <div
      className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-90 text-white p-4 transition-transform duration-300 ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 text-white p-2"
      >
        ✖
      </button>
      <ul className="mt-8 space-y-6 text-lg font-medium">
        {["Home", "About", "Contact Us", "Cubic", "Vedic Math"].map((item) => (
          <li key={item}>
            <Link href={`/${item.toLowerCase().replace(/\s+/g, "")}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
</nav>

  );
};

export default Navbar;