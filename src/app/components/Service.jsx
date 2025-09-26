"use client";

import React, { useRef, useState } from "react";

const sections = [
  {
    id: "01",
    title: "DIGITAL SOLUTIONS AND MEDIA",
    description:
      "We deliver secure, scalable, and innovative solutions for modern financial institutions. We deliver secure, scalable, and innovative solutions for modern financial institutions. We deliver secure, scalable, and innovative solutions for modern financial institutions.",
    videoSrc: "/videos/video-1.mp4",
  },
  {
    id: "02",
    title: "FINANCE & BANKING",
    description:
      "We deliver secure, scalable, and innovative solutions for modern financial institutions. We deliver secure, scalable, and innovative solutions for modern financial institutions. We deliver secure, scalable, and innovative solutions for modern financial institutions.",
    videoSrc: "/videos/video-2.mp4",
  },
  {
    id: "03",
    title: "TECHNOLOGY & INNOVATION",
    description:
      "We deliver secure, scalable, and innovative solutions for modern financial institutions. We deliver secure, scalable, and innovative solutions for modern financial institutions. We deliver secure, scalable, and innovative solutions for modern financial institutions.",
    videoSrc: "/videos/video-1.mp4",
  },
  {
    id: "04",
    title: "CONSULTING SERVICES",
    description:
      "We deliver secure, scalable, and innovative solutions for modern financial institutions. We deliver secure, scalable, and innovative solutions for modern financial institutions. We deliver secure, scalable, and innovative solutions for modern financial institutions.",
    videoSrc: "/videos/video-1.mp4",
  },
];

const Service = () => {
  const videoRefs = useRef([]);
  const sectionRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  const handleMouseMove = (index, e) => {
    const sectionRect = sectionRefs.current[index].getBoundingClientRect();
    const x = e.clientX - sectionRect.left;
    const y = e.clientY - sectionRect.top;
    setCursorPos({ x, y });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl space-y-16">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="flex flex-col border-b border-gray-200 pb-12 relative group"
            ref={(el) => (sectionRefs.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onMouseMove={(e) => handleMouseMove(index, e)}
          >
            <div className="flex items-center justify-between mb-6 relative z-10">
              <span className="text-black text-2xl">•</span>
            </div>

            <div className="flex items-center justify-end gap-3 relative z-10">
              <span className="text-gray-400 text-lg pr-8">{section.id}/</span>
              <h2 className="text-3xl md:text-4xl font-bold w-[30rem]">
                {section.title}
              </h2>
            </div>

            <p className="text-gray-800 text-base md:text-lg mt-4 ml-auto w-[30rem] leading-7 tracking-wide text-left relative z-10">
              {section.description}
            </p>

            {hoveredIndex === index && (
              <div
                className="w-95 h-75 bg-gray-200 rounded overflow-hidden absolute z-20"
                style={{
                  top: cursorPos.y - 24,
                  left: cursorPos.x - 40,
                  pointerEvents: "none",
                }}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                    if (el) {
                      setTimeout(() => {
                        el.currentTime = 0;
                        el.play().catch(() => {});
                      }, 0);
                    }
                  }}
                  src={section.videoSrc}
                  className="w-full h-full object-cover"
                  muted
                  loop
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
