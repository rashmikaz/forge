import React from "react";
import Button from "../components/Button";

const Intro = () => {
  return (
    <>
      <div className="pt-25 pl-44 pr-44">
        <h1 className="w-270 text-6xl leading-16">
          <span className="ml-60">We build </span>custom SaaS, AI tools, and
          lightning-fast MVPs for startups We build custom SaaS, AI tools, and
          abds lightning-fast MVPs for startups We build
        </h1>
        <div className="ml-155 relative bottom-10">
          <p className="w-128 text-2xl pb-8 text-[#1E1E1E] leading-relaxed">
            We build custom SaaS, AI tools, and lightning-fast MVPs for startups
            We build custom SaaS, AI tools, and lightning-fast MVPs for
          </p>
        </div>

        <div className="ml-195 relative bottom-10">
          <div className="pb-10">
            <div
              className="
            w-35 h-35 
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
              about us
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
