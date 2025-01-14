// import Image from 'next/image';
// import { Typography } from '@material-ui/core';

// // function FeatureCard({ title, description, image }: { title: string; description: string; image: string }) {
//     export default function FeatureCard({ title, description, image }: { title: string; description: string; image: string }) {

//         const isDarkMode = false; // or set it based on your theme logic
//     return (
//     <div className={`${isDarkMode ? "bg-gray-700" : "bg-white"} p-6 rounded-lg shadow-lg`}>
//         <div className={`${isDarkMode ? "bg-gray-700" : "bg-white"} p-6 rounded-lg shadow-lg`}>
//           <Image src={image} alt={title} width={80} height={80} className="mx-auto" />
//           <Typography variant="h6" className="mt-4 font-bold text-indigo-500 dark:text-indigo-300">
//             {title}
//           </Typography>
//           <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
//         </div>
//       </div>
//     );
// }
    

import Image from 'next/image';
import { Typography } from '@material-ui/core';

export default function FeatureCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  const isDarkMode = false; // Replace with your theme logic

  return (
    <div
      className={`${
        isDarkMode ?  "bg-white text-gray-800" : "bg-gray-800 text-white"
      } p-6 rounded-xl shadow-lg transform transition-all hover:shadow-2xl hover:scale-105`}
    >
      {/* Image */}
      <div className="flex justify-center items-center mb-4">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="rounded-full border-4 border-indigo-500"
        />
      </div>

      {/* Title */}
      <Typography
        variant="h6"
        className={`text-center font-bold ${
          isDarkMode ? "text-indigo-400" : "text-indigo-600"
        }`}
      >
        {title}
      </Typography>

      {/* Description */}
      <p
        className={`mt-4 text-center ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {description}
      </p>

      {/* CTA */}
      <div className="mt-6 flex justify-center">
        <button
          className={`${
            isDarkMode
              ? "bg-indigo-500 hover:bg-indigo-400 text-white"
              : "bg-indigo-600 hover:bg-indigo-500 text-white"
          } px-6 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-300`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
