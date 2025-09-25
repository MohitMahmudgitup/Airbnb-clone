const Reserve = () => {
  return (
   
    <div className="w-[360px] flex sticky top-10 flex-col left-10 font-sans pb-12">
      {/* Rare Find Badge */}
      <div className="flex items-center  justify-center gap-2 bg-white shadow-xl text-black text-sm font-medium py-4 px-3 rounded-2xl mb-5">
        <span className="text-xl">💎</span>
        <span>Rare find! This place is usually booked</span>
      </div>

      {/* Card */}
      <div className=" rounded-3xl bg-white  shadow-2xl p-5">
        {/* Price */}
        <div className="text-lg mb-4">
          
          <span className="text-black text-xl font-semibold"> Add dates for prices</span>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2  text-xs font-semibold text-gray-700 ">
          <div className="border rounded-md p-2">
            <p className="uppercase text-gray-500 text-[11px]">Check-in</p>
            <p>11/7/2025</p>
          </div>
          <div className="border rounded-md p-2">
            <p className="uppercase text-gray-500 text-[11px]">Checkout</p>
            <p>11/9/2025</p>
          </div>
        </div>

        {/* Guests */}
        <div className="border rounded-md p-2 mb-4">
          <p className="uppercase  text-[11px]">Guests</p>
          <select className="w-full text-sm outline-none">
            <option>1 guest</option>
            <option>2 guests</option>
            <option>3 guests</option>
          </select>
        </div>

        {/* Reserve Button */}
        <button className="w-full bg-[#E51D55] hover:bg-pink-700 text-white font-semibold py-3 rounded-full">
          Reserve
        </button>

        <p className="text-center text-sm text-gray-600 mt-2">
          You won't be charged yet
        </p>
      </div>

      {/* Report Link */}
      <div className="flex justify-center mt-3">
        <a href="#" className="text-sm font-semibold underline text-gray-600 hover:underline">
           Report this listing
        </a>
      </div>
    </div>

  );
};

export default Reserve;
