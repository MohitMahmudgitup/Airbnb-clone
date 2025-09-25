import React from "react";

const ThingsToKnow = () => {
  return (
    <div className="py-10 border-t">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-900">
        Things to know
      </h2>

      <div className="flex flex-col gap-8 sm:flex-row justify-between  text-gray-700">
        {/* House rules */}
        <div>
          <h3 className="font-medium text-lg mb-3">House rules</h3>
          <p className="text-base py-1">Check-in after 2:00 PM</p>
          <p className="text-base py-1">Checkout before 11:00 AM</p>
          <p className="text-base py-1">3 guests maximum</p>
          <button className="mt-3 text-black font-medium flex items-center hover:underline">
            <span className="text-base">Show more</span>
            <span className="ml-1 text-lg">›</span>
          </button>
        </div>
        <div className="border-b sm:border-none"></div>
        {/* Safety & property */}
        <div>
          <h3 className="font-medium text-lg mb-3">Safety & property</h3>
          <p className="text-base py-1">Smoke alarm</p>
          <p className="text-base py-1">Carbon monoxide alarm</p>
          <p className="text-base py-1">Security cameras on property</p>
          <button className="mt-3 text-black font-medium flex items-center hover:underline">
            <span className="text-base">Show more</span>
            <span className="ml-1 text-lg">›</span>
          </button>
        </div>
        <div className="border-b sm:border-none"></div>

        {/* Cancellation policy */}
        <div>
          <h3 className="font-medium text-lg mb-3">Cancellation policy</h3>
          <p className="text-base py-1">Free cancellation before Oct 12</p>
          <p className="text-base py-1">Partial refund after that date</p>
          <p className="text-base py-1">Non-refundable 24h before check-in</p>
          <button className="mt-3 text-black font-medium flex items-center hover:underline">
            <span className="text-base">Show more</span>
            <span className="ml-1 text-lg">›</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThingsToKnow;
