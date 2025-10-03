"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);

  // Max scroll values
  const maxScrollLeft = 270;
  const maxScrollRight = 330;
  const maxScrollDown = 75;

  // Delay before words start moving
  const delayStart = 100; // pixels

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    document.body.style.overflow = exitAnimation ? "hidden" : "auto";
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [exitAnimation]);

  // Scroll calculations with delay
  const leftScroll = Math.min(Math.max(scrollY - delayStart, 0), maxScrollLeft);
  const rightScroll = Math.min(
    Math.max(scrollY - delayStart, 0),
    maxScrollRight
  );
  const forgeScroll = Math.min(
    Math.max(scrollY - delayStart, 0),
    maxScrollDown
  );

  // Social icons opacity
  const fadeInScrollStart = 0;
  const fadeInScrollEnd = 200;
  const opacityProgress = Math.min(
    Math.max(
      (scrollY - fadeInScrollStart) / (fadeInScrollEnd - fadeInScrollStart),
      0
    ),
    1
  );

  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: exitAnimation ? -1000 : 0,
          opacity: exitAnimation ? 0 : 1,
        }}
        transition={{ duration: 0.6 }}
      >
        <div className="min-h-screen bg-white text-black px-8 pt-4 pb-10 font-sans relative overflow-hidden">
          <div style={{ width: "100%", marginTop: "50px" }}>
            <main className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Text */}
              <div
                className="space-y-14 text-[15rem] font-bold leading-tight ml-28 font-inria"
                style={{
                  transform: `translateX(${leftScroll}px)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <div>Code</div>
                <div
                  className="relative inline-block"
                  style={{
                    transform: `translateY(${forgeScroll}px)`,
                    transition: "transform 0.3s ease-out",
                  }}
                >
                  <span>Forge</span>
                </div>
              </div>

              {/* Right Text */}
              <div className="flex flex-col justify-center space-y-10 pr-20">
                <p
                  className="text-gray-800 w-70 relative left-40"
                  style={{ fontSize: "1.7rem", lineHeight: "2.2rem" }}
                >
                  We build custom SaaS, AI tools, and lightning-fast MVPs for
                  startups.
                </p>
                <h2
                  className="text-[15rem] font-bold leading-none font-inria"
                  style={{
                    transform: `translateX(-${rightScroll}px)`,
                    transition: "transform 0.3s ease-out",
                  }}
                >
                  Craft
                </h2>
                <button
                  className="text-gray-800 font-medium hover:underline text-left"
                  style={{ fontSize: "1.5rem", lineHeight: "2rem" }}
                  onClick={() => setExitAnimation(true)}
                >
                  Get a Free Project Estimate
                </button>
              </div>
            </main>

            {/* Social Icons */}
            <div
              style={{
                position: "absolute",
                top: "30%",
                left: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.8rem",
                opacity: opacityProgress,
                transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                transform: `translateX(${-(1 - opacityProgress) * 200}px)`,
                zIndex: 10,
              }}
            >
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    title="social"
                    className="text-gray-600 w-10 h-10 flex items-center justify-center cursor-pointer"
                  >
                    <Icon size={28} />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Add enough space to allow page scroll */}
        <div style={{ height: "150vh" }}></div>
      </motion.div>

      {/* About Us Overlay */}
      <AnimatePresence>
        {exitAnimation && (
          <motion.div
            initial={{ y: 1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 1000, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 w-full h-full bg-white z-[999]"
          >
            <button
              className="absolute top-6 right-6 text-black font-bold text-xl px-4 py-2 rounded-md hover:bg-gray-200 transition"
              onClick={() => setExitAnimation(false)}
            >
              Close
            </button>
            <div className="p-16 text-black max-w-4xl mx-auto mt-24">
              <h1 className="text-6xl font-bold mb-6 font-inria">About Us</h1>
              <p className="text-lg leading-relaxed">
                We are a passionate team building modern SaaS products,
                AI-powered tools, and rapid MVPs to accelerate startup success.
                Our mission is to craft innovative software experiences with
                precision and speed.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
