import { Heart, Share2, Share2Icon } from "lucide-react";
import React from "react";
import { AiOutlineHolder } from "react-icons/ai";

const GalleryImage = () => {
  const gallery = {
    main: "https://picsum.photos/800/600?random=1",
    others: [
      "https://picsum.photos/400/300?random=2",
      "https://picsum.photos/400/300?random=3",
      "https://picsum.photos/400/300?random=4",
      "https://picsum.photos/400/300?random=5",
    ],
  };

  return (
    <div className="w-full py-6">
      <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-semibold ">Muji-style cozy master room to stay in KL</h1>
      </div>
        <div className="flex items-center space-x-2">
      {/* Share */}
      <button className="flex hover:bg-[#F7F7F7] px-2 py-2 rounded-md items-center text-sm cursor-pointer hover:opacity-70">
        <Share2Icon className="w-4 h-4 mr-1" />
        <span className="underline font-semibold ">Share</span>
      </button>
 
      {/* Save */}
      <button className="flex hover:bg-[#F7F7F7] px-2 py-2 rounded-md items-center text-sm cursor-pointer hover:opacity-70">
        <Heart className="w-4 h-4 mr-1" />
        <span className="underline font-semibold ">Save</span>
      </button>
    </div>


      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-xl overflow-hidden">
        {/* Left big image */}
        <div>
          <img
            src={gallery.main}
            alt="Main"
            className="w-full  h-80 object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
          />
        </div>

        {/* Right 2x2 grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          {gallery.others.map((img, i) => (
            <div
              key={i}
              className={`relative hover:bg-black overflow-hidden ${
                i === gallery.others.length - 1 ? " md:rounded-r-xl" : ""
              }`}
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="w-full h-[155px] object-cover "
              />

              {/* Button on very last image */}
              {i === gallery.others.length - 1 && (
                <button className="absolute flex items-center border border-black gap-2 bottom-5 right-5 bg-white px-3 py-1 text-sm rounded-lg font-medium shadow-md">
                  <AiOutlineHolder size={20} /> Show all photos
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
       <div className="flex flex-col items-start mb-6">
      <div>
        <h1 className="text-2xl font-semibold ">Private room in serviced apartment in Kuala Lumpur, Malaysia</h1>
      </div>
        <div className="flex items-center space-x-2">
    <p className="text-lg font-normal" > 2 guests . Studio . 1 bed . 0 shared baths</p>
    </div>


      </div>
    </div>
  );
};

export default GalleryImage;
