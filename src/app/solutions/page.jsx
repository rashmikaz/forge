import React from "react";
import Scroll from "../components/Scroll";
import { services } from "../constants/page";

const Page = () => {
  return (
    <div className="pt-25 pl-44 pr-44">
      <h1 className="w-162 text-7xl">
        Flexible and results driven—so that your game is never off.
      </h1>
      <p className="w-145 text-2xl pb-8 text-[#1E1E1E] leading-relaxed pt-8">
        Our work style is adaptive. We partner with you to apply the right
        services at the right time in order to support your needs and growth.
      </p>

      <div className="absolute left-310 top-165">
        <Scroll />
      </div>

      <div className="mt-[-300px] relative top-130 left-150 flex flex-col space-y-20">
        {services.map((service, index) => (
          <div key={index} className="w-100">
            <div className="pb-11">
              <h2 className="text-4xl pb-2">{service.title}</h2>
              <p className="text-2xl text-gray-500">{service.sub}</p>
            </div>

            <p className="w-[580px] text-2xl pb-8 text-[#1E1E1E] leading-relaxed">
              {service.description_01}
            </p>

            <p className="w-[580px] text-2xl pb-12 text-[#1E1E1E] leading-relaxed">
              {service.description_02}
            </p>

            <div className="pb-10">
              <div
                className="
            w-28 h-28 
            rounded-full 
            bg-blue-600 
            text-white 
            text-sm 
            flex items-center justify-center 
            transition-all duration-300 
            hover:bg-[#22262C] 
            hover:translate-y-[-10px] 
            hover:shadow-lg
          "
              >
                send it
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
