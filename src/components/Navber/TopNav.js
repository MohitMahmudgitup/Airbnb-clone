import  { useEffect, useRef, useState } from "react";
import { Globe, Menu } from "lucide-react";
import SearchNav from "./SearchNav";
import SearchNav2 from "./SearchNav2";
import { Link, useLocation } from "react-router-dom";
import MenuOpen from "./MenuOpen";
const TopNav = () => {
    const location = useLocation();

  // চেক করছি রুটটা /rooms/:id কিনা
  const isRoomPage = location.pathname.startsWith("/rooms/");
  console.log(isRoomPage)
 
    const [hideMiddleNav, setHideMiddleNav] = useState(isRoomPage);
    const [menuOpen, setMenuOpen] = useState(false);
    const lastScrollYRef = useRef(0);

    // Scroll logic
useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const lastScrollY = lastScrollYRef.current;

    if (currentScrollY === 0) {
      // At the very top → reset to normal
      setHideMiddleNav(isRoomPage);
    } else if (currentScrollY - lastScrollY > 100) {
      // Scrolling down
      setHideMiddleNav(true);
      lastScrollYRef.current = currentScrollY;
    } else if (lastScrollY - currentScrollY > 100) {
      // Scrolling up
      setHideMiddleNav(true);
      lastScrollYRef.current = currentScrollY;
    }
  };

  lastScrollYRef.current = window.scrollY;
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


    return (
        <div className={`w-full ${isRoomPage ? "bg-white " :" bg-[#F7F7F7]"}  flex items-start justify-between px-7   z-50  shadow-sm`}>
            {/* Left: Logo */}
            <Link to={"/"} className="flex items-center mt-4  ">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                    alt="Airbnb"
                    className=" w-28 "
                    loading="lazy"
                />
            </Link>

            {/* Middle: Navigation */}
            <div className="flex justify-center flex-col ml-24      w-[65%]">
                {/* Middle Nav (smooth hide/show) */}
                <div
                    className={`flex items-center justify-center gap-8 transition-all duration-500 ease-in-out transform ${hideMiddleNav
                            ? "-translate-y-10 opacity-0 pointer-events-none"
                            : "translate-y-0 opacity-100"
                        }`}
                >
                    {/* Homes */}
                    <div className="flex flex-col items-center cursor-pointer">
                        <div className="flex gap-1 justify-center items-center">
                            <img
                                src="https://png.pngtree.com/png-vector/20240319/ourmid/pngtree-minimalist-brown-wooden-cabin-real-estate-png-image_12011929.png"
                                alt="Homes"
                                className="h-10"
                                loading="lazy"
                            />
                            <p className="text-sm font-semibold">Homes</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="h-[3px] w-20 bg-black mt-2 rounded"></div>
                        </div>
                    </div>

                    {/* Experiences */}
                    <div className="flex flex-col items-center cursor-pointer">
                        <div className="flex gap-1 justify-center items-center">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/057/153/690/small/vibrant-vintage-fiery-red-hot-air-balloon-isolated-on-transparent-background-detailed-free-png.png"
                                alt="Experiences"
                                className="h-10 transition-transform duration-300 ease-in-out hover:scale-110"
                                loading="lazy"
                            />
                            <p className="text-sm text-[#747474] font-normal">Experiences</p>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col items-center cursor-pointer">
                        <div className="flex justify-center items-center">
                            <img
                                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-bar-icons/original/3d67e9a9-520a-49ee-b439-7b3a75ea814d.png?im_w=240"
                                alt="Services"
                                className="h-16 transition-transform duration-300 ease-in-out hover:scale-110"
                                loading="lazy"
                            />
                            <p className="text-sm text-[#747474] font-normal">Services</p>
                        </div>
                    </div>
                </div>

                {/* SearchNav container */}
                <div className="mt-1 relative">
                    <div
                        className={`transition-all duration-500 ease-in-out transform ${hideMiddleNav
                                ? "scale-y-0 opacity-0 h-0 pointer-events-none"
                                : "scale-y-100 opacity-100"
                            } origin-top`}
                    >
                        <SearchNav />
                    </div>
                    <div
                        className={`absolute -top-12 left-56 w-full transition-all duration-500 ease-in-out transform ${hideMiddleNav
                                ? "scale-y-100 opacity-100"
                                : "scale-y-0 opacity-0 pointer-events-none"
                            } origin-top`}
                    >
                        <SearchNav2 />
                    </div>
                </div>
            </div>

            {/* Right: Buttons */}
            <div className="flex  mt-4  items-center gap-4 relative">
                <button className="text-sm  hover:bg-[#F7F7F7] rounded-full px-3 py-2 font-medium ">
                    Become a host
                </button>
                <button className="p-3 rounded-full bg-[#EBEBEB] hover:bg-[#e2e2e2] transition-colors">
                    <Globe size={16} />
                </button>
                <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="p-3 rounded-full bg-[#EBEBEB] hover:bg-[#e2e2e2] transition-colors"
                >
                    <Menu size={16} />
                </button>

                {/* Dropdown */}
                {menuOpen && (
                    <MenuOpen/>
                )}

            </div>
        </div>
    );
};

export default TopNav;
