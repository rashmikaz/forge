"use client";
import React, { useState } from "react";
import Scroll from "../components/Scroll";
import { services } from "../constants/page";
import Footer from "../components/Footer";

const Page = () => {
  const serviceColors = ["#D8E6EE", "#D9D9D9", "#1E1E1E"];
  const [offsets, setOffsets] = useState({});

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setOffsets((prev) => ({ ...prev, [index]: { x, y } }));
  };

  const handleMouseLeave = (index) => {
    setOffsets((prev) => ({ ...prev, [index]: { x: 0, y: 0 } }));
  };

  return (
    <>
      <div className="pt-25 pl-44 pr-44 relative">
        <h1 className="w-162 text-7xl">
          Flexible and results driven—so that your game is never off.
        </h1>

        <p className="w-145 text-2xl pb-8 text-[#1E1E1E] leading-relaxed pt-8">
          Our work style is adaptive. We partner with you to apply the right
          services at the right time in order to support your needs and growth.
        </p>

        <div className="absolute top-160 left-305">
          <Scroll />
        </div>

        <div className="pt-40 pl-[150px] mb-58 flex flex-col space-y-20 relative top-40 right-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-12 items-start"
            >
              <div
                className="md:w-1/2 p-6 rounded-lg relative right-21"
                style={{
                  backgroundColor: serviceColors[index % serviceColors.length],
                }}
              >
                {service.video && (
                  <video
                    className="w-full h-96 rounded-lg"
                    src={service.video}
                    autoPlay
                    loop
                    muted
                  />
                )}
              </div>

              <div className="flex-1 flex flex-col">
                <h2 className="text-4xl pb-2">{service.title}</h2>
                <p className="text-2xl text-gray-500 mb-4">{service.sub}</p>
                <p className="text-2xl pb-4 text-[#1E1E1E] leading-relaxed">
                  {service.description_01}
                </p>
                <p className="text-2xl pb-6 text-[#1E1E1E] leading-relaxed">
                  {service.description_02}
                </p>

                <div
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  style={{
                    transform: `translate(${offsets[index]?.x || 0}px, ${
                      offsets[index]?.y || 0
                    }px)`,
                  }}
                  className="
                    w-28 h-15 
                    rounded-3xl 
                    bg-[#f2f8fc] 
                    text-black 
                    border 
                    border-gray-400 
                    text-sm 
                    flex items-center justify-center 
                    transition-transform duration-300 ease-out
                    hover:bg-blue-600 
                    hover:text-white 
                    hover:border-blue-600
                    hover:-translate-y-2 
                    hover:shadow-lg
                    cursor-pointer
                  "
                >
                  send it
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
