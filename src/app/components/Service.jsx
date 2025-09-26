"use client";

import React from "react";

const sections = [
  {
    id: "01",
    title: "DIGITAL SOLUTIONS AND MEDIA",
    description:
      "We deliver secure, scalable, and innovative solutions for modern financial institutions. We deliver secure, scalable, and innovative solutions for modern financial institutions. We deliver secure, scalable, and innovative solutions for modern financial institutions.",
  },
  {
    id: "02",
    title: "DIGITAL SOLUTIONS AND MEDIA",
    description:
      "We deliver secure, scalable, and innovative solutions for modern financial institutions. We deliver secure, scalable, and innovative solutions for modern financial institutions. We deliver secure, scalable, and innovative solutions for modern financial institutions.",
  },
  {
    id: "03",
    title: "DIGITAL SOLUTIONS AND MEDIA",
    description:
      "We deliver secure, scalable, and innovative solutions for modern financial institutions. We deliver secure, scalable, and innovative solutions for modern financial institutions. We deliver secure, scalable, and innovative solutions for modern financial institutions.",
  },
  {
    id: "04",
    title: "DIGITAL SOLUTIONS AND MEDIA",
    description:
      "We deliver secure, scalable, and innovative solutions for modern financial institutions. We deliver secure, scalable, and innovative solutions for modern financial institutions. We deliver secure, scalable, and innovative solutions for modern financial institutions.",
  },
];

const Service = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl space-y-16">
        {sections.map((section) => (
          <div
            key={section.id}
            className="flex flex-col border-b border-gray-200 pb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-black text-2xl">•</span>
            </div>

            <div className="flex items-center justify-end gap-3">
              <span className="text-gray-400 text-lg pr-8">{section.id}/</span>
              <h2 className="text-3xl md:text-4xl font-bold  w-[30rem]">
                {section.title}
              </h2>
            </div>

            <p className="text-gray-800 text-base md:text-lg  mt-4 ml-auto w-[30rem] leading-7 tracking-wide text-left">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
