"use client";
import React, { useState } from "react";
import Image from "next/image";

const Footer = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const moveX = (e.clientX / window.innerWidth - 0.5) * 120;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 120;
    setOffset({ x: moveX, y: moveY });
  };

  return (
    <footer
      onMouseMove={handleMouseMove}
      className="bg-[#1a1d23] text-gray-300 px-8 py-40 pl-44 pr-44"
    >
      <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-600 pb-4 relative bottom-10">
        <div className="text-white relative bottom-16">
          <h2 className="text-4xl md:text-7xl font-light flex items-center gap-4">
            <Image
              src="/images/profile.jpeg"
              alt="profile"
              width={60}
              height={60}
              className="rounded-full object-cover w-14 h-14"
            />
            Let’s work
          </h2>
          <h2 className="text-4xl md:text-7xl font-light">together</h2>
        </div>

        <div className="mt-8 md:mt-0 flex items-center justify-center relative top-20 right-40">
          <button
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px)`,
            }}
            className="
              w-36 h-36 
              rounded-full 
              bg-blue-600 
              text-white 
              text-sm 
              flex items-center justify-center 
              transition-transform duration-300 ease-out
            "
          >
            Get in touch
          </button>
        </div>
      </div>

      <div className="mt-3 flex flex-col md:flex-row justify-center items-center gap-6 relative right-80 top-7">
        <div className="px-6 py-3 border border-gray-500 rounded-full text-gray-300 text-sm md:text-base">
          newtecCompanytecdk@gmail.com
        </div>
        <div className="px-6 py-3 border border-gray-500 rounded-full text-gray-300 text-sm md:text-base">
          +94 983 3892 64
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-3 relative top-20">
        <div>
          <p className="text-sm text-gray-400">version</p>
          <p className="text-lg font-bold text-white">FORGE.</p>
        </div>

        <div>
          <p className="text-sm text-gray-400">version</p>
          <p className="text-lg text-white">@2025</p>
        </div>

        <div>
          <p className="text-sm text-gray-400">lorem</p>
          <ul className="flex gap-12 mt-2 text-white">
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
