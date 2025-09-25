import { CheckCircle, Key, MessageSquare, Map, Tag, SprayCan } from "lucide-react";

export default function RatingOverview() {
  const categories = [
    { icon: <SprayCan className="w-8 h-8" />, label: "Cleanliness", rating: 4.9 },
    { icon: <CheckCircle className="w-8 h-8" />, label: "Accuracy", rating: 4.9 },
    { icon: <Key className="w-8 h-8" />, label: "Check-in", rating: 4.8 },
    { icon: <MessageSquare className="w-8 h-8" />, label: "Communication", rating: 4.9 },
    { icon: <Map className="w-8 h-8" />, label: "Location", rating: 4.9 },
    { icon: <Tag className="w-8 h-8" />, label: "Value", rating: 4.9 },
  ];

  return (
    <div className="space-y-8 text-center border-t py-12">
      {/* Top Rating Section */}
      <div>
        <div className="flex justify-center items-center space-x-4 mb-2 flex-wrap">
          <img
            className="w-16 sm:w-24"
            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/78b7687c-5acf-4ef8-a5ea-eda732ae3b2f.png"
          />
          <h2 className="text-5xl sm:text-[90px] pb-4 sm:pb-8 font-semibold text-gray-900">
            4.84
          </h2>
          <img
            className="w-16 sm:w-24"
            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/b4005b30-79ff-4287-860c-67829ecd7412.png"
          />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Guest favorite</h3>
        <p className="text-gray-400 text-center text-sm sm:text-lg max-w-xl sm:max-w-4xl mx-auto leading-snug">
          This home is a guest favorite based on ratings, reviews, and reliability
        </p>
      </div>

      {/* Overall rating bar */}
      <div className="sm:flex hidden justify-center items-center py-6 space-x-8 text-left">
        <div>
          <h4 className="text-sm font-medium text-gray-800 mb-2">Overall rating</h4>
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center space-x-2 text-xs text-gray-600">
              <span>{star}</span>
              <div className="w-28 h-1 rounded-full bg-gray-200">
                {star === 5 && <div className="h-1 bg-gray-800 w-10/12"></div>}
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="flex gap-6 text-sm ">
          {categories.map((item, idx) => (

            <>
            <div className="border"></div>
            <div key={idx} className="flex flex-col pr-6  space-y-4">
                <div>

              <p className="font-medium text-start text-gray-800">{item.label}</p>
              <span className="font-semibold text-base text-gray-600 ">{item.rating}</span>

                </div>
                <div>
              {item.icon}

                </div>
            </div>
            
            
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
