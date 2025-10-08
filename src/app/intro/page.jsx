import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Intro = () => {
  const y = useMotionValue(0);

  const smoothY = useSpring(y, { stiffness: 100, damping: 25 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      y.set(-scrollTop * 0.25);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [y]);

  return (
    <div className="pt-25 pl-44 pr-44 h-[500px]">
      <h1 className="w-270 text-6xl leading-16">
        <span className="ml-60">We build </span>
        custom SaaS, AI tools, and lightning-fast MVPs for startups We build
        custom SaaS, AI tools, and abds lightning-fast MVPs for startups We
        build
      </h1>

      <div className="ml-155 relative bottom-12 ">
        <p className="w-128 text-2xl pb-8 text-[#1E1E1E] leading-relaxed">
          We build custom SaaS, AI tools, and lightning-fast MVPs for startups
          We build custom SaaS, AI tools, and lightning-fast MVPs for
        </p>
      </div>

      <motion.div style={{ y: smoothY }} className="ml-195">
        <div className="flex justify-center items-start min-h-screen">
          <div
            className="bg-blue-600 text-white w-37 h-37 rounded-full 
               flex items-center justify-center text-sm mt-95"
          >
            About Us
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
