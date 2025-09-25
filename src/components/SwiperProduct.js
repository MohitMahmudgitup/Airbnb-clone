import React, { useState, useRef, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function SwiperProduct({ homes, slidesPerView = 7 , sectionTitle = "Popular homes" }) {
    const [favorites, setFavorites] = useState([]);
    const [errorHomes, setErrorHomes] = useState([]);

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const toggleFavorite = (id) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter(fav => fav !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    };

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.destroy();
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <div className="max-w-7xl relative mx-auto py-5 px-2  sm:px-0 md:px-2 ">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                {sectionTitle}<IoIosArrowForward size={15} />
            </h2>

            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination]}
                spaceBetween={15}
                slidesPerView={slidesPerView}
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 9 },   // Mobile
                    480: { slidesPerView: 2, spaceBetween: 10 },   // Small screens
                    960: { slidesPerView: 4, spaceBetween: 15 },   // Tablets
                    1024: { slidesPerView: 5, spaceBetween: 15 },  // Small laptops
                    1280: { slidesPerView: 6, spaceBetween: 20 },  // Large laptops
                    1536: { slidesPerView: 7, spaceBetween: 20 },  // Desktops
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {homes.map(home => (
                    <SwiperSlide key={home.id} >
                        <div className="relative w-full h-64 rounded-lg overflow-hidden ">
                            <Link to={`/rooms/${home.id}`}>
                                <img
                                    src={home.image}
                                    alt={home.title}
                                    className="w-full h-48 object-cover rounded-3xl"
                                />
                            </Link>
                            <div className="absolute top-3 left-3 bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                                Guest favorite
                            </div>
                            <button
                                className="absolute top-3 right-4 text-white"
                                onClick={() => toggleFavorite(home.id)}
                            >
                                <Heart
                                    className={`w-6 h-6 transition-transform duration-300 hover:scale-110 ease-out ${
                                        favorites.includes(home.id)
                                            ? 'fill-red-500 text-red-500'
                                            : 'stroke-white'
                                    }`}
                                />
                            </button>
                            {errorHomes.includes(home.id) && (
                                <div className="absolute bottom-12 left-2 right-2 bg-red-100 text-red-700 text-sm px-2 py-1 rounded">
                                    Something went wrong!
                                </div>
                            )}
                            <div className="bg-white">
                                <h3 className="font-normal text-sm">{home.title}</h3>
                                <p className="text-xs text-gray-500">
                                    {home.price} · ★ {home.rating}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                ref={prevRef}
                className=" hidden absolute top-11 right-7 -translate-y-1/2 z-40 w-6 h-6 bg-[#EBEBEB] rounded-full sm:flex items-center justify-center cursor-pointer hover:bg-gray-300"
            >
                <IoIosArrowBack size={15} />
            </button>
            <button
                ref={nextRef}
                className=" hidden absolute top-11 right-0 -translate-y-1/2 z-40 w-6 h-6 bg-[#EBEBEB] rounded-full sm:flex items-center justify-center cursor-pointer hover:bg-gray-300"
            >
                <IoIosArrowForward size={15} />
            </button>
        </div>
    );
}
