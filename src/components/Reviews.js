import React from "react";

const Reviews = () => {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col sm:text-start text-center  sm:items-start mb-6 px-4 sm:px-0">
        <h1 className="text-2xl font-semibold">
          Private room in serviced apartment in Kuala Lumpur, Malaysia
        </h1>
        <p className="text-sm sm:text-black text-zinc-400   sm:text-lg font-normal mt-2">
          2 guests · Studio · 1 bed · 0 shared baths
        </p>
      </div>

      {/* Highlighted Review Box */}
      <div className="sm:border  rounded-xl p-4 flex flex-col sm:flex-row  sm:items-center bg-white justify-between w-full sm:max-w-2xl shadow-sm gap-4">
        {/* Left side with icons and text */}
        <div className="sm:flex hidden items-center gap-2">
          <div className="flex items-center justify-center gap-2 px-2 sm:px-4">
            <img
              className="w-5 sm:w-6"
              src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/pdp-shared/components/LaurelItem/ic-system-gf-gold-left-laurel-32-3x.d074c7557225d2a0f3f1289a3dde7a7d.png"
              alt="left laurel"
            />
            <div className="text-center">
              <p className="text-sm sm:text-lg font-semibold leading-none">
                Guest
              </p>
              <p className="text-sm sm:text-lg font-semibold leading-none">
                favorite
              </p>
            </div>
            <img
              className="w-5 sm:w-6"
              src="http://a0.muscache.com/airbnb/static/packages/assets/frontend/pdp-shared/components/LaurelItem/ic-system-gf-gold-right-laurel-32-3x.f972b95c999d29e144d9ef970585906d.png"
              alt="right laurel"
            />
          </div>
          <p className="text-sm hidden sm:block sm:text-lg font-semibold text-gray-700 ml-2">
            One of the most loved homes on Airbnb, according to guests
          </p>
        </div>

        {/* Right side with rating and reviews */}
        <div className="flex items-center justify-center gap-6 ">
          <div className="text-center">
            <p className="text-lg sm:text-2xl font-semibold">4.92</p>
            <p className="text-sm sm:text-lg text-black">★★★★★</p>
          </div>
           <div className=" sm:hidden flex items-center gap-2">
          <div className="flex items-center justify-center gap-2 px-2 sm:px-4">
            <img
              className="w-5 sm:w-6"
              src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/pdp-shared/components/LaurelItem/ic-system-gf-gold-left-laurel-32-3x.d074c7557225d2a0f3f1289a3dde7a7d.png"
              alt="left laurel"
            />
            <div className="text-center">
              <p className="text-sm sm:text-lg font-semibold leading-none">
                Guest
              </p>
              <p className="text-sm sm:text-lg font-semibold leading-none">
                favorite
              </p>
            </div>
            <img
              className="w-5 sm:w-6"
              src="http://a0.muscache.com/airbnb/static/packages/assets/frontend/pdp-shared/components/LaurelItem/ic-system-gf-gold-right-laurel-32-3x.f972b95c999d29e144d9ef970585906d.png"
              alt="right laurel"
            />
          </div>
          <p className="text-sm hidden sm:block sm:text-lg font-semibold text-gray-700 ml-2">
            One of the most loved homes on Airbnb, according to guests
          </p>
        </div>
          
          <div className="text-center">
            <p className="text-lg sm:text-2xl font-semibold">212</p>
            <p className="text-xs sm:text-sm text-black">Reviews</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
