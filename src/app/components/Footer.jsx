import React from "react";
import Image from "next/image";
import image2 from "../../../public/images/image-2.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300 px-8 py-12">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-600 pb-12">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <Image
            src={image2}
            alt="profile"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Let’s work <br /> together
          </h2>
        </div>

        {/* Button */}
        <div className="mt-8 md:mt-0 flex items-center justify-center">
          <button
            className="
              w-28 h-28 
              rounded-full 
              bg-blue-600 
              text-white 
              text-sm 
              flex items-center justify-center 
              transition-transform duration-300 
              hover:translate-y-[-10px] hover:shadow-lg
            "
          >
            Get in touch
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left */}
        <div>
          <p className="text-sm text-gray-400">version</p>
          <p className="text-lg font-bold text-white">FORGE.</p>
        </div>

        {/* Center */}
        <div>
          <p className="text-sm text-gray-400">version</p>
          <p className="text-lg text-white">@2025</p>
        </div>

        {/* Right */}
        <div>
          <p className="text-sm text-gray-400">lorem</p>
          <ul className="flex gap-6 mt-2 text-white">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Solutions</li>
            <li className="hover:text-blue-500 cursor-pointer">Partners</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
