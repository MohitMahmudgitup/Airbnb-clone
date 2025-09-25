import React from "react";

const Reviews = () => {
    return (
        <div className="border rounded-xl p-4 flex items-center bg-white justify-between max-w-2xl shadow-sm">
            {/* Left side with icons and text */}
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center gap-2  px-4">
                    <img className="w-6  " src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/pdp-shared/components/LaurelItem/ic-system-gf-gold-left-laurel-32-3x.d074c7557225d2a0f3f1289a3dde7a7d.png" />
                    <div className="">
                        <p className="text-lg text-center  font-semibold leading-none">Guest</p>
                        <p className="text-lg text-center  font-semibold leading-none">favorite</p>
                    </div>

                    <img className="w-6 " src="http://a0.muscache.com/airbnb/static/packages/assets/frontend/pdp-shared/components/LaurelItem/ic-system-gf-gold-right-laurel-32-3x.f972b95c999d29e144d9ef970585906d.png" />

                </div>
                <p className="text-lg font-semibold  text-gray-700 ml-2">
                    One of the most loved homes on Airbnb, according to guests
                </p>
            </div>

            {/* Right side with rating and reviews */}
            <div className="flex items-center gap-6">
                <div className="text-right">
                    <p className="text-2xl text-center font-semibold">4.92</p>
                    <p className="text-lg text-black">★★★★★</p>
                </div>
                <div className="text-right">
                    <p className="text-2xl text-center font-semibold">212</p>
                    <p className="text-sm text-black">Reviews</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
