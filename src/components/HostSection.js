import { Star, Award, Gift, MapPin } from "lucide-react";

export default function HostSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 py-12 border-t">
      {/* Host Card */}
      <div className="space-y-8 lg:w-[35%] w-full">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
          Meet your host
        </h2>

        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
          <div className="flex flex-col items-center text-center sm:text-left">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9131/9131478.png"
              alt="Host"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="mt-3">
              <p className="font-semibold text-gray-900 text-lg">Janice</p>
              <p className="text-sm text-gray-500 flex items-center justify-center sm:justify-start">
                <Award className="w-4 h-4 mr-1" /> Superhost
              </p>
            </div>
          </div>

          <div className="flex justify-between w-full sm:w-auto sm:space-x-6 text-sm text-gray-700">
            <div className="text-center sm:text-left">
              <p className="font-semibold">1890</p>
              <p>Reviews</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-semibold flex items-center justify-center sm:justify-start">
                4.8 <Star className="w-4 h-4 ml-1 fill-current" />
              </p>
              <p>Rating</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-semibold">10</p>
              <p>Years hosting</p>
            </div>
          </div>
        </div>

        {/* Fun facts */}
        <div className="space-y-2 text-sm text-gray-700">
          <p className="flex items-center text-base">
            <Gift className="w-4 h-4 mr-2" /> Born in the 80s
          </p>
          <p className="flex items-center text-base">
            <MapPin className="w-4 h-4 mr-2" /> Where I went to school: KL
          </p>
        </div>

        {/* Bio */}
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Hi there :) I am Janice, I am friendly and warm by nature and have a
          strong passion and compassion towards animals. I believe the world can
          be a better place with love and kindness to one another. I believe in
          bringing this kindness to my homes and to give my guest the best
          experience I can. Looking forward to host you and safe travels :)
        </p>
      </div>

      {/* Right Column */}
      <div className="space-y-6 lg:pl-10 flex-1">
        <div>
          <h3 className="font-semibold text-gray-900">Janice is a Superhost</h3>
          <p className="text-sm text-gray-600">
            Superhosts are experienced, highly rated hosts who are committed to
            providing great stays for guests.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Co-hosts</h3>
          <div className="flex items-center space-x-2 mt-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9131/9131478.png"
              alt="Co-host"
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="text-sm text-gray-700">Rafiaah</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Host details</h3>
          <p className="text-sm text-gray-600">Response rate: 100%</p>
          <p className="text-sm text-gray-600">Responds within an hour</p>
        </div>

        <button className="px-5 py-3 w-full sm:w-32 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200">
          Message host
        </button>

        <p className="text-xs text-gray-500">
          To help protect your payment, always use Airbnb to send money and
          communicate with hosts.
        </p>
      </div>
    </div>
  );
}
