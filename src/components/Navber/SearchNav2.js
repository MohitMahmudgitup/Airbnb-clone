import React from 'react';
import { Search } from 'lucide-react';

const SearchNav2 = () => {
  return (
    <div className="flex items-center cursor-pointer justify-between border rounded-full hover:shadow-md shadow-sm px-2 pl-4 py-[6px] w-[390px] bg-white">
      {/* Left icon */}
      <div className="flex items-center space-x-1">
        <img
          src="https://png.pngtree.com/png-vector/20240319/ourmid/pngtree-minimalist-brown-wooden-cabin-real-estate-png-image_12011929.png"
          alt="home icon"
          className=" h-8"
        />
      </div>

      {/* Center text */}
      <div className="flex flex-1 pr-4 items-center justify-between text-sm font-medium text-gray-700">
        <span className="px-2  font-semibold   border-r">Anywhere</span>
        <span className="px-2  font-semibold border-r">Anytime</span>
        <span className="px-2  font-semibold  ">Add guests</span>
      </div>

      {/* Search button */}
      <button className="bg-rose-500 text-white p-2 rounded-full">
        <Search size={17} />
      </button>
    </div>
  );
};

export default SearchNav2;
