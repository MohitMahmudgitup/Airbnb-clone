import React from "react";
import { Globe, DollarSign } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#F7F7F7]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm text-gray-700">
        {/* Support */}
       
        <div>
          <h3 className="font-semibold mb-4 text-base">Support</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Help Center</li>
            <li className="hover:underline cursor-pointer">Get help with a safety issue</li>
            <li className="hover:underline cursor-pointer">AirCover</li>
            <li className="hover:underline cursor-pointer">Anti-discrimination</li>
            <li className="hover:underline cursor-pointer">Disability support</li>
            <li className="hover:underline cursor-pointer">Cancellation options</li>
            <li className="hover:underline cursor-pointer">Report neighborhood concern</li>
          </ul>
        </div>
 <div className="border-t sm:hidden block"></div>
        {/* Hosting */}
        <div>
          <h3 className="font-semibold mb-4 text-base">Hosting</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Airbnb your home</li>
            <li className="hover:underline cursor-pointer">Airbnb your experience</li>
            <li className="hover:underline cursor-pointer">Airbnb your service</li>
            <li className="hover:underline cursor-pointer">AirCover for Hosts</li>
            <li className="hover:underline cursor-pointer">Hosting resources</li>
            <li className="hover:underline cursor-pointer">Community forum</li>
            <li className="hover:underline cursor-pointer">Hosting responsibly</li>
            <li className="hover:underline cursor-pointer">Airbnb-friendly apartments</li>
            <li className="hover:underline cursor-pointer">Join a free Hosting class</li>
            <li className="hover:underline cursor-pointer">Find a co-host</li>
          </ul>
        </div>
 <div className="border-t sm:hidden block"></div>
        {/* Airbnb */}
        <div>
          <h3 className="font-semibold mb-4 text-base">Airbnb</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">2025 Summer Release</li>
            <li className="hover:underline cursor-pointer">Newsroom</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Investors</li>
            <li className="hover:underline cursor-pointer">Gift cards</li>
            <li className="hover:underline cursor-pointer">Airbnb.org emergency stays</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-200 mx-6"></div>

      {/* Bottom Bar */}
      <div className="px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        {/* Left */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 text-center md:text-left">
          <span className="cursor-pointer">© 2025 Airbnb, Inc.</span>
          <span className="hidden md:inline">•</span>
          <span className="cursor-pointer">Terms</span>
          <span className="hidden md:inline">•</span>
          <span className="cursor-pointer">Sitemap</span>
          <span className="hidden md:inline">•</span>
          <span className="cursor-pointer">Privacy</span>
          <span className="hidden md:inline">•</span>
          <span className="cursor-pointer">Your Privacy Choices</span>
        </div>

        {/* Right */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-5">
          <div className="flex items-center gap-2 cursor-pointer">
            <Globe size={16} />
            <span>English (US)</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <DollarSign size={16} />
            <span>USD</span>
          </div>
          <div className="flex gap-4 cursor-pointer">
            <FaFacebook size={20} />
            <RiTwitterXLine size={20} />
            <TiSocialInstagram size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
