"use client";

import React, { useState } from "react";
import SunIcon from "../icons/sunicon";
import MoonIcon from "../icons/moonicon";
import Link from "next/link";

interface NavProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  selectedAbcus: string;
  onAbcusChange: (abcus: string) => void;
}

const Abcuses = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

const Nav: React.FC<NavProps> = ({
  isDarkMode,
  toggleTheme,
  selectedAbcus,
  onAbcusChange,
  // speed,
  // onSpeedChange,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAbcusClick = (abcus: string) => {
    onAbcusChange(abcus);
    setDropdownOpen(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
//     <nav
//       className={`${
//         isDarkMode ? "bg-gray-800 text-white" : "bg-blue-100 text-black"
//       } bg-black text-white shadow-lg p-4 flex justify-between items-center transition-all duration-300`}
//     >
//       <div className="flex items-center ml-8">
//       <Link href={"/"}>
//       <svg
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 300 200"
//   width="100"
//   height="50"
// >
//   {/* <!-- Background Gradient --> */}
//   <defs>
//     <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//       <stop offset="0%" stopColor="#1d4ed8" stopOpacity="1" />
//       <stop offset="100%" style={{ stopColor: "#9333ea", stopOpacity: 1 }} />
//     </linearGradient>
//   </defs>
//   <rect width="300" height="200" fill="url(#gradient)" rx="20" />

//   {/* <!-- Stylized Brain --> */}
//   <path
//     d="M100 60c-20 0-40 15-40 40s20 40 40 40c10 0 20-5 30-10s20-5 30 0c10 5 20 10 30 10 20 0 40-15 40-40s-20-40-40-40c-10 0-20 5-30 10-10 5-20 5-30 0-10-5-20-10-30-10z"
//     fill="#ffffff"
//   />
//   <circle cx="90" cy="100" r="6" fill="#9333ea" />
//   <circle cx="120" cy="100" r="6" fill="#9333ea" />
//   <circle cx="150" cy="100" r="6" fill="#9333ea" />
//   <circle cx="180" cy="100" r="6" fill="#9333ea" />
//   <circle cx="210" cy="100" r="6" fill="#9333ea" />

//   {/* <!-- Train --> */}
//   <rect x="50" y="120" width="200" height="40" rx="10" fill="#ffffff" />
//   <rect x="70" y="125" width="160" height="20" rx="5" fill="#1d4ed8" />
//   <circle cx="90" cy="170" r="10" fill="#9333ea" />
//   <circle cx="210" cy="170" r="10" fill="#9333ea" />

//   {/* <!-- Tracks --> */}
//   <line x1="50" y1="180" x2="250" y2="180" stroke="#ffffff" strokeWidth="3" />
//   <line x1="60" y1="190" x2="240" y2="190" stroke="#ffffff" strokeWidth="3" />

//   {/* <!-- Text --> */}
//   <text
//     x="50%"
//     y="40"
//     textAnchor="middle"
//     fill="#ffffff"
//     fontSize="24"
//     fontFamily="Arial, Helvetica, sans-serif"
//     fontWeight="bold"
//   >
//     BrainTrain Education
//   </text>
// </svg>


//         </Link>  
//       </div>
//       <div className="flex lg:items-center gap-4">
//               {/* Desktop Menu */}

//         <ul className="hidden lg:flex gap-4 text-xl bold">
//           <li 
//           //className="hover:text-gray-400"
//           className={`${
//             isDarkMode ? " text-white hover:text-gray-500" : " text-black hover:text-gray-700"
//           }`}
//           >
//             <Link href={"/"}>
//               Home
//             </Link>
//           </li>
//           <li className={`${
//             isDarkMode ? " text-white hover:text-gray-500" : " text-black hover:text-gray-700"
//           }`}>
//             <Link href={"/about"}>
//               About
//             </Link>
//           </li>
//           <li className={`${
//             isDarkMode ? " text-white hover:text-gray-500" : " text-black hover:text-gray-700"
//           }`}>
//             <Link href={"/contact"}>
//               Contact Us
//             </Link>
//           </li>
//           <li className={`${
//             isDarkMode ? " text-white hover:text-gray-500" : " text-black hover:text-gray-700"
//           }`}>
//             <Link href={"/contact"}>
//               Cubic
//             </Link>
//           </li>
//           <li className={`${
//             isDarkMode ? " text-white hover:text-gray-500" : " text-black hover:text-gray-700"
//           }`}>
//             <Link href={"/contact"}>
//               Vedic Math
//             </Link>
//           </li>
//         </ul>

//         {/* Abcus Dropdown */}
//         <div className="relative">
        
//           <button
//             onClick={toggleDropdown}
//             className="bg-gray-700 text-white p-2 rounded flex items-center gap-2"
//           >
//             {selectedAbcus}{" "}
//             <span className="ml-2">
//               {/* {dropdownOpen ? "arrow_drop_up" : "arrow_drop_down"} */}
//               {dropdownOpen ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4 inline-block"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 15l-7-7-7 7"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4 inline-block"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               )}
//             </span>
//           </button>

//           {dropdownOpen && (
//             <ul
//               className={`absolute z-10 bg-gray-700 text-white rounded shadow-lg mt-2 text-capitalize`}
//             >
//               {Abcuses.map((abcus) => (
//                 <li
//                   key={abcus}
//                   className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
//                   onClick={() => handleAbcusClick(abcus)}
//                 >
//                   {abcus}
//                 </li>
//               ))}
//             </ul>
//           )}

//         </div>
        
//         {/* Theme Toggle */}
//         <button
//           onClick={toggleTheme}
//           className="p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-200 transition-colors duration-200"
//           aria-label="Toggle dark mode"
//         >
//           {isDarkMode ? (
//             <SunIcon className="text-white" />
//           ) : (
//             <MoonIcon className="text-black" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu Toggle */}
//       <div className="lg:hidden ">
//         <button
//           onClick={toggleMenu}
//           className="text-white p-2 focus:outline-none"
//         >
//           {menuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Sidebar for Mobile */}

//       <div
//         className={`fixed top-0 left-0 w-64 h-full p-4 z-50 transition-transform transform ${
//           menuOpen ? "translate-x-0" : "-translate-x-full"
//         } ${
//           isDarkMode ? "bg-gray-800 text-white" : "bg-blue-300 text-black"
//         } lg:hidden`}
//       >
//         <button
//           onClick={toggleMenu}
//           className="absolute top-4 right-4 text-white p-2"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>


//          {/* Github section */}
    


  

//       </div>

//       {/* Overlay when Sidebar is open */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
//           onClick={toggleMenu}
//         />
//       )}
//     </nav>

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
    <ul className="flex gap-6 text-lg font-medium">
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
    </ul>

    {/* Dropdown for Abcus */}
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-gray-200"
        } text-sm px-4 py-2 rounded shadow transition-all duration-300 hover:scale-105`}
      >
        {selectedAbcus}
        <span className="ml-2 inline-block">
          {dropdownOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 15l-7-7-7 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </button>

      {dropdownOpen && (
        <ul
          className={`absolute z-10 mt-2 w-40 bg-gray-700 text-white rounded shadow-lg`}
        >
          {Abcuses.map((abcus) => (
            <li
              key={abcus}
              className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
              onClick={() => handleAbcusClick(abcus)}
            >
              {abcus}
            </li>
          ))}
        </ul>
      )}
    </div>

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

export default Nav;