import { Calendar, Key, Waves } from "lucide-react";

export default function Highlights() {
  const items = [
    {
      icon: <Waves className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />,
      title: "Dive right in",
      description: "This is one of the few places in the area with a pool.",
    },
    {
      icon: <Key className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />,
      title: "Self check-in",
      description: "Check yourself in with the lockbox.",
    },
    {
      icon: <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />,
      title: "Free cancellation before Oct 12",
      description: "Get a full refund if you change your mind.",
    },
  ];

  return (
    <div className="py-6 border-b">
      <div className="grid grid-cols-1  gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start space-x-4">
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base md:text-lg text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
