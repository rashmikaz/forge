"use client";

import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const slides = [
  {
    testimonial:
      "Beta Launch has been a vital partner to the USAID Catalyze Private Sector Development program...",
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
    profile: "/images/profile2.jpeg",
    dashboardImage: "/images/dashboard2.png",
    logo: "/images/logo2.png",
    description:
      "Delivered hands-on UX workshops and mentorship programs across multiple cities...",
    bgColor: "bg-purple-200",
  },
  {
    testimonial:
      "Working with Beta Launch has been instrumental in improving our product strategy...",
    authorName: "Mark Johnson",
    authorRole: "Product Manager",
    profile: "/images/profile3.jpeg",
    dashboardImage: "/images/dashboard3.png",
    logo: "/images/logo3.png",
    description:
      "Provided a full-scale product management training program for local startups...",
    bgColor: "bg-blue-200",
  },
  {
    testimonial:
      "Their workshops provided invaluable insights into market trends and product growth...",
    authorName: "Emily Davis",
    authorRole: "Startup Advisor",
    profile: "/images/profile4.jpeg",
    dashboardImage: "/images/dashboard4.png",
    logo: "/images/logo4.png",
    description:
      "Focused on mentoring startups with practical solutions for scaling their business...",
    bgColor: "bg-yellow-200",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[current];

  return (
    <section className="pt-45 pl-44 pr-44 pb-15">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-sm flex flex-col md:flex-row ">
        <div className="w-full md:w-[30%] flex flex-col justify-between p-10 ">
          <p className="text-gray-700 text-lg leading-relaxed">
            {slide.testimonial}
          </p>

          <div className="flex items-center mt-8">
            <Image
              src={slide.profile}
              alt={slide.authorName}
              width={56}
              height={56}
              className="rounded-full"
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
            <Image
              src={slide.dashboardImage}
              alt="Tech Summit Event"
              width={800}
              height={500}
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
              <FaArrowLeft className="text-gray-700" />
            </button>
            <button
              className="p-2 bg-gray-200 rounded-md hover:opacity-80"
              onClick={nextSlide}
            >
              <FaArrowRight className="text-gray-700" />
            </button>
          </div>

          <div>
            <Image
              src={slide.logo}
              alt="Logo"
              width={140}
              height={60}
              className="mb-2"
            />
            <p className="text-gray-600 text-base leading-relaxed">
              {slide.description}
            </p>
            <a
              href="#"
              className="inline-flex items-center mt-4 text-green-700 font-medium hover:underline"
            >
              Read Case Study <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
