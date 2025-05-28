import React from "react";

const TopBar = ({ onGetStarted }) => {
  return (
    <div className="flex justify-between items-center px-8 py-4 border-b border-gray-200 bg-white w-full">
      <h1 className="text-4xl font-extrabold slim-van-font">FISIYO</h1>
      <button
        onClick={onGetStarted}
        className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Get Started
      </button>
    </div>
  );
};

export default TopBar;
