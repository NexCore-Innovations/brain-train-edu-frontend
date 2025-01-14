import React from "react";
import { useRouter } from "next/navigation";

const EnrollmentCard = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-4">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-lg">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center py-6">
          <h2 className="text-2xl font-bold">We are Hiring Teachers!</h2>
          <p className="text-sm mt-2">Shape the future by joining our team of educators.</p>
        </div>
        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Why Join Us?</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔</span>
              Flexible working hours and remote options.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔</span>
              Competitive pay with performance bonuses.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔</span>
              Opportunity to teach and mentor enthusiastic students.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔</span>
              Access to innovative tools like Abacus, Rubiks Cube, and Vedic Math games.
            </li>
          </ul>
          <p className="mt-6 text-gray-700 text-sm">
            Join a vibrant community of educators and empower students to excel in academics and life skills.
          </p>
        </div>
        {/* Call-to-Action */}
        <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-center">
      {/* <Link href={"/registration/registration"}> */}
          <button
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            // onClick={() => alert("Enrollment Form Coming Soon!")}
            onClick={() => router.push("/registration")}
          >
            Enroll Now
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default EnrollmentCard;


