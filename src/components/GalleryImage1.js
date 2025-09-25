import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";

const GalleryImage1 = () => {
  const images = [
    "https://picsum.photos/800/600?random=1",
    "https://picsum.photos/800/600?random=2",
    "https://picsum.photos/800/600?random=3",
    "https://picsum.photos/800/600?random=4",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden shadow-lg relative">
      {/* Top Bar */}
      <div className="h-16 flex justify-between items-center px-6  top-0 left-0 w-full z-20 ">
        <Link to={"/"}>
          <FaArrowLeft size={20} className="cursor-pointer" />
        </Link>
        <div className="flex gap-4">
          <MdOutlineFileDownload size={20} className="cursor-pointer" />
          <FcLike size={20} className="cursor-pointer" />
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-[400px] sm:h-[500px] relative"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full">
              <img
                src={src}
                alt={`Room ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Image Counter (Bottom Right) */}
      <div className="absolute bottom-10 right-4 bg-black/70 text-white text-xs sm:text-sm px-2 py-1 rounded-md z-20">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default GalleryImage1;
