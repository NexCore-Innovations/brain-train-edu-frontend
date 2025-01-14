"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import Nav from "./components/Navbar/nav";
import EnrollmentCard from "./EnrollmentCard/enrollment";
import FeatureCard from "./FeatureCard/featureCard";
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedAbcus, setSelectedAbcus] = useState("Abcus");

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleAbcusChange = (abcus: string) => {
    setSelectedAbcus(abcus);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-800" : "bg-blue-50"}`}>
      {/* Navbar */}
      <Nav isDarkMode={isDarkMode} toggleTheme={toggleTheme} selectedAbcus={selectedAbcus} onAbcusChange={handleAbcusChange} />

      {/* Hero Section */}
      <section className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-blue-50 text-gray-800"} flex flex-col items-center justify-center py-20 text-center`}>
        <h1 className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-indigo-500 to-purple-500">
          Welcome to BrainTrain Education
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
          Empowering teachers to learn, hire, and teach students. Explore fun
          and interactive learning methods with Abacus, Rubik's Cube, and Vedic Math.
        </p>
        <Button
          variant="contained"
          color="primary"
          className="mt-6 px-6 py-2 rounded-lg"
        >
          Get Started
        </Button>
      </section>

      {/* Features Section */}
      {/* <section className={`${isDarkMode ? "bg-gray-700" : "bg-gradient-to-r from-purple-100 to-indigo-100"} py-20`}>
        <div className="container mx-auto text-center ">
          <Typography
  variant="h4"
  className="mt-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center"
>
  Why Choose BrainTrain?
</Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Abacus Game"
              description="Master mental math through interactive Abacus games."
              image="https://m.media-amazon.com/images/I/816QOABcJUL.jpg"
            />
            <FeatureCard
              title="Rubik's Cube"
              description="Enhance cognitive skills with Rubik's Cube challenges."
              image="https://m.media-amazon.com/images/I/81gdePnrxdL.jpg"
            />
            <FeatureCard
              title="Vedic Math"
              description="Learn faster calculation techniques with Vedic Math."
              image="https://m.media-amazon.com/images/I/71BXAQEIL8L._AC_UF1000,1000_QL80_.jpg"
            />
          </div>
        </div>
      </section> */}
     {/* Features Section */}
<section
  className={`${
    isDarkMode ?  "bg-gradient-to-r from-purple-50 to-indigo-100 text-gray-900" : "bg-gray-700 text-white" 
  } py-20`}
>
  <div className="container mx-auto text-center px-6 lg:px-16">
    {/* Header */}
    <Typography
      variant="h4"
      className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 mb-12"
    >
      Why Choose BrainTrain?
    </Typography>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      <FeatureCard
        title="Abacus Game"
        description="Master mental math through interactive Abacus games."
        image="https://m.media-amazon.com/images/I/816QOABcJUL.jpg"
      />
      <FeatureCard
        title="Rubik's Cube"
        description="Enhance cognitive skills with Rubik's Cube challenges."
        image="https://m.media-amazon.com/images/I/81gdePnrxdL.jpg"
      />
      <FeatureCard
        title="Vedic Math"
        description="Learn faster calculation techniques with Vedic Math."
        image="https://m.media-amazon.com/images/I/71BXAQEIL8L._AC_UF1000,1000_QL80_.jpg"
      />
    </div>
  </div>
</section>


      {/* Teacher-Student Interaction */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <Typography variant="h4" className="mb-8 font-bold">
            Learn, Hire, Teach
          </Typography>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Teachers can upgrade their skills, hire students, and create
            a seamless learning environment to foster growth and success.
          </p>
        </div>
      </section>
     
      {/* Enrollment Section */}
      <section>
        <EnrollmentCard />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto">
          <Typography variant="h4" className="text-center font-bold mb-8">
            Hear from Our Users
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              name="Ann!e"
              feedback="BrainTrain has transformed the way I teach my students. The games are fun and engaging!"
              image="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
            />
            <Testimonial
              name="N!&@nt"
              feedback="The Vedic Math section is a game-changer for mental calculations. Highly recommend!"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Cmx3rQtKCxm_Yk8wNbFwbQcYvWkVADrY7Q&s"
            />
            <Testimonial
              name="Rajeev"
              feedback="Learning and hiring through BrainTrain is seamless and highly effective."
              image="https://static.vecteezy.com/system/resources/thumbnails/038/962/274/small/ai-generated-eco-friendly-earth-background-planet-globe-earth-for-nature-protection-earth-day-world-environment-day-save-the-world-concept-photo.jpeg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} BrainTrain Education. All Rights Reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-white hover:text-indigo-500">
              Facebook
            </a>
            <a href="#" className="text-white hover:text-indigo-500">
              Twitter
            </a>
            <a href="#" className="text-white hover:text-indigo-500">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}



function Testimonial({ name, feedback, image }: { name: string; feedback: string; image: string }) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">

      <Image src={image} alt={name} width={80} height={90} className="rounded-full mx-auto" />
      <Typography variant="h6" className="mt-4 font-bold">
        {name}
      </Typography>
      <p className="text-gray-600 dark:text-gray-300 mt-2 italic">{feedback}</p>
    </div>
  );
}
