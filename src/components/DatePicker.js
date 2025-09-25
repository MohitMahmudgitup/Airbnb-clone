import { useState } from "react";
import { Calendar } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function DatePicker() {
  const [selectedDates, setSelectedDates] = useState([17, 19]);

  const daysOct = Array.from({ length: 31 }, (_, i) => i + 1);
  const daysNov = Array.from({ length: 30 }, (_, i) => i + 1);

  const toggleDate = (day) => {
    if (selectedDates.includes(day)) {
      setSelectedDates(selectedDates.filter((d) => d !== day));
    } else {
      setSelectedDates([...selectedDates, day]);
    }
  };

  // Calendar month component
  const MonthGrid = ({ month, year, days, selectable }) => (
    <div className="w-full">
      <div className="text-center font-medium text-gray-800 mb-2">
        {month} {year}
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-700">
        {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
          <div key={d} className="font-medium text-gray-500">
            {d}
          </div>
        ))}
        {days.map((day) => (
          <button
            key={day}
            onClick={() => selectable && toggleDate(day)}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition
              ${
                selectable && selectedDates.includes(day)
                  ? "bg-black text-white"
                  : selectable
                  ? "hover:bg-gray-200"
                  : ""
              }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 border-t py-12">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          2 nights in Kuala Lumpur
        </h2>
        <p className="text-xs text-gray-600">Oct 17, 2025 - Oct 19, 2025</p>
      </div>

      {/* Desktop view: 2 months side by side */}
      <div className="hidden sm:flex items-start space-x-10">
        <MonthGrid month="October" year={2025} days={daysOct} selectable />
        <MonthGrid month="November" year={2025} days={daysNov} />
      </div>

      {/* Mobile view: Swiper (1 month per slide) */}
      <div className="sm:hidden">
        <Swiper spaceBetween={20} slidesPerView={1}>
          <SwiperSlide>
            <MonthGrid month="October" year={2025} days={daysOct} selectable />
          </SwiperSlide>
          <SwiperSlide>
            <MonthGrid month="November" year={2025} days={daysNov} />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-700">
        <Calendar className="w-5 h-5" />
        <button
          onClick={() => setSelectedDates([])}
          className="underline hover:text-gray-900"
        >
          Clear dates
        </button>
      </div>
    </div>
  );
}
