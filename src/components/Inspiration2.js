const Inspiration2 = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-32 py-6 text-sm bg-[#F7F7F7] text-gray-800">
      {/* Breadcrumb */}
      <div className="text-gray-500 text-xs mb-6">
        Airbnb &gt; Malaysia &gt; Kuala Lumpur &gt; Kuala Lumpur &gt; Bukit Nanas
      </div>

      {/* Explore section */}
      <div className="mb-8">
        <h2 className="text-base sm:text-lg font-semibold mb-4">
          Explore other options in and around Kuala Lumpur
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-6 sm:gap-x-8">
          {[
            "Kuala Lumpur",
            "Petaling District",
            "Johor Bahru",
            "Gombak",
            "Malacca",
            "Langkawi",
            "Johor Bahru District",
            "Georgetown",
            "Ipoh",
          ].map((place, i) => (
            <div key={i}>
              <p className="font-medium">{place}</p>
              <p className="text-gray-500 text-xs">Vacation rentals</p>
            </div>
          ))}
        </div>
      </div>

      {/* Other types of stays */}
      <div>
        <h2 className="text-base sm:text-lg font-semibold mb-4">
          Other types of stays on Airbnb
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6">
          {[
            "Bukit Nanas vacation rentals",
            "Bukit Nanas monthly stays",
            "Apartment vacation rentals in Kuala Lumpur",
            "Apartment vacation rentals in Federal Territory of Kuala Lumpur",
            "Vacation rentals with a pool in Kuala Lumpur",
            "Fitness-friendly vacation rentals in Kuala Lumpur",
            "Serviced apartment vacation rentals in Kuala Lumpur",
            "Vacation rentals with a pool in Federal Territory of Kuala Lumpur",
            "Serviced apartment vacation rentals in Federal Territory of Kuala Lumpur",
          ].map((stay, i) => (
            <p
              key={i}
              className="text-gray-800 hover:underline cursor-pointer text-sm sm:text-base"
            >
              {stay}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inspiration2;
