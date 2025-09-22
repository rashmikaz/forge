import React from "react";
import Scroll from "../components/Scroll";

const page = () => {
  return (
    <div className="pt-25 pl-44 pr-44">
      <h1 className="w-162 text-7xl ">
        Flexible and results driven—so that your game is never off.
      </h1>
      <p className="w-145 text-2xl pb-8 text-[#1E1E1E] leading-relaxed pt-8">
        Our work style is adaptive. We partner with you to apply the right
        services at the right time in order to support your needs and growth.
      </p>

      <div className="absolute left-310 top-165">
        <Scroll />
      </div>
    </div>
  );
};

export default page;
