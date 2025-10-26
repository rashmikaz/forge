"use client";

import { useState } from "react";

const slides = [
  {
    testimonial:
      "Beta Launch has been a vital partner to the USAID Catalyze Private Sector Development program been a vital partner to the USAID Catalyze Private Sector Development program...",
    authorName: "Juan Forero",
    authorRole: "USAID CATALYZE Sri Lanka PSD - Activity Team Lead",
    profile: "/images/profile-1.jpg",
    dashboardImage: "/images/dashboard.png",
    logo: "/images/logo.png",
    description:
      "A custom product management and CX design training and mentorship program for over 120 startups...",
    bgColor: "bg-green-200",
  },
  {
    testimonial:
      "The team at Beta Launch transformed our approach to digital solutions...",
    authorName: "Jane Smith",
    authorRole: "Tech Startup Mentor",
    profile: "/images/profile-2.jpeg",
    dashboardImage: "/images/dashboard-2.png",
    logo: "/images/logo-2.png",
    description:
      "Delivered hands-on UX workshops and mentorship programs across Delivered hands-on UX workshops Delivered hands-on UX workshops and mentorship programs across and mentorship programs across multiple cities...",
    bgColor: "bg-[#01c7f4]",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[current];

  return (
    <section className="pt-0 pl-44 pb-15 my-20">
      <h3 className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-4">
        Client Success Stories
      </h3>
      <h2 className="text-5xl w-280 my-18">
        Our work helping clients stand out in saturated markets with
        differentiated products and experiences.
      </h2>
      <div className="max-w-6xl w-full rounded-2xl shadow-sm flex flex-col md:flex-row ">
        <div className="w-full md:w-[30%] flex flex-col justify-between p-10 ">
          <p className="text-gray-700 text-lg leading-relaxed">
            {slide.testimonial}
          </p>

          <div className="flex items-center mt-8">
            <img
              src={slide.profile}
              alt={slide.authorName}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="ml-3">
              <h4 className="font-semibold text-gray-900">
                {slide.authorName}
              </h4>
              <p className="text-sm text-gray-500">{slide.authorRole}</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[40%] flex items-stretch h-150">
          <div
            className={`${slide.bgColor} shadow-md w-full flex justify-center items-center`}
          >
            <img
              src={slide.dashboardImage}
              alt="Tech Summit Event"
              className="w-full h-auto object-contain pl-11"
            />
          </div>
        </div>

        <div className="w-full md:w-[30%] relative flex flex-col p-10 ">
          <div className="absolute -top-10 right-0 flex space-x-2">
            <button
              className="p-2 bg-gray-200 rounded-md hover:opacity-80"
              onClick={prevSlide}
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="p-2 bg-gray-200 rounded-md hover:opacity-80"
              onClick={nextSlide}
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div>
            <img src={slide.logo} alt="Logo" className="mb-2 h-15 w-auto" />
            <p className="text-gray-600 text-base leading-relaxed">
              {slide.description}
            </p>
            <a
              href="#"
              className="inline-flex items-center mt-4 text-gray-700 font-medium hover:underline"
            >
              Read Case Study
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
