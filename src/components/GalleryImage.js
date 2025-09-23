import React from "react";

const GalleryImage = () => {
  // Random JSON data (replace with real API if needed)
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
    <div className="  m-auto">
      <div className="grid grid-cols-2 px-36 py-6 gap-2 rounded-xl overflow-hidden">
        {/* Left big image */}
        <div className="col-span-1">
          <img
            src={gallery.main}
            alt="Main"
            className="w-full h-full object-cover rounded-l-xl"
          />
        </div>

        {/* Right 2x2 grid */}
        <div className="grid grid-rows-2 gap-2">
          {gallery.others.map((img, i) => (
            <div key={i} className="grid grid-cols-2 gap-2">
              <div className="overflow-hidden  relative">
                <img
                  src={gallery.others[i]}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {i + 1 < gallery.others.length && (
                <div className="overflow-hidden rounded-r-xl relative">
                  <img
                    src={gallery.others[i + 1]}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Button on very last image */}
                  {i + 1 === gallery.others.length - 1 && (
                    <button className="absolute bottom-2 right-2 bg-white px-3 py-1 text-sm rounded shadow-md">
                      Show all photos
                    </button>
                  )}
                </div>
              )}
            </div>
          )).slice(0, 2)} 
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
