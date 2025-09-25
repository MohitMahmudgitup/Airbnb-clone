import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ReviewCard() {
  const reviews = [
    {
      name: "Denisa",
      years: "3 years on Airbnb",
      date: "July 2025",
      text: "We enjoyed our stay. Great location, comfortable place and good facilities (pool, sauna, gym). The only issue was that the place had not been cleaned after the previous guests when …",
    },
    {
      name: "Alex",
      years: "5 years on Airbnb",
      date: "August 2025",
      text: "Amazing apartment with stunning city views. Everything was clean and modern. Would definitely book again!",
    },
    {
      name: "Maria",
      years: "2 years on Airbnb",
      date: "September 2025",
      text: "The host was very welcoming and responsive. The apartment is cozy and close to MRT station. Highly recommend!",
    },
  ];

  const ReviewItem = ({ review }) => (
    <div className="w-full sm:w-96 py-6 space-y-3">
      {/* User Info */}
      <div className="flex items-center space-x-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/9131/9131478.png"
          alt={review.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-800">{review.name}</p>
          <p className="text-xs text-black">{review.years}</p>
        </div>
      </div>

      {/* Rating + Date */}
      <div className="flex items-center space-x-2 mt-1 text-sm text-gray-600">
        <div className="flex text-gray-800">
          {[1, 2, 3, 4].map((i) => (
            <Star key={i} className="w-3 h-3 fill-current" />
          ))}
          <Star className="w-3 h-3 text-gray-400" />
        </div>
        <span className="font-medium">· {review.date}</span>
      </div>

      {/* Review Text */}
      <p className="text-sm font-medium text-gray-700">{review.text}</p>

      <button className="text-sm font-medium underline hover:text-gray-900">
        Show more
      </button>
    </div>
  );

  return (
    <div className="border-t border-b py-6">
      {/* Desktop: Grid */}
      <div className="hidden sm:grid grid-cols-2 gap-6">
        {reviews.map((review, idx) => (
          <ReviewItem key={idx} review={review} />
        ))}
      </div>

      {/* Mobile: Swiper */}
      <div className="sm:hidden">
        <Swiper spaceBetween={20} slidesPerView={1}>
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <ReviewItem review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
