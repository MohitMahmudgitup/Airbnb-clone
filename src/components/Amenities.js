import {
  Utensils,
  Briefcase,
  Waves,
  Snowflake,
  Microwave,
  Wifi,
  Car,
  Tv,
  Wind,
  ShieldAlert,
} from "lucide-react";

export default function Amenities() {
  const amenities = [
    { icon: <Utensils className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Kitchen" },
    { icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Dedicated workspace" },
    { icon: <Waves className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Pool" },
    { icon: <Snowflake className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Air conditioning" },
    { icon: <Microwave className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Microwave" },
    { icon: <Wifi className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Wifi" },
    { icon: <Car className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Free parking on premises" },
    { icon: <Tv className="w-5 h-5 sm:w-6 sm:h-6" />, label: "TV" },
    { icon: <Wind className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Hair dryer" },
    {
      icon: <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: "Carbon monoxide alarm",
      unavailable: true,
    },
  ];

  return (
    <div className="space-y-6 py-6 border-b">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
        What this place offers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 sm:gap-6 text-gray-700 text-sm sm:text-base">
        {amenities.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center space-x-4 ${
              item.unavailable ? "line-through text-gray-400" : ""
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <button className="px-5 w-full sm:w-56 py-2.5 sm:py-3 bg-gray-100 rounded-xl text-sm sm:text-base font-medium text-gray-700 hover:bg-gray-200 transition">
        Show all 20 amenities
      </button>
    </div>
  );
}
