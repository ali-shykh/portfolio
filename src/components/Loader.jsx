// Loader.js
import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#efefef] bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-x-4 border-[#102327]"></div>
    </div>
  );
};

export default Loader;
