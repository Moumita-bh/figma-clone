import React, { useState } from 'react';
import EnrollModal from './EnrollModal'; // Make sure the path is correct

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-10 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 ml-[-150px] mt-[-45px]">
          <div className="w-10 h-10 relative">
            <div className="absolute w-full h-full border-l-2 border-blue-500 rounded-full animate-spin-slow"></div>
          </div>
          <div className="text-left">
            <h1 className="text-blue-500 text-3xl font-bold tracking-widest">NLITE</h1>
            <p className="text-xs text-blue-400 tracking-widest leading-tight">LEARN INNOVATE<br />THRIVE</p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-8 font-medium text-gray-600 mt-[-50px] ml-180">
          <li className="text-blue-500 font-semibold cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Courses</li>
          <li className="hover:text-blue-500 cursor-pointer">Blogs</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact US</li>
        </ul>

        {/* Enroll Now Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#0C0843] text-white font-bold px-6 py-2 rounded-md hover:bg-blue-800 transition mr-[-170px] mt-[-50px]"
        >
          Enroll Now
        </button>
      </nav>

      <EnrollModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Navbar;