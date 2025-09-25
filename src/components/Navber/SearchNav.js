import React from "react";
import { Search } from "lucide-react";

const SearchNav = () => {
  return (
    <div className="flex items-center w-full mt-4 mb-9 h-16 max-w-7xl mx-auto bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden">
      {/* Where */}
      <div className="group hover:bg-[#EBEBEB] rounded-full flex justify-between items-center flex-1 min-w-[120px]">
        <div className="flex flex-col px-4   sm:px-6 md:px-8 py-4 cursor-pointer transition-colors">
          <span className="text-xs font-semibold text-gray-800">Where</span>
          <span className="text-sm md:text-base text-gray-500 font-normal truncate">
            Search destinations
          </span>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-8 bg-gray-300 group-hover:bg-transparent"></div>
      </div>

      {/* Check in */}
      <div className="hidden sm:flex group hover:bg-[#EBEBEB] rounded-full justify-between items-center flex-1  max-w-[130px]">
        <div className="flex flex-col px-4 sm:px-6 py-4 cursor-pointer transition-colors">
          <span className="text-xs font-semibold text-gray-800">Check in</span>
          <span className="text-sm md:text-base text-gray-500 font-normal">
            Add dates
          </span>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-8 bg-gray-300 group-hover:bg-transparent"></div>
      </div>

      {/* Check out */}
      <div className="hidden sm:flex group hover:bg-[#EBEBEB] rounded-full justify-between items-center flex-1  max-w-[130px]">
        <div className="flex flex-col px-4 sm:px-6 py-4 cursor-pointer transition-colors">
          <span className="text-xs font-semibold text-gray-800">Check out</span>
          <span className="text-sm md:text-base text-gray-500 font-normal">
            Add dates
          </span>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-8 bg-gray-300 group-hover:bg-transparent"></div>
      </div>

      {/* Who */}
      <div className="flex hover:bg-[#EBEBEB] rounded-full justify-between items-center flex-1 min-w-[120px]">
        <div className="flex flex-col pl-4 sm:pl-6 py-4 w-24 sm:w-36 cursor-pointer transition-colors">
          <span className="text-xs font-semibold text-gray-800">Who</span>
          <span className="text-sm text-gray-500 font-normal">Add guests</span>
        </div>

        {/* Search Button */}
        <div className="flex items-center justify-center bg-[#FF385C] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer hover:bg-[#E41C59] transition-colors m-2 flex-shrink-0">
          <Search size={18} />
        </div>
      </div>
    </div>
  );
};

export default SearchNav;
