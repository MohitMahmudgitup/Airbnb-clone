import React from "react";
import { Globe, DollarSign } from "lucide-react"; // icons
import { FaFacebook } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="  bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto  py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer text-base">Help Center</li>
            <li className="hover:underline cursor-pointer text-base">Get help with a safety issue</li>
            <li className="hover:underline cursor-pointer text-base">AirCover</li>
            <li className="hover:underline cursor-pointer text-base">Anti-discrimination</li>
            <li className="hover:underline cursor-pointer text-base">Disability support</li>
            <li className="hover:underline cursor-pointer text-base">Cancellation options</li>
            <li className="hover:underline cursor-pointer text-base">Report neighborhood concern</li>
          </ul>
        </div>

        {/* Hosting */}
        <div>
          <h3 className="font-semibold mb-3">Hosting</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer text-base">Airbnb your home</li>
            <li className="hover:underline cursor-pointer text-base">Airbnb your experience</li>
            <li className="hover:underline cursor-pointer text-base">Airbnb your service</li>
            <li className="hover:underline cursor-pointer text-base">AirCover for Hosts</li>
            <li className="hover:underline cursor-pointer text-base">Hosting resources</li>
            <li className="hover:underline cursor-pointer text-base">Community forum</li>
            <li className="hover:underline cursor-pointer text-base">Hosting responsibly</li>
            <li className="hover:underline cursor-pointer text-base">Airbnb-friendly apartments</li>
            <li className="hover:underline cursor-pointer text-base">Join a free Hosting class</li>
            <li className="hover:underline cursor-pointer text-base">Find a co-host</li>
          </ul>
        </div>

        {/* Airbnb */}
        <div>
          <h3 className="font-semibold mb-3">Airbnb</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer text-base">2025 Summer Release</li>
            <li className="hover:underline cursor-pointer text-base">Newsroom</li>
            <li className="hover:underline cursor-pointer text-base">Careers</li>
            <li className="hover:underline cursor-pointer text-base">Investors</li>
            <li className="hover:underline cursor-pointer text-base">Gift cards</li>
            <li className="hover:underline cursor-pointer text-base">Airbnb.org emergency stays</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-200 mx-10"></div>
      {/* Bottom Bar */}
      <div className=" py-6 px-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        {/* Left */}
        <div className="flex flex-wrap gap-3">
          <span className="cursor-pointer text-sm">© 2025 Airbnb, Inc.</span>
          <span className="cursor-pointer text-sm">•</span>
          <span className="cursor-pointer text-sm">Terms</span>
          <span className="cursor-pointer text-sm">•</span>
          <span className="cursor-pointer text-sm">Sitemap</span>
          <span className="cursor-pointer text-sm">•</span>
          <span className="cursor-pointer text-sm">Privacy</span>
          <span className="cursor-pointer text-sm">•</span>
          <span className="cursor-pointer text-sm">Your Privacy Choices</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <div className="flex items-center gap-1 cursor-pointer">
            <Globe size={16} />
            <span>English (US)</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <DollarSign size={16} />
            <span>USD</span>
          </div>
          <div className="flex gap-3 cursor-pointer">
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
