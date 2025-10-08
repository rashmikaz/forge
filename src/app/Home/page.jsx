"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Intro from "../intro/page";
import RotatingButton from "../components/RotatingButton";

const Home = () => {
  const homeRef = useRef(null);
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);
  const [navbarFixed, setNavbarFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const containerHeight = containerRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;

        const scrolled = -rect.top;
        const maxScroll = containerHeight - viewportHeight;
        const newProgress = Math.max(0, Math.min(1, scrolled / maxScroll));

        setProgress(newProgress);

        if (newProgress >= 0.99) {
          setNavbarFixed(false);
        } else {
          setNavbarFixed(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const moveXLeft = progress * 270;
  const moveXRight = progress * 330;
  const moveY = Math.max(progress - 0.2, 0) * 300;

  return (
    <>
      <div ref={containerRef} style={{ height: "200vh", position: "relative" }}>
        <section
          id="home-section"
          ref={homeRef}
          className="sticky top-0 min-h-screen bg-white text-black px-8 font-sans overflow-hidden"
          style={{ zIndex: 10 }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full w-full">
              {/* Left Text: Code Forge */}
              <div
                className="space-y-14 text-[15rem] font-bold leading-tight ml-28 font-inria"
                style={{
                  transform: `translateX(${moveXLeft}px)`,
                  transition: "transform 0.05s ease-out",
                }}
              >
                <div style={{ transform: `translateY(${-moveY * 0.2}px)` }}>
                  Code
                </div>

                <div
                  style={{
                    transform: `translateY(${moveY * 0.15 - progress * 40}px)`,
                    transition: "transform 0.05s ease-out",
                  }}
                >
                  Forge
                </div>
              </div>

              {/* Right Text and Rotating Button */}
              <div className="flex flex-col justify-center space-y-10 pr-20">
                <p
                  className="text-gray-800 w-70 relative left-60 top-8"
                  style={{
                    fontSize: "1.7rem",
                    lineHeight: "2.2rem",
                    transform: `translateY(${moveY * 0.4}px)`,
                    transition: "transform 0.05s ease-out",
                  }}
                >
                  We build custom SaaS, AI tools, and lightning-fast MVPs for
                  startups.
                </p>

                <div
                  className="text-[15rem] font-bold leading-none font-inria"
                  style={{
                    transform: `translateX(-${moveXRight}px) translateY(${
                      -moveY * 0.2
                    }px)`,
                    transition: "transform 0.05s ease-out",
                  }}
                >
                  Craft
                </div>

                {/* ✅ Replaced text button with RotatingButton */}
                <div
                  className="relative left-60 bottom-7"
                  style={{
                    transform: `translateY(${-moveY * 0.6}px)`,
                    transition: "transform 0.05s ease-out",
                  }}
                >
                  <div
                    onClick={() => setExitAnimation(true)}
                    className="cursor-pointer"
                  >
                    <RotatingButton />
                  </div>
                </div>
              </div>
            </div>

            {/* Left Social Icons */}
            <div
              style={{
                position: "fixed",
                top: "28%",
                left: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.9rem",
                opacity: progress,
                transform: `translateX(${-(1 - progress) * 80}px)`,
                transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
                zIndex: 20,
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
                    <Icon size={32} />
                  </a>
                )
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Intro Section */}
      <div
        style={{
          minHeight: "100vh",
          background: "#f5f5f5",
          padding: "4rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Intro />
      </div>

      {/* Exit Animation Section */}
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
