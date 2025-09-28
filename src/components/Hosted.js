import React from 'react';

const Hosted = () => {
  return (
    <div className="flex items-center space-x-3 font-sans mt-6 pb-6 border-b px-4 sm:px-0">
      {/* Profile Image */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/9131/9131478.png" // Replace with actual profile image URL
        alt="Host"
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex-shrink-0"
      />

      {/* Host Text Info */}
      <div>
        <div className="text-sm sm:text-base md:text-lg">
          <span className="font-semibold">Hosted</span> by Janice
        </div>
        <div className="text-xs sm:text-sm md:text-base text-gray-500">
          Superhost · 10 years hosting
        </div>
      </div>
    </div>
  );
};

export default Hosted;
