import React, { useState } from 'react';

const EnrollModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#0C0843]">Enroll Now</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name*</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number*</label>
            <input 
              type="tel" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Id</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Current Status</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" name="status" className="form-radio text-blue-500" value="Working Professional" />
                <span className="ml-2">Working Professional</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="status" className="form-radio text-blue-500" value="Studying" />
                <span className="ml-2">Studying</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Looking For Job</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Preferred Date</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select a date</option>
              <option value="01/02/2024">01/02/2024</option>
              <option value="11/02/2024">11/02/2024</option>
              <option value="21/02/2024">21/02/2024</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Course</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select a course</option>
              {/* Add your course options here */}
            </select>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#0C0843] text-white font-bold py-2 px-4 rounded-md hover:bg-blue-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollModal;