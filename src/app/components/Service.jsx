"use client";

import React, { useRef, useState, useEffect } from "react";

const Scroll = () => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
      <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
    </div>
    <span className="text-sm text-gray-400">Scroll</span>
  </div>
);

const sections = [
  {
    id: "01",
    title: "DIGITAL SOLUTIONS AND MEDIA",
    description:
      "We deliver secure, scalable, and innovative solutions for modern financial institutions.",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    link: "/services/digital-solutions",
  },
  {
    id: "02",
    title: "FINANCE & BANKING",
    description:
      "We deliver secure, scalable, and innovative solutions for modern financial institutions.",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    link: "/services/finance-banking",
  },
  {
    id: "03",
    title: "TECHNOLOGY & INNOVATION",
    description:
      "We deliver secure, scalable, and innovative solutions for modern financial institutions.",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    link: "/services/technology",
  },
  {
    id: "04",
    title: "CONSULTING SERVICES",
    description:
      "We deliver secure, scalable, and innovative solutions for modern financial institutions.",
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    link: "/services/consulting",
  },
];

const Service = () => {
  const sectionRefs = useRef([]);
  const videoRefs = useRef([]);
  const cursorRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const rafId = useRef(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const cursorTargetPos = useRef({ x: 0, y: 0 });
  const cursorCurrentPos = useRef({ x: 0, y: 0 });

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleMouseMove = (index, e) => {
    const rect = sectionRefs.current[index]?.getBoundingClientRect();
    if (!rect) return;

    targetPos.current = {
      x: e.clientX - rect.left - 190,
      y: e.clientY - rect.top - 150,
    };

    cursorTargetPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleClick = (section) => {
    console.log(`Navigating to: ${section.title}`);
    alert(`You clicked on: ${section.title}\nNavigating to: ${section.link}`);
  };

  useEffect(() => {
    const animate = () => {
      if (hoveredIndex !== null) {
        const lerp = 0.15;
        const cursorLerp = 0.2;

        currentPos.current.x +=
          (targetPos.current.x - currentPos.current.x) * lerp;
        currentPos.current.y +=
          (targetPos.current.y - currentPos.current.y) * lerp;

        cursorCurrentPos.current.x +=
          (cursorTargetPos.current.x - cursorCurrentPos.current.x) * cursorLerp;
        cursorCurrentPos.current.y +=
          (cursorTargetPos.current.y - cursorCurrentPos.current.y) * cursorLerp;

        const videoWrapper = videoRefs.current[hoveredIndex];
        if (videoWrapper) {
          videoWrapper.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
        }

        const cursorBall = cursorRefs.current[hoveredIndex];
        if (cursorBall) {
          cursorBall.style.transform = `translate(${cursorCurrentPos.current.x}px, ${cursorCurrentPos.current.y}px) translate(-50%, -50%)`;
        }
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [hoveredIndex]);

  useEffect(() => {
    if (hoveredIndex !== null) {
      const videoWrapper = videoRefs.current[hoveredIndex];
      const video = videoWrapper?.querySelector("video");
      if (video) {
        video.play().catch(() => {});
      }
    }
  }, [hoveredIndex]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6 py-12 my-60">
      <div className="w-full max-w-6xl mb-32">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Boost your digital potential service for you
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mb-12">
          Our work style is adaptive. We partner with you to apply the right
          services at the right time in order to support your needs and growth.
        </p>
        <div className="flex justify-center mt-16">
          <Scroll />
        </div>
      </div>

      <div className="w-full max-w-6xl space-y-16 relative">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="flex flex-col border-b border-gray-300 pb-12 relative group cursor-none"
            ref={(el) => (sectionRefs.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={(e) => handleMouseMove(index, e)}
            onClick={() => handleClick(section)}
          >
            <div className="flex items-center justify-between mb-6 relative z-10">
              <span className="text-black text-2xl">•</span>
            </div>

            <div className="flex items-center justify-end gap-3 relative z-10 mb-4">
              <span className="text-gray-400 text-lg pr-8">{section.id}/</span>
              <h2 className="text-3xl md:text-5xl font-bold flex-1 text-right max-w-2xl">
                {section.title}
              </h2>
            </div>

            <p className="text-gray-700 text-base md:text-lg ml-auto max-w-2xl leading-7 tracking-wide text-right relative z-10">
              {section.description}
            </p>

            <div
              ref={(el) => (videoRefs.current[index] = el)}
              className={`w-96 h-60 rounded-lg overflow-hidden absolute z-20 pointer-events-none transition-opacity duration-300 shadow-2xl ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                willChange: "transform",
              }}
            >
              <video
                src={section.videoSrc}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>

            <div
              ref={(el) => (cursorRefs.current[index] = el)}
              className={`absolute z-30 pointer-events-none transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                willChange: "transform",
              }}
            >
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-2 border-blue-600 animate-pulse"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm tracking-wider">
                    CLICK
                  </span>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .cursor-none {
          cursor: none;
        }
      `}</style>
    </div>
  );
};

export default Service;
