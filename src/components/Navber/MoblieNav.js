import React, { useEffect, useRef } from "react";
import { Search } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MoblieNav = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hide & collapse nav section
      gsap.to(".nav-section", {
        y: -20,
        opacity: 0,
        height: 0,
        padding: 0,
        margin: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: navRef.current,
          start: "top top",
          end: "+=200",
          scrub: true,
        },
      });

      // Shrink search bar a bit
      gsap.to(".search-bar", {
        scale: 0.95,
        duration: 0.5,
        scrollTrigger: {
          trigger: navRef.current,
          start: "top top",
          end: "+=150",
          scrub: true,
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={navRef} className="w-full bg-gray-50 shadow-md sticky top-0 z-50 overflow-hidden">
      {/* Search bar */}
      <div className="flex items-center justify-center px-2 py-3">
        <div className="search-bar flex bg-white shadow-lg items-center gap-2 justify-center w-full h-10 rounded-full px-4 ">
          <Search size={14} className="text-gray-500" />
          <p>Start your search</p>
        </div>
      </div>

      {/* Navigation icons */}
      <div className="nav-section flex justify-around items-center py-3 text-sm text-gray-700">
        <div className="flex flex-col items-center cursor-pointer">
          <img
            src="https://png.pngtree.com/png-vector/20240319/ourmid/pngtree-minimalist-brown-wooden-cabin-real-estate-png-image_12011929.png"
            alt="Homes"
            className="h-10"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/057/153/690/small/vibrant-vintage-fiery-red-hot-air-balloon-isolated-on-transparent-background-detailed-free-png.png"
            alt="Experiences"
            className="h-10 transition-transform duration-300 ease-in-out hover:scale-110"
            loading="lazy"
          />
          
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <img
            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-bar-icons/original/3d67e9a9-520a-49ee-b439-7b3a75ea814d.png?im_w=240"
            alt="Services"
            className="h-10 transition-transform duration-300 ease-in-out hover:scale-110"
            loading="lazy"
          />
         
        </div>
      </div>
      {/* Navigation icons */}
      <div className=" flex justify-around items-center   text-sm text-gray-700">
        <div className="flex flex-col items-center cursor-pointer">
          <span className="mt-1">Homes</span>
          <div className=" border-b border-black w-12 mt-3 "></div>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <span className="mt-1">Experiences</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <span className="mt-1">Services</span>
        </div>
      </div>
    </div>
  );
};

export default MoblieNav;
