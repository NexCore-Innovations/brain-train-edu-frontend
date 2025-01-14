// pages/welcome.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Button, Typography } from "@mui/material";
import Navbar from "../components/Nav/navbar";

const WelcomePage: React.FC = () => {
  const isDarkMode = false; // Define the isDarkMode variable
  return (
    <div className={`min-h-screen `}>
    <Navbar 
          isDarkMode={false} 
          toggleTheme={() => {}} 
        />
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl p-8 grid grid-cols-1 md:grid-cols-2 mt-8">
        {/* Left Section: Welcome Message */}
        <div className="flex flex-col justify-center items-center space-y-6 px-4">
          <Typography
            variant="h4"
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-extrabold text-center"
          >
            Welcome to BrainTrain
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-700 text-center"
          >
            A platform to revolutionize learning through innovative tools and personalized education. Whether you're a teacher, student, or admin, we have something amazing for you.
          </Typography>
          <div className="relative w-64 h-64 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 rounded-full animate-pulse">
            {/* Decorative Element */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-30 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Right Section: Login Buttons */}
        <div className="flex flex-col justify-center items-center space-y-4">
          <Typography
            variant="h5"
            className="text-indigo-600 font-semibold text-center mb-6"
          >
            Choose Your Role
          </Typography>
          <Link href="/teacher-login">
            <Button
              variant="contained"
              color="primary"
              className="w-60 bg-indigo-500 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg text-lg"
            >
              Teacher Login
            </Button>
          </Link>
          <Link href="/student-login">
            <Button
              variant="contained"
              color="secondary"
              className="w-60 bg-purple-500 hover:bg-purple-700 text-white py-3 px-6 rounded-lg text-lg"
            >
              Student Login
            </Button>
          </Link>
          <Link href="/admin-login">
            <Button
              variant="contained"
              color="success"
              className="w-60 bg-green-500 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg"
            >
              Admin Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WelcomePage;
